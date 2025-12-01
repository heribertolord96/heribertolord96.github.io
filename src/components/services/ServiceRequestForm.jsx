import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  Typography,
  MenuItem,
  Alert,
  CircularProgress,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { services } from '../../data/services';
import { StarRating } from '../common/StarRating';

export const ServiceRequestForm = ({ open, onClose, selectedService = null }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      serviceId: selectedService?.id || '',
      clientName: '',
      clientEmail: '',
      projectDescription: '',
      budget: '',
      rating: 0,
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setError(null);

    try {
      // Simular envío - en producción esto iría a un backend
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Guardar en localStorage para demo
      const requests = JSON.parse(localStorage.getItem('serviceRequests') || '[]');
      requests.push({
        ...data,
        id: Date.now(),
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('serviceRequests', JSON.stringify(requests));

      setSuccess(true);
      setTimeout(() => {
        handleClose();
        reset();
        setSuccess(false);
      }, 2000);
    } catch (err) {
      setError(t('service_form_error'));
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (!loading) {
      reset();
      setSuccess(false);
      setError(null);
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth='sm' fullWidth>
      <DialogTitle>
        <Typography variant='h5' component='h2' fontWeight={600}>
          {t('service_form_title')}
        </Typography>
      </DialogTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          {success && (
            <Alert severity='success' sx={{ mb: 2 }}>
              {t('service_form_success')}
            </Alert>
          )}

          {error && (
            <Alert severity='error' sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Controller
              name='serviceId'
              control={control}
              rules={{ required: t('service_form_select_service') }}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  label={t('service_form_select_service')}
                  fullWidth
                  error={!!errors.serviceId}
                  helperText={errors.serviceId?.message}
                  disabled={!!selectedService}
                >
                  {services.map((service) => (
                    <MenuItem key={service.id} value={service.id}>
                      {t(service.titleKey)}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />

            <Controller
              name='clientName'
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
                  label={t('service_form_client_name')}
                  fullWidth
                  error={!!errors.clientName}
                  helperText={errors.clientName?.message}
                />
              )}
            />

            <Controller
              name='clientEmail'
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
                  label={t('service_form_client_email')}
                  fullWidth
                  error={!!errors.clientEmail}
                  helperText={errors.clientEmail?.message}
                />
              )}
            />

            <Controller
              name='projectDescription'
              control={control}
              rules={{
                required: t('validation_project_description_required'),
                minLength: {
                  value: 20,
                  message: t('validation_project_description_min_length'),
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={t('service_form_project_description')}
                  fullWidth
                  multiline
                  rows={4}
                  error={!!errors.projectDescription}
                  helperText={errors.projectDescription?.message}
                />
              )}
            />

            <Controller
              name='budget'
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={t('service_form_budget')}
                  fullWidth
                  type='number'
                  inputProps={{ min: 0, step: 100 }}
                />
              )}
            />

            <Box>
              <Typography variant='body2' color='text.secondary' sx={{ mb: 1 }}>
                {t('service_form_rating_optional')}
              </Typography>
              <Controller
                name='rating'
                control={control}
                render={({ field }) => (
                  <StarRating
                    value={field.value}
                    onChange={field.onChange}
                    size='large'
                    showLabel
                  />
                )}
              />
            </Box>
          </Box>
        </DialogContent>

        <DialogActions sx={{ p: 2 }}>
          <Button onClick={handleClose} disabled={loading}>
            {t('cancel')}
          </Button>
          <Button
            type='submit'
            variant='contained'
            disabled={loading || success}
            startIcon={loading ? <CircularProgress size={20} /> : null}
          >
            {loading ? t('sending') : t('service_form_submit')}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

