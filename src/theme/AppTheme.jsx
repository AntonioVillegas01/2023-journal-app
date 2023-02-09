
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {purpleTheme} from "./";

const AppTheme = ({children}) => {
    return (
        <ThemeProvider theme={purpleTheme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    );
};

export default AppTheme;
