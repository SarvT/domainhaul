import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Define the type for a single DNS record entry
interface DnsRecordEntry {
  name: string
  value: string
  ttl: number
}

// Define the type for records, which is an object with string keys and array values
interface DnsRecordsProps {
  records: Record<string, DnsRecordEntry[]>
}

export default function DnsRecords({ records }: DnsRecordsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>DNS Records</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Value</TableHead>
              <TableHead>TTL</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Object.entries(records).map(([type, entries]) =>
              entries.map((entry, index) => (
                <TableRow key={`${type}-${index}`}>
                  <TableCell>{type}</TableCell>
                  <TableCell>{entry.name}</TableCell>
                  <TableCell>{entry.value}</TableCell>
                  <TableCell>{entry.ttl}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
