import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function WhoisInfo({ info }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>WHOIS Information</CardTitle>
      </CardHeader>
      <CardContent>
        <pre className="whitespace-pre-wrap text-sm">{info}</pre>
      </CardContent>
    </Card>
  )
}

