import React from 'react';
import Header from '../components/Header/Header';

const Layout = (props) => (
  <div>
    <Header />
    <main style={{ marginTop: '70px' }}>{props.children}</main>
  </div>
);

export default Layout;
