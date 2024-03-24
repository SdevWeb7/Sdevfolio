"use client"

import { useState } from "react";
import Link from "next/link";
import { IconArrowLeft } from "@/app/svg/IconArrowLeft";
import { IconArrowRight } from "@/app/svg/IconArrowRight";
import { DetailsFullStack } from "@/app/components/DetailsFullStack";
import {projectsDescriptions} from '@/lib/descriptionProjects'

export function ProjectsFullStack () {
   const [index, setIndex] = useState(0)
   const [showDetails, setShowDetails] = useState(false)
   const listProjets = [
      "sdevweb7", "linksSharing", "youtube_reload", "GoodFood"]
   const nombreItems = 4



   return <><section className="diapo-container">

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
            src={`fullstack/${listProjets[index]}.jpg`}
            alt={listProjets[index]} />

         <Link
            className={'code-source'}
            href={`https://github.com/SdevWeb7/${listProjets[index]}`}
            target={'_blank'}>
               Code Source</Link>

         {index === 0 && <Link
                           className={'site-live'}
                           href={'https://sdevweb.com/'}
                           target={'_blank'}>Site Live</Link>}

         <Link
            href={'#'}
            className={'details-button'}
            onClick={e => {
               e.preventDefault()
               setShowDetails(v => !v)
            }}>
            {showDetails ? "Screenshot" : "Details"}</Link>



         {showDetails && <DetailsFullStack
                           project={projectsDescriptions[index]} />}

      </article>

         </section></>
}
