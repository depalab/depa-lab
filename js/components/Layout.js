// Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
