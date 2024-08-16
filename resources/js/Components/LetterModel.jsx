// src/components/LetterModel.js
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Letter() {
    const { scene } = useGLTF("/models/Letter.glb");
    return <primitive object={scene} scale={[0.5, 0.5, 0.5]} />;
}

export default function LetterModel() {
    return (
        <Canvas style={{ height: "400px", width: "400px" }}>
            <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[0, 10, 5]} intensity={1} />
                <Letter />
                <OrbitControls />
            </Suspense>
        </Canvas>
    );
}
