"use client"

import { useState } from "react";
import Link from "next/link";

export function ProjectsFullStack () {
   const [index, setIndex] = useState(0)
   const nombreItems = 4



   return <><article className="diapo-container">

            <button
               onClick={() => setIndex(v => v > 0 ? v - 1 : v)}
               className="previous">&lt;
            </button>
            <button
               onClick={() => setIndex(v => v < (nombreItems-1) ? v + 1 : v)}
               className="next">&gt;
            </button>

            <div
               className="sdevweb7"
               style={{transform: `translateX(-${index * 100}%)`}}>

               <img src="fullstack/sdevweb7.jpg" alt="sdevweb7"/>
               <Link
                  className={'code-source'}
                  href={'https://github.com/SdevWeb7/sdevweb7'}
                  target={'_blank'}>
                     Code Source</Link>
               <Link
                  className={'site-live'}
                  href={'https://sdevweb.com/'}
                  target={'_blank'}>Site Live</Link>

               <div className="technos">
                  <div>
                     <h5>Symfony</h5>
                     <p>Authentification par JSON, Entities, Controllers, Repositories, EventListener, Intégration de React (+ React-Router), MessagesBus, Serializer, Twig, Yaml</p>
                  </div>
                  <div>
                     <h5>ReactJS</h5>
                     <p>React-Router, React-Query, React-Hook-Form, Zustand, Redux-Toolkit, Rxjs, Framer-motion</p>
                  </div>
                  <div>
                     <h5>SASS</h5>
                     <p>Imports, variables, animations</p>
                  </div>
               </div>

               <div className="fonctionnalites">
                  <span>Authentification</span>
                  <span>Création sous forme d'API</span>
                  <span>CRUD Todolist</span>
                  <span>Contact par e-mail</span>
                  <span>Dark/Light Mode</span>
               </div>

            </div>

            <div
               className="youtube"
               style={{transform: `translateX(-${index * 100}%)`}}>

               <img src="fullstack/youtube.jpg" alt="youtube"/>
               <Link
                  className={'code-source'}
                  href={'https://github.com/SdevWeb7/Portfolio1'}
                  target={'_blank'}>
                  Code Source</Link>

               <div className="technos">
                  <div>
                     <h5>NextJS</h5>
                     <p>Next-Auth, Prisma, Server actions</p>
                  </div>
                  <div>
                     <h5>SASS</h5>
                     <p>Imports, variables, animations</p>
                  </div>
               </div>

               <div className="fonctionnalites">
                  <span>Authentification (E-mail, Google et Github)</span>
                  <span>CRUD Vidéos avec react-hook-form + yup validation</span>
                  <span>Ajouter au favoris</span>
                  <span>Recherche</span>
                  <span>Dark/Light Mode</span>
               </div>
            </div>

            <div
               className="linksharing"
               style={{transform: `translateX(-${index * 100}%)`}}>

               <img src="fullstack/linksharing.jpg" alt="linksharing"/>
               <Link
                  className={'code-source'}
                  href={'https://github.com/SdevWeb7/ChallengeLinks'}
                  target={'_blank'}>
                  Code Source</Link>

               <div className="technos">
                  <div>
                     <h5>Symfony</h5>
                     <p>Authentification par JSON, Entities, Controllers, Repositories, EventListener, Intégration de React (+ React-Router), MessagesBus, Serializer, Twig, Yaml</p>
                  </div>
                  <div>
                     <h5>ReactJS</h5>
                     <p>React-Router, React-Query, React-Hook-Form, Zustand, Redux-Toolkit, Rxjs, Framer-motion</p>
                  </div>
                  <div>
                     <h5>SASS</h5>
                     <p>Imports, variables, animations</p>
                  </div>
               </div>

               <div className="fonctionnalites">
                  <span>Authentification</span>
                  <span>Création sous forme d'API</span>
                  <span>CRUD Profil utilisateur</span>
               </div>
            </div>

            <div
               className="goodfood"
               style={{transform: `translateX(-${index * 100}%)`}}>

               <img src="fullstack/goodfood.jpg" alt="goodfood"/>
               <Link
                  className={'code-source'}
                  href={'https://github.com/SdevWeb7/GoodFood'}
                  target={'_blank'}>
                  Code Source</Link>

               <div className="technos">
                  <div>
                     <h5>Symfony</h5>
                     <p>Authentification par JSON, Entities, Controllers, Repositories, EventListener, Intégration de React (+ React-Router), MessagesBus, Serializer, Twig, Yaml</p>
                  </div>
                  <div>
                     <h5>ReactJS</h5>
                     <p>React-Router, React-Query, React-Hook-Form, Zustand, Redux-Toolkit, Rxjs, Framer-motion</p>
                  </div>
                  <div>
                     <h5>SASS</h5>
                     <p>Imports, variables, animations</p>
                  </div>
               </div>

               <div className="fonctionnalites">
                  <span>Authentification</span>
                  <span>Création sous forme d'API</span>
                  <span>Pagination</span>
                  <span>CRUD Recettes et Ingredients avec image</span>
                  <span>Liker et Commenter les recettes</span>
                  <span>Paiement par Stripe (Faire un don de 2€)</span>
                  <span>Dark/Light Mode</span>
               </div>
            </div>
         </article></>
}