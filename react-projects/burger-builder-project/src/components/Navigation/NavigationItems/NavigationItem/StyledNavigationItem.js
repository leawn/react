import styled, { css } from 'styled-components';

export const StyledNavigationItem = styled.li`
  margin: 0;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  align-items: center;
  a {
    color: white;
    text-decoration: none;
    height: 100%;
    padding: 16px 10px;
    border-bottom: 4px solid transparent;
    box-sizing: border-box;
    display: block;
    &:hover,
    &:active {
      background-color: #8f5c2c;
      border-bottom: 4px solid #40a4c8;
      color: white;
    }
    ${props => props.active && 
      css`
        background-color: #8f5c2c;
        border-bottom: 4px solid #40a4c8;
        color: white;
      `
    }
  }
  @media (min-width: 500px) {
    margin: 10px 0;
    width: 100%;
    display: block;
    a {
      color: #8f5c2c;
      text-decoration: none;
      width: 100%;
      box-sizing: border-box;
      display: block;
      &:hover,
      &:active {
        color: #40a4c8;
      }
      ${props => props.active &&
        css`
          color: #40a4c8;
        `
      }
    }
  }
`;