import { Suspense, lazy, useCallback, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { useGLTF } from "@react-three/drei";
import { techStackIcons } from "./constants";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Feedbacks = lazy(() => import("./components/Feedbacks"));
const Contact = lazy(() => import("./components/Contact"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));


const App = () => {
  const [isHeroReady, setIsHeroReady] = useState(false);
  const handleHeroReady = useCallback(() => {
    setIsHeroReady(true);
  }, []);

  useEffect(() => {
    if (!isHeroReady) return;

    const requestIdle =
      window.requestIdleCallback ||
      ((callback) =>
        window.setTimeout(
          () => callback({ didTimeout: false, timeRemaining: () => 0 }),
          700
        ));
    const cancelIdle = window.cancelIdleCallback || window.clearTimeout;

    const idleId = requestIdle(() => {
      techStackIcons.forEach((icon) => {
        useGLTF.preload(icon.modelPath);
      });
      useGLTF.preload("/planet/scene.gltf");
    });

    return () => cancelIdle(idleId);
  }, [isHeroReady]);
 
  return (
   <BrowserRouter> 
   <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero onReady={handleHeroReady} />
    </div>
    <Suspense fallback={<div className="h-16" />}>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </Suspense>
   </div>
   </BrowserRouter>
  )
}

export default App
