import styled from 'styled-components';

import RegisterPageImage from '../../../assets/images/register-page.jpg';

export const StyledDiv = styled.div`
    position: relative;
    display: flex;
    height: 100%;
`

export const StyledDivImage = styled.div`
    width: 55vw;
    height: auto;

    background: url(${RegisterPageImage});
    background-repeat: no-repeat;
     background-attachment: fixed;
    background-size: cover;
`