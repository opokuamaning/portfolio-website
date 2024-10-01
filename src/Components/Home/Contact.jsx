import { Box, Icon, Stack, Text } from '@chakra-ui/react';
import { span } from 'framer-motion/client';
import React from 'react';
import { contactDetails } from '../Data/db';

const Contact = () => {
  return (
      <Box padding={'50px 75px'} bg={'color.mainBgColor'} display={'flex'} flexDirection={'column'} gap={'60px'}>
      <Stack display={'flex'} justifyContent={'center'} alignItems={'center'} w={'50%'} m={'auto'}>
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
        <Text fontSize={'40px'} fontWeight={'700'}>
          Let’s Discuss Your{' '}
          <Text as={span} color={'color.primary'}>
            Project
          </Text>
        </Text>
        <Text textAlign={'center'}>
          Let’s make something new, different and more meaningful or make thing more visual or
          conceptual
        </Text>
      </Stack>
      <Stack>
        <Stack w={'30%'} borderRadius={'8px'} boxShadow={'sm'}>
          {contactDetails.map((detail, index) => (
            <Stack key={index} display={'flex'} flexDirection={'row'} padding={'14px 28px'} bg={'color.white'} borderRadius={'8px'}>
              <Stack
                bg={'color.primary'}
                color={'color.white'}
                fontSize={'3xl'}
                w={'60px'}
                h={'60px'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                borderRadius={'15%'}
              >
                {detail.icon}
              </Stack>
              <Stack>
                <Text color={'color.ash'}>{detail.description}</Text>
                <Text fontWeight={'600'}>{detail.property}</Text>
              </Stack>
            </Stack>
          ))}
        </Stack>
        <Stack>

        </Stack>
      </Stack>
    </Box>
  );
};

export default Contact;
