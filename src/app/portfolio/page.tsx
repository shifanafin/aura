import { Navbar } from "./components/Navbar"
import { Experience } from "./sections/experience"
import { Hero } from "./sections/hero"
import { Skills } from "./sections/skills"


export default function PortfolioPage() {
    return(
    <main>
      <Navbar className="hidden md:block"/>
     <Hero/>
     <Skills/>
     <Experience/>
        </main>
    )
}