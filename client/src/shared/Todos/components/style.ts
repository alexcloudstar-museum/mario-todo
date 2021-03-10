import styled from 'styled-components';

export const TodosWrapper = styled.div`
  width: 446px;
  height: 416px;
  overflow: hidden;
  background: #fff;
  border: 1px solid #707070;
  border-radius: 10px 10px 0px 0px;
  box-shadow: 9px 8px 13px #00000029;
`;

export const AddTodoWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #707070;
`;

export const StyledTodo = styled.div`
  height: 90px;
  display: flex;
  padding: 0 8px;
  flex-direction: row;
  align-items: center;
  text-transform: capitalize;
  border-bottom: 1px solid #707070;

  p {
    width: 100%;
  }
`;

export const NoTodoLeft = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  h3 {
    font-size: 2rem;
    margin: 0;
  }

  h2 {
    margin-top: 1rem;
    font-size: 2.5rem;
  }
`;
