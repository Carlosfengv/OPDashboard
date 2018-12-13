import React from 'react';
import { Menu, MenuGroup ,Icon, Navigation } from '@QCFE/lego-ui';
import logo from '../Image/Logo.svg';
import { Link } from "react-router-dom"


const { MenuItem, SubMenu} = Menu;

const NavMain = () => (
  <div className="NavMain">
    <Navigation theme="light" style={{ width: 64 }} collapsed >
      <Menu className="Menu-container">
        <MenuGroup>
            <MenuItem title={<Icon name="shield" />} key="k0"><Link to="/home"><img alt="logo" src={logo} ></img></Link></MenuItem>
        </MenuGroup>
        <MenuGroup>
            <MenuItem title={<Icon name="dashboard" />} key="k1">
            </MenuItem>
            <MenuItem title={<Icon name="appcenter" /> }key="k2">
            </MenuItem>
                
        </MenuGroup>
        <MenuGroup>
            <MenuItem title={<Icon name="shield" />} key="k0"><img alt="logo" src={logo} ></img></MenuItem>
        </MenuGroup>
        
      </Menu>
    </Navigation>
  </div>
);

export default NavMain;