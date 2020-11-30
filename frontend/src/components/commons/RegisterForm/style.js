import styled from 'styled-components';

export const StyledRegisterForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 3rem;

    width: 40rem;
    height: auto;

    position: absolute;
    top: 50%;
    right: 8%;
    transform:translate(-8%, -50%);


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
        margin: 0 auto;
    }
`