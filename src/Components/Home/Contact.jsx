import { Box, Stack, Text } from '@chakra-ui/react';
import { span } from 'framer-motion/client';
import React from 'react';

const Contact = () => {
  return (
    <Box>
      <Stack>
        <Text
          color={'color.primary'}
          border={'1px solid'}
          padding={'6px'}
          w={'95px'}
          textAlign={'center'}
          borderRadius={'60%'}
        >
          My Skills
        </Text>
              <Text color={'color.HeadingColor'} fontSize={'40px'}>Let’s Discuss Your <Text as={span}>Project</Text></Text>
      </Stack>
      <Stack></Stack>
    </Box>
  );
};

export default Contact;
