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
  Text,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { socialLinks } from '../Data/db';
import PhotoContactForm from './PhotoContactForm';

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
    <Box padding={{ base: '28px', md: '80px 108px' }} display={'flex'} flexDirection={'column'} gap={'30px'}>
      <Stack
        display={'flex'}
        flexDirection={{base: 'column', md: 'row'}}
        justifyContent={'space-between'}
        color={'color.HeadingColor'}
      >
        <Stack w={'75%'}>
          <Text fontSize={{ base: '20px', md: '60px' }} fontWeight={'700'}>
            Get in touch with us. We're here to assist you.
          </Text>
        </Stack>
        <Stack flexDirection={{ base: 'row', md: 'column' }}>
          {socialLinks.map((link, index) => {
            return (
              <Stack
                key={index}
                display={'flex'}
                alignItems={'center'}
                flexDir={'row'}
                border={'1px solid'}
                borderRadius={'50%'}
                padding={'10px'}
              >
                <Text fontSize={'2xl'}>{link.icon}</Text>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
      <Stack>
        <PhotoContactForm />
      </Stack>
    </Box>
  );
};

export default ContactForm;
