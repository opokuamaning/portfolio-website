import { Box, Stack, Text, Img } from '@chakra-ui/react';
import React from 'react';
import bgImage from '../../assets/Myskills.jpg';
import { tools } from '../Data/db';

const MyTools = () => {
  return (
    <Box
      padding={{base: '92px 25px', md: '65px 100px'}}
      backgroundImage={`linear-gradient(rgba(221, 92, 92, 0.9), rgba(84, 8, 13, 0.9)), url(${bgImage})`}
      backgroundSize={'cover'}
      backgroundPosition='center'
      display={'flex'}
      flexDirection={{base:'column', md:"row"}}
      gap={'45px'}
    > 
      <Stack color={'color.white'} w={{base:'100%', md: '50%'}}>
        <Text fontSize={'48px'} fontWeight={'600'}>
          My Tools
        </Text>
        <Text fontSize={'13px'}>
          I leverage a variety of powerful technologies to build engaging, responsive, and dynamic
          websites
        </Text>
      </Stack>
      <Stack>
        <Stack display={'flex'} flexDirection={'row'} flexWrap={'wrap'} color={'color.white'} gap={'30px'}>
            {tools.map((tool, index) =>
            <Stack key={index} display={'flex'} flexDirection={'row'} gap={'10px'}>
                <Stack>
                    <Img src={tool.imageUrl} alt={tool.title} w={'50px'}/>
                </Stack>
                <Stack>
                    <Text>{tool.title}</Text>
                    <Text>{tool.description}</Text>
                </Stack>
            </Stack>
            )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default MyTools;
