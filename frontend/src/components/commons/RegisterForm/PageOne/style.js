import styled from 'styled-components';

export const StyledRegisterOne = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: auto;
    width: 45vw;
    height: 95vh;

    position: absolute;
    top: 0rem;
    right: 0rem;

    background-color: #ffffffff;

    .title {
        text-align: center;
        width: 70%;
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 2rem; 
    }

    .center {
        text-align: center;
        margin-top: 2rem; 
    }

    & input {
        margin-top: 2rem
    }

    button {
        margin-top: 1rem;
    }
` 