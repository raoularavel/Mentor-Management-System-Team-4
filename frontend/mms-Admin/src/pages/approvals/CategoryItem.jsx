import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'

import PropTypes from "prop-types"

function CategoryItem({ image, title, value }) {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar src={image} sx={{ width: 50, height: 39 }} />
            </ListItemAvatar>
            <ListItemText
                primary={title}
                primaryTypographyProps={{ sx: { fontSize: 20, fontWeight: "bold", color: "common.black" } }}

            />
            <Typography
                sx={{ fontSize: 20, fontWeight: "bold", color: "common.black" }}
            >{value}</Typography>
        </ListItem>
    )
}

CategoryItem.propTypes = {
    image: PropTypes.any,
    title: PropTypes.string,
    value: PropTypes.number
}


export default CategoryItem