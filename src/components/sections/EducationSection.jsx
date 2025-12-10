import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { useTranslation } from 'react-i18next';
import { experenceEs } from '../../experence/es';
import { useInView } from 'react-intersection-observer';

export const EducationSection = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const education = Object.values(experenceEs.education).sort((a, b) => {
    const aYear = parseInt(a.time.split(' - ')[0]);
    const bYear = parseInt(b.time.split(' - ')[0]);
    return bYear - aYear;
  });

  return (
    <Box
      id='education'
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
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
            {t('education_title')}
          </Typography>
          <Typography variant='h6' color='text.secondary' sx={{ maxWidth: '700px', mx: 'auto' }}>
            {t('education_subtitle')}
          </Typography>
        </Box>

        <Box sx={{ maxWidth: '1200px', mx: 'auto', position: 'relative', minHeight: '100%' }}>
          {/* Timeline line - spans full height */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: 0, md: '12.5%' },
              top: 0,
              width: 3,
              display: { xs: 'none', md: 'block' },
              background: (theme) =>
                theme.palette.mode === 'dark'
                  ? 'linear-gradient(180deg, rgba(96,165,250,0.5) 0%, rgba(139,92,246,0.5) 100%)'
                  : 'linear-gradient(180deg, rgba(37,99,235,0.4) 0%, rgba(124,58,237,0.4) 100%)',
              borderRadius: 2,
              height: '100%',
            }}
          />

          <Grid container spacing={4}>
            {education.map((edu, index) => {
              const [startYear, endYear] = edu.time.split(' - ');
              return (
                <Grid container item xs={12} key={index} sx={{ position: 'relative' }}>
                  {/* Timeline Column */}
                  <Grid
                    item
                    xs={12}
                    md={3}
                    sx={{
                      display: { xs: 'none', md: 'flex' },
                      alignItems: 'center',
                      position: 'relative',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        position: 'relative',
                        zIndex: 2,
                        animation: inView ? `fadeInScale 0.6s ease-out ${index * 0.15 + 0.3}s both` : 'none',
                      }}
                    >
                      {/* Timeline dot */}
                      <Box
                        sx={{
                          width: 24,
                          height: 24,
                          borderRadius: '50%',
                          background: (theme) =>
                            theme.palette.mode === 'dark'
                              ? 'linear-gradient(135deg, #60A5FA 0%, #8B5CF6 100%)'
                              : 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
                          border: '4px solid',
                          borderColor: 'background.paper',
                          boxShadow: (theme) =>
                            theme.palette.mode === 'dark'
                              ? '0 0 0 4px rgba(96,165,250,0.3), 0 4px 12px rgba(96,165,250,0.4)'
                              : '0 0 0 4px rgba(37,99,235,0.2), 0 4px 12px rgba(37,99,235,0.3)',
                          flexShrink: 0,
                          position: 'absolute',
                          left: '50%',
                          transform: 'translateX(-50%)',
                        }}
                      />

                      {/* Year label - closer to the dot */}
                      <Typography
                        variant='body2'
                        sx={{
                          fontWeight: 600,
                          color: 'text.primary',
                          whiteSpace: 'nowrap',
                          ml: '50%',
                          pl: 2,
                        }}
                      >
                        {startYear}
                      </Typography>
                    </Box>
                  </Grid>

                  {/* Education Card Column */}
                  <Grid item xs={12} md={9}>
                    <Box
                      sx={{
                        animation: inView ? `fadeInUp 0.8s ease-out ${index * 0.1}s both` : 'none',
                      }}
                    >
                      <Paper
                        elevation={0}
                        sx={{
                          p: 3,
                          backgroundColor: 'background.paper',
                          border: '1px solid',
                          borderColor: 'divider',
                          borderRadius: 2,
                          transition: 'all 0.3s ease-in-out',
                          '&:hover': {
                            boxShadow: 4,
                            borderColor: 'primary.main',
                            transform: 'translateY(-2px)',
                          },
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                          <Box
                            sx={{
                              p: 1.5,
                              borderRadius: 2,
                              backgroundColor: (theme) =>
                                theme.palette.mode === 'dark' ? 'rgba(96,165,250,0.1)' : 'rgba(37,99,235,0.1)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}
                          >
                            <SchoolIcon
                              sx={{
                                fontSize: 32,
                                color: (theme) => (theme.palette.mode === 'dark' ? '#60A5FA' : '#2563EB'),
                              }}
                            />
                          </Box>
                          <Box sx={{ flexGrow: 1 }}>
                            <Typography variant='h5' component='h3' fontWeight={600} sx={{ mb: 1 }}>
                              {edu.title}
                            </Typography>
                            <Typography variant='h6' color='primary.main' sx={{ mb: 1 }}>
                              {edu.school}
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                              {edu.time}
                            </Typography>
                          </Box>
                        </Box>
                      </Paper>
                    </Box>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Box>
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
          @keyframes fadeInScale {
            from {
              opacity: 0;
              transform: scale(0);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
    </Box>
  );
};

