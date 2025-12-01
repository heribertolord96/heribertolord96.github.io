// Mapeo de tecnologías con sus logos e información
export const technologies = {
  frontend: [
    { name: 'React', logo: '/images/react.jpg', level: 'advanced' },
    { name: 'Vue', logo: '/images/vue.png', level: 'advanced' },
    { name: 'JavaScript', logo: '/images/js.jpg', level: 'advanced' },
    { name: 'Vite', logo: '/images/vite.svg', level: 'intermediate' },
  ],
  backend: [
    { name: 'Laravel', logo: '/images/laravl.png', level: 'advanced' },
    { name: 'NodeJS', logo: '/images/nodejs.png', level: 'advanced' },
    { name: 'PHP', logo: '/images/php.png', level: 'advanced' },
    { name: 'MySQL', logo: '/images/mysql.png', level: 'advanced' },
  ],
  devops: [
    { name: 'Docker', logo: '/images/docker2.png', level: 'advanced' },
    { name: 'Linux', logo: '/images/linux.png', level: 'advanced' },
    { name: 'Ubuntu', logo: '/images/ubuntu-logo.png', level: 'advanced' },
    { name: 'CentOS', logo: '/images/centos.png', level: 'intermediate' },
    { name: 'Jenkins', logo: '/images/jenkins.png', level: 'intermediate' },
  ],
  cloud: [
    { name: 'AWS', logo: '/images/aws.png', level: 'intermediate' },
    { name: 'AWS S3', logo: '/images/awsS3.png', level: 'intermediate' },
    { name: 'Google Cloud', logo: '/images/gCloud.png', level: 'intermediate' },
    { name: 'Firebase', logo: '/images/firebase.png', level: 'intermediate' },
    { name: 'Vultr', logo: '/images/vultr.png', level: 'intermediate' },
  ],
  tools: [
    { name: 'Git', logo: '/images/git.png', level: 'advanced' },
    { name: 'Github', logo: '/images/Github.png', level: 'advanced' },
    { name: 'Stripe', logo: '/images/stripe.png', level: 'intermediate' },
    { name: 'Twilio', logo: '/images/twilio.png', level: 'intermediate' },
    { name: 'Google Maps', logo: '/images/gmaps.png', level: 'intermediate' },
  ],
};

// Mapeo de nombres alternativos a nombres estándar
const techNameMap = {
  'laravel 7.*': 'Laravel',
  'laravel 7.*, 8.*, 9.*, 10': 'Laravel',
  'vue 2.*': 'Vue',
  'vue': 'Vue',
  'nodejs': 'NodeJS',
  'node': 'NodeJS',
  'mysql': 'MySQL',
  'javascript': 'JavaScript',
  'js': 'JavaScript',
  'reactjs': 'React',
  'react': 'React',
  'docker': 'Docker',
  'git': 'Git',
  'github': 'Github',
  'aws s3': 'AWS S3',
  's3': 'AWS S3',
  'aws ec2': 'AWS',
  'aws cli': 'AWS',
  'aws': 'AWS',
  'google maps': 'Google Maps',
  'google cloud': 'Google Cloud',
  'apis google cloud': 'Google Cloud',
  'ubuntu': 'Ubuntu',
  'centos 7': 'CentOS',
  'centos': 'CentOS',
  'linux': 'Linux',
  'jenkins': 'Jenkins',
  'stripe': 'Stripe',
  'twilio': 'Twilio',
  'firebase': 'Firebase',
  'vultr': 'Vultr',
  'vite': 'Vite',
  'php': 'PHP',
};

// Función helper para obtener logo de tecnología
export const getTechnologyLogo = (techName) => {
  if (!techName) return null;
  
  // Normalizar el nombre
  const normalizedName = techName.trim();
  const mappedName = techNameMap[normalizedName.toLowerCase()] || normalizedName;
  
  const allTechs = Object.values(technologies).flat();
  const tech = allTechs.find((t) => {
    const tName = t.name.toLowerCase();
    const searchName = mappedName.toLowerCase();
    return tName === searchName || tName.includes(searchName) || searchName.includes(tName);
  });
  
  return tech?.logo || null;
};

// Lista completa de todas las tecnologías
export const allTechnologies = Object.values(technologies).flat();

