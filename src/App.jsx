import { CssBaseline, ThemeProvider } from '@mui/material';

// import RandomLogosBackground from './RandomLogosBackground';
import { lightTheme, darkTheme } from './themes';
import { useSelector } from 'react-redux';
import { AppRouter } from './router/AppRouter';

export const App = () => {
  const { isLightTheme } = useSelector((state) => state.ui);
  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
};
