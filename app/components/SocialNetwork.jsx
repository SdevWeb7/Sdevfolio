"use client"

import { IconGithub } from "@/app/svg/IconGithub";
import { IconLinkedin } from "@/app/svg/IconLinkedin";
import { useState } from "react";
import { MailModal } from "@/app/components/MailModal";
import { IconMail } from "@/app/svg/IconMail";
import Link from "next/link";

export function SocialNetwork () {
   const [mailModal, setMailModal] = useState(false)


   return <nav className="social-network">

      <Link href={'#'}>
         <IconMail onClick={e => {
            e.preventDefault()
            setMailModal(true)
         }} />
      </Link>



      <Link
         href={'https://www.linkedin.com/in/steven-durand-132a772b1/'}
         target={'_blank'}>
         <IconLinkedin />
      </Link>

      <Link
         href={'https://github.com/SdevWeb7'}
         target={'_blank'}>
         <IconGithub />
      </Link>

      {mailModal && <MailModal setMailModal={setMailModal} />}
   </nav>
}