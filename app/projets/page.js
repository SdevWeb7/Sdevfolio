import { ProjectsFullStack } from "@/app/components/ProjectsFullStack";
import { ProjectsFrontEnd } from "@/app/components/ProjectsFrontEnd";


export default function Projets () {


   return <main className={'projets'}>

      <h2 id={'top'}>Projets</h2>

      <ProjectsFullStack />



      <hr/>

      <ProjectsFrontEnd />
   </main>
}