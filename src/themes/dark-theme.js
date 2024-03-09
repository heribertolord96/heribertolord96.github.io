import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#007ac3',
    },
    secondary: {
      main: '#99ddff',
    },
    info: {
      main: '#fff',
    },
    iconw: {
      main: '#fff',
    },
    iconverde: {
      main: '#a6ce39  ',
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: 'fixed',
        background: '#00264d',
      },
      styleOverrides: {
        root: {
          background: 'black',
          height: 60,
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        h1: {
          color: 'white',
          fontSize: 30,
          fontWeight: 600,
        },
        h2: {
          fontSize: 20,
          fontWeight: 400,
        },
        subtitle1: {
          fontSize: 18,
          fontWeight: 600,
        },
      },
    },

    MuiButton: {
      defaultProps: {
        // variant: 'contained',
        size: 'small',
        disableElevation: true,
        color: 'info',
        background: '#16CDFF',
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
          borderRadius: 10,
          ':hover': {
            color: 'black',
            background: 'orange',
            transition: 'all 0.3s ease-in-out',
          },
        },
      },
    },
    // MuiPaper:{
    //   defaultProps: {
    //     elevation: 0,
    //   },
    //   styleOverrides: {
    //     root: {
    //       boxShadow: '0px 5px 5px rgba(0,0,0,0.05)',
    //       borderRadius: '0px',
    //       background: '#202c33',
    //     },
    //   },
    // },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          boxShadow: '0px 5px 5px rgba(0,0,0,0.05)',
          borderRadius: '0px',
          background: '#202c33',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          minWidth: '150px',
          // padding: '0 0 0 5px',
          // border: '1px solid red ',
        },
      },
    },
  },
});
