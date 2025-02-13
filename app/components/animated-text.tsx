"use client"

import { useEffect, useState } from "react"

interface AnimatedTextProps {
  text: string
}

export default function AnimatedText({ text }: AnimatedTextProps) {
  const [isMounted, setIsMounted] = useState(false)
  const words = text.split(" ")

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className="flex flex-wrap justify-center">{text}</div>
  }

  return (
    <div className="flex flex-wrap justify-center">
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block mx-1 opacity-0 animate-fadeIn"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {word}
        </span>
      ))}
    </div>
  )
}

