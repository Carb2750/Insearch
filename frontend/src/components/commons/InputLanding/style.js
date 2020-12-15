import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
`;

export const StyledP = styled.p`
  font-size: 3.4rem;
  margin-bottom: 1rem;
  display: inline-block;
  width: 100%;
`;

export const StyledInput = styled.input`
  border: none;
  border-radius: 7px;
  box-shadow: 0px 1px 1px #444444;
  padding-left: 0.8rem;

  margin-bottom: 1.2rem;

  width: ${(props) => props.size};
  height: 2.4rem;
`;