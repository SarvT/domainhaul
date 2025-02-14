import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface WhoisInfo {
  registrar: string
  creation_date: string
  expiration_date: string
  name_servers: string[]
}

interface WhoisInfoProps {
  info?: WhoisInfo
}

export default function WhoisInfo({ info }: WhoisInfoProps) {
  if (!info) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>WHOIS Information</CardTitle>
        </CardHeader>
        <CardContent>No data available</CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>WHOIS Information</CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-2 gap-4">
          <div>
            <dt className="font-semibold">Registrar</dt>
            <dd className="text-sm">{info.registrar || "N/A"}</dd>
          </div>
          <div>
            <dt className="font-semibold">Creation Date</dt>
            <dd className="text-sm">{info.creation_date || "N/A"}</dd>
          </div>
          <div>
            <dt className="font-semibold">Expiration Date</dt>
            <dd className="text-sm">{info.expiration_date || "N/A"}</dd>
          </div>
          <div>
            <dt className="font-semibold">Name Servers</dt>
            <dd className="text-sm">
              <ul className="list-disc list-inside">
                {info.name_servers.length > 0
                  ? info.name_servers.map((server, index) => (
                      <li key={index}>{server}</li>
                    ))
                  : "N/A"}
              </ul>
            </dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  )
}
