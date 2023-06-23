import { Box, Grid, Stack, Typography } from '@mui/material'
import { Outlet, useNavigate } from 'react-router'
import { MentorManager, MentorRequest, ProgramRequest } from 'src/components/icons'
import CategoryItem from './CategoryItem'
import UserCardView from './UserCardView'

export default function ViewApproval() {
    const navigate = useNavigate()
    return (
        <Grid container columns={3} spacing={2}>
            <Grid item xs={1}>
                <Typography
                    sx={{ fontSize: 20, fontWeight: "bold", color: "common.black", pb: 2 }}
                >Category</Typography>
                <Stack spacing={1}>
                    <Box onClick={() => navigate("/approval-requests/mentor-manager")} sx={{cursor: "pointer"}}>
                        <CategoryItem
                            image={MentorManager}
                            title='Mentor Manager Requests'
                            value={287}
                        />
                    </Box>
                    <Box onClick={() => navigate("/approval-requests/mentors")} sx={{cursor: "pointer"}}>
                        <CategoryItem
                            image={MentorRequest}
                            title='Mentor Requests'
                            value={160}
                        />
                    </Box>
                    <Box onClick={() => navigate("/approval-requests/programs")} sx={{cursor: "pointer"}}>
                        <CategoryItem
                            image={ProgramRequest}
                            title='Program Requests'
                            value={287}
                        />
                    </Box>
                    <Typography
                        sx={{ fontSize: 20, fontWeight: "bold", color: "common.black" }}
                    >Recent</Typography>
                    <UserCardView
                        name='Kabiru Ibrahim'
                        role='Program Assistant, And....'
                    />
                    <UserCardView
                        name='Kabiru Ibrahim'
                        role='Program Assistant, And....'
                    />
                    <UserCardView
                        name='Kabiru Ibrahim'
                        role='Program Assistant, And....'
                    />
                    <UserCardView
                        name='Kabiru Ibrahim'
                        role='Program Assistant, And....'
                    />
                    <UserCardView
                        name='Kabiru Ibrahim'
                        role='Program Assistant, And....'
                    />
                </Stack>
            </Grid>
            <Grid item xs={2}>
                <Outlet />
            </Grid>
        </Grid>
    )
}
