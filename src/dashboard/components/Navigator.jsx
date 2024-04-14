import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';

import ContactInfo from './ContactInfo';
import Skills from './Skills';
import { Box, LinearProgress, Typography } from '@mui/material';

export default function Navigator(props) {
  const { ...other } = props;

  return (
    <Drawer variant='permanent' {...other}>
      <List disablePadding>
        <ContactInfo />
      
        <Skills />
      </List>
    </Drawer>
  );
}
