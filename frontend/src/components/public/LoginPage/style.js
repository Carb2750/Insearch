import styled from 'styled-components';

import LoginPageImage from '../../../assets/images/login-page.jpg';

export const StyledDiv = styled.div`
    position: relative;
`

export const StyledDivImage = styled.div`
    width: 100vw;
    height: 95vh;

    background: url(${LoginPageImage});
    background-size: cover;
`

export const StyledOverlayColor = styled.div`
    position: absolute;
    width: 100vw;
    min-height: 95vh;

    background-color: #00000066;
`