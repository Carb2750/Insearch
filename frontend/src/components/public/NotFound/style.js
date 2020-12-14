import styled from 'styled-components';

import NotFoundPageImage from '../../../assets/images/landing-page.jpg';

export const StyledDiv = styled.div`
    position: relative;
`

export const StyledDivImage = styled.div`
    width: 100vw;
    height: 100vh;

    background: url(${NotFoundPageImage});
    background-size: cover;
`