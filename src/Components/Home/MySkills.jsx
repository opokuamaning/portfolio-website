import { Box, Button, Stack, Text, Card, Icon } from '@chakra-ui/react';
import React from 'react';
import { IoDiamondOutline } from 'react-icons/io5';
import { IoPulseOutline } from 'react-icons/io5';
import { LuGraduationCap } from 'react-icons/lu';
import { span } from 'framer-motion/client';
import { hireMeReasons } from '../Data/db';

const MySkills = () => {
  return (
    <Box
      padding={{ base: '41px 24px', md: '176px 100px' }}
      display={'flex'}
      justifyContent={'start'}
      flexDir={{ base: 'column', md: 'row' }}
      backgroundColor={'color.mainBgColor'}
      gap={`40px`}
    >
      <Stack w={{ base: '100%', md: '50%' }} gap={'15px'}>
        <Text
          color={'color.primary'}
          border={'1px solid'}
          padding={'6px'}
          w={'95px'}
          textAlign={'center'}
          borderRadius={'60%'}
        >
          My Skills
        </Text>
        <Text
          fontSize={{ base: '27px', md: '40px' }}
          fontWeight={'700'}
          color={'color.HeadingColor'}
        >
          Why Hire Me For Your Next{' '}
          <Text color={'color.primary'} as={span}>
            Project?
          </Text>
        </Text>
        <Text fontSize={{ base: '12px', md: '15px' }} color={'color.HeadingColor'}>
          I’m specialist in Frontend Development. My passion is building & solving problems through
          maintainable and clean code.
        </Text>
        <Button backgroundColor={'color.primary'} w={'30%'} color={'color.white'} fontSize={'14px'}>
          Hire Me Now
        </Button>
      </Stack>
      <Stack
        display={'flex'}
        flexDirection={'row'}
        flexWrap={'wrap'}
        alignItems={'center'}
        w={{ base: '100%', md: '50%' }}
        gap={'40px'}
      >
        <Stack gap={{base: '10px', md: '40px'}} display={'flex'} justifyContent={'space-between'} flexDirection={'row'} flexWrap={'wrap'}>
          {hireMeReasons.map((reason, index) => (
            <Card
              key={index}
              padding={'21px'}
              w={{ base: '165px', md: '240px' }}
              gap={'10px'}
              color={'color.HeadingColor'}
            >
              <Text color={'color.primary'}>{reason.icon}</Text>
              <Text fontSize={{base: '9px', md:'15px'}} fontWeight={'700'}>
                {reason.title}
              </Text>
              <Text fontSize={{base:'7', md:'14px'}}>{reason.description}</Text>
            </Card>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default MySkills;
