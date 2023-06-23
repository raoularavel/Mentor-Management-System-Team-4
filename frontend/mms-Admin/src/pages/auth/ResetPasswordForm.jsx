import { Box, Button, Stack, TextField } from '@mui/material'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import Loader from 'src/components/Loader'
import { useResetPasswordMutation } from 'src/services/auth.service'
import * as Yup from "yup"

export default function ResetPasswordForm() {

    const navigate = useNavigate()

    const [resetPassword, { isLoading }] = useResetPasswordMutation();


    const handleLogout = async () => {
        navigate('/login');
    }

    const onSubmit = async ({ passcode, password }) => {

        const res = await resetPassword({ passcode, password }).unwrap();

        if (res.success) {
            toast.success(res.message)
            navigate("/login")
        }
    }

    const formik = useFormik({
        initialValues: {
            passcode: "",
            password: "",
            confirm_password: ""
        },
        validationSchema: Yup.object().shape({
            passcode: Yup.string().required(),
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
                <Stack spacing={2} justifyContent="center" display="flex">
                    <TextField
                        required
                        name="passcode"
                        onChange={formik.handleChange}
                        label="Passcode"
                        type="text"
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
                        Back to login page
                    </Button>
                </Stack>
            </form >
        </Box>
    )
}
