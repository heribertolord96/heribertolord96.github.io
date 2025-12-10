import { Box, Container, Typography, Button, Avatar, Grid, Paper } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { useTranslation } from 'react-i18next';
import { profile } from '../../data/profile';
import { useInView } from 'react-intersection-observer';

export const HeroSection = ({ onRequestService, onViewServices }) => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Box
      id='hero'
      ref={ref}
      sx={{
        // border: '1px solid red',
        // minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #334155 100%)'
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: (theme) =>
            theme.palette.mode === 'dark'
              ? 'radial-gradient(circle at 20% 50%, rgba(96,165,250,0.1) 0%, transparent 50%)'
              : 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
        },
      }}
    >
      <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 1, }}>
        <Grid container spacing={4} alignItems='center'>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                mb: { xs: 4, md: 0 },
                animation: inView ? 'fadeInUp 0.8s ease-out' : 'none',
              }}
            >
              <Avatar
                src={profile.avatar}
                alt={profile.name}
                sx={{
                  width: { xs: 200, sm: 250, md: 300 },
                  height: { xs: 200, sm: 250, md: 300 },
                  border: '8px solid',
                  borderColor: 'background.paper',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                }}
              />
              <Typography
                variant='h6'
                component='div'
                sx={{
                  flexGrow: { xs: 1, sm: 0 },
                  fontWeight: 700,
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
                onClick={() => scrollToSection('hero')}
              >
                {t('hero_title')}
              </Typography>
              <Typography
                variant='h1'
                component='h1'
                sx={{
                  mb: 2,
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                  lineHeight: 1.2,
                }}
              >
                {profile.name}
              </Typography>

            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box
              sx={{
                animation: inView ? 'fadeInUp 0.8s ease-out 0.2s both' : 'none',
                textAlign: { xs: 'center', md: 'left' },
              }}
            >


              <Typography
                variant='h4'
                component='h2'
                sx={{
                  mb: 3,
                  color: '#FFFFFF',
                  opacity: 0.95,
                  fontWeight: 400,
                  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                }}
              >
                {t('hero_subtitle')}
              </Typography>

              <Typography
                variant='h6'
                component='p'
                sx={{
                  mb: 4,
                  color: '#FFFFFF',
                  opacity: 0.9,
                  fontSize: { xs: '1rem', sm: '1.125rem' },
                  maxWidth: { md: '80%' },
                }}
              >
                {profile.about}
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  flexDirection: { xs: 'column', sm: 'row' },
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  mb: 4,
                  flexWrap: 'wrap',
                }}
              >
                <Button
                  variant='contained'
                  size='large'
                  onClick={onRequestService}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark' ? '#FFFFFF' : '#FFFFFF',
                    color: (theme) =>
                      theme.palette.mode === 'dark' ? '#1E293B' : '#667eea',
                    '&:hover': {
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#F1F5F9' : '#F8F9FA',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                    },
                  }}
                >
                  {t('hero_cta_primary')}
                </Button>

                <Button
                  variant='outlined'
                  size='large'
                  onClick={onViewServices}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderColor: '#FFFFFF',
                    borderWidth: 2,
                    color: '#FFFFFF',
                    '&:hover': {
                      borderColor: '#FFFFFF',
                      borderWidth: 2,
                      backgroundColor: 'rgba(255,255,255,0.15)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  {t('hero_cta_secondary')}
                </Button>

                <Button
                  variant='outlined'
                  size='large'
                  startIcon={<DownloadIcon />}
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/cv/heriberto-hernandez-cv.pdf';
                    link.download = 'Heriberto-Hernandez-CV.pdf';
                    link.click();
                  }}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderColor: '#FFFFFF',
                    borderWidth: 2,
                    color: '#FFFFFF',
                    '&:hover': {
                      borderColor: '#FFFFFF',
                      borderWidth: 2,
                      backgroundColor: 'rgba(255,255,255,0.15)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  {t('hero_download_cv')}
                </Button>
              </Box>

              <Grid container spacing={3} sx={{ mt: 2 }}>
                <Grid item xs={4}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      textAlign: 'center',
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'dark'
                          ? 'rgba(96,165,250,0.1)'
                          : 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: (theme) =>
                        theme.palette.mode === 'dark'
                          ? 'rgba(96,165,250,0.2)'
                          : 'rgba(255,255,255,0.2)',
                    }}
                  >
                    <Typography variant='h4' sx={{ color: '#FFFFFF', fontWeight: 700 }}>
                      {profile.keyMetrics.yearsExperience}+
                    </Typography>
                    <Typography variant='caption' sx={{ color: '#FFFFFF', opacity: 0.9 }}>
                      {t('hero_years_experience')}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      textAlign: 'center',
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'dark'
                          ? 'rgba(96,165,250,0.1)'
                          : 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: (theme) =>
                        theme.palette.mode === 'dark'
                          ? 'rgba(96,165,250,0.2)'
                          : 'rgba(255,255,255,0.2)',
                    }}
                  >
                    <Typography variant='h4' sx={{ color: '#FFFFFF', fontWeight: 700 }}>
                      {profile.keyMetrics.projectsCompleted}+
                    </Typography>
                    <Typography variant='caption' sx={{ color: '#FFFFFF', opacity: 0.9 }}>
                      {t('hero_projects')}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      textAlign: 'center',
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'dark'
                          ? 'rgba(96,165,250,0.1)'
                          : 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: (theme) =>
                        theme.palette.mode === 'dark'
                          ? 'rgba(96,165,250,0.2)'
                          : 'rgba(255,255,255,0.2)',
                    }}
                  >
                    <Typography variant='h4' sx={{ color: '#FFFFFF', fontWeight: 700 }}>
                      {profile.keyMetrics.technologies}+
                    </Typography>
                    <Typography variant='caption' sx={{ color: '#FFFFFF', opacity: 0.9 }}>
                      {t('hero_technologies')}
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </Grid>
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

