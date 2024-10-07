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
        flexDir={'row'}
        alignItems={'start'}
        justifyContent={'space-between'}
      >
        <Text fontSize={'48px'} fontWeight={'600'} w={'30%'}>
          About Me
        </Text>
        <Text fontSize={'13px'} w={'60%'}>
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
          flexWrap={'wrap'}
          color={'color.white'}
          gap={'40px'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          {
            aboutMe.map((item, index) => (
              <Stack key={index} display={'flex'} alignItems={'center'}>
                <Text fontSize={'40px'} fontWeight={'700'}>{item.description}</Text>
                <Text>{item.title}</Text>
                {index < aboutMe.length - 1 && <Divider orientation='vertical' borderColor='white' bg={'red'}/>}
              </Stack>
            ))
          }
        </Stack>
      </Stack>
    </Box>
  );
};

export default AboutMe;
