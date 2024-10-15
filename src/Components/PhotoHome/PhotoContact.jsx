import { Stack, Box, Text } from '@chakra-ui/react';
import { socialLinks } from '../Data/db';
import PhotoContactForm from './PhotoContactForm';

const ContactForm = () => {
  return (
    <Box
      padding={{ base: '28px', md: '80px 108px' }}
      display={'flex'}
      flexDirection={'column'}
      gap={'30px'}
    >
      <Stack
        display={'flex'}
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent={'space-between'}
        color={'color.HeadingColor'}
      >
        <Stack w={'75%'}>
          <Text fontSize={{ base: '20px', md: '60px' }} fontWeight={'700'}>
            Get in touch with us. We are here to assist you.
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
