// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// export default function WhoisInfo({ info }) {
//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>WHOIS Information</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <pre className="whitespace-pre-wrap text-sm">{JSON.stringify(info, null, 2)}</pre>
//       </CardContent>
//     </Card>
//   )
// }

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function WhoisInfo({ info }) {
  if (!info) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>WHOIS Information</CardTitle>
        </CardHeader>
        <CardContent>No data available</CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>WHOIS Information</CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-2 gap-4">
          {Object.entries(info).map(([key, value]) => (
            <div key={key}>
              <dt className="font-semibold">
                {key.replace(/_/g, " ").charAt(0).toUpperCase() + key.replace(/_/g, " ").slice(1)}
              </dt>
              <dd className="text-sm">
                {Array.isArray(value) ? (
                  <ul className="list-disc list-inside">
                    {value.map((item, index) => (
                      <li key={index}>{item || "N/A"}</li>
                    ))}
                  </ul>
                ) : value !== null && value !== undefined ? (
                  value
                ) : (
                  "N/A"
                )}
              </dd>
            </div>
          ))}
        </dl>
      </CardContent>
    </Card>
  );
}
