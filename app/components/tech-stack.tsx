import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

const technologies = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "ReactJS", "Bootstrap", "Tailwind CSS"],
    icon: "🎨",
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "MySQL"],
    icon: "🖥️",
  },
  {
    category: "Tools",
    skills: ["Git", "MS Word", "MS PowerPoint"],
    icon: "🛠️",
  },
  {
    category: "Soft Skills",
    skills: ["Time Management", "Adaptability", "Team Player"],
    icon: "🤝",
  },
]

export default function TechStack() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="p-4 sm:p-6 h-full bg-shadowed-stone text-foreground shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#B87333]/20 hover:border-[#B87333]">
            <div className="flex items-center mb-4">
              <span className="text-2xl sm:text-3xl mr-2">{tech.icon}</span>
              <h3 className="text-xl sm:text-2xl font-bold text-kesar-gold">{tech.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {tech.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-full bg-peacock px-2 py-1 text-xs sm:text-sm font-medium text-white shadow-md hover:bg-indigo transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

