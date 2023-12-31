import React from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  );
}