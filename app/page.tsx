import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react"
import Link from "next/link"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import AnimatedText from "./components/animated-text"
import ParticleBackground from "./components/particle-background"
import { downloadResume } from "./actions"
import ScrollButton from "./components/scroll-button"
import ScrollToTopButton from "./components/scroll-to-top-button"

export default function Page() {
  return (
    <div className="min-h-screen bg-dark-canvas text-foreground relative bg-pattern">
      <ParticleBackground />
      <div className="relative z-10">
        <header className="sticky top-0 z-50 w-full border-b border-[#B87333]/40 bg-shadowed-stone/80 backdrop-blur supports-[backdrop-filter]:bg-shadowed-stone/60">
          <div className="container flex h-16 items-center justify-between">
            <Link className="flex items-center space-x-2" href="/">
              <span className="font-bold text-xl sm:text-2xl text-kesar-gold">Debadarshan.dev</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 text-sm font-medium">
              <ScrollButton targetId="about" className="text-foreground transition-colors hover:text-[#FFCC00]">
                About
              </ScrollButton>
              <ScrollButton targetId="projects" className="text-foreground transition-colors hover:text-[#FFCC00]">
                Projects
              </ScrollButton>
              <ScrollButton targetId="skills" className="text-foreground transition-colors hover:text-[#FFCC00]">
                Skills
              </ScrollButton>
              <ScrollButton targetId="contact" className="text-foreground transition-colors hover:text-[#FFCC00]">
                Contact
              </ScrollButton>
            </nav>
            <form action={downloadResume}>
              <Button
                type="submit"
                variant="outline"
                size="sm"
                className="bg-saffron text-white border-none hover:bg-sindoor-red"
              >
                <Download className="mr-2 h-4 w-4" /> Resume
              </Button>
            </form>
          </div>
        </header>

        <main className="container px-4 md:px-6">
          <section id="about" className="py-20 md:py-32 flex flex-col items-center justify-center min-h-screen">
            <div className="text-center space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-kesar-gold mb-4">
                <AnimatedText text="Debadarshan Maharana" />
              </h1>
              <p className="mx-auto max-w-[700px] text-lg sm:text-xl md:text-2xl text-[#8B735B]">
                B.Tech CSE Student | Aspiring Full Stack Developer
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link href="https://github.com/debadarshan9" target="_blank">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-peacock text-white border-none hover:bg-indigo-velvet"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/debadarshan-maharana-40b2b2255/" target="_blank">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-peacock text-white border-none hover:bg-indigo-velvet"
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </Button>
                </Link>
                <Link href="mailto:debadarshanmaharana@protonmail.com">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-peacock text-white border-none hover:bg-indigo-velvet"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Email
                  </Button>
                </Link>
              </div>
            </div>
            <ScrollButton
              targetId="projects"
              className="mt-16 bg-kesar-gold text-black hover:bg-sindoor-red hover:text-white rounded-full p-2 transition-colors"
            >
              <ChevronDown className="h-8 w-8" />
            </ScrollButton>
          </section>

          <section id="projects" className="py-20 md:py-32">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-12 text-center text-kesar-gold">
              <AnimatedText text="Projects" />
            </h2>
            <div className="grid gap-10 md:grid-cols-2">
              <ProjectCard
                title="Doctor Appointment Booking System"
                description="A web application built using the MERN stack, enabling users to schedule and manage medical appointments efficiently."
                image="/doctor-appointment.jpg"
                link="https://github.com/debadarshan9/doctor-appointment-system"
                tags={["React", "Node.js", "MongoDB", "Express"]}
              />
              <ProjectCard
                title="Job Portal"
                description="A web-based application designed to connect job seekers with potential employers through an accessible, easy-to-use platform."
                image="/job-portal.jpg"
                link="https://github.com/debadarshan9/job-portal"
                tags={["React", "Node.js", "MongoDB", "Express"]}
              />
            </div>
            <ScrollButton
              targetId="skills"
              className="mt-16 mx-auto block bg-kesar-gold text-black hover:bg-sindoor-red hover:text-white rounded-full p-2 transition-colors"
            >
              <ChevronDown className="h-8 w-8" />
            </ScrollButton>
          </section>

          <section id="skills" className="py-20 md:py-32">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-12 text-center text-kesar-gold">
              <AnimatedText text="Tech Stack" />
            </h2>
            <TechStack />
          </section>

          <section id="contact" className="py-20 md:py-32">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-12 text-center text-kesar-gold">
                <AnimatedText text="Get in Touch" />
              </h2>
              <div className="flex flex-col items-center space-y-6">
                <p className="text-center text-base sm:text-lg text-[#8B735B]">
                  I'm always open to new opportunities and collaborations. Feel free to reach out!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="mailto:debadarshanmaharana@protonmail.com">
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-saffron text-white border-none hover:bg-sindoor-red"
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Email Me
                    </Button>
                  </Link>
                  <Link href="https://www.linkedin.com/in/debadarshan-maharana-40b2b2255/" target="_blank">
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-peacock text-white border-none hover:bg-indigo-velvet"
                    >
                      <Linkedin className="mr-2 h-5 w-5" />
                      LinkedIn
                    </Button>
                  </Link>
                  <Link href="https://github.com/debadarshan9" target="_blank">
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-copper text-white border-none hover:bg-indigo-velvet"
                    >
                      <Github className="mr-2 h-5 w-5" />
                      GitHub
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-[#B87333]/40 bg-shadowed-stone/80 backdrop-blur supports-[backdrop-filter]:bg-shadowed-stone/60">
          <div className="container flex flex-col sm:flex-row justify-between items-center py-6 px-4 md:px-6">
            <p className="text-xs text-[#8B735B] mb-4 sm:mb-0">© 2024 Debadarshan Maharana. All rights reserved.</p>
            <nav className="flex gap-4">
              <Link className="text-xs text-[#8B735B] hover:underline underline-offset-4" href="#">
                Terms of Service
              </Link>
              <Link className="text-xs text-[#8B735B] hover:underline underline-offset-4" href="#">
                Privacy
              </Link>
            </nav>
          </div>
        </footer>
      </div>
      <ScrollToTopButton />
    </div>
  )
}

