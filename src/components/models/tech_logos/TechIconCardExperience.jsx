import {
  Environment,
  Float,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import * as THREE from "three";
import { useInView } from "react-intersection-observer";

const Model = ({ model }) => {
  const scene = useGLTF(model.modelPath);

  useEffect(() => {
    if (model.name === "Interactive Developer") {
      scene.scene.traverse((child) => {
        if (child.isMesh && child.name === "Object_5") {
          child.material = new THREE.MeshStandardMaterial({ color: "white" });
        }
      });
    }
  }, [scene, model.name]);

  return (
    <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
      <group scale={model.scale} rotation={model.rotation}>
        <primitive object={scene.scene} />
      </group>
    </Float>
  );
};

const TechIconCardExperience = ({ model }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref} className="w-full h-full">
      {inView && (
        <Canvas
          dpr={[1, 1.5]} // Lower render load on high-DPI screens
          gl={{ powerPreference: "high-performance", antialias: false }}
        >
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <spotLight
            position={[10, 15, 10]}
            angle={0.3}
            penumbra={1}
            intensity={2}
          />
          <Environment preset="city" />
          <Suspense fallback={null}>
            <Model model={model} />
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
      )}
    </div>
  );
};

export default TechIconCardExperience;
