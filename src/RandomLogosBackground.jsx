import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';

// Array de URLs de tus imágenes/logotipos
const logos = [
  '/src/images/aws.png',
  '/src/images/awsS3.png',
  '/src/images/js.jpg',
  '/src/images/laravel1.png',
  '/src/images/larevel2.png',
  '/src/images/mysql.png',
  '/src/images/nodejs.png',
   '/src/images/node.png',
  '/src/images/php.png',
  '/src/images/react.jpg',
  '/src/images/vite.svg',
  '/src/images/vue.png',
  '/src/images/Github.png',
  '/src/images/jenkins.png',
  '/src/images/docker1.png',
  '/src/images/docker2.png',
  '/src/images/ubuntu-logo.png',
  '/src/images/git.png',
  '/src/images/linux.png',
  '/src/images/centos.png',
  '/src/images/npm-logo.png',
  '/src/images/dns.png',
  '/src/images/C++_logo.png'
  // Añade más URLs según sea necesario
];

const RandomLogosBackground = () => {

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
      width: '100%', // Ajusta al tamaño de tu contenedor
      height: '1700px', // Ajusta al tamaño de tu contenedor
    //   backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
      overflow: 'hidden',
    //   border:'dotted blue 8px'
    }}>
      {Array.from({ length: logoCount }).map((_, index) => (
        <Box
          key={index}
          component="img"
          src={logos[Math.floor(Math.random() * logos.length)]} // Selecciona un logo aleatorio del array
          sx={{
            position: 'absolute',
            padding:'0',
            width: '100px', // Tamaño fijo para cada logo
            height: '100px',
            top: `${Math.random() * 100}%`, // Posición aleatoria
            left: `${Math.random() * 100}%`, // Posición aleatoria
            // transform: 'translate(-50%, -50%)' // Centra las imágenes en sus posiciones aleatorias
            transform: `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`,

          }}
        />
      ))}
    </Box>
  );
};

export default RandomLogosBackground;
