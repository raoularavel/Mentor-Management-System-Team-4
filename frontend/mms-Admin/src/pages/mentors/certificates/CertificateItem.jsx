import { ExpandCircleDownOutlined } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import PropTypes from "prop-types"
import Certificate from 'src/components/Certificate'
import { MMSCertImage } from 'src/components/icons'
import { useAuth } from 'src/store/auth.reducer'

const CertificateItem = ({ expanded }) => {

    const { data: user } = useAuth()

    console.log(user)

    return (
        <Accordion expanded={expanded} sx={{ border: 1, borderColor: "#E6E6E6", borderRadius: 2 }}>
            <AccordionSummary
                expandIcon={<ExpandCircleDownOutlined />}
            >
                <ListItem >
                    <ListItemAvatar>
                        <Avatar src={MMSCertImage} sx={{ width: 50, height: 50 }} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Google Cloud 2022 - COMPETITION"
                        primaryTypographyProps={{ sx: { fontWeight: "bold", fontSize: 20, color: "common.black" } }}
                    />
                </ListItem>
            </AccordionSummary>
            <AccordionDetails>
                {expanded && <Certificate
                    fullName={`${user.firstName} ${user.lastName}`}
                    role={user.user_role}
                    issue_date={user.created_at}
                    certificate_id={user.user_id}
                />}
            </AccordionDetails>
        </Accordion>
    )
}

CertificateItem.propTypes = {
    expanded: PropTypes.bool
}

export default CertificateItem