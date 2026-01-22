import { Navbar } from "./components/Navbar"
import { Education } from "./sections/education"
import { Experience } from "./sections/experience"
import { Hero } from "./sections/hero"
import { Projects } from "./sections/projects"
import { Skills } from "./sections/skills"


export default function PortfolioPage() {
    return(
    <main>
      <Navbar className="hidden md:block"/>
     <Hero/>
     <Skills/>  
     <Experience/>
     <Projects/>
     <Education/>
        </main>
    )
}