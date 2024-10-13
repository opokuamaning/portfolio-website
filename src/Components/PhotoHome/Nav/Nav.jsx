import { Box, Button, Stack, Image } from '@chakra-ui/react';
import logo from '../../../assets/logo.png';
import ph_logo from '../../../assets/yamaningph-logo.png'
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      padding={{ base: '15px 10px', md: '14px 72px' }}
      backgroundColor={'color.white'}
    >
      <Stack>
        <Image src={ph_logo} alt={'logo'} h={{base: '20px', md:"40px"}} />
      </Stack>
      <Stack>
        <Button onClick={()=>navigate('/')} backgroundColor={'color.primary'} fontWeight={{base: '300'}} fontSize={{base:'10px', md:'16px'}} color={'color.white'} w={{base: '140px', md:'250px'}}>
          View Web Design Portfolio
        </Button>
      </Stack>
    </Box>
  );
};

export default Nav;
