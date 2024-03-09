import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator, timelineOppositeContentClasses } from "@mui/lab";
import { Avatar, Box, CssBaseline, List, ListItem, ListItemAvatar, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, ThemeProvider, Typography } from "@mui/material"
import { TableRow } from "semantic-ui-react"

import ContactInfo from "./ContactInfo";
import Experience from "./Experience";
import Skills from "./Skills";
import RandomLogosBackground from "./RandomLogosBackground";
import { lightTheme, darkTheme } from './themes';
import { useSelector } from "react-redux";
import { AppRouter } from "./router/AppRouter";

export const App = () => {

    const { isLightTheme } = useSelector((state) => state.ui);
    return (
        <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
          <CssBaseline />
          <AppRouter />
        </ThemeProvider>
      );
}

// export default App;

/* 
Usar jsons para toda la data 
Hacerlo traducible 
Tendra barra de navegacion y lateral 

*/

