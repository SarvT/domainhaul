import Link from "next/link"
import { ModeToggle } from "./mode-toggle"

export default function Navbar() {
  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              DomainHaul
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/about" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
            <Link href="/scan" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              Scan
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

