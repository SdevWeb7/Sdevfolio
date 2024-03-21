import { Burger } from "@/app/components/Burger";
import Link from "next/link";

export function Header () {

   return (
      <header>

         <Link href={'/'}>
            <h1>Veustyle</h1>
         </Link>

         <nav className={'nav-header'}>
            <ul>
               <li><Link href="/fullstack">Full-Stack</Link></li>
               <li><Link href="/frontend">Front-End</Link></li>
               <li><Link href="/a-propos">À propos</Link></li>
            </ul>
         </nav>

         <Burger />

      </header>)
}