import { ThemeProvider } from 'styled-components';

import { StyledButton } from './style';
import { mainTheme, secondaryTheme } from './theme'; 

const button = (props) => {
    let theme = (props.theme == 'secondary') ? secondaryTheme  : mainTheme;

    return (
        <ThemeProvider theme={theme}>
            <StyledButton>{props.children}</StyledButton>
        </ThemeProvider>
    );
} 

export default button;