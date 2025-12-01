import { Box, Avatar, Tooltip, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export const TechnologyBadge = ({ technology, size = 'medium' }) => {
  const sizeMap = {
    small: 32,
    medium: 48,
    large: 64,
  };

  const badgeSize = sizeMap[size] || 48;

  return (
    <Tooltip
      title={
        <Box>
          <Typography variant='body2' fontWeight={600}>
            {technology.name}
          </Typography>
          {technology.level && (
            <Typography variant='caption' display='block' mt={0.5}>
              Nivel: {technology.level === 'advanced' ? 'Avanzado' : technology.level === 'intermediate' ? 'Intermedio' : 'Básico'}
            </Typography>
          )}
        </Box>
      }
      arrow
    >
      <Box
        sx={{
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease-in-out',
          cursor: 'pointer',
          '&:hover': {
            transform: 'scale(1.1) translateY(-4px)',
          },
        }}
      >
        <Avatar
          src={technology.logo}
          alt={technology.name}
          sx={{
            width: badgeSize,
            height: badgeSize,
            border: '2px solid',
            borderColor: 'divider',
            backgroundColor: 'background.paper',
            boxShadow: 2,
            '&:hover': {
              boxShadow: 4,
              borderColor: 'primary.main',
            },
          }}
        >
          {technology.name.charAt(0)}
        </Avatar>
      </Box>
    </Tooltip>
  );
};

TechnologyBadge.propTypes = {
  technology: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string,
    level: PropTypes.oneOf(['beginner', 'intermediate', 'advanced']),
  }).isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

