"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { submitContactForm } from "../actions"
import { motion } from "framer-motion"

export default function ContactForm() {
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState("")

  async function handleSubmit(formData: FormData) {
    setPending(true)
    try {
      const response = await submitContactForm(formData)
      setMessage(response.message)
    } catch (error) {
      setMessage("Something went wrong. Please try again.")
    } finally {
      setPending(false)
    }
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="p-6 bg-shadowed-stone text-foreground border-2 border-[#B87333]/20">
        <form action={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
              Name
            </label>
            <Input
              id="name"
              name="name"
              required
              className="w-full bg-dark-canvas text-foreground border-[#B87333]/40"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="w-full bg-dark-canvas text-foreground border-[#B87333]/40"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              required
              className="w-full min-h-[150px] bg-dark-canvas text-foreground border-[#B87333]/40"
            />
          </div>
          <Button type="submit" className="w-full bg-saffron text-white hover:bg-sindoor-red" disabled={pending}>
            {pending ? "Sending..." : "Send Message"}
          </Button>
          {message && <p className="text-sm text-center mt-4 text-[#8B735B]">{message}</p>}
        </form>
      </Card>
    </motion.div>
  )
}

