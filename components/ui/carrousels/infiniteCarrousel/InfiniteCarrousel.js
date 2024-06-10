'use client'
import styles from './carrousel.module.css'
export default function InfiniteCarrousel({ text }) {
    const arr = []

    for (let i = 0; i <= 8; i++) {
        arr.push(text)
    }
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.wrapper}`}>
                {arr.map((element, key) => {
                    return (
                        <div className={`${styles.carrousel} title`} key={key++}>
                            {element}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}