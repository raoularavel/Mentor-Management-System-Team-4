import { ExpandCircleDownOutlined } from '@mui/icons-material'
import { Accordion, AccordionSummary, Avatar, Chip, ListItem, ListItemAvatar, ListItemText, Stack, alpha } from '@mui/material'
import PropTypes from "prop-types"
import { MentorImage } from 'src/components/icons'
import { usePalette } from 'src/theme/theme'

function UserRequest({ expanded }) {
    const palette = usePalette()
    return (
        <Accordion expanded={expanded} sx={{ border: 1, borderColor: "#E6E6E6", borderRadius: 2 }}>
            <AccordionSummary
                expandIcon={<ExpandCircleDownOutlined />}

            >
                <ListItem>
                    <ListItemAvatar sx={{ mr: 2 }}>
                        <Avatar src={MentorImage} sx={{ width: 77, height: 77 }} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Peculiah C. Umeh"
                        primaryTypographyProps={{ sx: { fontWeight: "bold", color: "common.black", fontSize: 24 } }}
                        secondary="Program Assistant, Andela, She/Her"
                    />
                    <Stack spacing={2} direction={"row"}>
                        <Chip label={"PROGRAM-ASST"} sx={{ bgcolor: alpha(palette.primary.main, 0.1) }} size='small' />
                        <Chip label={"MENTOR-GADS"} sx={{ bgcolor: alpha(palette.primary.main, 0.1) }} size='small' />
                    </Stack>
                    <ExpandCircleDownOutlined />
                </ListItem>
            </AccordionSummary>
        </Accordion>
    )
}




UserRequest.propTypes = {
    expanded: PropTypes.bool
}

export default UserRequest