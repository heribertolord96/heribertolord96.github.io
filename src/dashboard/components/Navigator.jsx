import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
// import Circle from '../../../../components/forms/Circle';
// import ColorMenu from '../../../../components/menus/ColorMenu';
import { toast } from 'react-toastify';
// import { Loader } from '../../../../components/Loader';
// import { setBackgroundThemeBox } from '../../../../store/slices/ui/thunks';
import { useTranslation } from 'react-i18next';
import { Link, Link as RouterLink, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
// import PhoneModal from '../../../../components/Modal/PhoneModal';
import { useEffect } from 'react';

// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import SettingsIcon from '@mui/icons-material/Settings';
// import AdjustIcon from '@mui/icons-material/Adjust';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import GroupIcon from '@mui/icons-material/Group';
// import ContactsIcon from '@mui/icons-material/Contacts';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import CategoryIcon from '@mui/icons-material/Category';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import ContactInfo from '../../ContactInfo';
import RandomLogosBackground from '../../RandomLogosBackground';
import Skills from '../../Skills';


// import avatar from '../../images/avatar.jpeg';

export default function Navigator(props) {
  const { ...other } = props;
  // const { id, thread } = useParams();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [changedColor, setChangedColor] = useState(false);
  const [isInto, setIsInto] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [openModalContact, setOpenModalContact] = useState(false);
  // const [changeAccount, setChangeAccount] = useState(false);
  // const [hasChangeAccount, setHasChangeAccount] = useState(false);
  // const selecteAccount = localStorage.getItem('chat_account_type');
  const [idAccount, setIdAccount] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const [justExpand, setJustExpand] = useState(false);
  // const { chats, lastPage, phoneAccounts, categoriesColors, currentPage } = useSelector(
  //   (state) => state.whatsApp,
  // );
  const navigateTo = (url) => {
    navigate(url);
  };

  // const handleSetChatCategory = async (id, categoryId) => {
  //   const resp = await dispatch(updateCategoryColor(id, categoryId));
  //   if (resp === 200) {
  //     toast.success(t('saved'));
  //     setChangedColor(!changedColor);
  //   } else {
  //     toast.error(t('error'));
  //   }
  // };

  // const handleChange = (panel, name) => async (event, isExpanded) => {
  //   console.log({ isExpanded });
  //   localStorage.setItem(`account_id`, JSON.stringify(panel));
  //   handleTheme(name);
  //   localStorage.setItem('chat_account_type', name);
  //   setExpanded(isExpanded ? panel : false);
  //   setIsInto(true);
  //   setIdAccount(panel);
  //   setHasChangeAccount(true);
  //   const respAccount = await dispatch(getSwitchAccount(panel));
  //   if (respAccount === 200) {
  //     setHasChangeAccount(false);
  //   }

  //   const resp = await dispatch(getChats());
  //   if (resp) {
  //     setChangeAccount(true);
  //   }
  //   setPageNumber(1);
  //   navigateTo(`/${panel}`);
  // };

  // const loadAccounts = () => {
  //   dispatch(getPhoneAccounts());
  // };

  // useEffect(() => {
  //   dispatch(getCategoriesColors());
  // }, [changedColor]);

  // useEffect(() => {
  //   loadAccounts();
  // }, []);

  // const loadChats = async () => {
  //   await dispatch(getChats());
  // };

  // const loadMoreChats = async () => {
  //   const pageNumberCounter = pageNumber + 1;
  //   setPageNumber(pageNumberCounter);
  //   await dispatch(getMoreChats(pageNumberCounter, true));
  // };

  const handleTheme = (theme) => {
    dispatch(setBackgroundThemeBox(theme));
  };

  // const handleExpandClick = (panel, name) => async (event, isExpanded) => {
  //   event.stopPropagation();
  //   console.log({ expanded }, { panel }, { isExpanded }, { name });
  //   setJustExpand(expanded ? panel : false);
  //   // setExpanded(!justExpand);
  //   setExpanded(justExpand ? panel : false);
  // };

  // useEffect(() => {
  //   loadChats();
  // }, [idAccount, isInto]);

  return (
    <Drawer variant='permanent' {...other}>
      <List disablePadding>
        {/* <PhoneModal open={openModalContact} onClose={setOpenModalContact} title={t(`add_chat`)} /> */}
        {/* <Typography
          variant='h1'
          component='h6'
          sx={{ textAlign: 'center', ml: 10, mt: 1 }}
          display='flex'
        >aww
          <img src='https://placekitten.com/500/500' width='175px' alt='cat' />
        </Typography> */}

<RandomLogosBackground>
        <ContactInfo/>
        <Skills />
         </RandomLogosBackground>
        {/* {phoneAccounts &&
          phoneAccounts?.map((account, index) => (
            <React.Fragment key={index}>
              {account?.name !== '' && (
                <Accordion
                  TransitionProps={{ unmountOnExit: true }}
                  key={account.id}
                  id={'accordion'}
                  expanded={
                    /* justExpand === expanded || * /
                    expanded === account.id ||
                    selecteAccount === account?.name
                  }
                  name={'organization'}
                  onChange={handleChange(account.id, account?.name)}
                  // onChange={handleExpandClick(account.id, account?.name)}
                  sx={{
                    boxShadow: '0',
                    background: 'inherit',
                    pointerEvents: hasChangeAccount ? 'none' : '',
                    opacity: hasChangeAccount ? 0.5 : 1,
                  }}
                >
                  <AccordionSummary
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                    /* !   expandIcon={
                      <IconButton onClick={handleExpandClick(account.id, account?.name)}>
                        <ExpandMoreIcon />
                      </IconButton>
                    }
                    * /
                  >
                    {account?.name === 'Vivetel Networks Ltd' ? (
                      <img src='/images/ViveTel.png' width='30px' alt='' />
                    ) : account?.name === 'ViveCanada Edu Services LTD' ? (
                      <img src='/images/ViveCanada.png' width='30px' alt='' />
                    ) : account?.name === 'Test Number' ? (
                      <img src='/images/labores.png' width='30px' alt='' />
                    ) : account?.name === 'Immcase Digital Solutions Ltd' ? (
                      <img src='/images/ImmCaseChat.png' width='30px' alt='' />
                    ) : account?.name === 'Easy Eta by Ger Canada' ? (
                      <img src='/images/GerCanadaChat.png' width='30px' alt='' />
                    ) : (
                      ''
                    )}
                    <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Typography variant='p' sx={{ fontSize: '12px' }}>
                        {account?.name}
                      </Typography>
                      <Typography variant='p' sx={{ fontSize: '12px' }}>
                        {account?.display_phone_number}
                      </Typography>
                    </Grid>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      paddingBottom: '8px',
                      px: 0,
                      overflow: 'auto',
                      maxHeight: '500px',
                    }}
                  >
                    {/* 
                    //TODO Check send message from selected account
                    <Grid
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        mb: 1,
                        justifyContent: 'space-around',
                      }}
                      key={index}
                    >
                      <Button
                        name={'newChat'}
                        id={index}
                        sx={{ width: '100%', display: 'flex' }}
                        onClick={() => {
                          setOpenModalContact(true);
                        }}
                      >
                        <Grid
                          sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                          }}
                        >
                          <AddCommentOutlinedIcon sx={{ mr: 3 }} fontSize='small' />
                          <Typography>{t('new_chat')}</Typography>
                        </Grid>
                      </Button>
                    </Grid> * /}
                    {chats &&
                      chats?.map((item, index) => (
                        <Grid sx={{ display: 'flex', flexDirection: 'row', mb: 1 }} key={index}>
                          <>
                            <Circle
                              id={item?.id}
                              selected={item?.category?.color !== 'gray'}
                              values={categoriesColors}
                              onClick={handleSetChatCategory}
                              color={item?.category?.color}
                            />
                            <Button
                              name={item.number}
                              id={index}
                              sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-around',
                              }}
                              onClick={(event) => {
                                event.stopPropagation();
                                navigateTo(`/chat/${item.client_phone_number}/${item.id}`);
                                localStorage.setItem(`chat_id`, JSON.stringify(item.id));
                              }}
                            >
                              <Grid sx={{ display: 'flex' }}>
                                <Grid display={'flex'} sx={{ flexDirection: 'column' }}>
                                  <Typography>{item.name && `${item?.name}`}</Typography>
                                  <Typography>{`${item?.client_phone_number} `}</Typography>
                                </Grid>
                              </Grid>
                              {item?.unread > 0 ? <AdjustIcon /> : ''}
                            </Button>
                          </>
                        </Grid>
                      ))}
                  </AccordionDetails>
                  {currentPage !== lastPage && (
                    <Grid
                      // onClick={loadMoreChats}
                      sx={{
                        width: '35px',
                        height: '35px',
                        borderRadius: '50%',
                        backgroundColor: 'gray',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        textAlign: 'center',
                        margin: 'auto',
                        color: 'white',
                      }}
                    >
                      <ArrowDownwardIcon sx={{ margin: 'auto' }} />
                    </Grid>
                  )}
                </Accordion>
              )}
            </React.Fragment>
          ))} */}
        {/* <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <GroupIcon sx={{ width: '30px' }} />
            <Typography sx={{ ml: 2.5 }}>{t('users')}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ paddingBottom: '8px', px: 0 }}>
            <Grid sx={{ display: 'flex', flexDirection: 'row', cursor: 'pointer', mb: 1 }}>
              <Button
                name={'users'}
                sx={{ width: '100%', display: 'flex', justifyContent: 'start' }}
                onClick={() => {
                  navigateTo(`/users`);
                }}
              >
                <GroupIcon />
                {t('users')}
              </Button>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <ContactsIcon sx={{ width: '30px' }} />
            <Typography sx={{ ml: 2.5 }}>{t('contacts')}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ paddingBottom: '8px', px: 0 }}>
            <Grid sx={{ display: 'flex', flexDirection: 'row', cursor: 'pointer', mb: 1 }}>
              <Button
                name={'contacts'}
                sx={{ width: '100%', display: 'flex', justifyContent: 'start' }}
                onClick={() => {
                  navigateTo(`/contacts`);
                }}
              >
                <ContactsIcon />
                {t('contacts')}
              </Button>
            </Grid>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <SettingsIcon sx={{ width: '30px' }} />
            <Typography sx={{ ml: 2.5 }}>{t('settings')}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ paddingBottom: '8px', px: 0 }}>
            <Grid sx={{ display: 'flex', flexDirection: 'row', cursor: 'pointer', mb: 1 }}>
              <Button
                name={'business_numbers'}
                sx={{ width: '100%', display: 'flex', justifyContent: 'start' }}
                onClick={() => {
                  navigateTo(`/business_numbers`);
                }}
              >
                <WhatsAppIcon />
                {t('business_numbers')}
              </Button>
            </Grid>
            <Grid sx={{ display: 'flex', flexDirection: 'row', cursor: 'pointer', mb: 1 }}>
              <Button
                name={'categories'}
                sx={{ width: '100%', display: 'flex', justifyContent: 'start' }}
                onClick={() => {
                  navigateTo(`/categories`);
                }}
              >
                <CategoryIcon />
                {t('chat_categories')}
              </Button>
            </Grid>
          </AccordionDetails>
        </Accordion> */}
      </List>
    </Drawer>
  );
}
