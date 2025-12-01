import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  IconButton,
  Link,
  Alert,
  CircularProgress,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useTranslation } from 'react-i18next';
import { profile } from '../../data/profile';
import { useForm, Controller } from 'react-hook-form';
import { useInView } from 'react-intersection-observer';

export const ContactSection = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setError(null);

    try {
      // Simular envío - en producción esto iría a un backend
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Guardar en localStorage para demo
      const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
      messages.push({
        ...data,
        id: Date.now(),
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('contactMessages', JSON.stringify(messages));

      setSuccess(true);
      reset();
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(t('contact_error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      id='contact'
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
            {t('contact_title')}
          </Typography>
          <Typography variant='h6' color='text.secondary' sx={{ maxWidth: '700px', mx: 'auto' }}>
            {t('contact_subtitle')}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                backgroundColor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
                animation: inView ? 'fadeInUp 0.8s ease-out 0.2s both' : 'none',
              }}
            >
              <Typography variant='h5' component='h3' sx={{ mb: 3, fontWeight: 600 }}>
                {t('contact_info')}
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <IconButton
                    sx={{
                      bgcolor: 'primary.main',
                      color: 'white',
                      '&:hover': { bgcolor: 'primary.dark' },
                    }}
                  >
                    <EmailIcon />
                  </IconButton>
                  <Box>
                    <Typography variant='body2' color='text.secondary'>
                      {t('contact_email_label')}
                    </Typography>
                    <Link href={`mailto:${profile.email}`} color='primary'>
                      {profile.email}
                    </Link>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <IconButton
                    sx={{
                      bgcolor: 'success.main',
                      color: 'white',
                      '&:hover': { bgcolor: 'success.dark' },
                    }}
                  >
                    <PhoneIcon />
                  </IconButton>
                  <Box>
                    <Typography variant='body2' color='text.secondary'>
                      {t('contact_phone_label')}
                    </Typography>
                    <Link href={`https://wa.me/52${profile.phone.replace(/\s/g, '')}`} color='primary'>
                      {profile.phone}
                    </Link>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <IconButton
                    sx={{
                      bgcolor: 'error.main',
                      color: 'white',
                      '&:hover': { bgcolor: 'error.dark' },
                    }}
                  >
                    <LocationOnIcon />
                  </IconButton>
                  <Box>
                    <Typography variant='body2' color='text.secondary'>
                      {t('contact_location_label')}
                    </Typography>
                    <Typography variant='body1'>{profile.location}</Typography>
                  </Box>
                </Box>

                <Box sx={{ mt: 2, pt: 3, borderTop: '1px solid', borderColor: 'divider' }}>
                  <Typography variant='body2' color='text.secondary' sx={{ mb: 2 }}>
                    {t('contact_social_networks')}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <IconButton
                      component={Link}
                      href={profile.linkedin}
                      target='_blank'
                      sx={{
                        bgcolor: 'primary.main',
                        color: 'white',
                        '&:hover': { bgcolor: 'primary.dark' },
                      }}
                    >
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton
                      component={Link}
                      href={profile.github}
                      target='_blank'
                      sx={{
                        bgcolor: 'text.primary',
                        color: 'white',
                        '&:hover': { bgcolor: 'text.secondary' },
                      }}
                    >
                      <GitHubIcon />
                    </IconButton>
                    <IconButton
                      component={Link}
                      href={`https://wa.me/52${profile.phone.replace(/\s/g, '')}`}
                      target='_blank'
                      sx={{
                        bgcolor: 'success.main',
                        color: 'white',
                        '&:hover': { bgcolor: 'success.dark' },
                      }}
                    >
                      <WhatsAppIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={7}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                backgroundColor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
                animation: inView ? 'fadeInUp 0.8s ease-out 0.4s both' : 'none',
              }}
            >
              <Typography variant='h5' component='h3' sx={{ mb: 3, fontWeight: 600 }}>
                {t('contact_send_message')}
              </Typography>

              {success && (
                <Alert severity='success' sx={{ mb: 2 }}>
                  {t('contact_success')}
                </Alert>
              )}

              {error && (
                <Alert severity='error' sx={{ mb: 2 }}>
                  {error}
                </Alert>
              )}

              <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Controller
                    name='name'
                    control={control}
                    rules={{
                      required: t('validation_name_required'),
                      minLength: {
                        value: 2,
                        message: t('validation_name_min_length'),
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label={t('contact_name')}
                        fullWidth
                        error={!!errors.name}
                        helperText={errors.name?.message}
                      />
                    )}
                  />

                  <Controller
                    name='email'
                    control={control}
                    rules={{
                      required: t('validation_email_required'),
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: t('validation_email_invalid'),
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        type='email'
                        label={t('contact_email')}
                        fullWidth
                        error={!!errors.email}
                        helperText={errors.email?.message}
                      />
                    )}
                  />

                  <Controller
                    name='message'
                    control={control}
                    rules={{
                      required: t('validation_message_required'),
                      minLength: {
                        value: 10,
                        message: t('validation_message_min_length'),
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label={t('contact_message')}
                        fullWidth
                        multiline
                        rows={6}
                        error={!!errors.message}
                        helperText={errors.message?.message}
                      />
                    )}
                  />

                  <Button
                    type='submit'
                    variant='contained'
                    size='large'
                    disabled={loading}
                    startIcon={loading ? <CircularProgress size={20} /> : null}
                    sx={{ alignSelf: 'flex-start' }}
                  >
                    {loading ? t('sending') : t('contact_send')}
                  </Button>
                </Box>
              </form>
            </Paper>
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

