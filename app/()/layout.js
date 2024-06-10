import styles from "../page.module.css";
import Player from "@/components/ui/player/Player";
import HomeNav from "@/components/ui/nav/home/HomeNav";
import Footer from "@/components/ui/footer/home/Footer";

import './layout.css'
export default function HomeLayout({ children }) {

  return (
      <body className={styles.body}>
        <>
          <Player />
          <>
            <HomeNav />
          </>
        </>
        {children}
        <Footer />
        </body >
  );
}
