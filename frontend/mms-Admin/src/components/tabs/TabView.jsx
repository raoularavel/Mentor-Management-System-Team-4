import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import PropTypes from "prop-types";
import { useState } from 'react';

function TabView({ tabs, orientation = "horizontal" }) {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <TabContext value={value}>
            <Box sx={{ display: 'flex' }} >
                <TabList onChange={handleChange}  variant="scrollable" orientation={orientation} scrollButtons >
                    {tabs.map(({ name }, index) => (<Tab key={`tab-id${index}`}  label={name} value={index} sx={{ fontWeight: "bold", textTransform: "none", fontSize: 16 }} />))}
                </TabList>
                {tabs.map(({ component }, index) => (<TabPanel key={`tab-content${index}`} value={index}> {component} </TabPanel>))}
            </Box>
        </TabContext>
    )
}

TabView.propTypes = {
    orientation: PropTypes.string,
    tabs: PropTypes.arrayOf(PropTypes.objectOf({
        name: PropTypes.node,
        component: PropTypes.node.isRequired
    }))
}

export default TabView