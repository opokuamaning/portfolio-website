import { Box, Stack, Text, Link } from '@chakra-ui/react';
import { span } from 'framer-motion/client';
import PhotoContactForm from './PhotoContactForm';
import { socialLinks } from '../Data/db';
const PhotoContact = () => {
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
          justifyContent={{ base: 'flex-start', md: 'space-between' }}
          alignItems={{ base: 'left', md: 'center' }}
          flexDirection={{ base: 'column', md: 'row' }}
          w={{ base: '100%', md: '100%' }}
          m={'auto'}
        >
          <Text
            fontSize={{ base: '22px', md: '48px' }}
            w={{ base: '100%', md: '65%' }}
            color={'color.HeadingColor'}
            fontWeight={'700'}
          >
            Get in touch with us. We're here to assist you.
          </Text>
          <Stack display={'flex'} flexDir={'row'}>
            {socialLinks.map((socialLink, index) => (
              <Link
                key={index}
                href={socialLink.url}
                isExternal
                cursor={'pointer'}
                _hover={{ textDecoration: 'none' }}
              >
                <Stack
                  width={'30px'}
                  h={'30px'}
                  border={'1px solid'}
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  borderRadius={'50%'}
                >
                  {socialLink.icon}
                </Stack>
              </Link>
            ))}
          </Stack>
        </Stack>
        <Stack display={'flex'} flexDirection={{ base: 'column', md: 'row' }}>
          <Stack w={'100%'}>
            <PhotoContactForm />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default PhotoContact;
