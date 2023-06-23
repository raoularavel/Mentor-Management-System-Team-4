import { ExpandCircleDownOutlined } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Button, Stack } from '@mui/material'
import PropTypes from "prop-types"
import Certificate from 'src/components/Certificate'
import { useAuth } from 'src/store/auth.reducer'
import CertificateItem from './CertificateItem'

const AccordionCertificate = ({ expanded, showApproveDecline = false }) => {

    const { data: user } = useAuth()

    return (
        <Accordion expanded={expanded} sx={{ border: 1, borderColor: "#E6E6E6", borderRadius: 2 }}>
            <AccordionSummary
                expandIcon={<ExpandCircleDownOutlined />}
            >
                <CertificateItem />
            </AccordionSummary>
            <AccordionDetails>
                {expanded && <Certificate
                    fullName={`${user.firstName} ${user.lastName}`}
                    role={user.user_role}
                    issue_date={user.created_at}
                    certificate_id={user.user_id}
                />}
                {showApproveDecline && (
                    <Stack direction="row" spacing={2} justifyContent="space-around" pt={2}>
                        <Button variant="outlined" size='large'>Decline</Button>
                        <Button size='large'>Approve</Button>
                    </Stack>
                )
                }

            </AccordionDetails>
        </Accordion>
    )
}

AccordionCertificate.propTypes = {
    expanded: PropTypes.bool,
    showApproveDecline: PropTypes.bool
}

export default AccordionCertificate