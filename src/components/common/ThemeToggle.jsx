import { IconButton, Tooltip } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { toggleTheme } from '../../store/slices/ui';

export const ThemeToggle = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { isLightTheme } = useSelector((state) => state.ui);

  return (
    <Tooltip title={isLightTheme ? t('theme_dark_mode') : t('theme_light_mode')}>
      <IconButton
        onClick={() => dispatch(toggleTheme())}
        sx={{
          color: 'text.primary',
          '&:hover': {
            backgroundColor: 'action.hover',
          },
        }}
      >
        {isLightTheme ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </Tooltip>
  );
};

