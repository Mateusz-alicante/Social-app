import React, { useEffect } from 'react';
import styles from './layout.module.css';

const Layout = props => {
  useEffect(() => {
    console.log(styles);
  }, []);
  return (
    <div style={{ color: 'red' }}>
      <div>header</div>
      <div>contacts</div>
      <div>main screen</div>
    </div>
  );
};

export default Layout;
