'use client'
import { useState } from 'react'
import styles from './player.module.css'
import { usePlay } from '@/hooks/usePlay/usePlay'


export default function Player() {

    // titulo convertible (por hover del link hacia Tidal o el texto default)
    const [message, setMessage] = useState('Block Vibes')

    // llamado al custom hook creado para simular las canciones
    const player = usePlay(setMessage)
    return (
        <div className={styles.player}>
            <div onClick={() => { player?.togglePlay() }} className={`${styles.content} pointer white`}>
                {/* span para actualizar el svg (global.css => [active=) en el buscador para encontrarlo mas facil  */}
                <span className={styles.svg} active={player?.play !== null ? player.play.toString(): 'null'}>
                    <svg></svg>
                </span>

                <div>
                    <p className={styles.title}>{message}</p>
                    <p>Created By Cristian</p>
                </div>
            </div>
            {/* Actualizar titulo con hover */}
            <a onMouseEnter={() => { setMessage("Full Playlist on TIDAL") }}
                className='center pointer white' href='https://tidal.com/browse/playlist/3d95c4f6-dad5-4d7f-a469-8bde01b7771d'
                onMouseLeave={() => { setMessage(player?.title ? player?.title : 'Block Vibes') }}
            >

                <div >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M4 4 0 8l4 4 4-4 4 4-4 4 4 4 4-4-4-4 4-4 4 4 4-4-4-4-4 4-4-4-4 4z"></path></svg>
                </div>
            </a>
        </div>
    )
}
