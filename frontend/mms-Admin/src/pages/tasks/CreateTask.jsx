import { CancelOutlined, FilterList, Search } from '@mui/icons-material'
import { Stack } from '@mui/material'
import CreateTaskForm from './CreateTaskFrom'
import UserItem from './UserItem'
import { useState } from 'react'

export default function CreateTask() {
    const [openSearch, setOpenSearch] = useState(false)
    return (
        <Stack spacing={1} direction="row" width="100%" px={3} pt={2}>
            <CreateTaskForm setOpenSearch ={setOpenSearch} />
            <Stack spacing={1} sx={{ minWidth: "32%", px: 2 }} display={openSearch ? "block" : "none"}>
                <Stack direction="row" justifyContent="flex-end" spacing={1}>
                    <Search />
                    <FilterList />
                    <CancelOutlined onClick={() => setOpenSearch(false)} />
                </Stack>
                {(Array(10).fill(0).map((v, index) => (<UserItem key={index} index={index} />)))}
            </Stack>
        </Stack>
    )
}
