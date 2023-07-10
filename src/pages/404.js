import React from 'react';
import Head from 'next/head';

import DefaultLayout from '@/layouts/DefaultLayout';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page not found – AtlanticCMNC</title>
        <meta name="description"
              content="AtlanticCMNC - Error Page"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <DefaultLayout>
        <section className="section">
          Error 404
        </section>
      </DefaultLayout>
    </>
  );
}