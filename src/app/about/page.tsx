export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About DomainHaul</h1>
      <p className="mb-4">
      DomainHaul is a powerful tool designed to provide comprehensive domain analysis. Our platform offers insights
        into DNS records, WHOIS information, SSL certificates, and more, helping users understand the technical aspects
        of any domain.
      </p>
      <p className="mb-4">
        Whether you're a developer, security researcher, or simply curious about how websites work, DomainHaul provides
        the information you need in an easy-to-understand format.
      </p>
      <h2 className="text-2xl font-bold mb-2">Our Features</h2>
      <ul className="list-disc list-inside mb-4">
        <li>DNS Record Analysis</li>
        <li>WHOIS Information Lookup</li>
        <li>SSL Certificate Details</li>
        <li>HTTP Header Inspection</li>
        <li>Domain Reputation Check</li>
      </ul>
      <p>Start exploring domains today and uncover the wealth of information behind every URL!</p>
    </div>
  )
}

