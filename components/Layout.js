import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div id='wrapper'>
      <div className='w1'>
        <Header />
        {children}
        <Footer />
        <span id='back-top' className='fa fa-arrow-up'></span>
      </div>
    </div>
  );
};

export default Layout;
