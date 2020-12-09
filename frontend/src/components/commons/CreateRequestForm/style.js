import styled from 'styled-components'

export const StyledCreateRequestForm = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: auto;

    .title {
        text-align: center;
        width: 70%;
        font-size: 2rem;
        font-weight: bold;
        margin-top: 1rem;
        margin-bottom: 2rem; 
    }

    .duration {
        font-size: 1.4rem;
        margin-bottom: 1rem;
        display: inline-block;
        width: 100%;
    }

    .inline {
        display: flex;
        width: 78%;
    }

    .center {
        margin-left: 8rem;
        margin-top: 2rem; 
    }

    & textarea {
        resize: none;
    }

    & button {
        margin-top: 1rem;
        margin-bottom: 3rem;
    }
`