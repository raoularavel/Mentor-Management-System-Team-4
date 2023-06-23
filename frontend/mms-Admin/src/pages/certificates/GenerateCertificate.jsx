import { CancelOutlined, FilterList, Search } from '@mui/icons-material'
import { Stack } from '@mui/material'
import { useState } from 'react'
import GenerateCertificateFrom from './GenerateCertificateFrom'
import UserView from './UserView'

export default function GenerateCertificate() {
    const [openSearch, setOpenSearch] = useState(false)
    return (
        <Stack spacing={1} direction="row" width="100%" px={3} pt={2}>
            <GenerateCertificateFrom setOpenSearch={setOpenSearch} />
            <Stack spacing={1} sx={{ minWidth: "32%", px: 2 }} display={openSearch ? "flex" : "none"}>
                <Stack direction="row" justifyContent="flex-end" spacing={1}>
                    <Search />
                    <FilterList />
                    <CancelOutlined onClick={() => setOpenSearch(false)} />
                </Stack>
                <UserView index={10001} />
                {(Array(10).fill(0).map((v, index) => (<UserView key={index} index={index % 2 != 0 ? (index + 10001) : index} />)))}
            </Stack>
        </Stack>
    )
}
