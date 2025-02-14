"use client"
import { useState } from "react"

// Type definitions
interface WhoisInfo {
  registrar: string
  creation_date: string
  expiration_date: string
  name_servers: string[]
}


// interface SSLInfo {

//   // valid: boolean | null
//   // [key: string]: any // For additional SSL properties
// }
type SSLInfo = {
  issuer: string;
  validFrom: string;
  validTo: string;
  subject: string;
};


interface DNSRecord {
  name: string
  value: string
  ttl: number
}

interface DNSRecords {
  A: string[]
  MX: string[]
  NS: string[]
  TXT: string[]
}


interface DomainInfo {
  registrar: string
  creationDate: string
  expirationDate: string
  nameServers: string[]
}

interface TransformedDNSRecords {
  // A: DNSRecord[]
  // MX: DNSRecord[]
  // NS: DNSRecord[]
  // TXT: DNSRecord[]
  [key: string]: DNSRecord[]
}

interface ScanData {
  whois_info: WhoisInfo
  ssl_info: SSLInfo
  dns_records: DNSRecords
  http_headers: Record<string, string>
}

interface TransformedData {
  domain: string
  domainInfo: DomainInfo
  dnsRecords: TransformedDNSRecords
  whoisInfo: WhoisInfo
  sslInfo: SSLInfo
  dns_records: DNSRecords
  http_headers: Record<string, string>
  ssl_info: SSLInfo
}




// all data
interface DnsRecordEntry {
  name: string
  value: string
  ttl: number
}

interface DetailedScanData {
  dns_records: Record<string, DnsRecordEntry[]>
  http_headers: Record<string, string>;
  ssl_info: SslInfo
  whois_info?: Record<string, string | string[]>;
}

interface DetailedScanResultProps {
  data: DetailedScanData;
}

interface SslInfo{
    issuer: string
    validFrom: string
    validTo: string
    subject: string
}

export function useDomainInfo() {
  
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
  const [data, setData] = useState<TransformedData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const scanDomain = async (domain: string) => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch(`${API_BASE_URL}/scan?domain=${encodeURIComponent(domain)}`)
      if (!response.ok) {
        throw new Error('Failed to fetch domain information')
      }

      const scanData: ScanData = await response.json()

      const transformedData: TransformedData = {
        domain,
        domainInfo: {
          registrar: scanData.whois_info.registrar,
          creationDate: scanData.whois_info.creation_date,
          expirationDate: scanData.whois_info.expiration_date,
          nameServers: scanData.whois_info.name_servers,
        },
        dnsRecords: {
          A: scanData.dns_records.A.map((value) => ({ 
            name: domain, 
            value, 
            ttl: 3600 
          })),
          MX: scanData.dns_records.MX.map((value) => ({ 
            name: domain, 
            value, 
            ttl: 3600 
          })),
          NS: scanData.dns_records.NS.map((value) => ({ 
            name: domain, 
            value, 
            ttl: 86400 
          })),
          TXT: scanData.dns_records.TXT.map((value) => ({ 
            name: domain, 
            value, 
            ttl: 3600 
          })),
        },
        whoisInfo: scanData.whois_info,
        sslInfo: scanData.ssl_info,
        dns_records: scanData.dns_records,
        http_headers: scanData.http_headers,
        ssl_info: scanData.ssl_info,
      }


      // all data
      

      setData(transformedData)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch domain information. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return { data, isLoading, error, scanDomain }
}