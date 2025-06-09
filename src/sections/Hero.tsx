import Image from "next/image";

export default function Hero() {
  return(
    <section id="hero" className="py-16 text-center">
      <Image src="/laptop-emoji.png" alt="Image icon" width={120} height={120} className="rounded-full place-self-center"></Image>
      <div className="flex items-center justify-center">
        <div className="rounded-full aspect-square bg-green-500 shadow-[0px_0px_15px_5px_rgba(2,247,43,1)] w-2.5 h-2.5 m-2"></div>
      <p>Available for opportunities</p>
      </div>
      <h1>Hello, World</h1>
      <h1>Welcome to my humble digital abode</h1>
      <p>I&apos;m a Software Engineer and I specialize in Backend development</p>
    </section>
  )
}