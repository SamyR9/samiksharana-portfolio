"use client"

import { Navigation } from "lucide-react"

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Simpplr",
    tenure: "September 2021 - June 2025",
    description: "Built RESTful APIs and complex integrations for Simpplr Intranet. Worked with stakeholders to take projects from design & development till delivery on production",
    techstack: ["Javascript", "Typescript", "Node.js", "AWS Lambda", "Express.js", "Salesforce CRM", "Apex", "Axios", "React", "Microservices", "Redis", "Kafka","JIRA", "Git", "Github", "Docker", "PgAdmin", "Postman"],
    git: "https://github.com/samiksha-simpplr"
  },
  {
    title: "Senior Associate | Associate | Analyst",
    company: "Axtria - Ingenious Insights",
    tenure: "March 2018 - September 2021",
    description: "Created and implemeted multiple features to cater to needs of life sciences modules",
    techstack: ["Javascript", "Python", "Apex", "Angular", "Salesforce", "Visualforce", "SOQL","Microsoft Excel", "Git", "Gitlab"]
  },
  {
    title: "Programmer Analyst | Programmer Analyst Trainee",
    company: "Cognizant",
    tenure: "November 2016 - February 2018",
    description: "Worked on a variety of features taking full operational responsibility and provided technical support",
    techstack: ["Java", "SQL","Git", "BitBucket", "MySql", "Microsoft Office Tools", "HTML"]
  }
]

export default function Experience() {
  return(
    <section id="experience" className="px-4 py-16">

      <div className="text-2xl text-center bg-gradient-to-r from-yellow-300 to-pink-600 bg-clip-text text-transparent p-4">Professional Experience</div>
      <div className="text-4xl text-center text-white font-serif font-semibold">My Work Journey</div>

      <div>
        {
          experiences.map((exp, i) => (
            <div key={i} className="mx-auto max-w-200 mt-8">

              <div className="md:grid md:grid-cols-2 gap-4 py-8 px-10 hover:bg-gray-900 rounded-lg p-4">
                
                <div className="mt-2">
                  <h1 className="text-xl font-semibold font-sans py-2">{exp.company}</h1>
                  <div className="py-0.5 text-gray-200">{exp.title}</div>
                  <div className="text-gray-400">{exp.tenure}</div>
                </div>

                <div className="mt-2 ">
                  <div className="text-gray-200">{exp.description}</div>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {
                      exp.techstack.map((key, i) => (
                        <span key={i} className="px-2 py-1 text-sm rounded-full bg-gray-800 border-gray-700 hover:bg-gray-500">
                          {key}
                        </span>   
                      ))
                    }
                  </div>

                  {
                    exp?.git &&  
                    <div className="mt-4">
                      <a href={exp.git} target="_blank">
                        <Navigation/>
                      </a>
                    </div>
                  }
                </div>

              </div>

            </div>
          ))
        }
      </div>

    </section>
  )
}