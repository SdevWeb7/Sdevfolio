"use client"

import { useState } from "react";
import { IconOpenSection } from "@/app/svg/IconOpenSection";
import { IconCloseSection } from "@/app/svg/IconCloseSection";
import Link from "next/link";

export default function About () {
   const [langSection, setLangSection] = useState(false)
   const [frameworkSection, setFrameworkSection] = useState(false)
   const [outilsSection, setOutilsSection] = useState(false)


   return <main className={'a-propos'}>

      <h2 id={'top'}>À propos</h2>


      <section id="intro">
         <h3>Intro</h3>
         <article className={"intro"}>
            <p>Après avoir suivi des centaines d heures de tutoriels afin de faire le tour des technologies avant de faire mon choix (C, C++, Python, Java, SQL, Html/CSS, Javascript, Php, ReactJS, Symfony, Angular, Svelte, VueJS, Bootstrap, TailwindCSS), mes deux stacks favorites sont NextJS (NodeJS et ReactJS) et Symfony en mode API consommé par ReactJS.</p>
         </article>
      </section>


      <section id="langages">
         <Link href={'#langages'} onClick={() => setLangSection(v => !v)}>
            <h3>Langages {langSection ? <IconCloseSection  /> : <IconOpenSection />}</h3>
         </Link>
         {langSection && <article>
            <ul>
               <li>- HTML, CSS (et SASS)</li>
               <li>- Javascript</li>
               <li>- Php</li>
            </ul>
         </article>}
      </section>


      <section id={"frameworks"}>
         <Link href={"#frameworks"} onClick={() => setFrameworkSection(v => !v)}>
            <h3>Frameworks {frameworkSection ? <IconCloseSection  /> : <IconOpenSection />}</h3>
         </Link>
         {frameworkSection && <article>
            <ul>
               <li>- ReactJS :
                  <ul className={'second-list'}>
                     <li>- React-Hook-Form</li>
                     <li>- Tanstack-Query (React-Query)</li>
                  </ul>
               </li>
               <li>- NextJS 14 :
                  <ul className={'second-list'}>
                     <li>- Next-Auth</li>
                     <li>- Prisma</li>
                     <li>- Servers actions</li>
                  </ul>
               </li>
               <li>- Symfony 7 :
                  <ul className={'second-list'}>
                     <li>- Entities, Controllers, Repositories</li>
                     <li>- Authentification (Forms et JSON)</li>
                     <li>- Serializer, Events, MessagesBus</li>
                     <li>- Twig, Yaml</li>
                  </ul>
               </li>
               <li>- TailwindCSS (mais préférence pour le SCSS)</li>
            </ul>
         </article>}
      </section>


      <section id="outils">
         <Link href={"#outils"} onClick={() => setOutilsSection(v => !v)}>
            <h3>Outils préférés {outilsSection ? <IconCloseSection  /> : <IconOpenSection />}</h3>
         </Link>
         {outilsSection && <article>
            <ul>
               <li>- Sass (SCSS)</li>
               <li>- Git (Github)</li>
               <li>- Npm (ou pnpm)</li>
               <li>- Figma</li>
               <li>- PhpStorm</li>
               <li>- React-Hook-Form</li>
               <li>- React-Query (ou en NextJS les servers Actions)</li>
               <li>- Prisma</li>
               <li>- Yup</li>
            </ul>
         </article>}
      </section>

   </main>
}