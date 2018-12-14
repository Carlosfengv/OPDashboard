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
            <MenuItem key="k1">
              <Icon name="dashboard" />
            </MenuItem>
            <MenuItem key="k2">
              <Icon name="appcenter" />
            </MenuItem>
            <MenuItem key="k3">
              <Icon name="shield" />
            </MenuItem>
            <MenuItem key="k4">
              <Icon name="components" />
            </MenuItem>
            <MenuItem key="k5">
              <Icon name="group" />
            </MenuItem>
            <MenuItem key="k6">
              <Icon name="cogwheel" />
            </MenuItem>
                
                
        </MenuGroup>
        <MenuGroup className="Bottom">
            <MenuItem 
            key="b1" >
              <Icon name="magnifier" />
            </MenuItem>
            <MenuItem key="b2">
              <Icon name="bell" />
            </MenuItem>
            <MenuItem key="b3">
              <Icon name="mail" />
            </MenuItem>
            <MenuItem key="b4">
              <Icon name="human" />
            </MenuItem>
        </MenuGroup>
        
      </Menu>
    </Navigation>
  </div>
);

export default NavMain;