'use client'
import { usePathname } from "next/navigation"
import HomeNav from "./home/HomeNav";
import NewsNav from "./news/NewsNav";

export default function Nav() {
    const pathname = usePathname();
    console.log(pathname);

    switch (pathname) {
        case '/news':
            return <NewsNav />;
        default:
            return null;
    }
}