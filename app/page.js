import Link from "next/link";

export default function Home() {
  return <main className={"home"}>

     <h2>Bienvenue sur mon portfolio</h2>

     <p>Développeur full-stack passionné</p>

     <Link
        href="/fullstack"
        className={'btn'}>Full-Stack</Link>

     <Link
        href="/frontend"
        className={'btn'}>Front-End</Link>

     <Link
        href={'/a-propos'}
        className={'btn'}>À propos</Link>
    </main>
}
