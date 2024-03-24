
export const DetailsFullStack = ({project}) => {

   return <section className={'details-fullstack'}>

      <article className="technos">

         {project.technos.map(techno => <div key={techno.title}>
            <h5>{techno.title}</h5>
            <p>{techno.description}</p>
         </div>)}

      </article>


      <article className="features">
         {project.features.map(feature => <p key={feature}>{feature}</p>)}
      </article>
   </section>
}
