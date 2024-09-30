import { Box, Button, Stack, Text, Image } from '@chakra-ui/react';
import { span } from 'framer-motion/client';
import levImage from '../../assets/leverage.svg';

const Hero = () => {
  return (
    <Box padding={'116px 70px'} backgroundColor={'color.mainBgColor'}>
      <Stack>
        <Stack>
          <Text
            fontSize={'66px'}
            fontWeight={'700'}
            color={'color.HeadingColor'}
            textAlign={'center'}
          >
            Designing Digital Dreams by crafting{' '}
            <Text as={span} color={'color.primary'}>
              Unique
            </Text>{' '}
            Web Experiences
          </Text>
          <Text fontSize={'14px'} fontWeight={'400'} padding={'24px 70px'} textAlign={'center'}>
            Welcome to my web design portfolio, where creativity meets functionality. I specialize
            in creating visually stunning and user-friendly websites that capture your brand's
            essence and engage your audience. Explore my work to see how I transform ideas into
            digital masterpieces.
          </Text>
        </Stack>
        <Stack
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Button backgroundColor={'color.primary'} color={'color.mainBgColor'}>
            Book Me Now
          </Button>
          <Button backgroundColor={'color.btnPrimary'}>Download CV</Button>
        </Stack>
        <Stack
          display={'flex'}
          flexDirection={'row'}
          padding={'64px 32px'}
          alignItems={'center'}
          gap={'32px'}
          w={'70%'}
          m={'auto'}
        >
          <Stack>
            <Text>
              I leverage a variety of powerful technologies to build engaging, responsive, and
              dynamic websites. From HTML and CSS for structuring and styling, to JavaScript and
              React for adding interactivity and creating seamless user experiences
            </Text>
          </Stack>
          <Stack>
            <Image src={levImage} w={'800px'} />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Hero;
