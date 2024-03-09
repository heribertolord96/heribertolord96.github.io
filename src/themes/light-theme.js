import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#DEDEDE',
    },

    primary: {
      main: '#007ac3',

      // main: '#16CDFF',
    },
    secondary: {
      main: '#3A64D8',
    },
    info: {
      main: '#ffff',
    },
    iconw: {
      main: '#fff',
    },
    iconverde: {
      main: '#a6ce39  ',
    },
    dashboardgris: {
      main: '#586C78',
    },

    cardwhite: {
      main: 'black',
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: {
          color: 'white',
        },
      },
    },
    MuiIcon: {
      defaultProps: {
        underline: 'none',
      },
    },

    MuiInput: {
      styleOverrides: {
        root: {
          border: 'none',
          '& .MuiInputBase-root': {
            borderBottom: 'none',
          },
          '& .MuiInput-underline:before': {
            borderBottom: 'none',
          },
          '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: 'none',
          },
          '& .MuiInput-underline:after': {
            borderBottom: 'none',
          },
        },
      },
    },

    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: 'fixed',
      },
      styleOverrides: {
        root: {
          background: 'white',
          height: 60,
        },
      },
    },

    MuiContainer: {
      background: 'white',
      paddingLeft: '1rem',
    },

    MuiTypography: {
      styleOverrides: {
        h1: {
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

        nestedBar: {
          background: 'black',
        },
      },
    },

    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'small',
        disableElevation: true,
        color: 'info',
      },
      styleOverrides: {
        root: {
          color: 'info',
          textTransform: 'none',
          boxShadow: 'none',
          borderRadius: '3px',
          ':hover': {
            color: 'black',
            background: 'rgba(0,0,0,0,2)',
            transition: 'all 0.3s ease-in-out',
          },
          ':disabled': {
            color: 'black',
            background: 'rgb(107, 107, 107);',
            backgroundColor: 'rgba(0,0,0,0,2)',
            transition: 'all 0.3s ease-in-out',
          },
        },
      },
    },

    MuiButtonGroup: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },

    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          boxShadow: '0px 5px 5px rgba(0,0,0,0.05)',
          borderRadius: '0px',
        },
      },
    },

    MenuIcon: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          boxShadow: '0px 5px 5px rgba(0,0,0,0.05)',
          borderRadius: '10px',
          color: 'green',
        },
      },
    },
  },
});
