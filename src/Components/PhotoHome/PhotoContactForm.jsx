import React from 'react';
import {
  Stack,
  FormControl,
  Select,
  Input,
  FormErrorMessage,
  Box,
  Textarea,
  Button,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { form } from 'framer-motion/m';
const PhotoContactForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      preferredDate: '',
      serviceType: '',
      message: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phoneNumber: Yup.string().required('Required'),
      preferredDate: Yup.string().required('Required'),
      serviceType: Yup.string().required('Required'),
      message: Yup.string().required('Required'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
          const response = await fetch('https://formspree.io/mlderaoo', {
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
          <FormControl isInvalid={formik.touched.firstName && !!formik.errors.firstName}>
            {/* <FormLabel htmlFor='fullName'>Full Name</FormLabel> */}
            <Input
              id='firstName'
              name='firstName'
              type='text'
              placeholder='First Name'
              bg={'color.white'}
              h={'60px'}
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={formik.touched.lastName && !!formik.errors.firstName}>
            {/* <FormLabel htmlFor='email'>Your Email</FormLabel> */}
            <Input
              id='lastName'
              name='lastName'
              type='text'
              placeholder='Your Last Name'
              bg={'color.white'}
              h={'60px'}
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
          </FormControl>
        </Stack>
        <Stack width={'100%'} spacing={6} direction={{ base: 'column', md: 'row' }}>
          <FormControl isInvalid={formik.touched.email && formik.errors.email}>
            {/* <FormLabel htmlFor='email'>Your Email</FormLabel> */}
            <Input
              id='email'
              name='email'
              type='email'
              placeholder='Your Email'
              bg={'color.white'}
              h={'60px'}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={formik.touched.phoneNumber && !!formik.errors.phoneNumber}>
            {/* <FormLabel htmlFor='fullName'>Full Name</FormLabel> */}
            <Input
              id='phoneNumber'
              name='phoneNumber'
              type='tel'
              placeholder='Phone Number'
              bg={'color.white'}
              h={'60px'}
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FormErrorMessage>{formik.errors.phoneNumber}</FormErrorMessage>
          </FormControl>
        </Stack>
        <Stack width={'100%'} spacing={6} direction={{ base: 'column', md: 'row' }}>
          <FormControl isInvalid={formik.touched.preferredDate && !!formik.errors.preferredDate}>
            {/* <FormLabel htmlFor='fullName'>Full Name</FormLabel> */}
            <Input
              id='preferredDate'
              name='preferredDate'
              type='date'
              placeholder='Preferred Date'
              bg={'color.white'}
              h={'60px'}
              value={formik.values.preferredDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={formik.touched.serviceType && !!formik.errors.serviceType}>
            {/* <FormLabel htmlFor='email'>Your Email</FormLabel> */}
            <Select
              id='serviceType'
              name='serviceType'
              placeholder='Service type'
              h={'60px'}
              color={'color.'}
              bg={'color.white'}
              value={formik.values.serviceType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value='Portrait Photography'>Portrait Photography</option>
              <option value='Wedding Photography'>Wedding Photography</option>
              <option value='Sports Photography'>Sports Photography</option>
              <option value='Event Photography'>Event Photography</option>
            </Select>
            <FormErrorMessage>{formik.errors.serviceType}</FormErrorMessage>
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
  );
};

export default PhotoContactForm;
