import { Avatar, Box, Button, Stack, TextField } from '@mui/material'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import Loader from 'src/components/Loader'
import { Logo } from 'src/components/icons'
import { useChangePasswordMutation, useLogoutMutation } from 'src/services/auth.service'
import * as Yup from "yup"


export default function ChangePasswordForm() {

    const navigate = useNavigate()

    const [changePassWord, { isLoading }] = useChangePasswordMutation()

    const [logout] = useLogoutMutation();

    const handleLogout = async () => {
        const res = await logout().unwrap()
        navigate('/login');
    }

    const onSubmit = async ({ currentPassword, password }) => {
        const rest = await changePassWord({ password, currentPassword }).unwrap()
        if (rest.success) {
            toast.success(rest.message)
        }
    }

    const formik = useFormik({
        initialValues: {
            currentPassword: "",
            password: "",
            confirm_password: ""
        },
        validationSchema: Yup.object().shape({
            currentPassword: Yup.string().required(),
            password: Yup.string().required(),
            confirm_password: Yup.string().required().equals([Yup.ref("password")])
        }),
        onSubmit
    })
    return isLoading ? (
        <Loader isOpen={isLoading} />
    ) : (
        <Box sx={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center", display: "flex" }}>
            <form onSubmit={formik.handleSubmit}>
                <Stack spacing={2} justifyContent="center">
                    <Avatar src={Logo} />
                    <TextField
                        required
                        name="currentPassword"
                        onChange={formik.handleChange}
                        label="Current Password"
                        type="password"
                        fullWidth
                    />
                    <TextField
                        required
                        name="password"
                        onChange={formik.handleChange}
                        label="New Password"
                        type="password"
                        fullWidth
                    />
                    <TextField
                        required
                        name="confirm_password"
                        onChange={formik.handleChange}
                        label="Confirm New Password"
                        type="password"
                        fullWidth
                    />
                    <Button
                        disabled={!formik.isValid}
                        variant="contained"
                        type="submit"
                        fullWidth
                        sx={{ p: 1 }}
                    >
                        Change Password
                    </Button>
                    <Button
                        onClick={handleLogout}
                        variant="outlined"
                        type="button"
                        fullWidth
                        sx={{ p: 1 }}
                    >
                        Logout
                    </Button>
                </Stack>
            </form >
        </Box>
    )
}
