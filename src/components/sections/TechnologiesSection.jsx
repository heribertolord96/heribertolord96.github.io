import { Box, Container, Typography, Grid, Paper, Tabs, Tab } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { technologies } from '../../data/technologies';
import { TechnologyBadge } from '../common/TechnologyBadge';
import { useInView } from 'react-intersection-observer';

export const TechnologiesSection = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const categories = [
    { key: 'all', label: t('technologies_all') },
    { key: 'frontend', label: t('technologies_frontend') },
    { key: 'backend', label: t('technologies_backend') },
    { key: 'devops', label: t('technologies_devops') },
    { key: 'cloud', label: t('technologies_cloud') },
    { key: 'tools', label: t('technologies_tools') },
  ];

  const currentTechnologies =
    selectedCategory === 'all'
      ? Object.values(technologies).flat()
      : technologies[selectedCategory] || [];

  return (
    <Box
      id='technologies'
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark'
            ? 'rgba(15, 23, 42, 0.7)'
            : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
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
            {t('technologies_title')}
          </Typography>
          <Typography variant='h6' color='text.secondary' sx={{ maxWidth: '700px', mx: 'auto' }}>
            {t('technologies_subtitle')}
          </Typography>
        </Box>

        <Paper
          elevation={0}
          sx={{
            p: 3,
            mb: 4,
            backgroundColor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
            animation: inView ? 'fadeInUp 0.8s ease-out 0.2s both' : 'none',
          }}
        >
          <Tabs
            value={selectedCategory}
            onChange={(e, newValue) => setSelectedCategory(newValue)}
            variant='scrollable'
            scrollButtons='auto'
            sx={{
              '& .MuiTab-root': {
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '1rem',
              },
            }}
          >
            {categories.map((category) => (
              <Tab key={category.key} label={category.label} value={category.key} />
            ))}
          </Tabs>
        </Paper>

        <Grid container spacing={3} justifyContent='center'>
          {currentTechnologies.map((tech, index) => (
            <Grid item key={tech.name}>
              <Box
                sx={{
                  animation: inView
                    ? `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                    : 'none',
                }}
              >
                <TechnologyBadge technology={tech} size='large' />
              </Box>
            </Grid>
          ))}
        </Grid>

        {currentTechnologies.length === 0 && (
          <Box textAlign='center' py={4}>
            <Typography variant='body1' color='text.secondary'>
              No hay tecnologías en esta categoría
            </Typography>
          </Box>
        )}
      </Container>

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

