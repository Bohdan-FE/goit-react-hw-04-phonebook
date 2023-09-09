import { styled } from 'styled-components';

export const Item = styled.li`
  list-style: none;
  display: flex;
  gap: 12px;
  align-items: center;
  p {
    font-weight: 600;
    span {
      padding-left: 6px;
      font-weight: 500;
      font-style: italic;
    }
  }
  button {
    cursor: pointer;
  }
`;
