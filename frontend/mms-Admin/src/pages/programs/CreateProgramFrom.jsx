import { BackspaceOutlined } from '@mui/icons-material'
import { Avatar, Box, Button, Chip, ListItem, ListItemAvatar, ListItemText, Stack, TextField, Typography } from '@mui/material'
import PropTypes from "prop-types"
import { ProgramAvatar } from 'src/components/icons'

function CreateProgramForm({ setOpenSearch }) {

    const handleOpen = () => setOpenSearch(true)
    return (
        <Stack spacing={2} width="100%">
            <Typography sx={{ fontWeight: "bold", color: "common.black", fontSize: 20 }}>Create New Program</Typography>
            <ListItem>
                <ListItemAvatar sx={{ mr: 2 }}>
                    <Avatar src={ProgramAvatar} sx={{ width: 90, height: 90 }} />
                </ListItemAvatar>
                <ListItemText
                    primary="Set Program Avatar"
                    primaryTypographyProps={{ sx: { fontWeight: "bold", color: "common.black", fontSize: 20 } }}
                    secondary={<Chip variant='outlined' label="Select file" />}
                />
            </ListItem>
            <Typography sx={{ fontWeight: "bold", color: "common.black" }}>Program Name</Typography>
            <TextField
                placeholder='Enter name'
                fullWidth
                helperText="The name must containt a maximum of 32 characters"
            />
            <Typography sx={{ fontWeight: "bold", color: "common.black" }}>Program Description</Typography>
            <TextField
                placeholder='Enter program description'
                fullWidth
                type='textarea'
                multiline
                rows={5}
            />
            <Stack direction="row" justifyContent="space-around">
                <ListItem sx={{ maxWidth: "30%" }} onClick={handleOpen}>
                    <ListItemText
                        primary="Add Mentor Manager"
                        primaryTypographyProps={{ sx: { color: "common.black" } }}
                        secondary={
                            <Stack direction="row" spacing={2}>
                                <Typography color="common.black" fontSize={12}>10 Selected</Typography>
                                <BackspaceOutlined color="error" fontSize="small" sx={{ transform: 'rotate(180deg)' }} />
                            </Stack>
                        } />
                    <Button size='small' >Select</Button>
                </ListItem>
                <ListItem sx={{ maxWidth: "30%" }} onClick={handleOpen}>
                    <ListItemText
                        primary="Add Mentor"
                        primaryTypographyProps={{ sx: { color: "common.black" } }}
                        secondaryTypographyProps={{ sx: { color: "common.black" } }}
                        secondary={
                            <Stack direction="row" spacing={2}>
                                <Typography color="common.black" fontSize={12}>10 Selected</Typography>
                                <BackspaceOutlined color="error" fontSize="small" sx={{ transform: 'rotate(180deg)' }} />
                            </Stack>
                        } />
                    <Button size='small'>Select</Button>
                </ListItem>
            </Stack>
            <Box>
                <Button>Create Program</Button>
            </Box>
        </Stack>
    )
}

CreateProgramForm.propTypes = {
    setOpenSearch: PropTypes.func
}

export default CreateProgramForm