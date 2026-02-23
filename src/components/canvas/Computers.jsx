import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import CanvasLoader from '../Loader'

const Computers = ({ isMobile, onLoaded }) => {
  const computer = useGLTF('/desktop_pc/scene.gltf');
  const hasNotified = useRef(false);

  useEffect(() => {
    if (!hasNotified.current && onLoaded) {
      hasNotified.current = true;
      onLoaded();
    }
  }, [onLoaded]);

  return (
    <mesh> 
      <hemisphereLight intensity={3} groundColor="black"/>
    <pointLight intensity={9}/>
    <spotLight position={[-20,50,10]} angle={0.12} penumbra={1} intensity={0.9}/>
    <primitive object={computer.scene} scale ={isMobile ? 0.58 : 0.7} position ={isMobile? [0,-2.9,-2.0]:[0, -3.5, -1.6]} rotation ={[-0.01, -0.2, -0.1]} />
    </mesh>
  )
}
const ComputersCanvas = ({ onLoaded }) =>{
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() =>{
    const mediaQuery = window.matchMedia('(max-width:768px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (e) =>{
      setIsMobile(e.matches);
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange);  
    return () =>{
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  },[])
return (
  <Canvas frameloop="demand"
    className='hero-canvas'
    dpr={[1, 1.5]}
    camera={{position:[20,3,5], fov:isMobile ? 28 : 25}}
    gl={{ antialias: false, powerPreference: "high-performance" }}>

    <Suspense fallback={<CanvasLoader />}> 
          <OrbitControls enableZoom={false}
              maxPolarAngle={Math.PI/2}
              minPolarAngle={Math.PI/2}/>
          <Computers isMobile={isMobile} onLoaded={onLoaded} />
    </Suspense>
    <Preload all/>
  </Canvas>
)
}

export default ComputersCanvas
