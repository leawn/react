import styled, { css } from 'styled-components';

export const StyledSideDrawer = styled.div`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: white;
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;
  @media (min-width: 500px) {
    display: none;
  };
  ${props => props.open &&
    css`
      transform: translateX(0);
    `
  }
  ${props => props.close &&
    css`
      transform: translateX(-100%);
    `
  }
`;

export const StyledLogoSideDrawer = styled.div`
  height: 11%;
  margin-bottom: 32px;
`;

export const StyledNavigation = styled.nav`
  @media (max-width: 499px) {
    display: none;
  }
`;
