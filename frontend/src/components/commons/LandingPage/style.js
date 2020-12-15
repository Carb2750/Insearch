import styled from 'styled-components';

export const StyledLandingPage = styled.div`

    display: flex;

    width: 50rem;


    position: absolute;
    bottom: 58%;
    left: 50%;
    transform:translate(-50%, -58%);

    z-index: 3;

    .inline div:not(:last-child) {
        margin-right: 0.3rem;
    }

    & button {
        margin-left: 2rem;
        height: 2.5rem;
        width: 7rem;
        text-align: center;
        align-items: center;
    }
`
