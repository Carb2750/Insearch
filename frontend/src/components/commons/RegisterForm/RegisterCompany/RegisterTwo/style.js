import styled from 'styled-components';

export const StyledRegisterTwo = styled.div `
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
        width: 100%;
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 1rem; 
    }

    .center {
        margin-top: 1.5rem; 
    }

    .inline {
        display: flex;
        width: 100%;
    }

    button {
        margin-top: 1rem;
    }

    .enlace {
        margin-top: 1.5rem;
        margin-left: 3rem;
    }
`