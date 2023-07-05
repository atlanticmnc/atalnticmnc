import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/images/logo.svg';

export default function Header() {
  return (
    <header>
      <Container>
        <Row>
          <Col lg={12}>
            <div className="logo">
              <Link href="/">
                <a>
                  <Image src={Logo.src} alt="Branderly - Performance Marketing Agency" width={Logo.width} height={Logo.height} />
                </a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
