import DomainScanner from "@/components/domain-scanner"

export default function ScanPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Domain Scanner</h1>
      <DomainScanner />
    </div>
  )
}

