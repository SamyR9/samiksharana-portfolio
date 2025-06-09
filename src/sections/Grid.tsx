
const gridBox = ["Tech Stack"]
const techStack = ["Javascript", "Typescript", "RESTful APIs", "Node.js", "AWS Lambda", "Express.js", "Salesforce CRM", "Apex", "Axios", "React", "Microservices", "Redis", "Kafka", "Git", "Github", "Docker", "PgAdmin","JIRA", "Postman", "Agile", "SQL", "SOQL", "Microsoft Office Tools", "Java"];

export default function Grid() {
  return(
    <div className="grid grid-cols-1 md:grid-cols-1 gap-1 mt-8">
      {
        gridBox.map((box, i) => (
          <div key={i} className="px-4 py-4 my-auto rounded-lg hover:bg-gray-900">
          <div className="font-semibold text-xl">{gridBox[i] != "map" ? gridBox[i] : ""}</div>
          <div className="">
            { 
              gridBox[i] === "Tech Stack" && 
              <div className="flex flex-wrap mt-5 gap-1.5">
                {
                  techStack.map((item,i) => (
                    <div key={i} className="px-4 py-1 rounded-full bg-gray-800 border-gray-700 hover:bg-gray-500 text-sm">{item}</div>
                  ))
                }
              </div>
            }
            {
              gridBox[i] === "map" && 
              <div></div>
            }
          </div>
          </div>
        ))
      }
    </div>
  )
}