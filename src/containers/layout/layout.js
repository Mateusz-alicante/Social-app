import React from 'react';
import styles from './layout.module.css';

import Header from '../Header/Header.js';

const Layout = props => {
  return (
    <div className={styles.outerContainer}>
      <Header />
      <div className={styles.Layout}>
        <div className={styles.contacts}>contacts</div>
        <div className={styles.chat}>main screen</div>
      </div>
    </div>
  );
};

export default Layout;
