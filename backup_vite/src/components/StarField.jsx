import { useRef, useEffect } from "react";

const GravityBackground = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 1.5 + 0.5;
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = Math.random() * 30 + 1;
            }

            update() {
                const dx = mouseRef.current.x - this.x;
                const dy = mouseRef.current.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                // Gravity Well Force
                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;
                const maxDistance = 300;
                let force = (maxDistance - distance) / maxDistance;

                if (force < 0) force = 0;

                const directionX = forceDirectionX * force * this.density * 0.5;
                const directionY = forceDirectionY * force * this.density * 0.5;

                // Apply force
                if (distance < maxDistance) {
                    this.vx += directionX * 0.05;
                    this.vy += directionY * 0.05;
                }

                // Friction and movement
                this.vx *= 0.95;
                this.vy *= 0.95;

                // drift
                this.vx += (Math.random() - 0.5) * 0.02;

                this.x += this.vx;
                this.y += this.vy;

                // Screen wrap
                if (this.x < 0) this.x = width;
                if (this.x > width) this.x = 0;
                if (this.y < 0) this.y = height;
                if (this.y > height) this.y = 0;
            }

            draw() {
                ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const particles = [];
        for (let i = 0; i < 60; i++) {
            particles.push(new Particle());
        }

        let animationFrameId;

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });

            // Draw connecting lines near mouse
            particles.forEach((a) => {
                const dx = mouseRef.current.x - a.x;
                const dy = mouseRef.current.y - a.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 150})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(mouseRef.current.x, mouseRef.current.y);
                    ctx.lineTo(a.x, a.y);
                    ctx.stroke();
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        const handleMouseMove = (e) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-40"
        />
    );
};

export default GravityBackground;
