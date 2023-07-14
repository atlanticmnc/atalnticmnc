import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Col, Row } from 'react-bootstrap';
import Checkbox from '@/components/form/Checkbox';
import { House } from 'iconsax-react';

function Step3({ formData, setFormData, submitForm }) {
  return (
    <>
      <h2 className="text-center">
        <span className="primary-color">Последний вопрос</span><br/>
        Когда вы хотели бы начать процес получения?
      </h2>
      <Formik
        initialValues={{
          startTime: '',
        }}
        validationSchema={
          Yup.object().shape({
            startTime: Yup.string().required(`Required field`),
          })
        }
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
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
            isSubmitting,
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
                  Id="start-time-3-month"
                  value="3+ months"
                  Label="3+ months"
                  Icon={House}
                  Checked={values.startTime === '3+ months'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.startTime && touched.startTime}
                />
              </Col>
              <Col lg={6}>
                <Checkbox
                  Type="radio"
                  Name="startTime"
                  Id="start-time-6-month"
                  value="6+ month"
                  Label="6+ month"
                  Icon={House}
                  Checked={values.startTime === '6+ month'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.startTime && touched.startTime}
                />
              </Col>
              <Col lg={12}>
                <button
                  className="btn btn-primary btn-arrow w-100"
                  type="submit"
                  disabled={values.startTime.length === 0 || isSubmitting}
                >
                  Записаться на консультацию
                </button>
              </Col>
            </Row>
          </form>
        )}
      </Formik>
    </>
  )
}

export default Step3;