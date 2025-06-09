import { Navigation } from "lucide-react"

export default function Contact() {
  return(
    <section id="contact" className="py-16">
      <div className="max-w-200 mx-auto">
        
        {/* <h2 className="text-2xl text-center bg-gradient-to-r from-yellow-300 to-pink-600 bg-clip-text text-transparent p-4">Contact</h2> */}

        <div className="text-4xl text-center text-white font-serif font-semibold flex flex-row gap-2 px-10 border bg-gray-900 rounded-4xl mx-2 border-gray-800 py-10 justify-evenly">

          <a className="flex flex-row gap-2" href="https://www.linkedin.com/in/samiksha-rana-314915157/" target="_blank">

            <div className="text-3xl text-center bg-gradient-to-r from-yellow-300 to-pink-600 bg-clip-text text-transparent p-4">Let&apos;s Connect</div>
            
            <button>
              <Navigation/>
            </button>
          </a>
        </div>
      
        
      </div>
    </section>
  )
}