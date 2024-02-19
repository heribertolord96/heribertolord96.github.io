import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator, timelineOppositeContentClasses } from "@mui/lab";
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, Typography } from "@mui/material"
import { TableRow } from "semantic-ui-react"

import ContactInfo from "./ContactInfo";
import Experience from "./Experience";
import Skills from "./Skills";
import RandomLogosBackground from "./RandomLogosBackground";

export const App = () => {
    return (<>
        <TableContainer component={Paper}
            sx={{ maxHeight: 'auto', }}
        >
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableBody>
                    <TableRow
                        key={'trow'}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 }, maxHeight: '300px', }}
                    >
                        <TableCell sx={{
                            position: 'relative',
                            minWidth: '400px', width: 'auto', fontWeight: 'bold', fontSize: '33pt', backgroundColor: '#888c9df5',
                            top: '0', Height: '50px'
                        }} align='left'>
                            {/* <RandomLogosBackground /> */}
                            <RandomLogosBackground>
                                <ContactInfo />
                                <Skills />

                            </RandomLogosBackground>
                        </TableCell>
                        <TableCell sx={{
                            overflowY: 'auto',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <Experience />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    </>);
}

// export default App;