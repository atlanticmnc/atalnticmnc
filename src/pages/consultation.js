import React, { createContext, useContext, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import _ from 'lodash';
import * as Yup from 'yup';

import { Container, Row, Col } from 'react-bootstrap';
import { Message, House } from 'iconsax-react';
import { Formik } from "formik";

// layout
import DefaultLayout from '@/layouts/DefaultLayout';

// images
import Textarea from "@/components/form/Textarea";
import Input from "@/components/form/Input";
import Checkbox from "@/components/form/Checkbox";
import Range from "@/components/form/Range";

export const FormContext = createContext();

function FormProgress() {
  const { step, handleStep } = useContext(FormContext);
  
  return (
    <div className="form-steps">
      <div className={`step ${step === 1 && 'current'} ${step > 1 && 'complete'}`}>
        <div
          className={`step-icon ${step < 1 && 'disabled'}`}
          onClick={() => handleStep(1)}
        >
          1
        </div>
      </div>
      <div className={`step ${step === 2 && 'current'} ${step > 2 && 'complete'}`}>
        <div
          className={`step-icon ${step < 2 && 'disabled'}`}
          onClick={() => handleStep(2)}
        >
          2
        </div>
      </div>
      <div className={`step ${step === 3 && 'current'} ${step > 3 && 'complete'}`}>
        <div
          className={`step-icon ${step < 3 && 'disabled'}`}
          onClick={() => handleStep(3)}
        >
          3
        </div>
      </div>
      <div className={`step ${step === 4 && 'current'} ${step > 4 && 'complete'}`}>
        <div
          className={`step-icon ${step < 4 && 'disabled'}`}
          onClick={() => handleStep(4)}
        >
          4
        </div>
      </div>
      <div className={`step ${step === 5 && 'current'} ${step > 5 && 'complete'}`}>
        <div
          className={`step-icon ${step < 5 && 'disabled'}`}
          onClick={() => handleStep(5)}
        >
          5
        </div>
      </div>
    </div>
  )
}

function StepIntroduction() {
  const { handleNextStep } = useContext(FormContext);
  
  return (
    <div className="introduction-block">
      <h1 className="text-center ms-auto me-auto">
        <span className="primary-color">Free 30-min Consultation</span><br />
        Select your’s Second Citizenship
      </h1>
      <p className="text-center ms-auto me-auto size-24">
        Claim your 100% FREE no-obligation 30-minute strategy session call ($1,000 value). This is strictly
        for people who are hungry for growth. If that’s you, then let&apos;s scale your business to the moon! 🚀
      </p>
      <button className="btn btn-primary btn-arrow ms-auto me-auto" onClick={handleNextStep}>
        Get Started
      </button>
    </div>
  );
}

function Step1() {
  const { formData, setFormData, handleNextStep } = useContext(FormContext);
  
  return (
    <>
      <h2 className="text-center">
        Where do we start?<br/>
        Tell us a little bit about yourself
      </h2>
      <Formik
        initialValues={{
          name: formData.name,
          email: formData.email,
        }}
        validationSchema={
          Yup.object().shape({
            name: Yup.string().required(`Required field`),
            email: Yup.string().required(`Required field`),
          })
        }
        onSubmit={(values) => {
          setFormData((prevState) => ({
            ...prevState,
            ...values
          }));
          handleNextStep();
        }}
        enableReinitialize
      >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
          <form className="form-container" onSubmit={handleSubmit}>
            <Row>
              <Col lg={12}>
                <Input
                  Name="name"
                  Type="text"
                  Placeholder="Full Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  error={errors.name && touched.name}
                />
              </Col>
              <Col lg={12}>
                <Input
                  Name="email"
                  Type="email"
                  Placeholder="Your Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={errors.email && touched.email}
                />
              </Col>
              <Col lg={12}>
                <button
                  className="btn btn-primary btn-arrow w-100"
                  type="submit"
                >
                  Continue
                </button>
              </Col>
            </Row>
          </form>
        )}
      </Formik>
    </>
  )
}

