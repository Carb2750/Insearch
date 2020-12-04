import styled from 'styled-components';

export const StyledLoginForm = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: auto;
    max-width: 480px;
    min-height: 500px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%, -50%);

    background-color: #fffffffd;
    box-shadow: 0 50px 70px -20px rgba(0, 0, 0, 2);

    .title {
        text-align: center;
        width: 100%;
        font-size: 2rem;
        font-weight: bold;
        margin-top: 2rem;
        margin-bottom: 2rem; 
    }

    .center {
        text-align: center;
        margin: 1rem;
    }

    .center div:not(:first-child){
        margin-top: 30px;
    }

    & input center:not(:last-child){
        margin-bottom: 2rem
    }

    button {
        margin-top: 1rem;
    }
    
    .link {
        text-align: right;
    }
    
`