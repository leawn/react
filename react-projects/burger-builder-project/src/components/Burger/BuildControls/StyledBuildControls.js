import styled, {keyframes} from 'styled-components';

export const StyledBuildControls = styled.div`
  width: 100%;
  background-color: #cf8f2e;
  display: flex;
  flex-flow: column;
  align-items: center;
  box-shadow: 0 2px 1px #ccc;
  margin: auto;
  padding: 10px 0;
`;

const enable = keyframes`
    0% {
        transform: scale(1);
    }
    60% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
`

export const OrderButton = styled.button`
  background-color: #DAD735;
  outline: none;
  cursor: pointer;
  border: 1px solid #966909;
  color: #966909;
  font-family: inherit;
  font-size: 1.2em;
  padding: 15px 30px;
  box-shadow: 2px 2px 2px #966909;
  :hover,
  :active {
    background-color: #A0DB41;
    border: 1px solid #966909;
    color: #966909;
  };
  :disabled {
    background-color: #C7C6C6;
    cursor: not-allowed;
    border: 1px solid #ccc;
    color: #888888;
  };
  :not(:disabled) {
    animation: ${enable} 0.3s linear;
  }
`;