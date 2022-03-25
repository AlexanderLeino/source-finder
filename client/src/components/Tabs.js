import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ColorTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  return (
    <Box sx={{ width: '100%', borderRadius:'25px', backgroundColor:'#ffffffb5', border:'3px solid purple', boxShadow: 'purple 7px 5px 5px'}}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        centered
        sx={{paddingBottom:'3px'}}
      >
        <Tab value="Progress Updates" label="Progress Updates"  sx={{fontWeight:'bold', color: 'rgb(25, 11, 40)'}} />
        <Tab value="Group Member List" label="Group Member List"  sx={{fontWeight:'bold', color: 'rgb(25, 11, 40)'}} />
        <Tab value="Request To Join" label="Request To Join"  sx={{fontWeight:'bold', color: 'rgb(25, 11, 40)'}} />
      </Tabs>
    </Box>
  );
}