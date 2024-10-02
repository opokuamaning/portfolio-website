import { Box, Divider, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { contactDetails } from '../Data/db';
import Copyright from '../../utils/Copyright';

const Footer = () => {
  return (
    <Box bg={'color.bgFooter'} color={'color.white'} display={'flex'} flexDirection={'column'}>
      <Stack
        padding={{base: '91px 55px', md: '60px 190px'}}
        display={'flex'}
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent={'space-between'}
        gap={{base: '50px', md: '0px'}}
      >
        <Stack gap={{base: '20px', md: '30px'}}>
          <Stack>
            <Text fontSize={'24px'} fontWeight={'600'}>
              Get In Touch
            </Text>
          </Stack>
          {contactDetails
            .slice(0, 2)
            .reverse()
            .map((detail, index) => (
              <Stack key={index} display={'flex'} flexDirection={'row'} alignItems={'center'}>
                <Text fontSize={'2xl'}>{detail.icon}</Text>
                <Text>{detail.property}</Text>
              </Stack>
            ))}
        </Stack>
        <Stack gap={'30px'}>
          <Stack>
            <Text fontSize={'24px'} fontWeight={'600'}>
              Services
            </Text>
          </Stack>
          <Stack>
            <Text>Photography</Text>
            <Text>Web Development</Text>
          </Stack>
        </Stack>
        <Stack gap={'30px'}>
          <Stack>
            <Text fontSize={'24px'} fontWeight={'600'}>
              Quick Links
            </Text>
          </Stack>
          <Stack>
            <Text>Photography Portfolio</Text>
            <Text>Web design Portfolio</Text>
          </Stack>
        </Stack>
      </Stack>
      <Divider orientation={'horizontal'} width={{base: '80%', md: '100%'}} alignSelf={'center'}/>
      <Stack>
        <Copyright />
      </Stack>
    </Box>
  );
};

export default Footer;
