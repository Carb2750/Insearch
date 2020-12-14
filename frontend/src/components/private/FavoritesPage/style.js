import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 3rem;
  }
`;

export const StyledCards = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 2rem auto;
  & > div {
    margin: 0rem 1rem 1rem 1rem;
  }
`;
