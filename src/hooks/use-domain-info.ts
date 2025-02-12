"use client"
import { useState } from "react"

export function useDomainInfo() {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const scanDomain = async (domain:string) => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch(`${API_BASE_URL}/scan?domain=${encodeURIComponent(domain)}`)
      if (!response.ok) {
        throw new Error('Failed to fetch domain information')
      }
      console.log(response);
      const scanData = await response.json()
      console.log(scanData);
      
      
      // Transform the data to match the component expectations
      const transformedData = {
        domain,
        domainInfo: {
          registrar: scanData.whois_info.registrar,
          creationDate: scanData.whois_info.creation_date,
          expirationDate: scanData.whois_info.expiration_date,
          nameServers: scanData.whois_info.name_servers,
        },
        dnsRecords: {
          A: scanData.dns_records.A.map(value => ({ name: domain, value, ttl: 3600 })),
          MX: scanData.dns_records.MX.map(value => ({ name: domain, value, ttl: 3600 })),
          NS: scanData.dns_records.NS.map(value => ({ name: domain, value, ttl: 86400 })),
          TXT: scanData.dns_records.TXT.map(value => ({ name: domain, value, ttl: 3600 })),
        },
        whoisInfo: scanData.whois_info,
        sslInfo: scanData.ssl_info,
        dns_records: scanData.dns_records,
        http_headers: scanData.http_headers,
        ssl_info: scanData.ssl_info,
      }
      
      setData(transformedData)
    } catch (err) {
      setError(err.message || "Failed to fetch domain information. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return { data, isLoading, error, scanDomain }
}