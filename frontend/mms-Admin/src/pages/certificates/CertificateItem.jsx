import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import PropTypes from "prop-types"
import { MMSCertImage } from 'src/components/icons'

function CertificateItem({ children }) {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar src={MMSCertImage} sx={{ width: 50, height: 50 }} />
            </ListItemAvatar>
            <ListItemText
                primary="Alison Davis"
                primaryTypographyProps={{ sx: { fontWeight: "bold", fontSize: 20, color: "common.black" } }}
                secondary="GADS CLOUD 2022 - COMPLETION"
                secondaryTypographyProps={{ sx: { fontSize: 16, color: "common.black" } }}
            />
            {children}
        </ListItem>
    )
}

CertificateItem.propTypes = {
    children: PropTypes.node
}

export default CertificateItem