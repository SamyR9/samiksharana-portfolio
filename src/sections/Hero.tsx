import Image from "next/image";

export default function Hero() {
  return(
    <section id="hero" className="py-16 text-center overflow-hidden">

      <Image src="laptop-emoji.png" alt="Image icon" width={120} height={120} className="rounded-full place-self-center mt-18"></Image>
      <div className="inline-flex items-center justify-center bg-gray-900 px-2 py-1 rounded-full">
        <div className="rounded-full aspect-square bg-green-500 shadow-[0px_0px_15px_1px_rgba(2,247,43,1)] w-2.5 h-2.5 m-2"></div>
        <p className="px-2">Available for opportunities</p>
      </div>
      <h1 className="text-5xl py-6 bg-gradient-to-r from-yellow-300 to-pink-600 bg-clip-text text-transparent">I&apos;m Samiksha Rana</h1>
      
      <h1 className="text-5xl font-semibold font-serif text-wrap mt-5
      ">Welcome to</h1>
      <h1 className="text-5xl font-semibold font-serif text-wrap mt-5
      ">my humble digital abode</h1>
      <p className="py-8 text-gray-400 font-serif">I&apos;m a Software Engineer and <br></br> I specialize in Backend development</p>
    </section>
  )
}