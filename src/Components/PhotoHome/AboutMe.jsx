import { Box, Stack, Text, Img, Divider } from '@chakra-ui/react';
import bgImage from '../../assets/Myskills.jpg';
import { aboutMe } from '../Data/db';

const AboutMe = () => {
  return (
    <Box
      padding={{ base: '92px 25px', md: '65px 100px' }}
      backgroundImage={`linear-gradient(rgba(221, 92, 92, 0.9), rgba(84, 8, 13, 0.9)), url(${bgImage})`}
      backgroundSize={'cover'}
      backgroundPosition='center'
      display={'flex'}
      flexDirection={'column'}
      gap={'45px'}
    >
      <Stack
        color={'color.white'}
        w={'100%'}
        display={'flex'}
        flexDir={{base: 'column', md: 'row'}}
        alignItems={'start'}
        justifyContent={'space-between'}
      >
        <Text fontSize={{base: '25px', md: '48px'}} fontWeight={'600'} w={{base: '100%', md: '30%'}}>
          About Me
        </Text>
        <Text fontSize={'13px'} w={{ base: '100%', md: '100%' }}>
          As a passionate photographer, I strive to capture the beauty and emotion of every moment.
          With a focus on sports and dynamic events, my work reflects a commitment to storytelling
          through the lens, allowing viewers to experience the energy and intensity of the subjects
          I capture.
        </Text>
      </Stack>
      <Stack>
        <Stack
          display={'flex'}
          flexDirection={'row'}
          // flexWrap={'wrap'}
          color={'color.white'}
          gap={'40px'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          {
            aboutMe.map((item, index) => (
              <Stack key={index} display={'flex'} alignItems={'center'}>
                <Text fontSize={{base: '20px', md: '40px'}} fontWeight={'700'}>{item.description}</Text>
                <Text fontSize={{ base: '10px', md: '20px' }}>{item.title}</Text>
                {index < aboutMe.length - 1 && <Divider orientation='vertical' borderColor='white'/>}
              </Stack>
            ))
          }
        </Stack>
      </Stack>
    </Box>
  );
};

export default AboutMe;
