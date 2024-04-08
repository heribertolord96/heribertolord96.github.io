import { TableCell, TableRow, Typography } from "@mui/material";

const Skills = () => (


    <>
        <Typography variant="h1" color="info" sx={{ fontWeight: 'bold', fontSize: '30pt' }}>
            {'Aptitudes'} </Typography>
        <TableRow
            key={'trow'}
            sx={{ '&:last-child td, &:last-child th': { border: 0 }, maxHeight: '300px' }}

        >
            <TableCell >

                <ul>
                    <li>    Arduino
                    </li>
                    <li> Arquitectura de sistemas
                    </li>
                    <li> Arquitectura de software
                    </li>
                    <li> AWS </li>
                    <li> AWS CLI </li>
                    <li> centos7 </li>
                    <li> Comandos y
                        consolas (CMD,
                        Linux(WSL), Bash)
                    </li>
                    <li> CSS </li>
                    <li> CWP </li>
                    <li> Docker </li>
                    <li> Documentacion y

                        prueba de rutas con
                        postman
                    </li>
                    <li> Git </li>
                    <li> HTML </li>
                    <li> JavaScript </li>
                    <li> Laravel </li>
                    <li> LAMP </li>
                </ul>
            </TableCell>
            <TableCell >
                <ul>
                    <li>inglés (Básico lectura)</li>
                    <li>Metodologia Scrum</li>
                    <li>MongoDB</li>
                    <li>MYSQL</li>
                    <li>Nodejs</li>
                    <li>PHP</li>
                    <li>Planning con clickup, Trello</li>
                    <li>ReactJS</li>
                    <li>SSH</li>
                    <li>SSH desde laravel</li>
                    <li>Stripe</li>
                    <li>Test unitarios</li>
                    <li>Twilio</li>
                    <li>TypeScrypt</li>
                    <li>Ubuntu</li>
                    <li>Vuejs</li>
                    <li>Vultr</li>
                </ul>
            </TableCell>
        </TableRow>
    </>

);
export default Skills;