import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Box,
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useEffect, useState } from 'react';

const languageMap = {
  es: { label: 'Español', flag: '🇲🇽' },
  en: { label: 'English', flag: '🇺🇸' },
  fr: { label: 'Français', flag: '🇫🇷' },
};

export const LanguageSelect = () => {
  const selected = localStorage.getItem('i18nextLng') || 'es';
  const [anchorEl, setAnchorEl] = useState(null);
  const { t } = useTranslation();
  const open = Boolean(anchorEl);

  useEffect(() => {
    i18next.changeLanguage(selected);
  }, [selected]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (lang) => {
    i18next.changeLanguage(lang);
    localStorage.setItem('i18nextLng', lang);
    handleClose();
  };

  return (
    <>
      <Tooltip title={t('select_language')}>
        <IconButton
          onClick={handleClick}
          sx={{
            color: 'text.primary',
            '&:hover': {
              backgroundColor: 'action.hover',
            },
          }}
        >
          <LanguageIcon />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 180,
          },
        }}
      >
        {Object.entries(languageMap).map(([key, lang]) => (
          <MenuItem
            key={key}
            onClick={() => handleLanguageChange(key)}
            selected={selected === key}
            sx={{
              '&.Mui-selected': {
                backgroundColor: 'action.selected',
                '&:hover': {
                  backgroundColor: 'action.hover',
                },
              },
            }}
          >
            <ListItemIcon>
              <Box component='span' sx={{ fontSize: '1.5rem' }}>
                {lang.flag}
              </Box>
            </ListItemIcon>
            <ListItemText primary={lang.label} />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

