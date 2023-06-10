import { CalendarMonth, ExitToAppOutlined } from '@mui/icons-material'
import { Box, Chip, ListItem, ListItemIcon, ListItemText, Stack } from '@mui/material'

function ProgramItem() {
    return (
        <Stack sx={{ border: 1, borderColor: "#E6E6E6", borderRadius: 2 }}>
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
        </Stack>
    )
}

export default ProgramItem