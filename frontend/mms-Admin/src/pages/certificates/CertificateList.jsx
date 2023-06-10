import { Button, Grid, Stack, Typography } from '@mui/material'
import { MentorManager, MentorRequest, ProgramRequest } from 'src/components/icons'
import CategoryItem from './CategoryItem'
import UserCardView from './UserCardView'
import UserRequest from './UserRequest'

export default function CertificateList() {
    return (
        <Grid container columns={3}>
            <Grid item xs={1}>
                <Typography
                    sx={{ fontSize: 20, fontWeight: "bold", color: "common.black" }}
                >Category</Typography>
                <Stack spacing={1}>
                    <CategoryItem
                        image={MentorManager}
                        title='Mentor Manager Requests'
                        value={287}
                    />
                    <CategoryItem
                        image={MentorRequest}
                        title='Mentor Requests'
                        value={160}
                    />
                    <CategoryItem
                        image={ProgramRequest}
                        title='Program Requests'
                        value={287}
                    />
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
                <Stack direction="row" justifyContent="space-between">
                    <Typography
                        sx={{ fontSize: 20, fontWeight: "bold", color: "common.black" }}
                    >Mentor Manager Requests</Typography>
                    <Button>Add New Mentor Manager</Button>
                </Stack>
                <Stack spacing={1}>
                    <UserRequest />
                    <UserRequest />
                    <UserRequest />
                    <UserRequest />
                    <UserRequest />
                    <UserRequest />
                    <UserRequest />
                    <UserRequest />
                    <UserRequest />
                    <UserRequest />
                    <UserRequest />
                    <UserRequest />
                    <UserRequest />
                    <UserRequest />
                    <UserRequest />
                    <UserRequest />
                    <UserRequest />
                    <UserRequest />
                </Stack>
            </Grid>
        </Grid>
    )
}
