import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-4">Welcome to DomainScan</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Comprehensive domain analysis tool for developers, security researchers, and curious minds.
      </p>
      <Link href="/scan">
        <Button size="lg">Start Scanning</Button>
      </Link>
    </div>
  )
}

