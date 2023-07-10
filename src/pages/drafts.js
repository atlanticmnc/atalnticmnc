import React from 'react';
import Head from 'next/head';
import { Col, Container, Row } from 'react-bootstrap';

import DefaultLayout from '@/layouts/DefaultLayout';
import Select from "@/components/form/Select";

export default function Drafts() {
  return (
    <>
      <Head>
        <title>Drafts – AtlanticCMNC</title>
        <meta
          name="description"
          content="AtlanticCMNC Drafts Page"
        />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <DefaultLayout>
        <section className="section">
          <Container>
            <Row>
              <Col lg={12}>
                <h1>Solutions driving your revenue up</h1>
                <h2>Solutions driving your revenue up</h2>
                <h3>Solutions driving your revenue up</h3>
                <h4>Solutions driving your revenue up</h4>
                <h5>Solutions driving your revenue up</h5>
              </Col>
            </Row>
          </Container>
        </section>
        <hr/>
        <section className="section">
          <Container>
            <Row>
              <Col lg={12}>
                <p className="size-24">
                  We are not only about result-oriented marketing, we are also about the atmosphere.
                  Meeting your businesses goals and bringing more joy into the process
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum
                  dolore
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <hr/>
        <section className="section">
          <Container>
            <Row>
              <Col xs="auto">
                <button className="btn btn-primary">
                  Discover the solutions
                </button>
              </Col>
              <Col xs="auto">
                <button className="btn btn-primary btn-arrow">
                  Discover the solutions
                </button>
              </Col>
              <Col xs="auto">
                <button className="btn btn-primary btn-benefit">
                  Discover the solutions <span>FREE</span>
                </button>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col xs="auto">
                <button className="btn btn-primary-outlined">
                  Discover the solutions
                </button>
              </Col>
              <Col xs="auto">
                <button className="btn btn-primary-outlined btn-arrow">
                  Discover the solutions
                </button>
              </Col>
              <Col xs="auto">
                <button className="btn btn-primary-outlined btn-benefit">
                  Discover the solutions <span>FREE</span>
                </button>
              </Col>
            </Row>
          </Container>
        </section>
        <hr/>
        <section className="section">
          <Container>
            <Row>
              <Col lg={12}>
                <h1>
                  Unleashing your business
                  with battle-proven solutions
                </h1>
                <p className="size-24">
                  We believe you have chosen the right niche.
                  Let us show your potential and drive some revenue up!
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <hr/>
        <section className="section">
          <Container>
            <Row>
              <Col lg={12}>
                <h2>
                  Our clients – our partners.<br/>
                  Growing from day-to-day together
                </h2>
                <p>
                  We are not only about result-oriented marketing, we are also about the atmosphere.
                  Meeting your businesses goals and bringing more joy into the process
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <hr/>
        <section className="section">
          <Container>
            <Row>
              <Col lg={7}>
                <form action="#">
                  <Row>
                    <Col lg={6}>
                      <input
                        type="text" name="full-name" className="form-control"
                        placeholder="Full Name" required
                      />
                    </Col>
                    <Col lg={6}>
                      <input
                        type="email" name="email" className="form-control"
                        placeholder="Your email" required
                      />
                    </Col>
                    <Col lg={12}>
                      <input
                        type="text" name="phone" className="form-control" placeholder="Phone"
                        required
                      />
                    </Col>
                    <Col lg={12}>
                      <Select
                        Name="select-field"
                        Id="select-field"
                      >
                        <option value="default" selected disabled>Select an option</option>
                        <option value="value-1">Value 1</option>
                        <option value="value-2">Value 2</option>
                        <option value="value-3">Value 3</option>
                      </Select>
                    </Col>
                    <Col lg={12}>
                      <textarea
                        name="msg" id="msg" className="form-control"
                        placeholder="My name is Oleh. I want to make some millions!"
                      />
                    </Col>
                    <Col lg={12}>
                      <button className="btn btn-primary btn-arrow w-100">
                        Get Started
                      </button>
                    </Col>
                  </Row>
                </form>
              </Col>
            </Row>
          </Container>
        </section>
      </DefaultLayout>
    </>
  );
}