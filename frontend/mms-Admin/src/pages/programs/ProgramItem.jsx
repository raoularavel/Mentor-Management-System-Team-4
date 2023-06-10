import { CalendarMonth, QueryBuilderOutlined } from '@mui/icons-material'
import { Avatar, Button, Chip, ListItem, ListItemAvatar, ListItemText, Stack } from '@mui/material'
import { GoogleImage } from 'src/components/icons'

function ProgramItem() {
    return (
        <Stack sx={{ border: 1, borderColor: "#E6E6E6", borderRadius: 2 }}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar src={GoogleImage} sx={{ width: 30, height: 30 }} />
                </ListItemAvatar>
                <ListItemText
                    primary="Google Africa Scholarship..."
                    primaryTypographyProps={{ sx: { fontWeight: "bold", fontSize: 16, color: "common.black" } }}
                    secondary={
                        <Stack direction="row" spacing={2}>
                            <Chip icon={<CalendarMonth color='primary' />} label="Dec 12, 2022" />
                            <Chip icon={<QueryBuilderOutlined color='primary' />} label="8:00 pm" />
                        </Stack>
                    }
                />
                <Button>View</Button>
            </ListItem>
        </Stack>
    )
}

export default ProgramItem