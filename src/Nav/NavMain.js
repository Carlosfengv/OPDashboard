import React from 'react';
import { Badge, Menu, MenuGroup ,Icon, Navigation } from '@QCFE/lego-ui';
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
            <SubMenu title={<Icon name="shield" />}>
                <MenuItem key="k1">浏览</MenuItem>
                <MenuItem key="k2">管理</MenuItem>
                <MenuItem key="k3">
                    应用开发
                    <Badge count={2} style={{ right: '1.25rem', position: 'absolute' }} />
                </MenuItem>
                </SubMenu>
                <SubMenu title={<Icon name="appcenter" />}>
                <MenuItem key="k4">浏览</MenuItem>
                <MenuItem key="k5">管理</MenuItem>
                <MenuItem key="k6">
                    应用开发
                    <Badge count={2} style={{ right: '1.25rem', position: 'absolute' }} />
                </MenuItem>
                <MenuItem key="k7">云应用</MenuItem>
                </SubMenu>
        </MenuGroup>
        <MenuGroup>
            <MenuItem title={<Icon name="shield" />} key="k0"><img alt="logo" src={logo} ></img></MenuItem>
        </MenuGroup>
        
      </Menu>
    </Navigation>
  </div>
);

export default NavMain;