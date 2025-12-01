// Testimonios iniciales (mock data - puede expandirse con datos reales)
export const testimonials = [
  {
    id: 1,
    name: 'Cliente Satisfecho',
    company: 'Empresa Tech',
    rating: 5,
    comment:
      'Excelente trabajo en el desarrollo de nuestra API. Heriberto demostró gran profesionalismo y conocimiento técnico.',
    date: '2023-10-15',
    avatar: null,
  },
  {
    id: 2,
    name: 'Juan Pérez',
    company: 'Startup Innovadora',
    rating: 5,
    comment:
      'La aplicación desarrollada superó nuestras expectativas. Muy recomendado para proyectos fullstack.',
    date: '2023-09-20',
    avatar: null,
  },
  {
    id: 3,
    name: 'María González',
    company: 'Agencia Digital',
    rating: 4,
    comment:
      'Profesional, puntual y con excelente comunicación. El proyecto fue entregado a tiempo y con calidad.',
    date: '2023-08-10',
    avatar: null,
  },
];

// Función para calcular promedio de ratings
export const getAverageRating = (testimonialsList) => {
  if (!testimonialsList || testimonialsList.length === 0) return 0;
  const sum = testimonialsList.reduce((acc, t) => acc + t.rating, 0);
  return (sum / testimonialsList.length).toFixed(1);
};

// Función para agregar nuevo testimonio
export const addTestimonial = (newTestimonial) => {
  const testimonials = getStoredTestimonials();
  const updated = [...testimonials, { ...newTestimonial, id: Date.now() }];
  localStorage.setItem('testimonials', JSON.stringify(updated));
  return updated;
};

// Función para obtener testimonios del localStorage
export const getStoredTestimonials = () => {
  try {
    const stored = localStorage.getItem('testimonials');
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error loading testimonials:', error);
  }
  return testimonials; // Retorna los iniciales si no hay en storage
};

