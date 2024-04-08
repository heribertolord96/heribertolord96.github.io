import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator, timelineOppositeContentClasses } from "@mui/lab";
import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { experenceEs } from "./experence/es";
import StarIcon from '@material-ui/icons/Star';
import BuildIcon from '@material-ui/icons/Build';
import DateRangeIcon from '@material-ui/icons/DateRange';
import InfoIcon from '@material-ui/icons/Info';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Divider from '@mui/material/Divider';

// import { experenceEs } from "./experence/es";
const Experence = () => {
    console.log({ experenceEs });
    return <Box sx={{}} >
        <List sx={{ width: '100%', bgcolor: 'transparent', }}>
            <ListItem>
                <ListItemIcon>
                    <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary={experenceEs?.profile?.title}
                    secondary={experenceEs?.profile?.about} />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <DateRangeIcon />
                </ListItemIcon>
                <ListItemText primary={experenceEs?.profile?.since} />
            </ListItem>
        </List>
        <Typography variant="h1" sx={{ fontWeight: 'bold', fontSize: '20pt' }}>
            {'Experiencia'}
        </Typography>
        <Divider />
        <Timeline sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.2,
            },
        }}
        >

            {Object.values(experenceEs?.timeline).map((item, index) =>
            (
                <>
                    {
                        <TimelineItem>
                            <TimelineOppositeContent color="textSecondary">
                                <b>{item?.from} - {item?.to}</b>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Box sx={{ textAlign: 'left' }}>
                                    <TimelineSeparator
                                        sx={{ border: 'solid 3pt gray' }} title="1" />
                                    <Typography variant="h1" color="info"
                                        sx={{ fontWeight: 'bold' }}>
                                        {item?.title}
                                    </Typography>
                                    <Typography variant="h2" color="info"
                                        sx={{ marginLeft: '18pt' }}>
                                        {item?.company} <i>{item?.location}</i>
                                    </Typography>
                                    <Typography variant="p" color="info"
                                        sx={{ marginLeft: '9pt' }} >
                                        {item?.description}
                                    </Typography>
                                    <Grid container>
                                        <Grid item xs={12} md={6}>
                                            <Typography variant="h6" color="info"
                                                sx={{ fontWeight: 'bold' }}>
                                                {'Responsabilidades'}
                                            </Typography>
                                            <List sx={{ width: '100%', bgcolor: 'background.paper', }}>
                                                {item?.responsibilities?.map(res =>
                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <StarIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary={res} />
                                                    </ListItem>
                                                )}
                                            </List>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Typography variant="h6" color="info"
                                                sx={{ fontWeight: 'bold' }}>
                                                {'Tecnologias'}
                                            </Typography>
                                            <List sx={{ width: '100%', bgcolor: 'background.paper', }}>
                                                {item?.tech_scratch?.map(res =>
                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <BuildIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary={res} />
                                                    </ListItem>
                                                )}
                                            </List>
                                        </Grid>
                                    </Grid>

                                </Box>
                            </TimelineContent>
                        </TimelineItem>
                    }
                </>
            )
            )}
        </Timeline>
        {/* *******************practicas****************** */}

    </Box>
}
    ;

export default Experence;