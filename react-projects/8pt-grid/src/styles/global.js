import { createGlobalStyle } from 'styled-components';

export const colors = {
    jobBG: '#fdfdfd',
    border: '#e0e2e5',
    text: '#2c363f',
    secondary: '#9b9b9b'
};

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Avenir', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;