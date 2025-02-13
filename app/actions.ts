"use server"

import { readFile } from "fs/promises"
import path from "path"

export async function submitContactForm(formData: FormData) {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  // Here you would typically send an email or save to a database
  console.log("Form submission:", { name, email, message })

  return {
    message: "Thanks for your message! I'll get back to you soon.",
  }
}

export async function downloadResume() {
  try {
    const filePath = path.join(process.cwd(), "public", "Debadarshan_Maharana_Resume.pdf")
    const fileBuffer = await readFile(filePath)
    return new Response(fileBuffer, {
      headers: {
        "Content-Disposition": "attachment; filename=Debadarshan_Maharana_Resume.pdf",
        "Content-Type": "application/pdf",
      },
    })
  } catch (error) {
    console.error("Error downloading resume:", error)
    return new Response("Error downloading resume", { status: 500 })
  }
}

