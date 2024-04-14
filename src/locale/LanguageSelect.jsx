import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { Button, IconButton, List, ListItem, ListSubheader, Popover } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
const languageMap = {
  en: { label: 'English', dir: 'ltr', active: true, flag: 'https://flagcdn.com/w20/us.png' },
  es: { label: 'Español', dir: 'ltr', active: false, flag: 'https://flagcdn.com/w20/mx.png' },
  // fr: { label: 'Français', dir: 'ltr', active: false },
};

const LanguageSelect = (/* { user } */) => {
  // const dispatch = useDispatch();
  const selected = localStorage.getItem('i18nextLng') || 'en';
  console.log({ selected });
  const [menuAnchor, setMenuAnchor] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    document.body.dir = languageMap[selected].dir;
    console.log(document.body.dir, languageMap[selected].dir);
    i18next.changeLanguage(selected);
  }, [menuAnchor, selected]);

  return (
    <div
      className='d-flex justify-content-end align-items-center language-select-root'
      style={{ m: 0 }}
    >
      <IconButton onClick={({ currentTarget }) => setMenuAnchor(currentTarget)}>
        <img src={languageMap[selected].flag} alt='' srcSet='' />
        {languageMap[selected].label}
        <ArrowDropDown fontSize='small' />
      </IconButton>
      <Popover
        open={!!menuAnchor}
        anchorEl={menuAnchor}
        onClose={() => setMenuAnchor(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <div>
          <List>
            <ListSubheader>{t('select_language')}</ListSubheader>
            {Object.keys(languageMap)?.map((item) => (
              <ListItem
                button
                key={item}
                onClick={() => {
                  i18next.changeLanguage(item);
                  setMenuAnchor(null);
                }}
              >
                <img src={languageMap[item].flag} alt='' srcSet='' />
                {languageMap[item].label}
              </ListItem>
            ))}
          </List>
        </div>
      </Popover>
    </div>
  );
};

export default LanguageSelect;
