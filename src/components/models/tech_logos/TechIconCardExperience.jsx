import {
  Float,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useInView } from "react-intersection-observer";

const Model = ({ model }) => {
  const scene = useGLTF(model.modelPath);

  return (
    <Float speed={2.8} rotationIntensity={0.5} floatIntensity={0.7}>
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
          frameloop='demand'
          dpr={[1, 1.25]}
          gl={{ powerPreference: "high-performance", antialias: false }}
          performance={{ min: 0.6 }}
        >
          <ambientLight intensity={0.5} />
          <hemisphereLight intensity={0.55} groundColor='#1b2030' />
          <directionalLight position={[5, 6, 5]} intensity={1.25} />
          <directionalLight position={[-4, 2, 3]} intensity={0.5} />
          <spotLight
            position={[10, 15, 10]}
            angle={0.3}
            penumbra={1}
            intensity={1.25}
          />
          <Suspense fallback={null}>
            <Model model={model} />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      )}
    </div>
  );
};

export default TechIconCardExperience;
