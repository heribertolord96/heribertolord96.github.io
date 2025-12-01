import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Alert,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { getStoredTestimonials, getAverageRating, addTestimonial } from '../../data/testimonials';
import { StarRating } from '../common/StarRating';
import { useInView } from 'react-intersection-observer';
import { Controller, useForm } from 'react-hook-form';

export const TestimonialsSection = () => {
  const { t } = useTranslation();
  const [testimonials, setTestimonials] = useState([]);
  const [formOpen, setFormOpen] = useState(false);
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
      company: '',
      comment: '',
      rating: 5,
    },
  });

  useEffect(() => {
    setTestimonials(getStoredTestimonials());
  }, []);

  const onSubmit = (data) => {
    const newTestimonial = {
      ...data,
      date: new Date().toISOString().split('T')[0],
    };
    const updated = addTestimonial(newTestimonial);
    setTestimonials(updated);
    reset();
    setFormOpen(false);
  };

  const averageRating = getAverageRating(testimonials);

  return (
    <Box
      id='testimonials'
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
            {t('testimonials_title')}
          </Typography>
          <Typography variant='h6' color='text.secondary' sx={{ maxWidth: '700px', mx: 'auto', mb: 3 }}>
            {t('testimonials_subtitle')}
          </Typography>

          {testimonials.length > 0 && (
            <Paper
              elevation={0}
              sx={{
                p: 3,
                display: 'inline-block',
                backgroundColor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
              }}
            >
              <Typography variant='h4' component='div' sx={{ mb: 1, fontWeight: 700 }}>
                {averageRating}
              </Typography>
              <StarRating value={parseFloat(averageRating)} readOnly size='large' />
              <Typography variant='body2' color='text.secondary' sx={{ mt: 1 }}>
                {t('testimonials_average_rating')} ({testimonials.length} {testimonials.length === 1 ? t('testimonial_singular') : t('testimonials_plural')})
              </Typography>
            </Paper>
          )}
        </Box>

        <Grid container spacing={3}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} key={testimonial.id}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
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
                  <Avatar
                    sx={{
                      bgcolor: 'primary.main',
                      width: 56,
                      height: 56,
                    }}
                  >
                    {testimonial.name.charAt(0)}
                  </Avatar>
                  <Box>
                    <Typography variant='h6' component='h3' fontWeight={600}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {testimonial.company}
                    </Typography>
                  </Box>
                </Box>

                <StarRating value={testimonial.rating} readOnly sx={{ mb: 2 }} />

                <Typography variant='body1' color='text.secondary' paragraph>
                  "{testimonial.comment}"
                </Typography>

                <Typography variant='caption' color='text.secondary'>
                  {new Date(testimonial.date).toLocaleDateString()}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button variant='contained' size='large' onClick={() => setFormOpen(true)}>
            {t('testimonials_add_review')}
          </Button>
        </Box>
      </Container>

      <Dialog open={formOpen} onClose={() => setFormOpen(false)} maxWidth='sm' fullWidth>
        <DialogTitle>{t('testimonials_add_review')}</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Controller
                name='name'
                control={control}
                rules={{ required: 'El nombre es requerido' }}
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
                name='company'
                control={control}
                render={({ field }) => (
                  <TextField {...field} label={t('testimonial_company_optional')} fullWidth />
                )}
              />

              <Controller
                name='comment'
                control={control}
                rules={{
                  required: t('testimonial_comment_required'),
                  minLength: {
                    value: 10,
                    message: t('testimonial_comment_min_length'),
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t('testimonial_comment')}
                    fullWidth
                    multiline
                    rows={4}
                    error={!!errors.comment}
                    helperText={errors.comment?.message}
                  />
                )}
              />

              <Box>
                <Typography variant='body2' color='text.secondary' sx={{ mb: 1 }}>
                  {t('testimonial_rating')}
                </Typography>
                <Controller
                  name='rating'
                  control={control}
                  render={({ field }) => (
                    <StarRating value={field.value} onChange={field.onChange} size='large' showLabel />
                  )}
                />
              </Box>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setFormOpen(false)}>{t('cancel')}</Button>
            <Button type='submit' variant='contained'>
              {t('send')}
            </Button>
          </DialogActions>
        </form>
      </Dialog>

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

