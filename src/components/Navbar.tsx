import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav>
        <h1></h1>
        <div>
          <Link href="#about">About</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </nav>
    </header>
  )
}