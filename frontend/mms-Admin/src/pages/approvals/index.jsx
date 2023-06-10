import Approval from "./Approval";
import ApprovalList from "./ApprovalList";
import ViewApproval from "./ViewApproval";

export default {
    path: "approval-requests",
    element: <ViewApproval />,
    children: [
        {
            index: true,
            element: <ApprovalList />
        },
        {
            path: ":id/view",
            element: <Approval />
        }
    ]
}