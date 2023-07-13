import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import _ from 'lodash';
import { MoneySend } from 'iconsax-react';

import DefaultLayout from '@/layouts/DefaultLayout';
import Image from "next/image";
import Logo from "@/images/logo.svg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <section className="section hero-banner">
          <Container>
            <Row>
              <Col lg={12} className="text-center">
                <h1>
                  Сотрите границы!<br/>
                  <span className="primary-color">Получите Второе Гражданство</span>
                </h1>
                <p className="size-24">
                  High-net-worth individuals can participate in investment programs to obtain a second passport. We will
                  analyze why you need a second passport, where and how to apply for it.
                </p>
                <div className="section-image">
                
                </div>
                <Link href="/consultation">
                  <button className="btn btn-landing-page">
                    Бесплатная Консультация
                    <span>Узнайте обо всем прежде чем выбрать!</span>
                  </button>
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
        <hr/>
        <section className="section benefits">
          <Container>
            <Row>
              <Col lg={12}>
                <h2 className="text-center">
                  Хотите больше свободы?<br/>
                  <span className="primary-color">Преимущества Второго Гражданства</span>
                </h2>
                <ul className="benefit-list">
                  {
                    _.times(8, (benefitIndex) => (
                      <li className="benefit-list-item" key={benefitIndex}>
                        <b>Travelling the world visa-free.</b> A dual citizen can use either of their passports to
                        travel to the
                        desired destination with simplified or no visa requirements. Caribbean passports offer 145 or
                        more
                        visa-free destinations, and EU passports open travel without visas to 175–190 countries.
                      </li>
                    ))
                  }
                </ul>
                <Link href="/consultation">
                  <button className="btn btn-landing-page">
                    Бесплатная Консультация
                    <span>Узнайте обо всем прежде чем выбрать!</span>
                  </button>
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section light-background citizenship">
          <Container>
            <Row>
              <Col lg={12} className="text-center">
                <h2>
                  Что мы предлагаем?
                </h2>
                <p>
                  Multiple citizenships provide its holder with an option to cut their tax payments. The person can pick
                  the country with a more beneficial taxation regime to become a tax resident or register a company.
                  Some countries don’t oblige their citizens to pay income taxes or taxes on wealth.
                </p>
                <Row>
                  {
                    _.times(3, (citizenshipIndex) => (
                      <Col lg={4} key={citizenshipIndex}>
                        <div className="citizenship-block">
                          <div className="block-image">
                          
                          </div>
                          <div className="block-content">
                            <div className="block-logo">
                              <Image src={Logo.src} alt="AtlanticCMNC - Second Citizenship by Investment"
                                     width={Logo.width} height={Logo.height}/>
                            </div>
                            <div className="block-title">
                              Grenada
                              <span>Minimum Contribution $150,000</span>
                            </div>
                            <ul className="block-specifications-list">
                              <li className="block-specifications-list-item">
                                <span className="block-specifications-list-item-title">
                                  Processing Time
                                </span>
                                <span className="block-specifications-list-item-value">
                                  5 months
                                </span>
                              </li>
                              <li className="block-specifications-list-item">
                                <span className="block-specifications-list-item-title">
                                  Processing Time
                                </span>
                                <span className="block-specifications-list-item-value">
                                  5 months
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </Col>
                    ))
                  }
                </Row>
                <div className="section-comment">
                  + Несколько Других Опций!
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section free-consultation">
          <Container>
            <Row className="justify-content-center">
              <Col lg={10} className="text-center">
                <h2>
                  <span className="primary-color">БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</span><br/>
                  Мы поможем Вам сделать выбор!
                </h2>
                <p>
                  Multiple citizenships provide its holder with an option to cut their tax payments. The person can pick
                  the country with a more beneficial taxation regime to become a tax resident or register a company.
                </p>
                <Row className="justify-content-center">
                  {
                    _.times(3, (benefitIndex) => (
                      <Col xs="auto" key={benefitIndex}>
                        <div className="benefit-block">
                          <div className="block-icon">
                            <MoneySend color="#386EBE" />
                          </div>
                          <div className="block-title">
                            $100,000+
                            <span>Investment Amount</span>
                          </div>
                        </div>
                      </Col>
                    ))
                  }
                </Row>
                <Link href="/consultation">
                  <button className="btn btn-landing-page">
                    Бесплатная Консультация
                    <span>Узнайте обо всем прежде чем выбрать!</span>
                  </button>
                </Link>
                <div className="section-image">
                
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <hr/>
        <section className="section faq">
          <Container>
            <Row>
              <Col lg={12}>
                <h2 className="text-center">
                  Часто Задаваемые Вопросы
                </h2>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Container>
        </section>
      </DefaultLayout>
    </>
  )
}
