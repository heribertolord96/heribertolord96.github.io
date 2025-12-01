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
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    <Box sx={{ pt: 2 }}>
      <Typography variant='h6' sx={{ my: 2, px: 2, fontWeight: 700, textAlign: 'center' }}>
        {t('hero_title')}
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <ListItem key={item.key} disablePadding>
              <ListItemButton onClick={() => scrollToSection(item.id)}>
                <ListItemIcon>
                  <IconComponent />
                </ListItemIcon>
                <ListItemText primary={t(`nav_${item.key}`)} />
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

  // return 'esta es la pagina';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          // backgroundImage: 'url(images/background-pattern.svg)',
          backgroundRepeat: 'repeat',
          backgroundSize: '400px 400px',
          opacity: 0.4,
          zIndex: 0,
          pointerEvents: 'none',
        },
        // backgroundImage: 'url(images/background-pattern.svg)',
        // backgroundColor: 'cyan',
        // border: 'dashed lime 4pt'
      }}
    >
      <AppBar
        position='sticky'
        elevation={0}
        sx={{
          transition: 'all 0.3s ease-in-out',
          /*    backgroundColor: (theme) =>
               theme.palette.mode === 'dark'
                 ? 'rgba(15, 23, 42, 0.8)'
                 : 'rgba(255, 255, 255, 0.8)', */
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container maxWidth='lg' >
          <Toolbar disableGutters sx={{ minHeight: '56px !important', py: 0.5 }}>
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
                return (
                  <Tooltip key={item.key} title={label} arrow>
                    <Button
                      onClick={() => scrollToSection(item.id)}
                      startIcon={<IconComponent sx={{ fontSize: 18 }} />}
                      sx={{
                        color: 'text.primary',
                        fontWeight: 500,
                        fontSize: '0.875rem',
                        px: 1.5,
                        minWidth: 'auto',
                        textTransform: 'none',
                        '&:hover': {
                          backgroundColor: 'action.hover',
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

      <Box component='main' sx={{
        flexGrow: 1,
        position: 'relative',
        zIndex: 1,
        // border: 'dashed lime 4pt'
      }}>
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
          zIndex: 1,
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

