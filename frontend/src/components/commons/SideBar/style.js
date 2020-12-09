import styled from 'styled-components';

export const StyledDiv = styled.div` 
    position: relative;
    
    width: 35vw;
    min-height: 100vh;
    height: auto;

    padding: 2rem;

    background-color: #F5F5F5;

    & .buttonGroup > button {
        margin-right: 1rem;
        margin-bottom: 1rem;
    }

    & .applyChanges {
        position: absolute;
        margin-top: 2rem;
        right: 5%;
    }
`;