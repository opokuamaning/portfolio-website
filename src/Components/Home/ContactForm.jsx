import React from 'react';
import { Stack, FormControl, Select, Input, FormErrorMessage, Box, Textarea, Button } from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
const ContactForm = () => {
    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            phoneNumber: '',
            projectType: '',
        },
        validationSchema: Yup.object().shape({
            fullName: Yup.string().required('Full Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            phoneNumber: Yup.string().required('Phone Number is required'),
            projectType: Yup.string().required('Please select a project type'),
        }),
        onSubmit: async (values, { setSubmitting }) => {
            try {
                const response = await fetch('https://formspree.io/xanywald', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                });
                if (response.ok) {
                    alert('Your message has been sent');
                } else {
                    alert('Your message could not be sent');
                }
            } catch (error) {
                console.log(error);
            }
            setSubmitting(false);
        },
    });
    const style = {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    };
    
  return (
      <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
        <form onSubmit={formik.handleSubmit} style={style}>
          <Stack width={'100%'} spacing={6} direction={{ base: 'column', md: 'row' }}>
              <FormControl isInvalid={formik.touched.fullName && !!formik.errors.fullName}>
                  {/* <FormLabel htmlFor='fullName'>Full Name</FormLabel> */}
                  <Input
                      id='fullName'
                      type='text'
                      name='fullName'
                      placeholder='Full Name'
                      bg={'color.white'}
                      h={'60px'}
                      value={formik.values.fullName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                  />
                  <FormErrorMessage>{formik.errors.fullName}</FormErrorMessage>
              </FormControl>

                  <FormControl isInvalid={formik.touched.email && !!formik.errors.email}>
                  {/* <FormLabel htmlFor='email'>Your Email</FormLabel> */}
                  <Input
                      id='email'
                      type='email'
                      name='email'
                      placeholder='Your Email'
                      bg={'color.white'}
                      h={'60px'}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                  />
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
          </Stack>
          <Stack width={'100%'} spacing={6} direction={{ base: 'column', md: 'row' }}>
                  <FormControl isInvalid={formik.touched.phoneNumber && !!formik.errors.phoneNumber}>
                  {/* <FormLabel htmlFor='fullName'>Full Name</FormLabel> */}
                  <Input
                      id='phoneNumber'
                      type='tel'
                      name='phoneNumber'
                      placeholder='Phone Number'
                      bg={'color.white'}
                      h={'60px'}
                      value={formik.values.phoneNumber}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                  />
                      <FormErrorMessage>{formik.errors.phoneNumber}</FormErrorMessage>
              </FormControl>

              <FormControl>
                  {/* <FormLabel htmlFor='email'>Your Email</FormLabel> */}
                  <Select placeholder='Project type' h={'60px'} color={'color.'} bg={'color.white'}>
                          <option value='Web Application'>Web Application</option>
                          <option value='Portfolio Website'>Portfolio Website</option>
                          <option value='Corporate Website'>Corporate Website</option>
                          <option value='E-commerce Website'>E-commerce Website</option>
                          <option value='Educational Website'>Educational Website</option>
                  </Select>
                  <FormErrorMessage></FormErrorMessage>
              </FormControl>
          </Stack>
          <Stack width={'100%'} spacing={6} direction={{ base: 'column', md: 'row' }}>
                  <FormControl isInvalid={formik.touched.message && formik.errors.message}>
                      <Textarea
                          id='message'
                          name='message'
                          placeholder='Message'
                          h={'120px'}
                          bg={'color.white'}
                          value={formik.values.message}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                      />
                      <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
                  </FormControl>
          </Stack>
          <Stack display={'flex'} justifyContent={'flex-end'} alignItems={'flex-end'}>
                  <Button
                      bg={'color.primary'}
                      color={'color.white'}
                      w={{ base: '100%', md: '30%' }}
                      type='submit'
                      isLoading={formik.isSubmitting}
                  >
                      Book Appointment
                  </Button>
          </Stack>
          </form>
      </Box>
  )
}

export default ContactForm