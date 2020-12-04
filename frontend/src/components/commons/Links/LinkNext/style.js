import styled from 'styled-components';

export const StyledLink = styled.li`
    display: inline-block;
    margin-right: 2rem;
    font-size: 1.4rem;
    
    a {
        background-color: #1d8027;
        text-decoration: none;
        color: #ffffff;
        padding: 6px 14px 6px 14px;
        border-radius: 10px;
        background: #1d8027;
    }

    a:hover {
        background: #1d8027;
        background-color: #105216;
    } 

    .active {
        border-bottom: 2px solid #ffffff;
    }
`