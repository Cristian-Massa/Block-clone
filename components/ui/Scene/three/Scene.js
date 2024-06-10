'use client'

import { Canvas } from "react-three-fiber"
import Cube from "./Cube"
import SkyBox from "./Background/SkyBox"
import { OrbitControls } from "@react-three/drei"
export function Scene(){
  return(
    <Canvas>
      <Cube />
      <SkyBox />
      <OrbitControls 
        enableRotate={true}
        enableZoom={false}
      />
    </Canvas>
  )
}