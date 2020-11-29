import styled from 'styled-components';

export const StyledRegisterForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 3rem;

    width: 40rem;
    height: 40rem;

    position: absolute;
    top: 20%;
    right: 10%;


    background-color: #ffffffdd;

    z-index: 3;

    .title {
        text-align: center;
        width: 100%;
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 2rem; 
    }

    .inline {
        display: flex;

        width: 100%;
    }

    .inline div:not(:last-child) {
        margin-right: 1.5rem;
    }

    & input {
        margin-bottom: 2rem
    }

    button {
        position: absolute;
        bottom: 10%;
        left: 50%;
        transform: translateX(-50%);
    }
`