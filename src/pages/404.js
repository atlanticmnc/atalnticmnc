import React from 'react';
import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';
import Link from "next/link";

import DefaultLayout from '@/layouts/DefaultLayout';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Страница не найдена – AtlanticCMNC</title>
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
                  <span className="primary-color">Упс..</span><br />
                  Страница не найдена :(
                </h1>
                <p className="size-24">
                  Пожалуйста, вернитесь на главную либо попробуйте позже.
                </p>
                <Link href="/">
                  <button className="btn btn-primary btn-arrow">
                    Вернуться на главную
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