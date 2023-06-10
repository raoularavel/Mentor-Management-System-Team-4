import { AddCircleOutline, Check } from '@mui/icons-material'
import { Avatar, Chip, ListItem, ListItemAvatar, ListItemText, Stack, Typography, alpha } from '@mui/material'
import PropTypes from "prop-types"
import { MentorImage } from 'src/components/icons'
import { usePalette } from 'src/theme/theme'

function UserItem({ index }) {

    const palette = usePalette()

    return (
        <ListItem sx={{ border: 1, borderColor: "#E6E6E6", borderRadius: 2 }}>
            <ListItemAvatar sx={{ mr: 1 }}>
                <Avatar src={MentorImage} sx={{ width: 45, height: 45 }} />
            </ListItemAvatar>
            <ListItemText
                primary="Peculiah C. Umeh"
                primaryTypographyProps={{ sx: { fontWeight: "bold", color: "common.black", fontSize: 16 } }}
                secondary={
                    <Stack direction={"column"}>
                        <Typography fontSize={12}>Program Assistant, Andela, He/Him</Typography>
                        <Stack spacing={2} direction={"row"}>
                            <Chip label={"PROGRAM-ASST"} sx={{ fontSize: 12, bgcolor: alpha(palette.primary.main, 0.1) }} size='small' />
                            <Chip label={"MENTOR-GADS"} sx={{ fontSize: 12, bgcolor: alpha(palette.primary.main, 0.1) }} size='small' />
                        </Stack>
                    </Stack>
                }
            />
            {index % 2 == 0 ? <AddCircleOutline /> : <Check />}
        </ListItem>
    )
}

UserItem.propTypes = {
    index: PropTypes.number
}

export default UserItem