import { useState } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { services } from '../../data/services';
import { ServiceCard } from '../common/ServiceCard';
import { ServiceRequestForm } from '../services/ServiceRequestForm';
import { useInView } from 'react-intersection-observer';

export const ServicesSection = () => {
  const { t } = useTranslation();
  const [formOpen, setFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleRequestService = (service) => {
    setSelectedService(service);
    setFormOpen(true);
  };

  const handleCloseForm = () => {
    setFormOpen(false);
    setSelectedService(null);
  };

  return (
    <Box
      id='services'
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth='lg'>
        <Box
          sx={{
            textAlign: 'center',
            mb: 6,
            animation: inView ? 'fadeInUp 0.8s ease-out' : 'none',
          }}
        >
          <Typography
            variant='h2'
            component='h2'
            sx={{
              mb: 2,
              fontWeight: 700,
              background: (theme) =>
                theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, #60A5FA 0%, #8B5CF6 100%)'
                  : 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {t('services_title')}
          </Typography>
          <Typography variant='h6' color='text.secondary' sx={{ maxWidth: '700px', mx: 'auto' }}>
            {t('services_subtitle')}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={service.id}>
              <Box
                sx={{
                  animation: inView
                    ? `fadeInUp 0.8s ease-out ${index * 0.1}s both`
                    : 'none',
                }}
              >
                <ServiceCard service={service} onRequestService={handleRequestService} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      <ServiceRequestForm
        open={formOpen}
        onClose={handleCloseForm}
        selectedService={selectedService}
      />

      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </Box>
  );
};

