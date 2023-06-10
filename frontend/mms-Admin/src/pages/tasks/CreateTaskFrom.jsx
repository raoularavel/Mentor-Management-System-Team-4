import { BackspaceOutlined } from '@mui/icons-material'
import { Box, Button, ListItem, ListItemText, Stack, TextField, Typography } from '@mui/material'
import PropTypes from "prop-types"

function CreateTaskForm({ setOpenSearch }) {

    const handleOpen = () => setOpenSearch(true)
    return (
        <Stack spacing={2} width="100%">
            <Typography sx={{ fontWeight: "bold", color: "common.black", fontSize: 20 }}>New Task</Typography>
            <Typography sx={{ fontWeight: "bold", color: "common.black" }}>Title</Typography>
            <TextField
                placeholder='Enter title'
                fullWidth
                helperText="The title must containt a maximum of 32 characters"
            />
            <Typography sx={{ fontWeight: "bold", color: "common.black" }}>Details</Typography>
            <TextField
                placeholder='Enter task details'
                fullWidth
                helperText="The title must containt a maximum of 32 characters"
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
                <Button>Create Task</Button>
            </Box>
        </Stack>
    )
}

CreateTaskForm.propTypes = {
    setOpenSearch: PropTypes.func
}

export default CreateTaskForm