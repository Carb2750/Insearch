import styled from 'styled-components';

export const StyledDiv = styled.div`
    /* padding: 0.5rem; */

    & h1 {
        font-weight: 600;
        font-size: 2.3rem;
        padding: 0;
        margin: 0%;
    }

    & img {
        width: 6em;
        height: 6em;

        border-radius: 5px;

        margin-right: 1.2rem;
    }

    & .data {
        display: flex;
        align-self: center;

        padding: 1.5rem;

        box-shadow: 0px 5px 2px #00000077;
    }

    & .enterpriseData {
        display: flex;
        align-items: center;
    }

    & .titulo {
        font-size: 2.3rem;
        font-weight: 600;
    }

    & .jobData {
        display: flex;
        align-items: center;

        margin-left: auto;
    }

    & .jobData span {
        display: flex;
        align-items: center;

        margin-right: 1rem;
    }

    & .jobData span p {
        font-weight: bold;
        margin-left: 0.3rem;
    }

    & .metadata {
        margin-left: 2%;
    }

    & .jobDetail {
        padding: 0 2rem;
    }

    & .contact {
        font-size: 1.2rem;
        font-weight: 500;
        margin-top: 1rem;
    }
`;