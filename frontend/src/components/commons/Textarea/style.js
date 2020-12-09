import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
`;

export const StyledP = styled.p`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  display: inline-block;
  width: 100%;
`

export const StyledTextarea = styled.textarea`
  border: none;
  border-radius: 4px;
  box-shadow: 0px 2px 2px #444444;

  margin-bottom: 1.2rem;

  width: ${(props) => props.rows};
  height: ${(props) => props.cols};
`;