function Step2() {
  const { formData, setFormData, handleNextStep } = useContext(FormContext);
  
  return (
    <>
      <h2 className="text-center">
        How do you want to grow?<br/>
        Is it more listings or more sales?
      </h2>
      <Formik
        initialValues={{
          request: formData.request,
        }}
        validationSchema={
          Yup.object().shape({
            request: Yup.string().required(`Required field`),
          })
        }
        onSubmit={(values) => {
          setFormData((prevState) => ({
            ...prevState,
            ...values,
          }));
          handleNextStep();
        }}
        enableReinitialize
      >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
          <form className="form-container" onSubmit={handleSubmit}>
            <Row className="gy-70">
              <Col lg={12}>
                <Row>
                  <Col xs="auto">
                    <Checkbox
                      Style="block"
                      Type="radio"
                      Name="request"
                      Id="more-buyers"
                      Label="More Buyers"
                      Icon={House}
                      Checked={values.request === 'More Buyers'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value="More Buyers"
                      error={errors.request && touched.request}
                    />
                  </Col>
                  <Col xs="auto">
                    <Checkbox
                      Style="block"
                      Type="radio"
                      Name="request"
                      Id="more-sellers"
                      Label="More Sellers"
                      Icon={House}
                      Checked={values.request === 'More Sellers'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value="More Sellers"
                      error={errors.request && touched.request}
                    />
                  </Col>
                  <Col xs="auto">
                    <Checkbox
                      Style="block"
                      Type="radio"
                      Name="request"
                      Id="both"
                      Label="Both"
                      Icon={House}
                      Checked={values.request === 'Both'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value="Both"
                      error={errors.request && touched.request}
                    />
                  </Col>
                </Row>
              </Col>
              <Col lg={12}>
                <button className="btn btn-primary btn-arrow w-100" type="submit">
                  Proceed to the next step
                </button>
              </Col>
            </Row>
          </form>
        )}
      </Formik>
    </>
  )
}

function Step3() {
  const { formData, setFormData, handleNextStep } = useContext(FormContext);
  
  const Checked = (array, value) => {
    return array.includes(value);
  }
  
  return (
    <>
      <h2 className="text-center">
        Let us know what you tired :)<br/>
        And what is your marketing budget?
      </h2>
      <Formik
        initialValues={{
          budget: formData.budget,
          tools: formData.tools,
        }}
        validationSchema={
          Yup.object().shape({
            budget: Yup.number().min(50).required(`Required field`),
            tools: Yup.array().min(1).required(`Required field`),
          })
        }
        onSubmit={(values) => {
          setFormData((prevState) => ({
            ...prevState,
            ...values,
          }));
          handleNextStep();
        }}
        enableReinitialize
      >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
          }) => (
          <form className="form-container" onSubmit={handleSubmit}>
            <Row className="gy-70">
              <Col lg={12}>
                <label htmlFor="marketing-budget" className="form-label required">
                  What is your <ins>monthly</ins> Marketing Budget?
                </label>
                <Range
                  Min={0}
                  Max={7000}
                  Step={50}
                  Symbol="$"
                  Name="budget"
                  setFieldValue={setFieldValue}
                  value={values.budget}
                  error={errors.budget && touched.budget}
                />
              </Col>
              <Col lg={12}>
                <label htmlFor="marketing-budget" className="form-label required">
                  What Marketing Tools do you use <ins>now</ins>?
                </label>
                <Row>
                  <Col xs="auto">
                    <Checkbox
                      Style="block"
                      Type="checkbox"
                      Name="tools"
                      Id="platforms"
                      value="Platforms"
                      Label="Platforms (ex. Zillow)"
                      Icon={House}
                      Checked={Checked(values.tools, 'Platforms')}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.tools && touched.tools}
                    />
                  </Col>
                  <Col xs="auto">
                    <Checkbox
                      Style="block"
                      Type="checkbox"
                      Name="tools"
                      Id="google-ads"
                      value="Google Ads"
                      Label="Google Ads"
                      Icon={House}
                      Checked={Checked(values.tools, 'Google Ads')}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.tools && touched.tools}
                    />
                  </Col>
                  <Col xs="auto">
                    <Checkbox
                      Style="block"
                      Type="checkbox"
                      Name="tools"
                      Id="facebook-ads"
                      value="Facebook Ads"
                      Label="Facebook Ads"
                      Icon={House}
                      Checked={Checked(values.tools, 'Facebook Ads')}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.tools && touched.tools}
                    />
                  </Col>
                  <Col xs="auto">
                    <Checkbox
                      Style="block"
                      Type="checkbox"
                      Name="tools"
                      Id="seo"
                      value="Search Engine Optimisation"
                      Label="Search Engine Optimisation"
                      Icon={House}
                      Checked={Checked(values.tools, 'Search Engine Optimisation')}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.tools && touched.tools}
                    />
                  </Col>
                  <Col xs="auto">
                    <Checkbox
                      Style="block"
                      Type="checkbox"
                      Name="tools"
                      Id="smm"
                      value="Social Media Marketing"
                      Label="Social Media Marketing"
                      Icon={House}
                      Checked={Checked(values.tools, 'Social Media Marketing')}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.tools && touched.tools}
                    />
                  </Col>
                  <Col xs="auto">
                    <Checkbox
                      Style="block"
                      Type="checkbox"
                      Name="tools"
                      Id="other"
                      value="Other"
                      Label="Other"
                      Icon={House}
                      Checked={Checked(values.tools, 'Other')}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.tools && touched.tools}
                    />
                  </Col>
                </Row>
              </Col>
              <Col lg={12}>
                <button className="btn btn-primary btn-arrow w-100" type="submit">
                  Ready to tell what you desire?
                </button>
              </Col>
            </Row>
          </form>
        )}
      </Formik>
    </>
  )
}

