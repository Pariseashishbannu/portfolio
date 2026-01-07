"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Octahedron, MeshTransmissionMaterial, Environment, Sparkles } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

function GeometricCore() {
    const meshRef = useRef<THREE.Mesh>(null);
    const outerRef = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.3;
        }
        if (outerRef.current) {
            outerRef.current.rotation.x -= delta * 0.1;
            outerRef.current.rotation.z += delta * 0.1;
        }
    });

    return (
        <group>
            {/* Inner Core - The Logic */}
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                <Icosahedron args={[1, 0]} ref={meshRef}>
                    <meshStandardMaterial
                        color="#ffffff"
                        emissive="#7042f880"
                        emissiveIntensity={2}
                        wireframe
                    />
                </Icosahedron>
            </Float>

            {/* Outer Shell - The Interface */}
            <Float speed={1.5} rotationIntensity={1.5} floatIntensity={0.5}>
                <Octahedron args={[1.5, 0]} ref={outerRef}>
                    <MeshTransmissionMaterial
                        backside
                        samples={4}
                        thickness={0.5}
                        chromaticAberration={0.05}
                        anisotropy={0.1}
                        distortion={0.1}
                        distortionScale={0.1}
                        temporalDistortion={0.1}
                        iridescence={1}
                        iridescenceIOR={1}
                        iridescenceThicknessRange={[0, 1400]}
                        roughness={0}
                        color="#a78bfa"
                    />
                </Octahedron>
            </Float>
        </group>
    );
}

function Satellite({ position, delay }: { position: [number, number, number], delay: number }) {
    const ref = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (ref.current) {
            const t = state.clock.getElapsedTime();
            ref.current.position.y += Math.sin(t + delay) * 0.002;
            ref.current.rotation.x = t * 0.5 + delay;
            ref.current.rotation.y = t * 0.3 + delay;
        }
    });

    return (
        <Float speed={3} rotationIntensity={2} floatIntensity={1}>
            <mesh ref={ref} position={position}>
                <boxGeometry args={[0.2, 0.2, 0.2]} />
                <meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={1} />
            </mesh>
        </Float>
    );
}

export function CodeMonument() {
    return (
        <div className="w-full h-[500px] relative">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={1} />

                <Suspense fallback={null}>
                    <GeometricCore />

                    {/* Orbiting Satellites - The Ecosystem */}
                    <Satellite position={[2, 1, 0]} delay={0} />
                    <Satellite position={[-2, -1, 0.5]} delay={2} />
                    <Satellite position={[0, 2, -1]} delay={4} />

                    <Sparkles count={50} scale={5} size={2} speed={0.4} opacity={0.5} color="#fff" />
                    <Environment preset="city" />
                </Suspense>
            </Canvas>
        </div>
    );
}
