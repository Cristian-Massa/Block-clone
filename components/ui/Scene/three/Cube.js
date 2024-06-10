'use client'
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export default function Cube() {
    const mesh = useRef(null)

    // animar cubo (rotacion en los 3 ejes)
    useFrame((state, delta) =>{
        mesh.current.rotation.z += delta * 0.1;
        mesh.current.rotation.x += delta * 0.1;
        mesh.current.rotation.y += delta * 0.1;
    })
    return (
        <mesh ref={mesh}>
            <ambientLight intensity={1} />
            <meshPhongMaterial metalness={1} reflectivity={1} color={'red'}/>
            <boxGeometry args={[2, 2, 2]} />
        </mesh>
    )
}