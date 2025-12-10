import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
  useScrollTrigger,
  Fab,
  Tooltip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CodeIcon from '@mui/icons-material/Code';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SchoolIcon from '@mui/icons-material/School';
import PsychologyIcon from '@mui/icons-material/Psychology';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { useTranslation } from 'react-i18next';
import { LanguageSelect } from '../common/LanguageSelect';
import { ThemeToggle } from '../common/ThemeToggle';
import { profile } from '../../data/profile';

const navItems = [
  { key: 'home', id: 'hero', icon: HomeIcon },
  { key: 'about', id: 'about', icon: PersonIcon },
  { key: 'services', id: 'services', icon: BusinessCenterIcon },
  { key: 'technologies', id: 'technologies', icon: CodeIcon },
  { key: 'experience', id: 'experience', icon: WorkHistoryIcon },
  { key: 'education', id: 'education', icon: SchoolIcon },
  { key: 'skills', id: 'skills', icon: PsychologyIcon },
  { key: 'testimonials', id: 'testimonials', icon: RateReviewIcon },
  { key: 'contact', id: 'contact', icon: ContactMailIcon },
];

function ScrollToTop({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      onClick={handleClick}
      role='presentation'
      sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1000 }}
    >
      {children}
    </Box>
  );
}

export const ProfessionalLayout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detect active section based on scroll position
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Also observe hero section
    const heroElement = document.getElementById('hero');
    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ pt: 2, }}>
      <Typography variant='h6' sx={{ my: 2, px: 2, fontWeight: 700, textAlign: 'center' }}>
        {t('hero_title')}
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeSection === item.id;
          return (
            <ListItem key={item.key} disablePadding>
              <ListItemButton
                onClick={() => scrollToSection(item.id)}
                sx={{
                  backgroundColor: isActive ? 'action.selected' : 'transparent',
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  },
                }}
              >
                <ListItemIcon>
                  <IconComponent color={isActive ? 'primary' : 'inherit'} />
                </ListItemIcon>
                <ListItemText
                  primary={t(`nav_${item.key}`)}
                  primaryTypographyProps={{
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? 'primary.main' : 'text.primary',
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ px: 2, py: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant='body2'>{t('select_language')}</Typography>
          <LanguageSelect />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant='body2'>{t('theme_light_mode')}</Typography>
          <ThemeToggle />
        </Box>
      </Box>
    </Box>
  );



  return (
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      <AppBar
        position='sticky'
        elevation={0}
        sx={{
          transition: 'all 0.3s ease-in-out',
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark'
              ? 'rgba(15, 23, 42, 0.85)'
              : 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid',
          borderColor: 'divider',
          zIndex: 1100,
        }}
      >
        <Container maxWidth='lg' >
          <Toolbar disableGutters sx={{ minHeight: '56px !important', py: 0.5 }}>
            {/*  */}

            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                flexGrow: 1,
                justifyContent: 'center',
                gap: 0.5,
                mx: 2,
              }}
            >
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const label = t(`nav_${item.key}`);
                const truncatedLabel = label.length > 12 ? label.substring(0, 10) + '...' : label;
                const isActive = activeSection === item.id;
                return (
                  <Tooltip key={item.key} title={label} arrow>
                    <Button
                      onClick={() => scrollToSection(item.id)}
                      startIcon={<IconComponent sx={{ fontSize: 18 }} />}
                      sx={{
                        color: isActive ? 'primary.main' : 'text.primary',
                        fontWeight: isActive ? 600 : 500,
                        fontSize: '0.875rem',
                        px: 1.5,
                        minWidth: 'auto',
                        textTransform: 'none',
                        position: 'relative',
                        backgroundColor: isActive ? (theme) => (theme.palette.mode === 'dark' ? 'rgba(96,165,250,0.1)' : 'rgba(37,99,235,0.08)') : 'transparent',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: isActive ? '80%' : '0%',
                          height: 2,
                          backgroundColor: 'primary.main',
                          borderRadius: 1,
                          transition: 'width 0.3s ease-in-out',
                        },
                        '&:hover': {
                          backgroundColor: (theme) => (theme.palette.mode === 'dark' ? 'rgba(96,165,250,0.15)' : 'rgba(37,99,235,0.12)'),
                          '&::after': {
                            width: '80%',
                          },
                        },
                      }}
                    >
                      <Box
                        component='span'
                        sx={{
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          maxWidth: '100px',
                        }}
                      >
                        {truncatedLabel}
                      </Box>
                    </Button>
                  </Tooltip>
                );
              })}
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
              <ThemeToggle />
              <LanguageSelect />
            </Box>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' }, ml: 'auto' }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant='temporary'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
          },
        }}
      >
        {drawer}
      </Drawer>

      <Box
        component='main'
        sx={{
          flexGrow: 1,
          position: 'relative',
          zIndex: 2,
          '&::before': {
            content: '""',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(/images/officedeveloperbg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            zIndex: 0,
            pointerEvents: 'none',
          },
        }}
      >
        {children}
      </Box>

      <Box
        component='footer'
        sx={{
          py: 4,
          px: 2,
          mt: 'auto',
          backgroundColor: 'background.paper',
          borderTop: '1px solid',
          borderColor: 'divider',
          position: 'relative',
          zIndex: 3,
        }}
      >
        <Container maxWidth='lg'>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
            // backgroundColor: 'red',
            }}
          >
            <Box>
              <Typography variant='body2' color='text.secondary' sx={{ mb: 0.5 }}>
                © {new Date().getFullYear()} {profile.name} - {t('footer_rights')}
              </Typography>
              {/*    <Typography variant='caption' color='text.secondary'>
                {t('footer_author')}
              </Typography> */}
            </Box>
            <Typography variant='body2' color='text.secondary'>
              {t('footer_built_with')} React + Vite + Material-UI
            </Typography>
          </Box>
        </Container>
      </Box>

      <ScrollToTop>
        <Fab size='small' aria-label='scroll back to top' color='primary'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollToTop>
    </Box>
  );
};

