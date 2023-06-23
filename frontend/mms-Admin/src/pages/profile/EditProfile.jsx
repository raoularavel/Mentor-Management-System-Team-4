import { Box, Button, Stack, Toolbar, Typography } from '@mui/material';
import GeneralInputs from 'src/components/GeneralInputs';
import { useLogoutMutation } from 'src/services/auth.service';

export default function EditProfile() {

    const [logout] = useLogoutMutation();

    const handleLogout = async () => {
        await logout().unwrap()
        navigate('/login');
    }
    return (
        <Box sx={{ width: "100%", justifyContent: "center", alignItems: "center", display: "flex", py: 2 }}>
            <Stack spacing={2.5}>
                <Stack justifyContent="space-between" direction="row">
                <Typography sx={{
                    fontWeight: "bold",
                    fontSize: 24,
                    color: "common.black"
                }}>
                    Update Profile
                </Typography>
                <Button
                        onClick={handleLogout}
                        variant="outlined"
                        type="button"
                    >
                        Logout
                    </Button>
                </Stack>
                <GeneralInputs />
            </Stack>
        </Box>
    )
}
