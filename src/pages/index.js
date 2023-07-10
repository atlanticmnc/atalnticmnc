import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import DefaultLayout from '@/layouts/DefaultLayout';

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <section className="section">
          <Container>
            <Row>
              <Col lg={12}>
                <h1>Solutions driving your revenue up</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, amet beatae dicta et expedita explicabo illo laboriosam maxime nemo nostrum odit quia quod ratione repudiandae sapiente sint, suscipit vel, vero.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

      </DefaultLayout>
    </>
  )
}
