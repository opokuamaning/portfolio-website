import { Box, Button, Stack, Text, Card, Icon } from '@chakra-ui/react';
import React from 'react';
import { IoDiamondOutline } from 'react-icons/io5';
import { IoPulseOutline } from 'react-icons/io5';
import { LuGraduationCap } from 'react-icons/lu';
import { span } from 'framer-motion/client';

const MySkills = () => {
  return (
    <Box
      padding={'176px 150px'}
      display={'flex'}
      justifyContent={'start'}
      backgroundColor={'color.mainBgColor'}
      gap={`40px`}
    >
      <Stack w={'50%'} gap={'15px'}>
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
        <Text fontSize={'40px'} fontWeight={'700'} color={'color.HeadingColor'}>
          Why Hire Me For Your Next{' '}
          <Text color={'color.primary'} as={span}>
            Project?
          </Text>
        </Text>
        <Text fontSize={'15px'} color={'color.HeadingColor'}>
          I’m specialist in Frontend Development. My passion is building & solving problems through
          maintainable and clean code.
        </Text>
        <Button backgroundColor={'color.primary'} w={'30%'} color={'color.white'} fontSize={'14px'}>
          Hire Me Now
        </Button>
      </Stack>
      <Stack display={'flex'} flexDirection={'row'} alignItems={'center'} w={'50%'} gap={'40px'}>
        <Stack gap={'40px'}>
          <Card padding={'21px'} w={'255px'} gap={'10px'} color={'color.HeadingColor'}>
                      <Icon as={IoDiamondOutline} color={'#DD5C5C'}/>
            <Text fontSize={'15px'} fontWeight={'700'}>
              Client-Centric Approach
            </Text>
            <Text fontSize={'14px'}>
              I prioritize understanding your vision and goals, ensuring that every project reflects
              your brand's unique identity.
            </Text>
          </Card>
          <Card padding={'21px'} w={'255px'} gap={'10px'} color={'color.HeadingColor'}>
            <Stack>
              <LuGraduationCap />
            </Stack>
            <Text fontSize={'15px'} fontWeight={'700'}>
              Commitment to Quality
            </Text>
            <Text fontSize={'14px'}>
              By leveraging the latest technologies and best practices, I ensure that your website
              is responsive, secure, and optimized for performance, providing an exceptional user
              experience on all devices.
            </Text>
          </Card>
        </Stack>
        <Stack>
                  <Card padding={'21px'} w={'255px'} gap={'10px'} color={'color.HeadingColor'}>
            <IoPulseOutline />
            <Text fontSize={'15px'} fontWeight={'700'}>
              Proven Skills
            </Text>
            <Text fontSize={'14px'}>
              With years of experience in web development, I have honed my skills in creating
              visually appealing, user-friendly, and high-performance websites.
            </Text>
          </Card>
        </Stack>
      </Stack>
    </Box>
  );
};

export default MySkills;
