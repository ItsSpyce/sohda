import styled from 'styled-components';

export const StyledHome = styled.div`
  .jumbotron {
    margin: 0 auto;
    color: ${(props) => props.theme.colors.WHITE};
    background-color: ${(props) => props.theme.colors.GRAY_200};
  }
`;
