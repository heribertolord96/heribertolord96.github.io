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
                            minWidth: '400px', width: 'auto', fontWeight: 'bold', fontSize: '33pt', backgroundColor: 'blue', zIndex:1,
                            top: '0', Height: '50px'
                        }} align='left'>
                            {/* <RandomLogosBackground /> */}
                            <RandomLogosBackground>
                                <ContactInfo />
                                <Skills />

                            </RandomLogosBackground>
                        </TableCell>
                        <Box sx={{marginLeft:'12pt'}}>

                        <Typography variant="body" color="initial" sx={{
                            minWidth: '400px', width: 'auto', fontWeight: 'bold', fontSize: '33pt', 
                            top: '0', Height: '50px'
                        }}>ACERCA DE MÍ</Typography>
                        <Typography variant="body1" color="initial" sx={{
                            minWidth: '400px', width: 'auto',  fontSize: '14pt', 
                            top: '0', Height: '50px'
                        }}>Desarrollador web con experiencia
                            en creación de APIs usando Laravel
                            y NodeJS. También APPS intuitivas
                            y receptivas en tecnologías como
                            React o vue para consumo de las
                            mismas o también monolíticas . <br />
                            Conocimiento práctico en el
                            despliegue y mantenimiento de
                            aplicaciones en entornos Linux y
                            Docker . <br />
                            Apasionado por la creación de soluciones
                            innovadoras y escalables que impulsan el
                            rendimiento y la experiencia del usuario. <br />
                            Capaz de trabajar de manera efectiva de
                            forma independiente o en equipos
                            multidisciplinarios. <br />
                            Buscando oportunidades desafiantes para
                            aplicar y mejorar mis habilidades técnicas y
                            contribuir al éxito de los proyectos.
                        </Typography>
                        </Box>

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

/* 
Usar jsons para toda la data 
Hacerlo traducible 
Tendra barra de navegacion y lateral 

*/

