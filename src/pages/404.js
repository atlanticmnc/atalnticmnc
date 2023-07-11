import React from 'react';
import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';
import Link from "next/link";

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
        <section className="section hero-404">
          <Container>
            <Row>
              <Col lg={12} className="text-center">
                <h1>
                  <span className="primary-color">Oops..</span><br />
                  Page was Not Found :(
                </h1>
                <p className="size-24">
                  Please, go back to homepage or try again later.
                </p>
                <Link href="/">
                  <button className="btn btn-primary btn-arrow">
                    Back to homepage
                  </button>
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
      </DefaultLayout>
    </>
  );
}