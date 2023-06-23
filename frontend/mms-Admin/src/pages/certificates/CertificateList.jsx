import { Box, Button, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import PropTypes from "prop-types"
import AccordionCertificate from './AccordionCertificate'
import { useNavigate } from 'react-router'

function CertificateList({ title, status }) {
    const [expanded, setExpanded] = useState(0)

    const navigate = useNavigate()

    return (
        <Stack spacing={1} sx={{ maxHeight: 800, overflowY: "scroll", px: 2 }}>
            <Stack direction="row" justifyContent="space-between" py={2}>
                <Typography
                    sx={{ fontSize: 20, fontWeight: "bold", color: "common.black" }}
                >{title}</Typography>
                <Button onClick={() => navigate("/certificates/generate")}>Generate New Certificate</Button>
            </Stack>
            {
                (new Array(10)).fill(0).map((v, index) => (
                    <Box key={index} onClick={() => setExpanded(index)}>
                        <AccordionCertificate
                            expanded={index === expanded}
                            showApproveDecline={status === 'pending'}
                        />
                    </Box>))
            }
        </Stack>
    )
}

CertificateList.propTypes = {
    title: PropTypes.string,
    status: PropTypes.string,
}

export default CertificateList