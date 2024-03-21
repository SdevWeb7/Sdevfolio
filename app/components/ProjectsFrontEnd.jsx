"use client"

import { useState } from "react";
import { IconArrowLeft } from "@/app/svg/IconArrowLeft";
import { IconArrowRight } from "@/app/svg/IconArrowRight";
import Link from "next/link";

export function ProjectsFrontEnd () {

      const [index, setIndex] = useState(0)
      const nombreItems = 4



      return <div className={'wrapper mt-12'}>
      <button
         onClick={() => setIndex(v => v > 0 ? v - 1 : v)}
         className="previous">
         <IconArrowLeft />
      </button>

      <section className="frontend">
         <article
            style={{transform: `translateX(-${index * 100}%)`}}
            className="diapo-container">
            <div className="payapi">
               <img src="frontend/payapi.jpg" alt="payapi"/>
               <Link
                  className={'code-source'}
                  href={'https://github.com/SdevWeb7/PayApi'}
                  target={'_blank'}>
                  Code Source</Link>
               <Link
                  className={'site-live'}
                  href={'https://sdevweb7.github.io/PayApi'}
                  target={'_blank'}>Site Live</Link>

               <h3>Technologies</h3>
               <div className="technos">
                  <p>Vite</p>
                  <p>ReactJS</p>
                  <p>TailwindCSS</p>
               </div>
            </div>

            <div className="sneakers">
               <img src="frontend/sneakers.jpg" alt="sneakers"/>
               <Link
                  className={'code-source'}
                  href={'https://github.com/SdevWeb7/Sneakers'}
                  target={'_blank'}>
                  Code Source</Link>
               <Link
                  className={'site-live'}
                  href={'https://sdevweb7.github.io/Sneakers'}
                  target={'_blank'}>Site Live</Link>

               <h3>Technologies</h3>
               <div className="technos">
                  <p>Vite</p>
                  <p>ReactJS</p>
                  <p>TailwindCSS</p>
               </div>
            </div>

            <div className="spacex">
               <img src="frontend/spacex.jpg" alt="spacex"/>
               <Link
                  className={'code-source'}
                  href={'https://github.com/SdevWeb7/SpaceX'}
                  target={'_blank'}>
                  Code Source</Link>
               <Link
                  className={'site-live'}
                  href={'https://sdevweb7.github.io/SpaceX'}
                  target={'_blank'}>Site Live</Link>

               <h3>Technologies</h3>
               <div className="technos">
                  <p>Vite</p>
                  <p>ReactJS</p>
                  <p>TailwindCSS</p>
               </div>
            </div>

            <div className="designo">
               <img src="frontend/designo.jpg" alt="designo"/>
               <Link
                  className={'code-source'}
                  href={'https://github.com/SdevWeb7/Designo'}
                  target={'_blank'}>
                  Code Source</Link>
               <Link
                  className={'site-live'}
                  href={'https://sdevweb7.github.io/Designo'}
                  target={'_blank'}>Site Live</Link>

               <h3>Technologies</h3>
               <div className="technos">
                  <p>Vite</p>
                  <p>ReactJS</p>
                  <p>TailwindCSS</p>
               </div>
            </div>
         </article>

      </section>
         <button
            onClick={() => setIndex(v => v < (nombreItems-1) ? v + 1 : v)}
            className="next">
            <IconArrowRight />
         </button>
      </div>
}