function Step4() {
  const { formData, setFormData, handleNextStep } = useContext(FormContext);
  
  return (
    <>
      <h2 className="text-center">
        Let’s talk numbers.<br/>
        What is your desirable outcome?
      </h2>
      <Formik
        initialValues={{
          desiredLeads: formData.desiredLeads,
          currentLeads: formData.currentLeads,
          obstacles: formData.obstacles,
        }}
        validationSchema={
          Yup.object().shape({
            desiredLeads: Yup.string().required(`Required field`),
            currentLeads: Yup.string().required(`Required field`),
            obstacles: Yup.string().required(`Required field`),
          })
        }
        onSubmit={(values) => {
          setFormData((prevState) => ({
            ...prevState,
            ...values,
          }));
          handleNextStep();
        }}
        enableReinitialize
      >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
          <form className="form-container" onSubmit={handleSubmit}>
            <Row>
              <Col lg={12}>
                <Input
                  Name="desiredLeads"
                  Type="number"
                  Placeholder="How many leads would you like to have?"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.desiredLeads}
                  error={errors.desiredLeads && touched.desiredLeads}
                />
              </Col>
              <Col lg={12}>
                <Input
                  Name="currentLeads"
                  Type="number"
                  Placeholder="How many leads do you have now?"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.currentLeads}
                  error={errors.currentLeads && touched.currentLeads}
                />
              </Col>
              <Col lg={12}>
                <Textarea
                  Name="obstacles"
                  Placeholder="What do you think is the biggest obstacle?"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.obstacles}
                  error={errors.obstacles && touched.obstacles}
                />
              </Col>
              <Col lg={12}>
                <button className="btn btn-primary btn-arrow w-100" type="submit">
                  Take me finally to the last step
                </button>
              </Col>
            </Row>
          </form>
        )}
      </Formik>
    </>
  )
}

