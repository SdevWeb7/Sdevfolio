import Link from "next/link";
import { createPortal } from "react-dom";

export function MenuBurger ({setIsOpen}) {

   return createPortal(<section className={'menu-burger'}>

      <Link href="/fullstack" onClick={() => setIsOpen(false)}>Full-Stack</Link>
      <Link href="/frontend" onClick={() => setIsOpen(false)}>Front-End</Link>

      <Link href={'/a-propos'} onClick={() => setIsOpen(false)}>À propos</Link>
   </section>, document.body)
}