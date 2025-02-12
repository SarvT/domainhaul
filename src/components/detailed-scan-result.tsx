import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function DetailedScanResult({ data }) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>DNS Records</CardTitle>
        </CardHeader>
        <CardContent>
          {Object.entries(data.dns_records).map(([recordType, records]) => (
            <div key={recordType} className="mb-4">
              <h3 className="text-lg font-semibold mb-2">{recordType} Records</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {records.map((record, index) => (
                    <TableRow key={index}>
                      <TableCell>{record}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>HTTP Headers</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Header</TableHead>
                <TableHead>Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Object.entries(data.http_headers).map(([header, value]) => (
                <TableRow key={header}>
                  <TableCell>{header}</TableCell>
                  <TableCell>{value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>SSL Information</CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="grid grid-cols-2 gap-4">
            <div>
              <dt className="font-semibold">Issuer</dt>
              <dd>{data.ssl_info.issuer.map((item) => item[0][1]).join(", ")}</dd>
            </div>
            <div>
              <dt className="font-semibold">Not Before</dt>
              <dd>{data.ssl_info.notBefore}</dd>
            </div>
            <div>
              <dt className="font-semibold">Not After</dt>
              <dd>{data.ssl_info.notAfter}</dd>
            </div>
            <div>
              <dt className="font-semibold">Serial Number</dt>
              <dd>{data.ssl_info.serialNumber}</dd>
            </div>
          </dl>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>WHOIS Information</CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="grid grid-cols-2 gap-4">
            {Object.entries(data?.whois_info || {}).map(([key, value]) => (
              <div key={key}>
                <dt className="font-semibold">
                  {key.replace(/_/g, " ").charAt(0).toUpperCase() + key.replace(/_/g, " ").slice(1)}
                </dt>
                <dd>{Array.isArray(value) ? value.join(", ") : value || "N/A"}</dd>
              </div>
            ))}
          </dl>
        </CardContent>
      </Card>
    </div>
  )
}

