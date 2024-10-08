import React from 'react';
import { Stack, FormControl, Select, Input, FormErrorMessage, Box, Textarea, Button } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  // Define form validation schema
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phoneNumber: Yup.string().required('Phone Number is required'),
    projectType: Yup.string().required('Please select a project type'),
    message: Yup.string().required('Message is required'),
  });

  const initialValues = {
    fullName: '',
    email: '',
    phoneNumber: '',
    projectType: '',
    message: '',
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await fetch('https://formspree.io/f/xanywald', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        alert('Your message has been sent successfully!');
        resetForm();
      } else {
        alert('Failed to send your message.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
            <Stack width={'100%'} spacing={6} direction={{ base: 'column', md: 'row' }}>
              <FormControl>
                <Field name="fullName">
                  {({ field, form }) => (
                    <Input
                      {...field}
                      id="fullName"
                      type="text"
                      placeholder="Full Name"
                      bg={'color.white'}
                      h={'60px'}
                      isInvalid={form.errors.fullName && form.touched.fullName}
                    />
                  )}
                </Field>
                <FormErrorMessage name="fullName" />
              </FormControl>

              <FormControl>
                <Field name="email">
                  {({ field, form }) => (
                    <Input
                      {...field}
                      id="email"
                      type="email"
                      placeholder="Your Email"
                      bg={'color.white'}
                      h={'60px'}
                      isInvalid={form.errors.email && form.touched.email}
                    />
                  )}
                </Field>
                <FormErrorMessage name="email" />
              </FormControl>
            </Stack>

            <Stack width={'100%'} spacing={6} direction={{ base: 'column', md: 'row' }}>
              <FormControl>
                <Field name="phoneNumber">
                  {({ field, form }) => (
                    <Input
                      {...field}
                      id="phoneNumber"
                      type="tel"
                      placeholder="Phone Number"
                      bg={'color.white'}
                      h={'60px'}
                      isInvalid={form.errors.phoneNumber && form.touched.phoneNumber}
                    />
                  )}
                </Field>
                <FormErrorMessage name="phoneNumber" />
              </FormControl>

              <FormControl>
                <Field name="projectType" as="select">
                  {({ field, form }) => (
                    <Select
                      {...field}
                      placeholder="Project type"
                      h={'60px'}
                      bg={'color.white'}
                      isInvalid={form.errors.projectType && form.touched.projectType}
                    >
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  )}
                </Field>
                <FormErrorMessage name="projectType" />
              </FormControl>
            </Stack>

            <Stack width={'100%'} spacing={6} direction={{ base: 'column', md: 'row' }}>
              <FormControl>
                <Field name="message">
                  {({ field, form }) => (
                    <Textarea
                      {...field}
                      id="message"
                      placeholder="Message"
                      h={'120px'}
                      bg={'color.white'}
                      isInvalid={form.errors.message && form.touched.message}
                    />
                  )}
                </Field>
                <FormErrorMessage name="message" />
              </FormControl>
            </Stack>

            <Stack display={'flex'} justifyContent={'flex-end'} alignItems={'flex-end'}>
              <Button
                type="submit"
                isLoading={isSubmitting}
                bg={'color.primary'}
                color={'color.white'}
                w={{ base: '100%', md: '30%' }}
              >
                Book Appointment
              </Button>
            </Stack>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
