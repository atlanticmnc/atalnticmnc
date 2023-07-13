import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Col, Row } from 'react-bootstrap';
import Input from '@/components/form/Input';

function Step1({ formData, setFormData, handleNextStep }) {
  return (
    <>
      <h2 className="text-center">
        Контактные данные.<br/>
        Расскажите немного о себе
      </h2>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
        }}
        validationSchema={
          Yup.object().shape({
            name: Yup.string().required(`Required field`),
            email: Yup.string().required(`Required field`),
            phone: Yup.string().required(`Required field`),
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
                  Placeholder="Полное Имя"
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
                  Placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={errors.email && touched.email}
                />
              </Col>
              <Col lg={12}>
                <Input
                  Name="phone"
                  Type="text"
                  Placeholder="Телефон"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  error={errors.phone && touched.phone}
                />
              </Col>
              <Col lg={12}>
                <button
                  className="btn btn-primary btn-arrow w-100"
                  type="submit"
                  disabled={values.name.length === 0 || values.email.length === 0 || values.phone.length === 0}
                >
                  Следующий шаг
                </button>
              </Col>
            </Row>
          </form>
        )}
      </Formik>
    </>
  )
}

export default Step1;