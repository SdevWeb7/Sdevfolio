import Link from "next/link";

export default function Home() {
  return <main className={"home"}>

     <h2>Bienvenue sur mon portfolio</h2>

     <p>Développeur full-stack passionné</p>

     <div className={'flex gap-8'}>
     <Link
        href="/fullstack"
        className={'btn'}>Full-Stack</Link>

     <Link
        href="/frontend"
        className={'btn'}>Front-End</Link>
     </div>
     <Link
        href={'/a-propos'}
        className={'btn'}>À propos</Link>
    </main>
}
