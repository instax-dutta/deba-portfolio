import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  tags: string[]
}

export default function ProjectCard({ title, description, image, link, tags }: ProjectCardProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="overflow-hidden h-full flex flex-col bg-shadowed-stone text-foreground shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#B87333]/20 hover:border-[#B87333]">
        <div className="relative aspect-video">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform hover:scale-105 duration-300"
          />
        </div>
        <CardContent className="p-4 sm:p-6 flex-grow">
          <h3 className="font-bold text-xl sm:text-2xl mb-2 sm:mb-3 text-kesar-gold">{title}</h3>
          <p className="text-foreground text-sm sm:text-base mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-peacock px-2 py-1 text-xs sm:text-sm font-medium text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-4 sm:p-6 pt-0">
          <Link
            href={link}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm font-medium text-saffron hover:text-sindoor-red transition-colors"
          >
            <Github className="h-5 w-5" />
            View on GitHub
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

