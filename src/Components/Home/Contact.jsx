import { Box, Stack, Text } from '@chakra-ui/react';
import { span } from 'framer-motion/client';
import { contactDetails } from '../Data/db';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <Box
      padding={{ base: '72px 13px', md: '50px 75px' }}
      display={'flex'}
      flexDirection={'column'}
      gap={'60px'}
    >
      <Stack p={{ base: '20px', md: '50px 75px' }} bg={'color.mainBgColor'} gap={'40px'}>
        <Stack
          display={'flex'}
          justifyContent={{base: 'flex-start', md: 'center'}}
          alignItems={{base: 'left', md: 'center'}}
          w={{ base: '100%', md: '60%' }}
          m={'auto'}
        >
          <Text
            color={'color.primary'}
            border={'1px solid'}
            padding={'6px'}
            w={'95px'}
            textAlign={'center'}
            borderRadius={'60%'}
          >
            Contact
          </Text>
          <Text fontSize={{ base: '26px', md: '40px' }} fontWeight={'700'}>
            Let’s Discuss Your{' '}
            <Text as={span} color={'color.primary'}>
              Project
            </Text>
          </Text>
          <Text textAlign={'center'} w={'80%'} display={{ base: 'none', md: 'flex' }}>
            Let’s make something new, different and more meaningful or make thing more visual or
            conceptual
          </Text>
        </Stack>
        <Stack display={'flex'} flexDirection={{base: 'column', md: 'row'}}>
          <Stack w={{base: '100%', md:'35%'}} borderRadius={'8px'} boxShadow={'sm'}>
            {contactDetails.map((detail, index) => (
              <Stack
                key={index}
                display={'flex'}
                flexDirection={'row'}
                padding={{base:'15px', md: '14px 28px'}}
                alignItems={'center'}
                bg={'color.white'}
                borderRadius={'8px'}
              >
                <Stack
                  bg={'color.primary'}
                  color={'color.white'}
                  fontSize={{base:'2xl', md: '3xl'}}
                  w={{base: '40px', md: '60px'}}
                        h={{ base: '40px', md: '60px' }}
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  borderRadius={'15%'}
                >
                  {detail.icon}
                </Stack>
                <Stack lineHeight={'16px'}>
                  <Text color={'color.ash'}>{detail.description}</Text>
                  <Text fontWeight={'600'}>{detail.property}</Text>
                </Stack>
              </Stack>
            ))}
          </Stack>
          <Stack w={{base: '100%', md:'65%'}}>
            <ContactForm />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Contact;
