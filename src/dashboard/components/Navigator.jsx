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

/* import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  Grid,
  IconButton,
  Typography,
} from '@mui/material'; */
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
  // const [changedColor, setChangedColor] = useState(false);
  // const [isInto, setIsInto] = useState(false);
  // const [expanded, setExpanded] = useState(false);
  // const [openModalContact, setOpenModalContact] = useState(false);
  // const [changeAccount, setChangeAccount] = useState(false);
  // const [hasChangeAccount, setHasChangeAccount] = useState(false);
  // const selecteAccount = localStorage.getItem('chat_account_type');
  // const [idAccount, setIdAccount] = useState(0);
  // const [pageNumber, setPageNumber] = useState(1);

  // const [justExpand, setJustExpand] = useState(false);
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

  // const handleTheme = (theme) => {
  //   dispatch(setBackgroundThemeBox(theme));
  // };

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
        {/* <RandomLogosBackground> */}
          <ContactInfo />
          <Skills />
        {/* </RandomLogosBackground> */}

      </List>
    </Drawer>
  );
}
