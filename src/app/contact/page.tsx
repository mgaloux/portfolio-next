import Navbar from '../components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import "../index.css";
import Footer from '../components/Footer'

function Contact() {
  const calendlyLink = 'https://calendly.com/mgaloux'
  const linkedinLink = 'https://www.linkedin.com/in/martingaloux/'
  const githubLink = 'https://www.github.com/Zequar/'

  return (
    <div>
      <Navbar />
      <div className="centeredSection">
        <h1>Contact Me</h1>
        <section className="text-center">
          <p className="px-10  w-90vw">
            Like what you saw ? Let's get in contact !
          </p>
          <a
            href="mailto:martin.galoux@epitech.eu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border-3 border-white w-80 m-4 p-8 rounded-3xl transition-all duration-1000 hover:scale-105 hover:transform">
              <h2 className="text-2xl">Shoot an email ✉️</h2>
            </button>
          </a>
          <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
            <button className="border-3 border-white w-80 m-4 p-8 rounded-3xl transition-all duration-1000 hover:scale-105 hover:transform">
              <h2 className="text-2xl">Book a call 📞</h2>
            </button>
          </a>
        </section>
        <section className="mt-0">
          <p className="px-10 w-90vw my-4 text-center">Let's stay connected !</p>
          <div className="flex items-start mt-0 gap-8">
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
              <button className="p-4 w-24 h-24 border-white rounded-full box-shadow transition-all duration-1000 hover:scale-105 hover:transform">
                <FontAwesomeIcon color="white" icon={faLinkedin} size="2x" />
              </button>
            </a>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <button className="p-4 w-24 h-24 border-white rounded-full box-shadow transition-all duration-1000 hover:scale-105 hover:transform">
                <FontAwesomeIcon color="white" icon={faGithub} size="2x" />
              </button>
            </a>
          </div>
        </section>
      </div>
      <Footer/>
    </div>

  )
}

export default Contact
