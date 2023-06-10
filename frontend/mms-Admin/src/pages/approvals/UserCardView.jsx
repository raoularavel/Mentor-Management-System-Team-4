import { Avatar, Button, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import PropTypes from "prop-types"
import { MentorImage } from 'src/components/icons'


function UserCardView({ name, role }) {

    return (
        <ListItem sx={{ border: 1, borderColor: "#E6E6E6", borderRadius: 2 }}>
            <ListItemAvatar sx={{ mr: 2 }}>
                <Avatar src={MentorImage} sx={{ width: 45, height: 45 }} />
            </ListItemAvatar>
            <ListItemText
                primary={name}
                primaryTypographyProps={{ sx: { fontWeight: "bold", color: "common.black", fontSize: 16 } }}
                secondary={role}
            />
            <Button size='small'>View </Button>
        </ListItem>
    )
}

UserCardView.propTypes = {
    name: PropTypes.string,
    role: PropTypes.string
}

export default UserCardView
