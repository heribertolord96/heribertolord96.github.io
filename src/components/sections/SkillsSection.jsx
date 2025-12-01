import { Box, Container, Typography, Grid, Paper, LinearProgress } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import BuildIcon from '@mui/icons-material/Build';
import CodeIcon from '@mui/icons-material/Code';
import ComputerIcon from '@mui/icons-material/Computer';
import TerminalIcon from '@mui/icons-material/Terminal';
import SearchIcon from '@mui/icons-material/Search';
import GroupIcon from '@mui/icons-material/Group';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PsychologyIcon from '@mui/icons-material/Psychology';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';

const professionalSkills = [
  { name: 'Requerimientos', value: 90, category: 'requirements', icon: SearchIcon, key: 'skills_requirements' },
  { name: 'Backend', value: 85, category: 'backend', icon: TerminalIcon, key: 'skills_backend' },
  { name: 'Frontend', value: 75, category: 'frontend', icon: CodeIcon, key: 'skills_frontend' },
  { name: 'Linux', value: 75, category: 'devops', icon: ComputerIcon, key: 'skills_linux' },
  { name: 'Investigación', value: 100, category: 'research', icon: SearchIcon, key: 'skills_research' },
];

const softSkills = [
  { name: 'Trabajo en Equipo', value: 90, icon: GroupIcon, key: 'soft_teamwork' },
  { name: 'Comunicación', value: 85, icon: RecordVoiceOverIcon, key: 'soft_communication' },
  { name: 'Resolución de Problemas', value: 95, icon: LightbulbIcon, key: 'soft_problem_solving' },
  { name: 'Adaptabilidad', value: 80, icon: TrendingUpIcon, key: 'soft_adaptability' },
  { name: 'Liderazgo', value: 75, icon: PsychologyIcon, key: 'soft_leadership' },
];

// Helper function to get color based on percentage
const getProgressColor = (value) => {
  if (value >= 80) return '#10B981'; // Green
  if (value >= 60) return '#F59E0B'; // Orange
  if (value >= 40) return '#F97316'; // Orange-red
  return '#EF4444'; // Red
};

export const SkillsSection = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [animatedProfessional, setAnimatedProfessional] = useState(professionalSkills.map(() => 0));
  const [animatedSoft, setAnimatedSoft] = useState(softSkills.map(() => 0));

  useEffect(() => {
    if (inView) {
      const timers1 = professionalSkills.map((skill, index) => {
        return setTimeout(() => {
          setAnimatedProfessional((prev) => {
            const newValues = [...prev];
            newValues[index] = skill.value;
            return newValues;
          });
        }, index * 150);
      });

      const timers2 = softSkills.map((skill, index) => {
        return setTimeout(() => {
          setAnimatedSoft((prev) => {
            const newValues = [...prev];
            newValues[index] = skill.value;
            return newValues;
          });
        }, (professionalSkills.length + index) * 150);
      });

      return () => {
        [...timers1, ...timers2].forEach((timer) => clearTimeout(timer));
      };
    }
  }, [inView]);

  const SkillCard = ({ skill, animatedValue, index, isSoft = false }) => {
    const IconComponent = skill.icon;
    const progressColor = getProgressColor(animatedValue);
    return (
      <Paper
        elevation={0}
        sx={{
          p: 3,
          backgroundColor: 'background.paper',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2,
          transition: 'all 0.3s ease-in-out',
          animation: inView ? `fadeInUp 0.8s ease-out ${index * 0.1}s both` : 'none',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: 4,
            borderColor: 'primary.main',
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Box
            sx={{
              p: 1.5,
              borderRadius: 2,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? 'rgba(96,165,250,0.1)' : 'rgba(37,99,235,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IconComponent
              sx={{
                fontSize: 28,
                color: (theme) =>
                  theme.palette.mode === 'dark' ? '#60A5FA' : '#2563EB',
              }}
            />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant='h6' component='h3' fontWeight={600}>
              {t(skill.key) || skill.name}
            </Typography>
            <Typography variant='body1' color='primary.main' fontWeight={600}>
              {animatedValue}%
            </Typography>
          </Box>
        </Box>
        <LinearProgress
          variant='determinate'
          value={animatedValue}
          sx={{
            height: 10,
            borderRadius: 5,
            backgroundColor: 'action.hover',
            '& .MuiLinearProgress-bar': {
              borderRadius: 5,
              backgroundColor: progressColor,
              transition: 'background-color 0.3s ease',
            },
          }}
        />
      </Paper>
    );
  };

  return (
    <Box
      id='skills'
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
            {t('skills_title')}
          </Typography>
          <Typography variant='h6' color='text.secondary' sx={{ maxWidth: '700px', mx: 'auto' }}>
            {t('skills_subtitle')}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography
              variant='h4'
              component='h3'
              sx={{
                mb: 3,
                fontWeight: 600,
                color: 'text.primary',
              }}
            >
              {t('skills_professional')}
            </Typography>
            <Grid container spacing={3}>
              {professionalSkills.map((skill, index) => (
                <Grid item xs={12} key={skill.name}>
                  <SkillCard skill={skill} animatedValue={animatedProfessional[index]} index={index} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant='h4'
              component='h3'
              sx={{
                mb: 3,
                fontWeight: 600,
                color: 'text.primary',
              }}
            >
              {t('skills_soft')}
            </Typography>
            <Grid container spacing={3}>
              {softSkills.map((skill, index) => (
                <Grid item xs={12} key={skill.name}>
                  <SkillCard skill={skill} animatedValue={animatedSoft[index]} index={index} isSoft={true} />
                </Grid>
              ))}
            </Grid>
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

