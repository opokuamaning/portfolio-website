import { Box, Button, Stack, Text, Image, Link } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { span } from 'framer-motion/client';
import levImage from '../../assets/leverage.svg';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import cv from '../../assets//Prince_Amaning_CV.pdf';
import { useNavigate } from 'react-router-dom';

const stars = Array(5).fill(0);
const MotionBox = motion.create(Box);
const MotionText = motion.create(Text);
const MotionButton = motion.create(Button);
const Hero = () => {
  const navigate = useNavigate();

  console.log(cv, 'my cv');

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const handleScrollToForm = () => {
    const formSection = document.getElementById('contactForm');
    formSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      padding={{ base: '60px 0', md: '116px 70px' }}
      backgroundColor={'color.mainBgColor'}
      display={'flex'}
      flexDirection={'column'}
      gap={'72px'}
    >
      <Stack>
        <MotionText
          ref={ref}
          fontSize={{ base: '27px', md: '66px' }}
          fontWeight={'700'}
          color={'color.HeadingColor'}
          textAlign={'center'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          Designing Digital Dreams by crafting{' '}
          <Text as={span} color={'color.primary'}>
            Unique
          </Text>{' '}
          Web Experiences
        </MotionText>
        <MotionText
          fontSize={'14px'}
          fontWeight={'400'}
          padding={{ base: '32px 12px', md: '24px 70px' }}
          textAlign={'center'}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to my web design portfolio, where creativity meets functionality. I specialize in
          creating visually stunning and user-friendly websites that capture your brand's essence
          and engage your audience. Explore my work to see how I transform ideas into digital
          masterpieces.
        </MotionText>
        <Stack
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <MotionButton
            backgroundColor={'color.primary'}
            color={'color.mainBgColor'}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={handleScrollToForm}
          >
            Book Me Now
          </MotionButton>
          <MotionButton
            backgroundColor={'color.btnPrimary'}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            as='a'
            href={
              'https://docs.google.com/document/d/1qgPNnXpDEwV2yW9nNswd6DNbAGnl1va-HH-zYArF6F0/edit?usp=sharing'
            }
            download
            target='_blank'
          >
            Download CV
          </MotionButton>
        </Stack>
      </Stack>

      <Stack
        display={'flex'}
        flexDirection={{ base: 'column', md: 'row' }}
        padding={{ base: '58px 18px', md: '64px 32px' }}
        alignItems={'center'}
        gap={'32px'}
        w={{ base: '95%', md: '70%' }}
        m={'auto'}
        backgroundColor={'color.white'}
      >
        <Stack>
          <Stack display={'flex'} flexDirection={'row'}>
            {stars.map((_, index) => {
              return <StarIcon key={index} color={'color.gold'} />;
            })}
          </Stack>
          <Text>
            I leverage on a variety of powerful technologies to build engaging, responsive, and
            dynamic websites. From HTML and CSS for structuring and styling, to JavaScript and React
            for adding interactivity and creating seamless user experiences
          </Text>
        </Stack>
        <Stack>
          <Image src={levImage} w={'800px'} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Hero;
