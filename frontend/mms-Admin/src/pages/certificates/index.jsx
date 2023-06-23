import CertificateList from "./CertificateList";
import GenerateCertificate from "./GenerateCertificate";
import HomeCertificate from "./HomeCertificate";

export default {
    path: "certificates",
    children: [
        {
            element: <HomeCertificate />,
            children: [
                {
                    index: true,
                    element: <CertificateList title="Approved Certificates" status="approved" />
                },
                {
                    path: "approved",
                    element: <CertificateList title="Approved Certificates" status="approved" />
                },
                {
                    path: "pending",
                    element: <CertificateList title="Certificates Pending Approval" status="pending" />
                },
                {
                    path: "me",
                    element: <CertificateList title="My Generated Certificates" status="all" />
                }
            ]
        },
        {
            path: "generate",
            element: <GenerateCertificate />
        }
    ]
}