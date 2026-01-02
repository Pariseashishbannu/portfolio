import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

const GravitySkills = () => {
    const sceneRef = useRef(null);
    const engineRef = useRef(null);
    const renderRef = useRef(null);
    const runnerRef = useRef(null);
    const [inView, setInView] = useState(false);

    const skills = [
        "Python", "Django", "React", "JavaScript", "SQL",
        "Git", "Tailwind", "CSS", "HTML", "Node", "Framer"
    ];

    // Observer to start only when visible/sized
    useEffect(() => {
        const observer = new ResizeObserver((entries) => {
            if (entries[0].contentRect.width > 0) {
                setInView(true);
            }
        });
        if (sceneRef.current) observer.observe(sceneRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!inView || !sceneRef.current) return;

        // Cleanup collision
        if (engineRef.current) return;

        const Engine = Matter.Engine;
        const Render = Matter.Render;
        const World = Matter.World;
        const Bodies = Matter.Bodies;
        const Mouse = Matter.Mouse;
        const MouseConstraint = Matter.MouseConstraint;
        const Runner = Matter.Runner;

        const engine = Engine.create();
        engineRef.current = engine;

        const width = sceneRef.current.clientWidth;
        const height = sceneRef.current.clientHeight;

        const render = Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width,
                height,
                wireframes: false,
                background: "transparent",
                pixelRatio: window.devicePixelRatio // Sharp text
            },
        });
        renderRef.current = render;

        // Scale bodies based on container width
        const scale = width < 500 ? 0.6 : 0.8;

        const ground = Bodies.rectangle(width / 2, height + 20, width, 40, {
            isStatic: true,
            render: { fillStyle: "transparent" }
        });
        const wallLeft = Bodies.rectangle(-20, height / 2, 40, height, { isStatic: true, render: { fillStyle: "transparent" } });
        const wallRight = Bodies.rectangle(width + 20, height / 2, 40, height, { isStatic: true, render: { fillStyle: "transparent" } });

        World.add(engine.world, [ground, wallLeft, wallRight]);

        // Create random bodies
        skills.forEach((skill, i) => {
            const x = Math.random() * (width - 100) + 50;
            const y = -Math.random() * 500 - 100;

            const bodyWidth = skill.length * 12 * scale + 30;
            const bodyHeight = 40 * scale;

            const body = Bodies.rectangle(x, y, bodyWidth, bodyHeight, {
                chamfer: { radius: 20 * scale },
                restitution: 0.5,
                friction: 0.3,
                render: {
                    fillStyle: "#27272a", // Zinc-800
                    strokeStyle: "#3f3f46", // Zinc-700
                    lineWidth: 1,
                },
                label: skill
            });

            World.add(engine.world, body);
        });

        // Mouse control
        const mouse = Mouse.create(render.canvas);
        mouse.element.removeEventListener("mousewheel", mouse.mousewheel); // Fix scroll jank
        mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false,
                },
            },
        });

        World.add(engine.world, mouseConstraint);

        const runner = Runner.create();
        runnerRef.current = runner;
        Runner.run(runner, engine);
        Render.run(render);

        // Custom rendering loop for text
        const ctx = render.context;

        Matter.Events.on(render, "afterRender", () => {
            const bodies = Matter.Composite.allBodies(engine.world);

            ctx.font = `600 ${14 * scale}px "Outfit", sans - serif`;
            ctx.fillStyle = "#ffffff";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            bodies.forEach(body => {
                if (!body.isStatic && body.label) {
                    ctx.save();
                    ctx.translate(body.position.x, body.position.y);
                    ctx.rotate(body.angle);
                    ctx.fillText(body.label, 0, 0);
                    ctx.restore();
                }
            });
        });

        return () => {
            Render.stop(render);
            Runner.stop(runner);
            if (render.canvas) render.canvas.remove();
            World.clear(engine.world);
            Engine.clear(engine);
            engineRef.current = null;
        };
    }, [inView]);

    return <div ref={sceneRef} className="w-full h-full min-h-[300px] overflow-hidden rounded-3xl bg-transparent relative" />;
};

export default GravitySkills;
