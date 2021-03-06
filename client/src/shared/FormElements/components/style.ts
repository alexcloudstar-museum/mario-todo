import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 4rem;
  font-size: 30px;
  text-align: center;
  border: 0;

  &:focus {
    outline: none;
  }
`;

export const StyledButton = styled.button<{ show: boolean }>`
  display: ${({ show }) => (show ? 'block' : 'none')};
  background: transparent;
  border: 0;
  padding: 0 20px;
  border-left: 1px solid;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;
