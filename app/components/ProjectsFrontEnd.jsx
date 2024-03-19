"use client"

import { useState } from "react";
import { IconArrowLeft } from "@/app/svg/IconArrowLeft";
import { IconArrowRight } from "@/app/svg/IconArrowRight";

export function ProjectsFrontEnd () {

      const [index, setIndex] = useState(0)
      const nombreItems = 4



      return <><h3>Quelques projets Front-end</h3>

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

      <section className="frontend">
         <article
            style={{transform: `translateX(-${index * 100}%)`}}
            className="diapo-container">
            <div className="payapi">
               <p>Challenge du site web Front-end Mentor</p>
               <img src="frontend/payapi.jpg" alt="payapi"/>
               <h3>Technologies</h3>
               <ul>
                  <li><strong>- Vite</strong></li>
                  <li>ReactJS: React-router</li>
                  <li>TailwindCSS</li>
               </ul>
            </div>

            <div className="sneakers">
               <p>Challenge du site web Front-end Mentor</p>
               <img src="frontend/sneakers.jpg" alt="sneakers"/>
               <h3>Technologies</h3>
               <ul>
                  <li><strong>- Vite</strong></li>
                  <li>ReactJS: React-router</li>
                  <li>TailwindCSS</li>
               </ul>
            </div>

            <div className="spacex">
               <p>Challenge du site web Front-end Mentor</p>
               <img src="frontend/spacex.jpg" alt="spacex"/>
               <h3>Technologies</h3>
               <ul>
                  <li><strong>- Vite</strong></li>
                  <li>ReactJS: React-router</li>
                  <li>TailwindCSS</li>
               </ul>
            </div>

            <div className="designo">
               <p>Challenge du site web Front-end Mentor</p>
               <img src="frontend/designo.jpg" alt="designo"/>
               <h3>Technologies</h3>
               <ul>
                  <li><strong>- Vite</strong></li>
                  <li>ReactJS: React-router</li>
                  <li>TailwindCSS</li>
               </ul>
            </div>
         </article>

      </section></>
}