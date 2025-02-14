import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Domain Haul",
  description: "Comprehensive domain analysis tool",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        // url: '/images/icon-light.png',
        url: '/images/icon.svg',
        href: '/images/icon.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/images/icon.svg',
        href: '/images/icon.svg',
        // href: '/images/icon-dark.png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'