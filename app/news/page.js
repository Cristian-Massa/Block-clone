import InfiniteCarrousel from "@/components/ui/carrousels/infiniteCarrousel/InfiniteCarrousel";
import styles from './page.module.css'
export default function News() {
    return (
        <>
            <header className={styles.header}>
                <InfiniteCarrousel text={' The Latest from Block '} />
                <div className={`${styles.center}`}>
                    <h1><span className={`title`}>Inside</span> Block</h1>
                </div>
                <hr className={styles.separator}/>
            </header>
            <main style={{
                minHeight: '100vh'
            }}>
                <p>Impact</p>

            </main>
        </>
    )
}