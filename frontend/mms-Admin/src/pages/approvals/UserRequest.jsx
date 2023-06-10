import { ExpandCircleDownOutlined } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Button, Chip, ListItem, ListItemAvatar, ListItemText, Stack, Typography, alpha } from '@mui/material'
import PropTypes from "prop-types"
import { MentorImage } from 'src/components/icons'
import { usePalette } from 'src/theme/theme'
import About from '../managers/About'

function UserRequest({ expanded }) {
    const palette = usePalette()
    return (
        <Accordion expanded={expanded} sx={{ border: 1, borderColor: "#E6E6E6", borderRadius: 2 }}>
            <AccordionSummary
                expandIcon={<ExpandCircleDownOutlined />}

            >
                <ListItem>
                    <ListItemAvatar sx={{ mr: 2 }}>
                        <Avatar src={MentorImage} sx={{ width: 50, height: 50 }} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Peculiah C. Umeh"
                        primaryTypographyProps={{ sx: { fontWeight: "bold", color: "common.black", fontSize: 20 } }}
                        secondary="Program Assistant, Andela, She/Her"
                    />
                    <Stack spacing={2} direction={"row"} justifyContent="space-around">
                        <Chip label={"PROGRAM-ASST"} sx={{ bgcolor: alpha(palette.primary.main, 0.1) }} size='small' />
                        <Chip label={"MENTOR-GADS"} sx={{ bgcolor: alpha(palette.primary.main, 0.1) }} size='small' />
                    </Stack>
                </ListItem>
            </AccordionSummary>
            <AccordionDetails>
                <About />
                <Stack direction="row" spacing={2} py={2}>
                    <Typography fontWeight="bold">Send Message</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Button variant='outlined'>Decline</Button>
                    <Button>Approve</Button>
                </Stack>
            </AccordionDetails>
        </Accordion>
    )
}



UserRequest.propTypes = {
    expanded: PropTypes.bool
}

export default UserRequest