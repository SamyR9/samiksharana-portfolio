"use client"

import Grid from "./Grid";
import Image from "next/image";
import { Navigation } from "lucide-react";

export default function About() {

  return(
    <section id="about" className="py-16 px-4 text-center mx-auto max-w-200">
      <h2 className="text-2xl text-center bg-gradient-to-r from-yellow-300 to-pink-600 bg-clip-text text-transparent p-4">About me</h2>

      <div className="text-4xl text-center text-white font-serif font-semibold">Let&apos;s get aquainted</div>     

      <div className="flex flex-col items-center space-y-2">
        <Image src="hi-emoji.png" width={120} height={120} className="rounded-full place-self-center" alt="hi-emoji"/>

        <p className="text-gray-400">
          I&apos;m a Backend Developer with working knowledge of Frontend libraries and frameworks like React and Angular. I have over 8.5 years of experience in Software Engineering and built performant and large scale apps. 
          I have worked on complex systems, delivered features in timelines and collaborated with team and stakeholders in an Agile model. I have worked with latest technologies like Javascript, Typescript,Node.js, Express.js and AWS lambdas and easily adapt to tech stacks based on the project at hand. 
          <br></br>
          <br></br>
          I have experience with Java to build apps as well as Salesforce CRM which utilise Apex Language (similar to Java) for Backend and Visualforce for Frontend which in turn utilises Javascript. I have worked on frontend as well for some projects using Angular JS framework.
          <br></br>
          <br></br>
          My most recent experiences was with Integrating cross platform apps, building RESTful APIs and improving performance of Backend processes. 
        </p>
      </div>

      <div className="flex flex-row justify-center mt-8 gap-5">
           <a className="flex flex-row gap-1" href="https://www.linkedin.com/in/samiksha-rana-314915157/details/recommendations/" target="_blank"><span className="bg-gradient-to-r from-yellow-300 to-pink-600 bg-clip-text text-transparent">Testimonials</span> <Navigation/></a>   
           <a className="flex flex-row gap-1" href="https://github.com/SamyR9" target="_blank"><span className="bg-gradient-to-r from-yellow-300 to-pink-600 bg-clip-text text-transparent">Github</span> <Navigation/></a>
      </div>

      <div>
        <Grid/>
      </div>
    </section>
  )
}