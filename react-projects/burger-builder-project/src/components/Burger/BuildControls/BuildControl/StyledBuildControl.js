import styled from 'styled-components';

export const StyledBuildControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  button {
    display: block;
    font: inherit;
    padding: 5px;
    margin: 0 5px;
    width: 80px;
    border: 1px solid #aa6817;
    cursor: pointer;
    outline: none;
  };
  button:disabled {
    background-color: #ac9980;
    border: 1px solid #7e7365;
    color: #ccc;
    cursor: default;
  };
  button:hover:disabled {
    background-color: #AC9980;
    color: #ccc;
    cursor: not-allowed;
  }
`;

export const Label = styled.div`
  padding: 10px;
  font-weight: bold;
  width: 80px;
`;

export const Less = styled.button`
  background-color: #D39952;
  color: white;
  :active,
  :hover {
    background-color: #DAA972;
    color: white;
  }
`;

export const More = styled.button`
  background-color: #8F5E1E;
  color: white;
  :active,
  :hover {
    background-color: #99703F;
    color: white;
  }
`;