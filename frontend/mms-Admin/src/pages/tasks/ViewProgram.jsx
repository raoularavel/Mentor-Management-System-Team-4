import { FilterList, Search } from '@mui/icons-material'
import { Box, Button, Grid, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { Outlet, useNavigate } from 'react-router'
import ProgramItem from './ProgramItem'

export default function ViewProgram() {
    const navigate = useNavigate()
    return (
        <Grid container columns={3} mt={2} spacing={2}>
            <Grid item xs={1}>
                <Stack spacing={1} sx={{ maxHeight: "800px", overflowY: "scroll" }}>
                    <Stack direction={"row"} justifyContent={"space-between"} >
                        <Typography
                            color={"common.black"}
                            fontWeight={"bold"}
                            fontSize={24}
                        >Tasks</Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        <Search />
                        <FilterList />
                    </Stack>
                    {
                        (new Array(100)).fill(0).map((v, index) => (
                            <Box onClick={() => navigate(`/tasks/${index}/view`)} key={index} >
                                <ProgramItem />
                            </Box>))
                    }
                </Stack>
            </Grid>
            <Grid item xs={2}>
                <Stack direction="row" justifyContent="flex-end">
                    <Button sx={{ float: "right", m: 2, px: 4 }} onClick={() => navigate(`/tasks/create`)} >Create New Task</Button>
                </Stack>
                <Outlet />
            </Grid>
        </Grid >
    )
}
