import { ThemeProvider } from 'styled-components';

import { StyledButton } from './style';
import { mainTheme, secondaryTheme, paginationTheme, paginationUnTheme } from './theme'; 

const button = (props) => {
    let theme = mainTheme;
    switch(props.theme) {
        case 'secondary':
            theme = secondaryTheme;
            break;
        case 'pagination':
            theme = paginationTheme;
            break;
        case 'paginationGray':
            theme = paginationUnTheme;
            break;
        default:
            theme = mainTheme;
    }

    return (
        <ThemeProvider theme={theme}>
            <StyledButton disabled={props.disabled} onClick={props.onClick} className={(props.active) ? "active" : null}>{props.children}</StyledButton>
        </ThemeProvider>
    );
} 

export default button;