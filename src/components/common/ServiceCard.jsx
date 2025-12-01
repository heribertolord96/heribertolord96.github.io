import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Chip,
  Stack,
} from '@mui/material';
import ApiIcon from '@mui/icons-material/Api';
import CodeIcon from '@mui/icons-material/Code';
import HubIcon from '@mui/icons-material/Hub';
import CloudIcon from '@mui/icons-material/Cloud';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SupportIcon from '@mui/icons-material/Support';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const iconMap = {
  Api: ApiIcon,
  Code: CodeIcon,
  Hub: HubIcon,
  Cloud: CloudIcon,
  Psychology: PsychologyIcon,
  BusinessCenter: BusinessCenterIcon,
  Support: SupportIcon,
};

export const ServiceCard = ({ service, onRequestService }) => {
  const { t } = useTranslation();
  const IconComponent = iconMap[service.icon] || CodeIcon;
  
  // Obtener features traducidas
  const features = service.featuresKey ? t(service.featuresKey, { returnObjects: true }) : [];

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease-in-out',
        backgroundColor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: 4,
          borderColor: 'primary.main',
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Box display='flex' alignItems='center' gap={2} mb={2}>
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: 2,
              background: (theme) =>
                theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)'
                  : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
            }}
          >
            <IconComponent sx={{ fontSize: 32 }} />
          </Box>
          <Typography variant='h5' component='h3' fontWeight={600}>
            {t(service.titleKey)}
          </Typography>
        </Box>

        <Typography variant='body2' color='text.secondary' paragraph>
          {t(service.descriptionKey)}
        </Typography>

        {Array.isArray(features) && features.length > 0 && (
          <Box mt={2}>
            <Typography variant='caption' color='text.secondary' fontWeight={600} display='block' mb={1}>
              {t('services_features')}:
            </Typography>
            <Stack direction='row' spacing={1} flexWrap='wrap' useFlexGap>
              {features.slice(0, 3).map((feature, index) => (
                <Chip
                  key={index}
                  label={feature}
                  size='small'
                  variant='outlined'
                  sx={{ fontSize: '0.75rem' }}
                />
              ))}
            </Stack>
          </Box>
        )}

        {service.technologies && service.technologies.length > 0 && (
          <Box mt={2}>
            <Typography variant='caption' color='text.secondary' fontWeight={600} display='block' mb={1}>
              {t('technologies_title')}:
            </Typography>
            <Stack direction='row' spacing={1} flexWrap='wrap' useFlexGap>
              {service.technologies.slice(0, 4).map((tech, index) => (
                <Chip
                  key={index}
                  label={tech}
                  size='small'
                  sx={{
                    fontSize: '0.7rem',
                    backgroundColor: 'primary.main',
                    color: 'white',
                    '& .MuiChip-label': {
                      px: 1,
                    },
                  }}
                />
              ))}
            </Stack>
          </Box>
        )}
      </CardContent>

      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button
          variant='contained'
          fullWidth
          onClick={() => onRequestService && onRequestService(service)}
          sx={{
            background: (theme) =>
              theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)'
                : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            '&:hover': {
              background: (theme) =>
                theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)'
                  : 'linear-gradient(135deg, #5568d3 0%, #6a3f91 100%)',
            },
          }}
        >
          {t('services_request')}
        </Button>
      </CardActions>
    </Card>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.string.isRequired,
    titleKey: PropTypes.string.isRequired,
    descriptionKey: PropTypes.string.isRequired,
    icon: PropTypes.string,
    featuresKey: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onRequestService: PropTypes.func,
};

