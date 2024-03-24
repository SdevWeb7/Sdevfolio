"use client"

import { useState } from "react";
import { IconArrowLeft } from "@/app/svg/IconArrowLeft";
import { IconArrowRight } from "@/app/svg/IconArrowRight";
import Link from "next/link";

export function ProjectsFrontEnd () {
      const [index, setIndex] = useState(0)
      const listProjects = ['PayApi', 'Designo', 'SpaceX', 'Sneakers']
      const nombreItems = 4


      return <section className="diapo-container front">

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


            <article>
                  <img
                     className={'img-project'}
                     src={`frontend/${listProjects[index]}.jpg`}
                     alt={listProjects[index]} />

                  <Link
                     className={'code-source'}
                     href={`https://github.com/SdevWeb7/${listProjects[index]}`}
                     target={'_blank'}>
                        Code Source</Link>

                  <Link
                     className={'site-live'}
                     href={`https://sdevweb7.github.io/${listProjects[index]}`}
                     target={'_blank'}>Site Live</Link>


                  <section className="details-front">
                        <p>Vite</p>
                        <p>ReactJS</p>
                        <p>TailwindCSS</p>
                  </section>

            </article>


      </section>
}