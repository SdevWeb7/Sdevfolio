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

      <h2>À propos</h2>


      <section id="intro">
         <h3>Intro</h3>
         <article className={"intro"}>
            <p>En suivant 12 heures par jour de tutoriels sur internet (notamment Grafikart.fr) pendant 1 an et demi, et étant passionné, je me devais de m'initié au plus grand nombres de technologies actuellement disponible sur le marché (listées plus bas). Après cela j'ai décidé de me spécifié dans certains domaines (listés aussi plus bas). J'ai par la suite validé mes compétences en obtenant une certification de niveau Bac+2 à la 3W Academy, me voila officiellement développeur full-stack (junior).</p>
         </article>
      </section>


      <section id="langages">
         <Link href={'#langages'} onClick={() => setLangSection(v => !v)}>
            <h3>Langages {langSection ? <IconCloseSection  /> : <IconOpenSection />}</h3>
         </Link>
         {langSection && <article>
            <ul>
               <li>- Principaux :
                  <ul className={'second-list'}>
                     <li>- HTML, CSS (et SASS)</li>
                     <li>- Javascript</li>
                     <li>- Php</li>
                  </ul>
               </li>
               <li>- Autres :
                  <ul className={'second-list'}>
                     <li>- C, C++</li>
                     <li>- Python</li>
                     <li>- Java</li>
                  </ul>
               </li>

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
                     <li>- Events, MessagesBus</li>
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
               <li>- Sass</li>
               <li>- Git (Github)</li>
               <li>- Npm (ou pnpm)</li>
               <li>- Figma</li>
               <li>- PhpStorm</li>
               <li>- React-Hook-Form</li>
               <li>- React-Query</li>
               <li>- Yup</li>
            </ul>
         </article>}
      </section>

   </main>
}