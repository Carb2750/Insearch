import styled from "styled-components";

export const StyledButton = styled.button`
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.fg};
  font-size: ${props => props.theme.fontSize ? props.theme.fontSize : '1.4rem'};
  padding: 0.5rem 1rem 0.5rem 1rem;

  &:hover, &:active {
    background-color: ${props => props.theme.bgHover};
    border: ${props => props.theme.borderHover};
    cursor: pointer;
  }

  &.active {
    border-color: #61BB6A;
  }
`;
