import CreateProgram from "./CreateProgram";
import ProgramItemView from "./ProgramItemView";
import ViewProgram from "./ViewProgram";

export default {
    path: "programs",
    children: [
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
            path: "create",
            element: <CreateProgram />
        }
    ]
}