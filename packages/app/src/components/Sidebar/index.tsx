import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledSidebar,
  AccountStatusArea,
  SideMenuArea,
  StyledMenuItem,
} from './styles';
import AccountStatus from '../AccountStatus';

type SidebarMenuItem = {
  name: string;
  route: string;
};

type SidebarProps = {
  menuItems: SidebarMenuItem[];
};

const Sidebar = (props: SidebarProps) => (
  <StyledSidebar>
    <SideMenuArea>
      {props.menuItems.map((item, i) => (
        <StyledMenuItem key={i}>
          <Link to={item.route}>{item.name}</Link>
        </StyledMenuItem>
      ))}
    </SideMenuArea>
    <AccountStatusArea>
      <AccountStatus />
    </AccountStatusArea>
  </StyledSidebar>
);

export default Sidebar;
