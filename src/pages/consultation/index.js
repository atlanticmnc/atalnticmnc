import React, { useState } from 'react';
import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { event } from 'nextjs-google-analytics';

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
    const data = {
      name: `${object.name}`,
      label: 'Free Consultation',
      owner_id: 15409690,
      email: [
        {
          value: `${object.email}`,
          primary: true,
          label: 'Work'
        }
      ],
      phone: `${object.phone}`,
      visible_to: '3',
      marketing_status: 'subscribed',
      'a025ec7d49aca1e3f014834c4a11b613262a2b5a': object.reason,
      '35d918d9719138110a71aa5be1504f0169a94c73': object.goal,
      'ccfffdb1030d08621dc659e7eafaa480f5f97651': object.startTime,
    };
    
    axios.post(`https://api.pipedrive.com/v1/persons`, data, {
      params: {
        api_token: 'bd9062f64fbbe2b9a79c7f812503259fa74b8be0'
      }
    })
      .then((res) => {
        event('free_consultation', {
          category: 'Free Consultation',
          label: 'Free Consultation Scheduled',
        });
        
        window.location.replace('https://calendly.com/atlanticcmnc/free-consultation');
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  // stepper
  const [step, setStep] = useState(0);
  const handleNextStep = () => setStep(step + 1);
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
        <title>Бесплатная Консультация – AtlanticMNC</title>
        <meta
          name="description"
          content="Бесплатная Консультация – AtlanticMNC"
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