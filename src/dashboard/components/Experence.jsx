import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  timelineOppositeContentClasses,
} from '@mui/lab';
import {
  Avatar,
  Box,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { experenceEs } from '../../experence/es';
import BuildIcon from '@mui/icons-material/Build';
import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Divider from '@mui/material/Divider';
import SchoolIcon from '@mui/icons-material/School';

import aws from '/images/aws.png';
import CWP from '/images/C++_logo.png';
import awsS3 from '/images/awsS3.png';
import js from '/images/js.jpg';
import laravel1 from '/images/laravel_1.png';
import laravl from '/images/laravl.png'; // Asegúrate de que el nombre del archivo sea correcto
import mysql from '/images/mysql.png';
import nodejs from '/images/nodejs.png';
import node from '/images/node.png';
import php from '/images/php.png';
import react from '/images/react.jpg';
import vite from '/images/vite.svg';
import vue from '/images/vue.png';
import Github from '/images/Github.png';
import jenkins from '/images/jenkins.png';
// import docker1 from '/images/docker1.png';
import docker2 from '/images/docker2.png';
import Ubuntu from '/images/ubuntu-logo.png';
import Git from '/images/git.png';
import linux from '/images/linux.png';
import centos from '/images/centos.png';
import npmLogo from '/images/npm-logo.png';
import dns from '/images/dns.png';
import ssh from '/images/ssh.png';
import stripe from '/images/stripe.png';
import vultr from '/images/vultr.png';
import twilio from '/images/twilio.png';
import bagisto from '/images/bagisto.png';
import gcloud from '/images/gCloud.png';
import gmaps from '/images/gmaps.png';
import zebra from '/images/zebra.webp';
import vtiger from '/images/vtiger.png';
import hostinger from '/images/hostinger.png';
import firebase from '/images/firebase.png';
import portainer from '/images/portainer-ce-logo.svg';
import limesurvey from '/images/lsurvey.jpeg';
import waba from '/images/whats-app-business-1024x683.jpg';

const logos = [
  { aws },
  { name: 'CWP', value: centos },
  { name: 'Centos 7', value: centos },
  { name: 'S3', value: awsS3 },
  { name: 'AWS S3', value: awsS3 },
  { name: 'js', value: js },
  { name: 'laravel1', value: laravel1 },
  { name: 'laravl', value: laravl },
  { name: 'mysql', value: mysql },
  { name: 'nodejs', value: nodejs },
  { name: 'node', value: node },
  { name: 'php', value: php },
  { name: 'react', value: react },
  { name: 'vite', value: vite },
  { name: 'vue', value: vue },
  { name: 'Github', value: Github },
  { name: 'jenkins', value: jenkins },
  // { name: 'Docker', value: docker1 },
  { name: 'Docker', value: docker2 },
  { name: 'Ubuntu', value: Ubuntu },
  { name: 'Git', value: Git },
  { name: 'linux', value: linux },
  { name: 'centos', value: centos },
  { name: 'npmLogo', value: npmLogo },
  { name: 'DNS', value: dns },
  { name: 'AWS EC2', value: aws },
  { name: 'AWS cli', value: aws },
  { name: 'Laravel 7.*', value: laravel1 },
  { name: 'Vue 2.*', value: vue },
  { name: 'VUE', value: vue },
  { name: 'Laravel', value: laravl },
  { name: 'Laravel 7.*, 8.*, 9.*, 10', value: laravl },
  { name: 'MySql', value: mysql },
  { name: 'Jenkins', value: jenkins },
  { name: 'SSH', value: ssh },
  { name: 'Stripe', value: stripe },
  { name: 'Portainer CE', value: portainer },
  { name: 'Limesurvey API', value: limesurvey },
  { name: 'Vultr', value: vultr },
  { name: 'Firebase', value: firebase },
  { name: 'Bagisto', value: bagisto },
  { name: 'APIs Google cloud', value: gcloud },
  { name: 'Google maps', value: gmaps },
  { name: 'Twilio', value: twilio },
  { name: 'Terminal Zebra', value: zebra },
  { name: 'WABA (whatsapp business API)', value: waba },
  { name: 'Vtiger crm', value: vtiger },
  { name: 'Hostinger', value: hostinger },
  // cppLogo
];

const getLogo = (eh) => {
  // console.log({ eh })
  const res = logos.filter(({ name }) => name === eh);

  if (res) {
    // console.log({ res: Object.values(res)[0]?.name })
    return Object.values(res)[0]?.value;
  }
};

// import { experenceEs } from "./experence/es";
const Experence = () => {
  // console.log({ experenceEs });
  return (
    <Box sx={{}}>
      <List sx={{ width: '100%', bgcolor: 'transparent' }}>
        <ListItem>
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText
            primary={experenceEs?.profile?.title}
            secondary={experenceEs?.profile?.about}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <DateRangeIcon />
          </ListItemIcon>
          <ListItemText primary={experenceEs?.profile?.since} />
        </ListItem>
      </List>
      <Typography variant='h1' sx={{ fontWeight: 'bold', fontSize: '20pt' }}>
        {'Experiencia'}
      </Typography>
      <Divider />
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
      >
        {Object.values(experenceEs?.timeline).map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent color='textSecondary'>
              <b>
                {item?.from} - {item?.to}
              </b>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Box sx={{ textAlign: 'left' }}>
                <TimelineSeparator sx={{ border: 'solid 3pt gray' }} title='1' />
                <List>
                  <Typography variant='h1' color='info' sx={{ fontWeight: 'bold' }}>
                    {item?.title}
                  </Typography>
                  <ListItem>
                    <ListItemText primary={item?.company} secondary={item?.location} />
                  </ListItem>
                </List>
                <Typography variant='p' color='info' sx={{ marginLeft: '9pt' }}>
                  {item?.description}
                </Typography>
                <Grid container>
                  <Grid item xs={12} md={6}>
                    <Typography variant='h6' color='info' sx={{ fontWeight: 'bold' }}>
                      {'Responsabilidades'}
                    </Typography>
                    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                      {item?.responsibilities?.map((res, index) => (
                        <ListItem key={index}>
                          <ListItemIcon>
                            <StarIcon />
                          </ListItemIcon>
                          <ListItemText primary={res} />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant='h6' color='info' sx={{ fontWeight: 'bold' }}>
                      {'Tecnologias'}
                    </Typography>
                    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                      {item?.tech_scratch?.map((res, index) => (
                        <ListItem key={index}>
                          <ListItemAvatar>
                            <Avatar
                              alt={res}
                              src={getLogo(res)}
                              sx={{
                                height: '20px',
                                width: '20px',
                              }}
                            />
                          </ListItemAvatar>
                          <ListItemText primary={res} />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                </Grid>
              </Box>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      {/* *******************practicas****************** */}
      <Divider />
      <Typography variant='h5' color='info'>
        {'Capacitaciones'}
      </Typography>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {Object.values(experenceEs?.certifications).map((res, index) => (
          <ListItem key={index}>
            < ListItemIcon >
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText
              primary={res?.school}
              secondary={
                <>
                  <Typography variant='p' color='info'>
                    {res?.title}
                  </Typography>
                  <Typography variant='p' color='info'>
                    {res?.time}
                  </Typography>
                </>
              }
            />
          </ListItem>
        ))
        }
      </List >
      <Divider />
      <Typography variant='h5' color='info'>
        {'Educacion'}
      </Typography>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {Object.values(experenceEs?.education).map((res, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText
              primary={res?.school}
              secondary={
                <>
                  <Typography variant='p' color='info'>
                    {res?.title}
                  </Typography>
                  <Typography variant='p' color='info'>
                    {res?.time}
                  </Typography>
                </>
              }
            />
          </ListItem>
        ))}
      </List>

    </Box >
  );
};
export default Experence;
