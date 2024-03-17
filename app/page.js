import Link from "next/link";

export default function Home() {
  return <main className={"home"}>

     <h2>Bienvenue sur mon portfolio</h2>

     <p>Développeur full-stack passionné</p>

     <Link href={'/projets'} className={'btn'}>Projets</Link>
     <Link href={'/infos'} className={'btn'}>Infos</Link>
     <Link href={'/a-propos'} className={'btn'}>À propos</Link>
    </main>
}
