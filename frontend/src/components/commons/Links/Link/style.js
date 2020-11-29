import styled from 'styled-components';

export const StyledLink = styled.li`
    display: inline-block;
    margin-right: 2rem;
    font-size: 1.3rem;
    a {
        text-decoration: none;
        color: #ffffff;
    }

    a:hover {
        color: #cccccc;
    } 

    .active {
        border-bottom: 2px solid #ffffff;
    }
`