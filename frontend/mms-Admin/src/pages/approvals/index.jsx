import MentorManagerRequests from "./MentorMAnagerRequests";
import MentorRequests from "./MentorRequests";
import ProgramRequests from "./ProgramRequests";
import ViewApproval from "./ViewApproval";

export default {
    path: "approval-requests",
    element: <ViewApproval />,
    children: [
        {
            index: true,
            element: <MentorManagerRequests />
        },
        {
            path: "mentors",
            element: <MentorRequests />
        },
        {
            path: "mentor-manager",
            element: <MentorManagerRequests />
        },
        {
            path: "programs",
            element: <ProgramRequests />
        }
    ]
}