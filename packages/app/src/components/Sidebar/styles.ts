import styled from 'styled-components';

export const StyledSidebar = styled.div`
  background-color: rgba(32, 32, 32, 0.4);
  width: 100%;
  height: calc(100vh - 40px);
  position: relative;
  text-align: center;
`;

export const AccountStatusArea = styled.div`
  position: absolute;
  bottom: 16px;
  left: 0;
  right: 0;
`;

export const SideMenuArea = styled.ul`
  list-style: none;
  margin-top: 100px;
`;

export const StyledMenuItem = styled.li`
  a {
    color: white;
    text-decoration: none;
  }
`;
