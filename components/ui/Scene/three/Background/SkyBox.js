'use client'
import { useRef } from "react"
import { useFrame } from "react-three-fiber"
import { TextureLoader } from "three"
export default function SkyBox() {
    const mesh = useRef(null)

    useFrame((state, delta) =>{
        mesh.current.rotation.x += delta * 0.01
        mesh.current.rotation.y += delta * 0.01
        mesh.current.rotation.z += delta * 0.01
    })

    const texture = new TextureLoader().load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2IqMdnZM3zzUg1w15Z6avhxgyATHBdBepUQ&s')
    return (
        <mesh ref={mesh}>
            <boxGeometry args={[1000, 1000, 1000]}/>
            <meshBasicMaterial side={1} map={texture}/>
            <ambientLight intensity={1}/>
        </mesh>

    )
}