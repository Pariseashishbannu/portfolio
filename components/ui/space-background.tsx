"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
const generateStars = (count: number, radius: number) => {
    const points = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        // Random point in sphere
        const u = Math.random();
        const v = Math.random();
        const theta = 2 * Math.PI * u;
        const phi = Math.acos(2 * v - 1);
        const r = Math.cbrt(Math.random()) * radius;

        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);

        // Naive validation
        points[i * 3] = isNaN(x) ? 0 : x;
        points[i * 3 + 1] = isNaN(y) ? 0 : y;
        points[i * 3 + 2] = isNaN(z) ? 0 : z;
    }
    return points;
};

const StarLayer = ({ count, radius, speed, size, color }: { count: number, radius: number, speed: number, size: number, color: string }) => {
    const ref: any = useRef(null);
    const [sphere] = useState(() => generateStars(count, radius));

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / speed;
            ref.current.rotation.y -= delta / speed;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={ref}
                positions={sphere}
                stride={3}
                frustumCulled
            >
                <PointMaterial
                    transparent
                    color={color}
                    size={size}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const StarField = () => {
    return (
        <>
            {/* Background Layer: Reduced count for performance */}
            <StarLayer count={1000} radius={1.2} speed={25} size={0.0015} color="#8aa2ea" />

            {/* Foreground Layer: Reduced count for performance */}
            <StarLayer count={500} radius={1.0} speed={15} size={0.003} color="#fff" />
        </>
    );
};

export function SpaceBackground() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#030014]">

            {/* 1. Black Hole / Warp Video Layer */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-[-340px] left-0 w-full h-[150vh] object-cover z-[1] opacity-50 mix-blend-screen"
            >
                <source src="/blackhole.webm" type="video/webm" />
            </video>

            {/* 2. Interactive Starfield Layer */}
            <div className="absolute inset-0 z-[20]">
                <Canvas
                    camera={{ position: [0, 0, 1] }}
                    dpr={[1, 1.5]} // Cap pixel ratio for performance
                    gl={{ antialias: false }} // Disable antialiasing for performance
                >
                    <Suspense fallback={null}>
                        <StarField />
                    </Suspense>
                </Canvas>
            </div>

        </div>
    );
}
