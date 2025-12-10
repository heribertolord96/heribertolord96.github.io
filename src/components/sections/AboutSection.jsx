import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { profile } from '../../data/profile';
import { useInView } from 'react-intersection-observer';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SpeedIcon from '@mui/icons-material/Speed';
import CodeIcon from '@mui/icons-material/Code';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export const AboutSection = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const valueProps = [
    {
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
      titleKey: 'about_efficiency',
      descriptionKey: 'about_efficiency_desc',
    },
    {
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      titleKey: 'about_quality',
      descriptionKey: 'about_quality_desc',
    },
    {
      icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
      titleKey: 'about_ai_innovation',
      descriptionKey: 'about_ai_innovation_desc',
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
      titleKey: 'about_scalability',
      descriptionKey: 'about_scalability_desc',
    },
  ];

  return (
    <Box
      id='about'
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
            {t('about_title')}
          </Typography>
          <Typography variant='h6' color='text.secondary' sx={{ maxWidth: '700px', mx: 'auto' }}>
            {t('about_subtitle')}
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                backgroundColor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                animation: inView ? 'fadeInUp 0.8s ease-out 0.2s both' : 'none',
              }}
            >
              <Typography variant='h5' component='h3' sx={{ mb: 2, fontWeight: 600 }}>
                {t('about_my_story')}
              </Typography>
              <Typography variant='body1' color='text.secondary' paragraph>
                {profile.about}
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                background: (theme) =>
                  theme.palette.mode === 'dark'
                    ? 'linear-gradient(135deg, #1E293B 0%, #334155 100%)'
                    : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'background.paper',
                animation: inView ? 'fadeInUp 0.8s ease-out 0.4s both' : 'none',
              }}
            >
              <Typography variant='h5' component='h3' sx={{ mb: 2, fontWeight: 600 }}>
                {t('about_value_proposition')}
              </Typography>
              <Typography variant='body1' paragraph sx={{ opacity: 0.95 }}>
                {profile.valueProposition}
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Chip
                  label={t('about_ai_focus')}
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    color: 'background.paper',
                    fontWeight: 600,
                  }}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          {valueProps.map((prop, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  height: '100%',
                  backgroundColor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'all 0.3s ease-in-out',
                  animation: inView ? `fadeInUp 0.8s ease-out ${0.6 + index * 0.2}s both` : 'none',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 4,
                    borderColor: 'primary.main',
                  },
                }}
              >
                <Box
                  sx={{
                    color: 'primary.main',
                    mb: 2,
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  {prop.icon}
                </Box>
                <Typography variant='h6' component='h4' sx={{ mb: 1, fontWeight: 600 }}>
                  {t(prop.titleKey)}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {t(prop.descriptionKey)}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
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

