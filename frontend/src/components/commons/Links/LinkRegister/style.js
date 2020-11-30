import styled from 'styled-components';

export const StyledLink = styled.li`
    display: inline-block;
    margin-right: 2rem;
    font-size: 1rem;
    a {
        text-decoration: none;
        color: #2A6726;
    }

    a:hover {
        color: #28D41D;
    } 

    .active {
        border-bottom: 2px solid #ffffff;
    }
`