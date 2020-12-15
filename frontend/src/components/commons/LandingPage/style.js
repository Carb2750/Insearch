import styled from 'styled-components';

export const StyledLandingPage = styled.div`

width: 50rem;


position: absolute;
top: 50%;
left: 50%;
transform:translate(-50%, -50%);

    z-index: 3;


    .inline {
        display: flex;

        width: 100%;
    }

    .inline div:not(:last-child) {
        margin-right: 0.3rem;
    }


    & input {
        margin-bottom: 3rem
    }

    button {
        margin:  0 auto;
        height: 2.5rem;
        width: 7rem;
        text-align: center;
        align-items: center;
    }
`
