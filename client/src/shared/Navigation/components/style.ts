import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #707070;
  box-shadow: 11px 10px 12px #00000029;
  background: #fff;
  position: fixed;
  width: 100%;
`;

export const StyledNavigationLinks = styled.ul`
  margin: 0 3rem 0 0;
`;

export const StyledNavigationLink = styled.li`
  color: #707070;
  display: inline;
  margin: 2.3rem;
  padding: 0.5rem;
  font-size: 24px;
  font-weight: 700;
`;
