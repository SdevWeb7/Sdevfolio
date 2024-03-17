import Link from "next/link";
import { createPortal } from "react-dom";

export function MenuBurger () {

   return createPortal(<section className={'menu-burger'}>

      <Link href={'/projets'}>Projets</Link>

      <Link href={'/infos'}>Infos</Link>

      <Link href={'/a-propos'}>À propos</Link>
   </section>, document.body)
}