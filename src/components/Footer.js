import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col xs="auto">
            <div className="copyright">
              © 2023 AtlanticCMNC – Все права защищены.
            </div>
          </Col>
          <Col xs="auto">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <Link href="#" className="nav-link">
                  Политика Конфиденциальности
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
