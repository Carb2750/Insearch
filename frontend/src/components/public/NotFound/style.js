import styled from 'styled-components';

import NotFoundPageImage from '../../../assets/images/NotFound-page.jpg';

export const StyledDiv = styled.div`
    position: relative;
`

export const StyledDivImage = styled.div`
    width: 100vw;
    height: 92vh;

    background: url(${NotFoundPageImage})no-repeat fixed;
    background-size: cover;
    background-position: center top;
    
`