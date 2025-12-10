import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import { useTranslation } from 'react-i18next';
import { experenceEs } from '../../experence/es';
import { getTechnologyLogo } from '../../data/technologies';
import { useInView } from 'react-intersection-observer';

export const ExperienceSection = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const experiences = Object.values(experenceEs.timeline).sort((a, b) => {
    const aFrom = parseInt(a.from);
    const bFrom = parseInt(b.from);
    return bFrom - aFrom;
  });

  return (
    <Box
      id='experience'
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
            {t('experience_title')}
          </Typography>
          <Typography variant='h6' color='text.secondary' sx={{ maxWidth: '700px', mx: 'auto' }}>
            {t('experience_subtitle')}
          </Typography>
        </Box>

        <Box sx={{ maxWidth: '1200px', mx: 'auto', position: 'relative', minHeight: '100%' }}>
          {/* Timeline line - spans full height of content */}
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
            {experiences.map((exp, index) => (
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
                    // border: '1px solid red',
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
                      {exp.from}
                    </Typography>
                  </Box>
                </Grid>

                {/* Accordion Column */}
                <Grid item xs={12} md={9}>
                  <Box
                    sx={{
                      animation: inView ? `fadeInUp 0.8s ease-out ${index * 0.1}s both` : 'none',
                    }}
                  >
                    <Accordion
                      expanded={expanded === index}
                      onChange={handleChange(index)}
                      sx={{
                        backgroundColor: 'background.paper',
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 2,
                        '&:before': {
                          display: 'none',
                        },
                        '&:hover': {
                          boxShadow: 4,
                          borderColor: 'primary.main',
                        },
                      }}
                    >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  '& .MuiAccordionSummary-content': {
                    my: 2,
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                  <Avatar
                    sx={{
                      bgcolor: 'primary.main',
                      width: 56,
                      height: 56,
                    }}
                  >
                    <WorkIcon />
                  </Avatar>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant='h6' component='h3' fontWeight={600}>
                      {exp.title}
                    </Typography>
                    <Typography variant='subtitle1' color='text.secondary' sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
                      <LocationOnIcon fontSize='small' />
                      {exp.company} - {exp.location}
                    </Typography>
                    <Typography variant='body2' color='text.secondary' sx={{ mt: 0.5 }}>
                      {exp.from} - {exp.to}
                    </Typography>
                  </Box>
                </Box>
              </AccordionSummary>

              <AccordionDetails>
                <Typography variant='body1' color='text.secondary' paragraph>
                  {exp.description}
                </Typography>

                <Grid container spacing={3} sx={{ mt: 1 }}>
                  {exp.responsibilities && exp.responsibilities.length > 0 && (
                    <Grid item xs={12} md={6}>
                      <Typography variant='h6' sx={{ mb: 2, fontWeight: 600 }}>
                        {t('experience_responsibilities')}
                      </Typography>
                      <List dense>
                        {exp.responsibilities.map((resp, idx) => (
                          <ListItem key={idx} sx={{ py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                              <StarIcon fontSize='small' color='primary' />
                            </ListItemIcon>
                            <ListItemText primary={resp} />
                          </ListItem>
                        ))}
                      </List>
                    </Grid>
                  )}

                  {exp.tech_scratch && exp.tech_scratch.length > 0 && (
                    <Grid item xs={12} md={6}>
                      <Typography variant='h6' sx={{ mb: 2, fontWeight: 600 }}>
                        {t('experience_technologies')}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {exp.tech_scratch.map((tech, idx) => {
                          const logo = getTechnologyLogo(tech);
                          return (
                            <Chip
                              key={idx}
                              label={tech}
                              avatar={logo ? <Avatar src={logo} alt={tech} /> : undefined}
                              size='small'
                              sx={{
                                backgroundColor: 'primary.light',
                                color: 'white',
                                '& .MuiChip-avatar': {
                                  width: 20,
                                  height: 20,
                                },
                              }}
                            />
                          );
                        })}
                      </Box>
                    </Grid>
                  )}
                </Grid>
              </AccordionDetails>
            </Accordion>
            </Box>
            </Grid>
            </Grid>
            ))}
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

