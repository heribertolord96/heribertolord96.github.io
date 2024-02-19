import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator, timelineOppositeContentClasses } from "@mui/lab";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

const Experience = () => (<Box sx={{}} >
    <Typography variant="h1" color="initial" sx={{ fontWeight: 'bold', fontSize: '30pt' }}>
        {'Experiencia'} </Typography>

    <Timeline sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
        },
    }}
    >
        <TimelineItem>
            <TimelineOppositeContent color="textSecondary">
                <b>2021 - Actualmente</b>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Box sx={{ textAlign: 'left' }}>
                    <TimelineSeparator sx={{ border: 'solid 3pt gray' }} title="1" />
                    <Typography variant="h2" color="initial" sx={{ fontSize: '30pt', fontWeight: 'bold' }}>
                        {'Desarrollador FullStack'} </Typography>
                    <Typography variant="h2" color="initial" sx={{ fontSize: '15pt', marginLeft: '18pt' }}>
                        Vive Ger Canada Consulting   <i>Guadalajara, Jal.</i>  </Typography>
                    <Typography variant="h1" color="initial" sx={{ fontSize: '18pt', marginLeft: '9pt' }} >
                        Desarrollo de herramientas digitales para consulta y seguimiento de prospecto migrantes a Canada.
                        <br />
                        Algunos proyectos en los que implemente mis capacidades y me han aportado conocimiento en la materia son los siguientes:</Typography>
                    <List sx={{ width: '100%', bgcolor: 'background.paper', }}>
                        <ListItem>
                            <ListItemText primary={<Typography variant="h2" color="initial" sx={{ fontWeight: 'bold', fontSize: '22pt' }}>
                                {'Portal de clientes'} </Typography>}
                                secondary={<Typography variant="p" color="initial" sx={{ fontSize: '20pt', width: '100%' }}>
                                    El proyecto permite a los clientes consultar el status de su proceso migratorio.
                                    <br />
                                    Desarrollado en <b>Laravel 8 (php8)</b> . <br />
                                    Usa servicios de <b>Apis </b> Apis de terceros como <a href="https://www.limesurvey.org/"><b>Limesurvey</b></a> y además interactúa con el CRM <a href="https://www.vtiger.com/"><b> Vtiger</b></a>, de manera que clona una selección
                                    de datos para los prospectos y facilita su seguimiento para los usuarios de
                                    Vtiger-crm. </Typography>} />

                        </ListItem>
                        <ListItem>
                            <ListItemText primary={<Typography variant="h2" color="initial" sx={{ fontWeight: 'bold', fontSize: '22pt' }}>
                                {'CRM en un paso'} </Typography>}
                                secondary={<Typography variant="p" color="initial" sx={{ fontSize: '20pt', width: '100%' }}>
                                    Crea cuenta de usuario en servidor con una instalacion de vtiger CRM listo para usar
                                    funcionando con base de datos, almacenamiento en s3, registrando cada creacion de en otra instancia de vtiger usando comandos SSH desde la API. </Typography>} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary={<Typography variant="h2" color="initial" sx={{ fontWeight: 'bold', fontSize: '22pt' }}>
                                {'WhatsApi'} </Typography>}
                                secondary={<Typography variant="p" color="initial" sx={{ fontSize: '20pt', width: '100%' }}>
                                    Api para WhatsApp business que permita manejar un numero de
                                    WhatsApp por múltiples usuarios para brindar una mejor atención y
                                    seguimiento integrando la mayoría de las funciones disponibles por el servicio ,
                                    tanto mensajería como métricas de uso Usando el servicio de META  <a href="https://developers.facebook.com/docs/whatsapp/"><b>WABA</b></a>
                                </Typography>}
                            />
                        </ListItem>
                    </List>
                </Box>
            </TimelineContent>


        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent color="textSecondary">
                <b>
                    2020 - 2021
                </b>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>

                <TimelineSeparator sx={{ border: 'solid 3pt gray' }} />
                {/* //!******************************inprodi************************** */}

                <Box sx={{ textAlign: 'left' }}>
                    <Typography variant="h2" color="initial" sx={{ fontSize: '30pt', fontWeight: 'bold' }}>
                        {'Desarrollador FullStack'} </Typography>
                    <Typography variant="h2" color="initial" sx={{ fontSize: '15pt', marginLeft: '18pt' }}>
                        Inprodi WEB studio  <i>Zapopan, Jal.  </i></Typography>

                    <Typography variant="h1" color="initial" sx={{ fontSize: '20pt' }}>
                        Desarrollo y despliegue da Apps monolticas y APIS implementando tecnologías como Laravel 7.x Vue 2.x, NodeJS 14.x . <br />
                        integracion de librerias de Maps y pagos en algunas de estas hasta su despliegue en AWS .</Typography>
                </Box>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent color="textSecondary">
                <b>2018 - 2019</b>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <TimelineSeparator sx={{ border: 'solid 3pt gray' }} />
                <Box sx={{ textAlign: 'left' }}>
                    <Typography variant="h2" color="initial" sx={{ fontSize: '30pt', fontWeight: 'bold' }}>
                        {'Practicas profesionales'} </Typography>

                    <Typography variant="h2" color="initial" sx={{ fontSize: '15pt', marginLeft: '18pt' }}>
                        Colegio universitario de Yahualica  <i>San Francisco del rincón GTO. </i></Typography>

                    <Typography variant="h2" color="initial" sx={{ fontSize: '15pt' }}>
                        {'Colegio universitario de Yahualica- San Francisco del rincon GTO.'} </Typography>

                    <Typography variant="h1" color="initial" sx={{ fontSize: '20pt' }}>
                        Desarrollo de una plataforma web que almacenara los estudiantes de una
                        academia, clasificados por grupos para tener evaluaciones y promedios de los
                        alumnos inscritos en uno o varios cursos y generar boleta impresa.
                        El sistema tiene 3 roles, Administrador, Maestro y alumno, para acceder cada uno
                        a las vistas que le corresponden.
                    </Typography>
                </Box></TimelineContent>
        </TimelineItem>




    </Timeline>



    {/* *******************practicas****************** */}

</Box>);

export default Experience;