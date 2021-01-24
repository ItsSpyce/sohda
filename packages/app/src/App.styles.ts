import styled from 'styled-components';

export const StyledApp = styled.div``;

export const Content = styled.div`
  height: calc(100% - 32px);
  padding-top: 40px;
  overflow-y: hidden;
  display: grid;
  grid-template-columns: 200px auto;
`;

export const Page = styled.div`
  padding: 20px;
  position: static;
  height: 100%;
`;
