import CreateTask from "./CreateTask";
import ProgramItemView from "./ProgramItemView";
import ViewProgram from "./ViewProgram";

export default {
    path: "tasks",
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
        },
        {
            path:"create",
            element: <CreateTask />
        }
    ]
}