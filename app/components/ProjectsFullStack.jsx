"use client"

import { IconArrowLeft } from "@/app/svg/IconArrowLeft";
import { IconArrowRight } from "@/app/svg/IconArrowRight";
import { useState } from "react";
import Link from "next/link";

export function ProjectsFullStack () {
   const [index, setIndex] = useState(0)
   const nombreItems = 4



   return <><h3>Quelques projets Full-Stack</h3>

   <button
      onClick={() => setIndex(v => v > 0 ? v - 1 : v)}
      className="previous">
      <IconArrowLeft />
   </button>
   <button
      onClick={() => setIndex(v => v < (nombreItems-1) ? v + 1 : v)}
      className="next">
      <IconArrowRight />
   </button>

   <section className="fullstack">
      <article
         style={{transform: `translateX(-${index * 100}%)`}}
         className="diapo-container">
         <div className="youtube">
            <p>Challenge du site web Front-end Mentor réalisé en full stack</p>
            <img src="fullstack/youtube.jpg" alt="youtube"/>

            <Link className={'code-source'} href={'#'}>Code Source</Link>

            <h3>Technologies</h3>
            <ul>
               <li><strong>- NextJS:</strong> Next-Auth, Prisma, Server actions</li>
               <li><strong>- SASS:</strong> imports, variables, animations</li>
            </ul>

            <h3>Fonctionnalités</h3>
            <ul>
               <li>Authentification (E-mail, Google et Github)</li>
               <li>CRUD Vidéos avec react-hook-form + yup validation</li>
               <li>Ajouter au favoris</li>
               <li>Recherche</li>
               <li>Dark/Light Mode</li>
            </ul>
         </div>

         <div className="sdevweb7">
            <p>Un de mes premiers portfolio</p>
            <img src="fullstack/sdevweb7.jpg" alt="sdevweb7"/>
            <h3>Technologies</h3>
            <ul>
               <li><strong>- Symfony:</strong> Authentification par JSON, Entities, Controllers, Repositories, EventListener, Intégration de React (+ React-Router), MessagesBus, Serializer, Twig, Yaml</li>
               <li><strong>- ReactJS:</strong> React-Router, React-Hook-Form, Zustand, Rxjs, Redux-Toolkit, Framer-motion</li>
               <li><strong>- SCSS:</strong> Imports, Variables</li>
            </ul>

            <h3>Fonctionnalités</h3>
            <ul>
               <li>Authentification</li>
               <li>Création sous forme d'API</li>
               <li>CRUD Todolist</li>
               <li>Contact par e-mail</li>
               <li>Dark/Light Mode</li>
            </ul>
         </div>

         <div className="linksharing">
            <p>Challenge Front-end Mentor réalisé en Full-Stack</p>
            <img src="fullstack/linksharing.jpg" alt="linksharing"/>
            <h3>Technologies</h3>
            <ul>
               <li><strong>- Symfony:</strong> Authentification par JSON, Entities, Controllers, Repositories, EventListener, Intégration de React (+ React-Router), MessagesBus, Serializer, Twig, Yaml</li>
               <li><strong>- ReactJS:</strong> React-Router, React-Hook-Form, Zustand, Rxjs, Redux-Toolkit, Framer-motion</li>
               <li><strong>- SCSS:</strong> Imports, Variables</li>
            </ul>

            <h3>Fonctionnalités</h3>
            <ul>
               <li>Authentification</li>
               <li>Création sous forme d'API</li>
               <li>CRUD Profil utilisateur</li>
            </ul>
         </div>

         <div className="goodfood">
            <p>Petit challenge perso</p>
            <img src="fullstack/goodfood.jpg" alt="goodfood"/>
            <h3>Technologies</h3>
            <ul>
               <li><strong>- Symfony:</strong> Authentification par JSON, Entities, Controllers, Repositories, EventListener, Intégration de React (+ React-Router), MessagesBus, Serializer, Twig, Yaml</li>
               <li><strong>- ReactJS:</strong> React-Router, React-Query, React-Hook-Form, Zustand, Rxjs, Redux-Toolkit, Framer-motion</li>
               <li><strong>- SCSS:</strong> Imports, Variables</li>
            </ul>

            <h3>Fonctionnalités</h3>
            <ul>
               <li>Authentification</li>
               <li>Création sous forme d'API</li>
               <li>Pagination</li>
               <li>CRUD Recettes et Ingredients avec image</li>
               <li>Liker et Commenter les recettes</li>
               <li>Paiement par Stripe (Faire un don de 2€)</li>
               <li>Dark/Light Mode</li>
            </ul>
         </div>
      </article>

   </section></>
}