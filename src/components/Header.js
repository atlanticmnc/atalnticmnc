import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/images/logo.svg';

export default function Header() {
  return (
    <header>
      <Container>
        <Row className="justify-content-center">
          <Col lg="auto">
            <div className="logo">
              <Link href="/">
                <Image src={Logo.src} alt="AtlanticCMNC - Second Citizenship by Investment" width={Logo.width} height={Logo.height} />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
