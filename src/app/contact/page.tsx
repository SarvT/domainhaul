import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">
        Have questions or feedback? We'd love to hear from you. Fill out the form below, and we'll get back to you as
        soon as possible.
      </p>
      <form className="space-y-4 max-w-md">
        <div>
          <label htmlFor="name" className="block mb-2">
            Name
          </label>
          <Input id="name" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <Input id="email" type="email" placeholder="your@email.com" />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2">
            Message
          </label>
          <Textarea id="message" placeholder="Your message" rows={4} />
        </div>
        <Button type="submit">Send Message</Button>
      </form>
    </div>
  )
}

