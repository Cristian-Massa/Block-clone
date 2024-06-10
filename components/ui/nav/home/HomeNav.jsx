'use client'
import Link from "next/link";
import styles from "./nav.module.css";
export default function HomeNav() {
    return (
        <nav className={`${styles.nav}`}>
            <ul className={`${styles.list}`}>
                <li>
                    <Link href='/news' className={`${styles.link}`}>NEWS</Link>
                </li>
                <li>
                    <Link href='/careers' className={`${styles.link}`}>CAREERS</Link>
                </li>
                <li>
                    <Link href='/investors' className={`${styles.link}`}>INVESTORS</Link>
                </li>
                <li border='none'>
                    <button className={`${styles.button} pointer`}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="0 0 14 17" ><path d="M8.5 0H5.5V3H8.5V0Z" fill="currentColor"></path><path d="M0 5H14V7H10V17H8V13H6V17H4V7H0V5Z" fill="currentColor"></path></svg>
                    </button>
                </li>
            </ul>
        </nav>
    )
}