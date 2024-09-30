import { Box, Button, Stack, Image } from '@chakra-ui/react';
import React from 'react';
import logo from '../../assets/logo.png';

const Nav = () => {
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      padding={'14px 72px'}
      backgroundColor={'color.white'}
    >
      <Stack>
        <Image src={logo} alt={'logo'} h={8} />
      </Stack>
      <Stack>
        <Button backgroundColor={'color.primary'} color={'color.white'}>
          View Photography Portfolio
        </Button>
      </Stack>
    </Box>
  );
};

export default Nav;
