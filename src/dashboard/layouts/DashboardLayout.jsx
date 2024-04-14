// import { Breadcrumbs, Grid, Link, Typography } from '@mui/material';
// import { SearchBar } from '../../components/search/SearchBar';
// import { Navbar, Sidebar } from '../components';

// import { Footer } from '../components/Footer';
// import { Loader } from '../../components/Loader';
import PropTypes from 'prop-types';
import SideBarFixed from '../components/SideBarFixed';

export const DashboardLayout = ({ children }) => {
  return <SideBarFixed children={children} />;
};
DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
