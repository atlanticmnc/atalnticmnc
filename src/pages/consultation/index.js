import React, { useState } from 'react';
import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';

// layout
import DefaultLayout from '@/layouts/DefaultLayout';

// steps
import Progress from './steps/Progress';
import Introduction from './steps/Introduction';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';

export default function Consultation() {
  // form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    goal: '',
    startTime: '',
  });
  
  const submitForm = (object) => {
    console.log('hello, your values are', object);
  }
  
  // stepper
  const [step, setStep] = useState(0);
  
  const handleNextStep = () => setStep(step + 1);
  
  const handlePreviousStep = () => setStep(step - 1);
  
  const handleStep = (stepIndex) => setStep(stepIndex);
  
  const Steps = () => {
    switch (step) {
      case 0:
        return <Introduction handleNextStep={handleNextStep}/>
      
      case 1:
        return <Step1 formData={formData} setFormData={setFormData} handleNextStep={handleNextStep}/>
      
      case 2:
        return <Step2 formData={formData} setFormData={setFormData} handleNextStep={handleNextStep}/>
      
      case 3:
        return <Step3 formData={formData} setFormData={setFormData} submitForm={submitForm}/>
      
      default:
        return 'default';
    }
  }
  
  return (
    <>
      <Head>
        <title>Бесплатная Консультация – AtlanticCMNC</title>
        <meta
          name="description"
          content="Бесплатная Консультация – AtlanticCMNC"
        />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <DefaultLayout>
        <section className="section consultation">
          <Container>
            <Row>
              <Col lg={12}>
                <Progress step={step} handleStep={(stepIndex) => handleStep(stepIndex)}/>
                <Steps/>
              </Col>
            </Row>
          </Container>
        </section>
      </DefaultLayout>
    </>
  );
}