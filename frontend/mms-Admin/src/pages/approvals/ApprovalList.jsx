import { Box } from "@mui/material";
import { Fragment } from "react";
import UserRequest from "./UserRequest";
import { useState } from "react";

export default function ApprovalList() {

    const [expanded, setExpanded] = useState(0)
    return (

        <Fragment>
            {
                (new Array(20)).fill(0).map((v, index) => (
                    <Box key={index} onClick={() => setExpanded(index)}>
                        <UserRequest
                            expanded={index === expanded}
                        />
                    </Box>))
            }
        </Fragment>

    )
}
