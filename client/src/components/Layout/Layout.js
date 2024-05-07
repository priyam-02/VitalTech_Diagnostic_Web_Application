import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useLocation } from 'react-router-dom';

function Layout({ children }) {

  let location = useLocation();

  const isLoggedIn = location.pathname === '/dashboard' ? true : false;

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} />
      <main style={{ padding: '20px' }}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
