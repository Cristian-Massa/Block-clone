'use client'
import Link from 'next/link'
import styles from './modal.module.css'


export default function NewsNavModal({ toggle, switchToggle }) {

    return (
        <div className={toggle ? styles.modal : styles.switch}>
            <button onClick={switchToggle} className={styles.close}>
                <div className={styles.closeIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path
                            stroke="currentColor"
                            strokeLinecap="square"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M18 6 6 18M6 6l12 12"
                        />
                    </svg>

                </div>
            </button>
            <div className={styles.container}>
                <ul className={styles.list}>
                    <li><Link className={`${styles.buttons} ${styles.separate} title`} href="/news">NEWS</Link></li>
                    <ul className={`${styles.subList} ${styles.separate} `}>
                        <li><Link className={styles.buttons} href="/news">IMPACT</Link></li>
                        <li><Link className={styles.buttons} href="/news">SUSTAINABILITY</Link></li>
                        <li><Link className={styles.buttons} href="/news">INCLUSION</Link></li>
                        <li><Link className={styles.buttons} href="/news">PRESS</Link></li>
                    </ul>
                    <li><Link className={`${styles.buttons} ${styles.separate} title`} href="/carerrs">CARERRS</Link></li>
                    <li><Link className={`${styles.buttons} ${styles.separate} title`} href="/investors">INVESTORS</Link></li>
                </ul>
            </div>
            <div>
                <div className={styles.divider}>

                </div>
                <div className={`center line`} style={{
                    display: 'flex',
                    gap: '20px',
                    margin: '30px 10px'
                }}>
                    <div className='line'>
                        <div style={{ marginRight: '5px' }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 21"
                                height="20px"
                            >
                                <path
                                    stroke="currentcolor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 1a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z"
                                />
                            </svg>

                        </div>
                        <p className={`title ${styles.text}`}>Reduce Color</p>
                    </div>
                    <div className='line'>
                        <div style={{ marginRight: '5px' }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 21"
                                height="20px"
                            >
                                <path
                                    stroke="currentcolor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 1a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z"
                                />
                            </svg>
                        </div>
                        <p className={`title ${styles.text}`}>Reduce Motion</p>
                    </div>
                </div>
            </div>
        </div>
    )
}