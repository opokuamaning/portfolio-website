import React from 'react';
import { Box, Text, Stack, Image } from '@chakra-ui/react';
import { photoServices } from '../Data/db';

const Services = () => {
  return (
    <Box padding={{ base: '21px 24px', md: '82px 70px' }} color={'color.HeadingColor'}>
      <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight={'700'}>
        Photography Services
      </Text>
      <Stack
        display={'flex'}
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent={'center'}
        alignItems={'center'}
      >
        {photoServices.map((service, index) => (
          <Stack
            w={{ base: '95%', md: '30%' }}
            h={'auto'}
            key={index}
            cursor={'pointer'}
            _hover={{ textDecoration: 'none' }}
            display={'flex'}
            alignItems={'center'}
            gap={'-15px'}
          >
            <Stack>
              <Image
                src={service.imageUrl}
                alt={service.title}
                borderTopRadius={'12px'}
                w={'280px'}
                height={'350px'}
                objectFit={'cover'}
              />
            </Stack>
            <Stack backgroundColor={'color.lightAsh'} p={'5px'} borderBottomRadius={'12px'}>
              <Stack display={'flex'} flexDirection={'row'} flexWrap={'wrap'}></Stack>
              <Stack w={'280px'} padding={'3px'}>
                <Text fontWeight={'700'} fontSize={'20px'} color={'color.black'}>
                  {service.title}
                </Text>
                <Text fontSize={'14px'} color={'color.black'}>
                  {service.description}
                </Text>
              </Stack>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default Services;