function Step5() {
  const { formData, setFormData, submitForm } = useContext(FormContext);
  
  return (
    <>
      <h2 className="text-center">
        <span className="primary-color">The Last Question</span><br/>
        When are you looking to solve the problem?
      </h2>
      <Formik
        initialValues={{
          startTime: formData.startTime,
        }}
        validationSchema={
          Yup.object().shape({
            startTime: Yup.string().required(`Required field`),
          })
        }
        onSubmit={(values) => {
          setFormData((prevState) => ({
            ...prevState,
            ...values,
          }));
          submitForm({...formData, ...values});
        }}
        enableReinitialize
      >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
          <form className="form-container" onSubmit={handleSubmit}>
            <Row className="button-gy-70">
              <Col lg={6}>
                <Checkbox
                  Type="radio"
                  Name="startTime"
                  Id="start-time-now"
                  value="Immediately"
                  Label="Immediately"
                  Icon={House}
                  Checked={values.startTime === 'Immediately'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.startTime && touched.startTime}
                />
              </Col>
              <Col lg={6}>
                <Checkbox
                  Type="radio"
                  Name="startTime"
                  Id="start-time-2-weeks"
                  value="In the next 2 weeks"
                  Label="In the next 2 weeks"
                  Icon={House}
                  Checked={values.startTime === 'In the next 2 weeks'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.startTime && touched.startTime}
                />
              </Col>
              <Col lg={6}>
                <Checkbox
                  Type="radio"
                  Name="startTime"
                  Id="start-time-2-4-weeks"
                  value="2–4 weeks"
                  Label="2–4 weeks"
                  Icon={House}
                  Checked={values.startTime === '2–4 weeks'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.startTime && touched.startTime}
                />
              </Col>
              <Col lg={6}>
                <Checkbox
                  Type="radio"
                  Name="startTime"
                  Id="start-time-4-6-weeks"
                  value="4–6 weeks"
                  Label="4–6 weeks"
                  Icon={House}
                  Checked={values.startTime === '4–6 weeks'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.startTime && touched.startTime}
                />
              </Col>
              <Col lg={6}>
                <Checkbox
                  Type="radio"
                  Name="startTime"
                  Id="start-time-6-weeks"
                  value="6+ weeks"
                  Label="6+ weeks"
                  Icon={House}
                  Checked={values.startTime === '6+ weeks'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.startTime && touched.startTime}
                />
              </Col>
              <Col lg={6}>
                <Checkbox
                  Type="radio"
                  Name="startTime"
                  Id="start-time-never"
                  value="Never"
                  Label="Never"
                  Icon={House}
                  Checked={values.startTime === 'Never'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.startTime && touched.startTime}
                />
              </Col>
              <Col lg={6}>
                <Checkbox
                  Type="radio"
                  Name="startTime"
                  Id="start-time-kidding"
                  value="I’m just shooting the shit"
                  Label="I’m just shooting the shit"
                  Icon={House}
                  Checked={values.startTime === 'I’m just shooting the shit'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.startTime && touched.startTime}
                />
              </Col>
              <Col lg={12}>
                <button className="btn btn-primary btn-arrow w-100" type="submit">
                  Schedule a FREE Strategy Session
                </button>
              </Col>
            </Row>
          </form>
        )}
      </Formik>
    </>
  )
}

export default function Consultation({ isLightMode }) {
  // stepper
  const [step, setStep] = useState(0);
  
  const handleNextStep = () => setStep(step + 1);
  
  const handlePreviousStep = () => setStep(step - 1);
  
  const handleStep = (stepIndex) => setStep(stepIndex);
  
  const Steps = () => {
    switch (step) {
      case 0:
        return <StepIntroduction/>
      
      case 1:
        return <Step1/>
      
      case 2:
        return <Step2/>
      
      case 3:
        return <Step3/>
      
      case 4:
        return <Step4/>
      
      case 5:
        return <Step5/>
      
      default:
        return 'default';
    }
  }
  
  // form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    request: '',
    budget: 0,
    tools: [],
    desiredLeads: '',
    currentLeads: '',
    obstacles: '',
    startTime: '',
  });
  
  const submitForm = (object) => {
    console.log('hello, your values are', object);
  }
  
  return (
    <>
      <Head>
        <title>Free Consultation – AtlanticCMNC</title>
        <meta
          name="description"
          content="Free Consultation – AtlanticCMNC"
        />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <DefaultLayout>
        <section className="section consultation">
          <Container>
            <Row>
              <Col lg={12}>
                <FormContext.Provider
                  value={{
                    step: step,
                    handleNextStep: () => handleNextStep(),
                    handlePreviousStep: () => handlePreviousStep(),
                    handleStep: (stepIndex) => handleStep(stepIndex),
                    formData: formData,
                    setFormData: setFormData,
                    submitForm: (object) => submitForm(object),
                  }}
                >
                  <FormProgress/>
                  <Steps/>
                </FormContext.Provider>
              </Col>
            </Row>
          </Container>
        </section>
      </DefaultLayout>
    </>
  );
}