'use client'

import { useEffect, useRef, useState } from "react"
export function usePlay(setMessage) {
    if (typeof window !== 'undefined') {
        const [play, setPlay] = useState(null)
        // cargar cancion
        // No se pudo utilizar la api de Tidal
        // Asi que procedere a usar una "simulacion" de cancion.
        const audioRef = useRef(new Audio('/song/Pokemon Emerald song.mp4'))

        // crear estados para el titulo
        const [title, setTitle] = useState(null)
        function togglePlay() {
            setPlay(prevPlay => !prevPlay)
        }
        // Escuchar al play para empezar a reproducir la cancion
        useEffect(() => {
                const audio = audioRef.current
                    audio.loop = true
                if (play) {
                    audio.play()

                    // Cambiar el titulo del componente
                    setMessage(audio.src.split('/').at(-1).split('.').at(0).replaceAll('%20', ' '))
                    // Guardar titutlo en el hook
                    setTitle(audio.src.split('/').at(-1).split('.').at(0).replaceAll('%20', ' '))
                }
            

            // Limpieza al desmontar el componente
            return () => {
                audio.pause()
            }
        }, [play])
        //Devolver play, togglePla y title (para ser usado mas tarde)
        return {play, togglePlay, title}
    }
}