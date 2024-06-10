'use client'
import { useToggle } from '@/hooks/useToggle/useToggle'
import styles from './nav.module.css'
import NewsNavModal from '../../modal/newsModalNav/NewsNavModal'
import Link from 'next/link'
import Options from '../options/Options'
export default function NewsNav() {

    const [toggle, switchToggle] = useToggle()
    return (
        <nav className={`${styles.nav}`}>
            <div className={styles.contentContainer}>
                <a>
                    <div className={styles.videoContainer}>
                        <video loop autoPlay muted height={40}>
                            <source src='https://cdn.block.xyz/logo/webm/block_400.webm' type='video/webm' />
                        </video>
                    </div>
                </a>
            </div>
            <div className={styles.separator} />
            <div className={styles.contentContainer}>
                <button className='invisible'>
                    <div onClick={switchToggle}>
                        <svg
                            classname="{styles.svg}"
                            xmlns="http://www.w3.org/2000/svg"
                            height={40}
                            width={40}
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M4 12H20"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="square"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M4 6H20"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="square"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M4 18H20"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="square"
                                strokeLinejoin="round"
                            />
                        </svg>

                    </div>
                </button>
            </div>
            <div className={styles.menu}>
                <ul className={`${styles.links}`}>
                    <li><Link className={`${styles.navText} title`} href="/news">NEWS</Link></li>
                    <li><Link className={`${styles.navText} title`} href="/carerrs">CARERRS</Link></li>
                    <li><Link className={`${styles.navText} title`} href="/investors">INVESTORS</Link></li>
                    <li>
                        <button className={`${styles.navText} pointer`}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="0 0 14 17" ><path d="M8.5 0H5.5V3H8.5V0Z" fill="currentColor"></path><path d="M0 5H14V7H10V17H8V13H6V17H4V7H0V5Z" fill="currentColor"></path></svg>
                        </button>
                    </li>
                </ul>
            </div>
            <NewsNavModal toggle={toggle} switchToggle={switchToggle} />
        </nav>
    )
}