import { Box, Button, Stack, Typography } from '@mui/material'
import PropTypes from "prop-types"
import Certificate from 'src/components/Certificate'
import ProgramItem from './ProgramItem'
import UserItem from './UserView'

function GenerateCertificateFrom({ setOpenSearch }) {

    const handleOpen = () => setOpenSearch(true)
    setOpenSearch(true)
    return (
        <Stack spacing={2} width="100%">
            <Typography sx={{ fontWeight: "bold", color: "common.black", fontSize: 20 }}>Generate Certificate</Typography>
            <UserItem />
            <ProgramItem />
            <Certificate
                fullName='Peculiah C. Umeh'
                role='mentor-manager'
                issue_date={'2023-06-14'}
                certificate_id="6017479060USA0203225F2701046"
            />
            <Box>
                <Button size='large'>Generate</Button>
            </Box>
        </Stack>
    )
}

GenerateCertificateFrom.propTypes = {
    setOpenSearch: PropTypes.func
}

export default GenerateCertificateFrom