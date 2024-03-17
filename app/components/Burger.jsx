"use client"

import { IconBurger } from "@/app/svg/IconBurger";
import { IconClose } from "@/app/svg/IconClose";
import { useState } from "react";
import Link from "next/link";
import { MenuBurger } from "@/app/components/MenuBurger";

export function Burger () {
   const [isOpenMenu, setIsOpenMenu] = useState(false)
   const rotateDeg = isOpenMenu ? 180 : 0

   const handleMenu = (e) => {
      e.preventDefault()
      setIsOpenMenu(v => !v)
   }


   return <nav
            className={'nav-burger'}
            style={{transform: `rotate(${rotateDeg}deg)`}}>

      {isOpenMenu ?
         <Link
            href={'#'}
            onClick={handleMenu}>
            <IconClose />
         </Link> :

         <Link href={'#'} onClick={handleMenu}>
            <IconBurger />
         </Link>}

      {isOpenMenu && <MenuBurger />}

   </nav>
}