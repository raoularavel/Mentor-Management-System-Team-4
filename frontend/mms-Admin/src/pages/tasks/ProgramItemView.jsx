import { Article, CalendarMonth, Delete, ExitToAppOutlined } from '@mui/icons-material'
import { Box, Button, Chip, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'

function TaskItemView() {
    return (
        <Stack sx={{ border: 1, borderColor: "#E6E6E6", borderRadius: 2 }}>
            <List>
                <ListItem >
                    <ListItemIcon>
                        <ExitToAppOutlined color="primary" sx={{ width: 50, height: 50 }} />
                    </ListItemIcon>
                    <ListItemText
                        primary="Room liberary article write..."
                        primaryTypographyProps={{ sx: { fontWeight: "bold", fontSize: 20, color: "common.black" } }}
                        secondary={
                            <Stack direction="row" spacing={2} alignItems="center">
                                <Chip icon={<CalendarMonth color='primary' fontSize='small' />} label="Dec 12, 2022" />
                                <Box>3 days from now</Box>
                            </Stack>
                        }
                    />
                </ListItem>
                <ListItem >
                    <ListItemText
                        primary='About:'
                        primaryTypographyProps={{ sx: { fontWeight: "bold", fontSize: 20, color: "common.black" } }}
                        secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque"
                    />
                </ListItem>
                <ListItem>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Article color='primary' />
                        <Typography
                            fontWeight="bold"
                            color="common.black"
                            fontSize={32}
                        >40</Typography>
                        <Typography
                            fontWeight="bold"
                            color="common.black"
                            fontSize={20}
                        >Mentor Managers assigned to this task</Typography>
                    </Stack>
                    <Box sx={{ flexGrow: 1 }} />
                    <Button> View </Button>
                </ListItem>
                <ListItem>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Article color='primary' />
                        <Typography
                            fontWeight="bold"
                            color="common.black"
                            fontSize={32}
                        >80</Typography>
                        <Typography
                            fontWeight="bold"
                            color="common.black"
                            fontSize={20}
                        >Mentors assigned to this task</Typography>
                    </Stack>
                    <Box sx={{ flexGrow: 1 }} />
                    <Button> View </Button>
                </ListItem>
                <ListItem>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Article color='primary' />
                        <Typography
                            fontWeight="bold"
                            color="common.black"
                            fontSize={32}
                        >33</Typography>
                        <Typography
                            fontWeight="bold"
                            color="common.black"
                            fontSize={20}
                        >Task reports</Typography>
                        <Chip color='error' label="3" size='small' />
                    </Stack>
                    <Box sx={{ flexGrow: 1 }} />
                    <Button> View </Button>
                </ListItem>
                <Stack direction="row" justifyContent="flex-end">
                    <Button
                        sx={{ float: "right", m: 2, px: 4 }}
                        color="error"
                        variant='outlined'
                        size='large'> <Delete /> Delete</Button>
                    <Button
                        sx={{ float: "right", m: 2, px: 4 }}
                        size='large'>Edit task</Button>
                </Stack>
            </List>
        </Stack>
    )
}

export default TaskItemView