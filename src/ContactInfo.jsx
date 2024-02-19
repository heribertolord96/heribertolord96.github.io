import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Height } from "@mui/icons-material";
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';

import avatar from './images/avatar.jpeg';

const ContactInfo =()=>(  
     <Box sx={{ fontWeight: 'bold' }}>
<Avatar src={avatar} sx={{
    margin: 'auto',
    height: '230px',
    width: '230px',
    border: '3px dotted lightgray;', padding: '-20px;', Height: '300px'
}} >
</Avatar>

<Typography variant="title" color="initial">Heriberto Hernández Torres</Typography>
<Typography variant="h5" color="initial">Desarrollador fullstack</Typography>
<Typography variant="h6" color="initial">Desde 2020</Typography>
<List sx={{ width: '100%', maxWidth: 360, fontWeight: 'bold' }}>
    <ListItem>
        <ListItemAvatar>
            <Avatar >
                <LocalPhoneIcon />
                <WhatsAppIcon sx={{ color: 'green' }} />
            </Avatar>
        </ListItemAvatar>
        <ListItemText primary="34 41 03 65 01" />
    </ListItem>
    <ListItem>
        <ListItemAvatar>
            <Avatar>
                <a target="_blank" href="mailto:heribertolord@gmail.com?">
                    <MailIcon sx={{ color: 'blue' }} />
                </a>
            </Avatar>
        </ListItemAvatar>

        <ListItemText primary={<a target="_blank" href="mailto:heribertolord@gmail.com?">
            heribertolord@gmail.com </a>}
            secondary={<a target="_blank" href="mailto:htheriberto@hotmail.com?">
                htheriberto@hotmail.com </a>}
        />
    </ListItem>
    <ListItem>
        <ListItemAvatar>
            <Avatar>
                <a href="https://www.linkedin.com/in/heriberto-hernandez-torres-7a5789133">
                    <LinkedInIcon />
                </a>
            </Avatar>
        </ListItemAvatar>

        <ListItemText primary={<a href="https://www.linkedin.com/in/heriberto-hernandez-torres-7a5789133">
            linkedin.com/in/heriberto-hernandez-torres-7a5789133
        </a>} />

    </ListItem>
    <ListItem>
        <ListItemAvatar>
            <Avatar>
                <a href="https://github.com/heribertolord96/">
                    <GitHubIcon sx={{ color: 'purple' }} />
                </a>
            </Avatar>
        </ListItemAvatar>

        <ListItemText primary={<a href="https://github.com/heribertolord96/">
            github.com/heribertolord96</a>} />
    </ListItem>
    <ListItem>
        <ListItemAvatar>
            <Avatar>
                <LocationOnIcon sx={{ color: 'red' }} />
            </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Zapopan / Jalisco" />
    </ListItem>
</List>
</Box>
);

export default ContactInfo;