import Link from "next/link";

export function ScrollToTopButton () {

   return <Link
            href={'#top'}
            className={'scroll-top-button'}>
               Haut de page</Link>
}