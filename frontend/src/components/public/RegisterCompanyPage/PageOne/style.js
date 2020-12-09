import styled from 'styled-components';

import RegisterPageImage from '../../../../assets/images/register-page.jpg';

export const StyledDiv = styled.div`
    position: relative;
`

export const StyledDivImage = styled.div`
    width: 55vw;
    height: 190vh;

    background: url(${RegisterPageImage});
    background-repeat: no-repeat;
     background-attachment: fixed;
    background-size: cover;
`