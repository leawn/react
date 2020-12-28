import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;
  &:first-of-type {
    margin-left: 0;
    padding-left: 0;
  }
  
  ${props => props.success &&
    css`
      color: #5C9210;
    `}
    
  ${props => props.danger &&
    css`
      color: #944317;
    `}
`;