import { Rating } from '@mui/material';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

export const StarRating = ({ value, onChange, readOnly = false, size = 'medium', showLabel = false }) => {
  return (
    <Box display='flex' alignItems='center' gap={1}>
      <Rating
        value={value}
        onChange={(event, newValue) => {
          if (onChange) onChange(newValue);
        }}
        readOnly={readOnly}
        size={size}
        precision={0.5}
      />
      {showLabel && value > 0 && (
        <Box component='span' sx={{ fontSize: '0.875rem', color: 'text.secondary' }}>
          {value.toFixed(1)}
        </Box>
      )}
    </Box>
  );
};

StarRating.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  showLabel: PropTypes.bool,
};

