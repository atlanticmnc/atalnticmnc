import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Col, Row } from 'react-bootstrap';
import Textarea from '@/components/form/Textarea';

function Step2({ formData, setFormData, handleNextStep }) {
  return (
    <>
      <h2 className="text-center">
        Ответьте на несколько<br />
        уточняющих вопросов
      </h2>
      <Formik
        initialValues={{
          reason: '',
          goal: '',
        }}
        validationSchema={
          Yup.object().shape({
            reason: Yup.string().required(`Required field`),
            goal: Yup.string().required(`Required field`),
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
                <Textarea
                  Name="reason"
                  Placeholder="Какова причиная получения Второго Гражданства?"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.reason}
                  error={errors.reason && touched.reason}
                />
              </Col>
              <Col lg={12}>
                <Textarea
                  Name="goal"
                  Placeholder="Цель получения (к примеру: Путешествия)"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.goal}
                  error={errors.goal && touched.goal}
                />
              </Col>
              
              <Col lg={12}>
                <button
                  className="btn btn-primary btn-arrow w-100"
                  type="submit"
                  disabled={values.reason.length === 0 || values.goal.length === 0}
                >
                  Далее
                </button>
              </Col>
            </Row>
          </form>
        )}
      </Formik>
    </>
  )
}


export default Step2;