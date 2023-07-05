import React from 'react';
import Head from 'next/head';

import DefaultLayout from '@/layouts/DefaultLayout';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page not found – Branderly</title>
        <meta name="description"
              content="Branderly is a company that focuses on increasing clients' marketing ROI. We secure the delivery of high-quality digital marketing services by doing preliminary research and working out implementation strategies. Diving deep into clients' bottlenecks to provide a real solution."/>
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