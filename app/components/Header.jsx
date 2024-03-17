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
               <li><a href="/projets">Projets</a></li>
               <li><a href="/infos">Infos</a></li>
               <li><a href="/a-propos">À propos</a></li>
            </ul>
         </nav>

         <Burger />

      </header>)
}