import { Box, Stack, Text, Button, Image } from '@chakra-ui/react';
import { span } from 'framer-motion/m';
import heroImg1 from '../../../src/assets/Photo_Home/hero_img1.png';
import heroImg2 from '../../../src/assets/Photo_Home/hero_img2.png';
import heroImg3 from '../../../src/assets/Photo_Home/hero_img3.png';

const Hero = () => {
  return (
    <Box
      padding={{ base: '60px 0', md: '116px 70px' }}
      backgroundColor={'color.mainBgColor'}
      display={'flex'}
      flexDirection={{ base: 'column', md: 'row' }}
      gap={'72px'}
    >
      <Stack w={{ base: '100', md: '50%' }}>
        <Text
          color={'color.HeadingColor'}
          fontSize={{ base: '42px', md: '60px' }}
          fontWeight={'700'}
          textAlign={{ base: 'center', md: 'left' }}
        >
          Experience the world through{' '}
          <Text as={span} color={'color.primary'}>
            Yaw Amaning photography
          </Text>
        </Text>
        <Text color={'color.textColor'} textAlign={{base: 'center', md: 'left'}} w={{base: '90%', md: '100%'}} margin={'auto'}>
          Welcome to Yaw Amaning Photography, where every click tells a story. Specializing in
          weddings, portraits, and landscapes, we transform moments into lasting memories. Dive into
          our portfolio and let us capture the beauty of your special moments with our unique touch.
        </Text>
        <Stack display={'flex'} alignItems={{base: 'center', md: 'start'}}>
          <Button backgroundColor={'color.primary'} color={'color.white'} w={{base: '90%', md: '30%'}} >
            Book Me Now
          </Button>
        </Stack>
      </Stack>
      <Stack w={{base: '90%', md: '50%'}} margin={'auto'}>
        <Stack>
          <Image src={heroImg1} alt='Hero Image 1' />
        </Stack>
        <Stack display={'flex'} flexDir={'row'} gap={'10px'}>
          <Image src={heroImg2} alt='Hero Image 2' w={'55%'} />
          <Image src={heroImg3} alt='Hero Image 3' w={'43%'} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Hero;
