import { styled } from 'styled-components';

export const Form = styled.form`
  border: 2px solid black;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 4px;
  input {
    display: flex;
    justify-content: end;
    border-radius: 4px;
    margin-top: 8px;
    padding: 4px;
  }
  input:focus {
    outline: none;
    border: 2px solid #5e5eba;
  }
  button {
    width: 100px;
    padding: 4px;
    cursor: pointer;
  }
`;
