import styles from '@/app/page.module.css'
import Block from '@/public/images/svg/logo/Logo.svg'
import SecondaryNav from '../../nav/home/SecondaryNav/SecondaryNav'
import Image from 'next/image'
export default function Footer(){
    return(
        <>
          <div className={`${styles.secondaryNav}`}>
            <h1>
              <Image src={Block} alt='logo' />
            </h1>
            <div>
              <SecondaryNav />
            </div>
          </div>
          <footer className={styles.legal}>
            <span className="small">
              © 2024  Block, Inc. BLOCK and the Block Logo are trademarks of Block, Inc.
            </span>
            <a style={{
              color: 'black',
              fontWeight: 'bolder',
              fontSize: '10px',
            }} href="/legal">Legal</a>
          </footer>
        </>
    )
}