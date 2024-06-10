import Link from 'next/link'
import styles from '../nav.module.css'

export default function SecondaryNav(){
    return(
        <nav>
        <ul className={`${styles.list}`} style={{paddingTop: 0}}>
          <li><Link className={`${styles.black} ${styles.navLink}`} href="https://squareup.com/us/es">Square</Link></li>
          <li><Link className={`${styles.black} ${styles.navLink}`} href="https://cash.app/">Cash App</Link></li>
          <li><Link className={`${styles.black} ${styles.navLink}`} href="https://tidal.com/https://spiral.xyz/">Spiral</Link></li>
          <li><Link className={`${styles.black} ${styles.navLink}`} href="https://tidal.com/">Tidal</Link></li>
          <li><Link className={`${styles.black} ${styles.navLink}`} href="https://www.tbd.website/">TBD</Link></li>
        </ul>
      </nav>
    )
}