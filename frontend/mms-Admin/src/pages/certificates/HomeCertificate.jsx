import { Box, Button, Chip, Grid, Stack, Typography } from '@mui/material'
import { Outlet, useNavigate } from 'react-router'
import { MentorManager, MentorRequest } from 'src/components/icons'
import CategoryItem from './CategoryItem'
import CertificateItem from './CertificateItem'

export default function HomeCertificate() {
    const navigate = useNavigate()
    return (
        <Grid container columns={3} spacing={2}>
            <Grid item xs={1}>
                <Typography
                    sx={{ fontSize: 20, fontWeight: "bold", color: "common.black", pb: 2 }}
                >Category</Typography>
                <Stack spacing={1}>
                    <Box onClick={() => navigate("/certificates/approved")} sx={{ cursor: "pointer" }}>
                        <CategoryItem
                            image={MentorManager}
                            title='Approved Certificates'
                            value={287}
                        />
                    </Box>
                    <Box onClick={() => navigate("/certificates/me")} sx={{ cursor: "pointer" }}>
                        <CategoryItem
                            image={MentorRequest}
                            title='My Generated Certificates'
                            value={160}
                        />
                    </Box>
                    <Box onClick={() => navigate("/certificates/pending")} sx={{ cursor: "pointer" }}>
                        <CategoryItem
                            title='Certificates Pending Approval'
                            value={<Chip color='error' label={120} />}
                        />
                    </Box>
                    <Typography
                        sx={{ fontSize: 20, fontWeight: "bold", color: "common.black" }}
                    >Recent</Typography>
                    <CertificateItem>
                        <Button>View</Button>
                    </CertificateItem>
                    <CertificateItem>
                        <Button>View</Button>
                    </CertificateItem>
                    <CertificateItem>
                        <Button>View</Button>
                    </CertificateItem>
                    <CertificateItem>
                        <Button>View</Button>
                    </CertificateItem>
                    <CertificateItem>
                        <Button>View</Button>
                    </CertificateItem>
                    <CertificateItem>
                        <Button>View</Button>
                    </CertificateItem>

                </Stack>
            </Grid>
            <Grid item xs={2}>
                <Outlet />
            </Grid>
        </Grid>
    )
}
