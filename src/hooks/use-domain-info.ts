"use client"

import { useState } from "react"

export function useDomainInfo() {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const scanDomain = async (domain) => {
    setIsLoading(true)
    setError(null)

    try {
      // Simulating API call with mock data
      await new Promise((resolve) => setTimeout(resolve, 2000))

      const mockData = {
        domain,
        domainInfo: {
          registrar: "Example Registrar, Inc.",
          creationDate: "2020-01-01",
          expirationDate: "2025-01-01",
          nameServers: ["ns1.example.com", "ns2.example.com"],
        },
        dnsRecords: {
          A: [{ name: domain, value: "192.0.2.1", ttl: 3600 }],
          AAAA: [{ name: domain, value: "2001:db8::1", ttl: 3600 }],
          MX: [{ name: domain, value: "mail.example.com", ttl: 3600 }],
          TXT: [{ name: domain, value: "v=spf1 include:_spf.example.com ~all", ttl: 3600 }],
          NS: [
            { name: domain, value: "ns1.example.com", ttl: 86400 },
            { name: domain, value: "ns2.example.com", ttl: 86400 },
          ],
        },
        whoisInfo: `Domain Name: ${domain}\nRegistrar: Example Registrar, Inc.\nCreation Date: 2020-01-01\nExpiration Date: 2025-01-01`,
        sslInfo: {
          issuer: "Let's Encrypt Authority X3",
          validFrom: "2023-01-01",
          validTo: "2024-01-01",
          subject: `CN=${domain}`,
        },
        // Add detailed scan data
        dns_records: {
          A: ["192.0.2.1"],
          MX: ["10 mail.example.com"],
          NS: ["ns1.example.com", "ns2.example.com"],
          TXT: ["v=spf1 include:_spf.example.com ~all"],
        },
        http_headers: {
          "Content-Type": "text/html; charset=UTF-8",
          Server: "nginx/1.18.0",
          "X-Frame-Options": "SAMEORIGIN",
        },
        ssl_info: {
          issuer: [["CN", "Let's Encrypt Authority X3"]],
          notBefore: "Jan 1 00:00:00 2023 GMT",
          notAfter: "Dec 31 23:59:59 2023 GMT",
          serialNumber: "1234567890ABCDEF",
        },
        whois_info: {
          domain_name: domain.toUpperCase(),
          registrar: "Example Registrar, Inc.",
          creation_date: "2020-01-01T00:00:00Z",
          expiration_date: "2025-01-01T00:00:00Z",
          name_servers: ["NS1.EXAMPLE.COM", "NS2.EXAMPLE.COM"],
        },
      }

      setData(mockData)
    } catch (err) {
      setError("Failed to fetch domain information. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return { data, isLoading, error, scanDomain }
}

