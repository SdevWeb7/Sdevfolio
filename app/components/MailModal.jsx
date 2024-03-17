"use client"

import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import { ContactMail } from "@/actionsServer/Mailer";
import { useForm } from "react-hook-form";
import { contactSchemas } from "@/actionsServer/yupSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { IconClose } from "@/app/svg/IconClose";
import Link from "next/link";
import toast from "react-hot-toast";

export const MailModal = ({setMailModal}) => {
   const {handleSubmit, register,
            formState: {errors, isValid}} = useForm({
      mode: "onBlur",
      resolver: yupResolver(contactSchemas)
   })
   const ref = useRef(null)

   useEffect(() => {
      document.addEventListener('click', handleModal)

      return () => {
         document.addEventListener('click', handleModal)
      }
   }, [])

   const handleModal = (e) => {
      if (ref?.current && !ref.current.contains(e.target)) {
         setMailModal(false)
      }
   }
   const onSubmit = async(data) => {
      try {
         await ContactMail(data.email, data.message)
         toast.success('Un e-mail vient de m\'être envoyé')
         setMailModal(false)
      } catch (e) {
         toast.error(`Problème serveur`)
      }
   }


   return createPortal(<article className={'mail-modal'} ref={ref}>

      <Link href={'#'} onClick={e => {
         e.preventDefault()
         setMailModal(false)
      }
      }>
         <IconClose />
      </Link>

      <h2>Me contacter</h2>


      <input
         type="text"
         placeholder={'Votre adresse e-mail'}
         {...register("email", {required: true})} />
      {errors.email && <span>{errors.email.message}</span>}


      <textarea
         placeholder={'Votre message'}
         {...register("message", {required: true})} />
      {errors.message && <span>{errors.message.message}</span>}

      <button
         disabled={!isValid}
         className={`btn ${isValid ? '' : 'disabled'}`}
         onClick={handleSubmit(onSubmit)}>
            Envoyer</button>

   </article>, document.body)
}


