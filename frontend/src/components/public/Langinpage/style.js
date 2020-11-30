import styled from 'styled-components';

import LandingPageImage from '../../../assets/images/landing-page.jpg';

export const StyledDiv = styled.div`
    position: relative;
`

export const StyledDivImage = styled.div`
    width: 100vw;
    height: 100vh;

    background: url(${LandingPageImage});
    background-size: cover;
`

export const StyledOverlayColor = styled.div`
    position: absolute;
    width: 100vw;
    min-height: 100vh;

    background-color: #00000066;
`