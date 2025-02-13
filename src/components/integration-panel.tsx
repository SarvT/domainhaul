"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

interface IntegrationPanelProps {
  domain: string
}

export default function IntegrationPanel({ domain }: IntegrationPanelProps) {
  const [reputationScore, setReputationScore] = useState<number | null>(null)
  const [securityScanResult, setSecurityScanResult] = useState<string | null>(null)
  const { toast } = useToast()

  const checkReputation = () => {
    setTimeout(() => {
      const score = Math.floor(Math.random() * 100)
      setReputationScore(score)
    }, 1000)
  }

  const performSecurityScan = () => {
    setTimeout(() => {
      const result = Math.random() > 0.5 ? "No issues found" : "Potential vulnerabilities detected"
      setSecurityScanResult(result)
    }, 1500)
  }

  const saveResults = () => {
    const results = {
      domain,
      reputationScore,
      securityScanResult,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem(`scan_${domain}`, JSON.stringify(results))
    toast({
      title: "Results Saved",
      description: "Scan results have been saved successfully.",
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Integrations</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Button onClick={checkReputation}>Check Domain Reputation</Button>
          {reputationScore !== null && <p className="mt-2">Reputation Score: {reputationScore}/100</p>}
        </div>
        <div>
          <Button onClick={performSecurityScan}>Perform Security Scan</Button>
          {securityScanResult && <p className="mt-2">Scan Result: {securityScanResult}</p>}
        </div>
        <div>
          <Button onClick={saveResults}>Save Results</Button>
        </div>
      </CardContent>
    </Card>
  )
}
