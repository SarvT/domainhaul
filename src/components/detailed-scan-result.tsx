import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import DnsRecords from "./dns-records"

// Define the type for a single DNS record entry
interface DnsRecordEntry {
  name: string;
  value: string;
  ttl: number;
}

// Define the type for records, which is an object with string keys and array values
// interface DnsRecordsProps {
//   records: Record<string, DnsRecordEntry[]>
// }

interface DetailedScanData {
  dns_records: Record<string, DnsRecordEntry[]>;
  http_headers: Record<string, string>;
  ssl_info: SslInfo;
  whois_info?: Record<string, string | string[]>;
}

interface DetailedScanResultProps {
  data: DetailedScanData;
}

interface SslInfo {
  issuer: string;
  validFrom: string;
  validTo: string;
  subject: string;
}

export default function DetailedScanResult({ data }: DetailedScanResultProps) {
  return (
    <div className="space-y-6">
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
              {Object.entries(data.dns_records).map(([type, entries]) =>
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
      {/* <DnsRecords data={data.dns_records}/> */}

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
              <dt className="font-semibold">Issuer:</dt>
              <dd>{data.ssl_info.issuer}</dd>
            </div>
            <div>
              <dt className="font-semibold">Valid From:</dt>
              <dd>{data.ssl_info.validFrom}</dd>
            </div>
            <div>
              <dt className="font-semibold">Valid To:</dt>
              <dd>{data.ssl_info.validTo}</dd>
            </div>
            <div>
              <dt className="font-semibold">Subject:</dt>
              <dd>{data.ssl_info.subject}</dd>
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
                  {key.replace(/_/g, " ").charAt(0).toUpperCase() +
                    key.replace(/_/g, " ").slice(1)}
                </dt>
                <dd>
                  {Array.isArray(value) ? value.join(", ") : value || "N/A"}
                </dd>
              </div>
            ))}
          </dl>
        </CardContent>
      </Card>
    </div>
  );
}
