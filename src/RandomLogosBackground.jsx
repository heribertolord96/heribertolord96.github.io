import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import aws from './images/aws.png';
import awsS3 from './images/awsS3.png';
import js from './images/js.jpg';
import laravel1 from './images/laravel_1.png';
import laravl from './images/laravl.png'; // Asegúrate de que el nombre del archivo sea correcto
import mysql from './images/mysql.png';
import nodejs from './images/nodejs.png';
import node from './images/node.png';
import php from './images/php.png';
import react from './images/react.jpg';
import vite from './images/vite.svg';
import vue from './images/vue.png';
import github from './images/Github.png';
import jenkins from './images/jenkins.png';
import docker1 from './images/docker1.png';
import docker2 from './images/docker2.png';
import ubuntuLogo from './images/ubuntu-logo.png';
import git from './images/git.png';
import linux from './images/linux.png';
import centos from './images/centos.png';
import npmLogo from './images/npm-logo.png';
import dns from './images/dns.png';
import cppLogo from './images/C++_logo.png';
// Añade más importaciones según sea necesario

const logos = [
    aws,
    awsS3,
    js,
    laravel1,
    laravl,
    mysql,
    nodejs,
    node,
    php,
    react,
    vite,
    vue,
    github,
    jenkins,
    docker1,
    docker2,
    ubuntuLogo,
    git,
    linux,
    centos,
    npmLogo,
    dns,
    cppLogo,
    // Añade más referencias al array según sea necesario
];

const RandomLogosBackground = ({ children }) => {

    const [key, setKey] = useState(0); // Agrega un estado para forzar la re-renderización

    useEffect(() => {
        const interval = setInterval(() => {
            setKey(prevKey => prevKey + 1); // Cambia la clave para forzar la re-renderización
        }, 2000); // Cambia cada 5 segundos

        return () => clearInterval(interval); // Limpia el intervalo
    }, []);

    // Calcula la cantidad de logotipos basada en el tamaño del contenedor, por ejemplo
    const logoCount = 20; // Ajusta este número según tus necesidades

    return (
        <Box sx={{
            position: 'relative',
            width: 'auto', // Ajusta al tamaño de tu contenedor
            height: '1300px', // Ajusta al tamaño de tu contenedor según sea necesario
            overflow: 'hidden',
        }}>
            {Array.from({ length: logoCount }).map((_, index) => (
                <Box
                    key={index}
                    component="img"
                    // src={logos[Math.floor(Math.random() * logos.length)]} // Selecciona un logo aleatorio del array
                    src={logos[index]} // Selecciona un logo aleatorio del array
                    sx={{
                        position: 'absolute',
                        // backgroundColor: 'transparent',
                        padding: '0',
                        width: '100px', // Tamaño fijo para cada logo
                        height: '100px',
                        top: `${Math.random() * 100}%`, // Posición aleatoria
                        left: `${Math.random() * 100}%`, // Posición aleatoria
                        // transform: `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`,
                    }}
                />
            ))}
            <Box sx={{
                position: 'absolute', 
                top: 0, left: 0, right: 0, bottom: 0, zIndex: 0,
                backgroundColor: '#888c9db0',
                margin: 0,
                // borderRadius: '15pt'
            }}>
                {children}
            </Box>

        </Box>
    );
};

export default RandomLogosBackground;
