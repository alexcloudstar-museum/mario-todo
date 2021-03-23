import styled from 'styled-components';

export const StyledInput = styled.input<{ disabled: boolean; height?: string }>`
  width: 100%;
  height: ${({ height }) => (height ? height : '4rem')};
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  text-align: center;
  border: 0;

  &:hover {
    cursor: ${({ disabled }) => (disabled ? 'pointer' : 'text')};
  }

  &:focus {
    outline: none;
  }

  .todos-enter {
    opacity: 0.1;
  }

  .todos-enter.todos-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  .todos-leave {
    opacity: 1;
  }

  .todos-leave.todos-leave-active {
    opacity: 0.1;
    transition: opacity 300ms ease-in;
  }
`;

export const StyledButton = styled.button<{
  show: boolean;
  hoverColor?: string;
  height?: string;
}>`
  display: ${({ show }) => (show ? 'block' : 'none')};
  border: 0;
  padding: 0 20px;
  border-left: 1px solid;
  background: transparent;
  height: ${({ height }) => height && height};

  &:hover {
    cursor: pointer;

    svg {
      color: ${({ hoverColor }) => hoverColor && hoverColor};
    }
  }

  &:focus {
    outline: none;
  }
`;
