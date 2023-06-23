import { Box, Button, Stack, Typography } from "@mui/material";
import { Fragment } from "react";
import UserRequest from "./UserRequest";
import { useState } from "react";

export default function ProgramRequests() {

    const [expanded, setExpanded] = useState(0)
    return (

        <Fragment>
            <Stack direction="row" justifyContent="space-between" py={2}>
                <Typography
                    sx={{ fontSize: 20, fontWeight: "bold", color: "common.black" }}
                >Program Requests</Typography>
            </Stack>
            <Stack spacing={1} sx={{ maxHeight: "80vh", overflow: "scroll" }}>
                {
                    (new Array(20)).fill(0).map((v, index) => (
                        <Box key={index} onClick={() => setExpanded(index)}>
                            <UserRequest
                                expanded={index === expanded}
                            />
                        </Box>))
                }
            </Stack>
        </Fragment>

    )
}