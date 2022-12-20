import React from 'react';
import PageLayout from '../components/pagelayout';
import Section from '../components/organisms/Section';
import Button from '../components/atoms/Button';
import SocialLinks from '../components/organisms/SocialLinks';
import Typography from '../components/atoms/Text';
import { Formik } from 'formik';
const ErrorMessage = ({ children }) => (
  <Typography variant="span" className="text-sm text-red-500">
    {children}
  </Typography>
);

const Contact = () => {
  return (
    <PageLayout>
      <Section>
        <div className="mx-auto max-w-5xl">
          <Typography variant="h1" align="center" className="pb-16 md:pb-1">
            Contact{' '}
            <Typography variant="span" className="text-secondary-400">
              Us
            </Typography>
          </Typography>
          <div className="grid grid-cols-1 gap-20 md:grid-cols-2 md:gap-12">
            <div>
              <Formik
                initialValues={{ name: '', email: '', message: '' }}
                validate={(values) => {
                  const errors = {};
                  if (!values.name) {
                    errors.name = 'Required';
                  }
                  if (!values.message) {
                    errors.message = 'Required';
                  }
                  if (!values.email) {
                    errors.email = 'Required';
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = 'Invalid email address';
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    resetForm();
                  }, 400);
                }}
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
                  <form
                    onSubmit={handleSubmit}
                    className="mx-auto flex max-w-xs flex-col gap-8"
                  >
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />
                      {errors.name && touched.name && (
                        <ErrorMessage>{errors.name}</ErrorMessage>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      {errors.email && touched.email && (
                        <ErrorMessage>{errors.email}</ErrorMessage>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="message"
                        placeholder="Tell us about your project"
                        onChange={handleChange}
                        value={values.message}
                      />
                      {errors.message && touched.message && (
                        <ErrorMessage>{errors.message}</ErrorMessage>
                      )}
                    </div>
                    <Button type="submit" disabled={isSubmitting} name="Send" />
                  </form>
                )}
              </Formik>
            </div>
            <div>
              <div className="mx-auto flex max-w-xs flex-col gap-10 md:gap-12">
                <div>
                  <Typography
                    variant="h5"
                    className="pb-5 text-base font-bold text-[#878787] md:text-xl"
                  >
                    Support
                  </Typography>
                  <Typography variant="p" className="text-xl font-bold">
                    Info@webteams.com
                  </Typography>
                </div>
                <div>
                  <Typography
                    variant="h5"
                    className="pb-5 text-base font-bold text-[#878787] md:text-xl"
                  >
                    Social Platform
                  </Typography>
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default Contact;
