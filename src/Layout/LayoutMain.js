import React from 'react';
import { Layout } from '@QCFE/lego-ui';
import NavMain from '../Nav/NavMain';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from '../Page/Dashboard/Dashboard';

const { LayoutHeader, LayoutFooter, LayoutContent, LayoutSider } = Layout;

const LayoutMain = () => (
  <Router>
    <Layout>
      <LayoutSider ><NavMain></NavMain></LayoutSider>
      <Layout>
        <LayoutContent>
          <Route path="/home" exact component={Dashboard} />
        </LayoutContent>
      </Layout>
    </Layout>
    </Router>
);

export default LayoutMain;