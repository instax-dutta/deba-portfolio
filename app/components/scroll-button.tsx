"use client"

import { Button } from "@/components/ui/button"
import type { ReactNode } from "react"

interface ScrollButtonProps {
  targetId: string
  children: ReactNode
  className?: string
}

export default function ScrollButton({ targetId, children, className }: ScrollButtonProps) {
  const handleClick = () => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Button variant="ghost" className={className} onClick={handleClick}>
      {children}
    </Button>
  )
}

