import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import CanvasLoader from '../Loader'




const Computers = ({isMobile}) => {
  const computer = useGLTF('/desktop_pc/scene.gltf');
  console.log(computer);
  return (
    <mesh> 
      <hemisphereLight intensity={3} groundColor="black"/>
    <pointLight intensity={15}/>
    <spotLight position={[-20,50,10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize ={1024}/>
    <primitive object={computer.scene} scale ={isMobile ? 0.6 : 0.75} position ={isMobile? [0,-3,-2.0]:[0, -3.75, -1.5]} rotation ={[-0.01, -0.2, -0.1]} />
    </mesh>
  )
}
const ComputersCanvas = () =>{
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() =>{
    const mediaQuery = window.matchMedia('(max-width:500px)');
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
    shadows
    camera={{position:[20,3,5], fov:25}}
    gl={{preserveDrawingBuffer: true}}>

    <Suspense fallback={<CanvasLoader />}> 
          <OrbitControls enableZoom={false}
              maxPolarAngle={Math.PI/2}
              minPolarAngle={Math.PI/2}/>
          <Computers isMobile ={isMobile}/>
    </Suspense>
    <Preload all/>
  </Canvas>
)
}

export default ComputersCanvas