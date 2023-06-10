import ProgramItemView from "./ProgramItemView";
import ProgramList from "./ProgramList";
import ViewProgram from "./ViewProgram";

export default {
    path: "programs",
    children:[
        {
            index: true,
            element: <ViewProgram />
        },
        {
            path: ":id/view",
            element: <ViewProgram />,
            children: [
                {
                    index: true,
                    element: <ProgramItemView />
                }
            ]
        }
    ]
}