import { Box, Text, Stack, Image, Link, Button } from '@chakra-ui/react';
import { projects } from '../Data/db';
import React, { useState } from 'react';
import { ArrowBackIcon, ArrowForwardIcon, PlusSquareIcon } from '@chakra-ui/icons';

// import { Link } from 'react-router-dom'
const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < projects.length - 1){
      setCurrentSlide(currentSlide + 1);
    }
  }

  const handlePrev = () => {
    if (currentSlide < projects.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  }
  return (
    <Box padding={{base: '21px 24px', md:'82px 72px'}} color={'color.HeadingColor'}>
      <Text fontSize={'3xl'} fontWeight={'800'}>
        Recent Projects
      </Text>
      <Button onClick={handlePrev} isDisabled={currentSlide === 0}><ArrowBackIcon /></Button>
      <Stack display={'flex'} flexDirection={{base:'column', md:'row'}} overflowX={'auto'} whiteSpace={'nowrap'} justifyContent={'center'} alignItems={'center'} p={2}>
        
        {projects.map((project, index) => (
          <Link
            w={{base: '95%', md: '30%'}}
            h={'auto'}
            key={index}
            href={project.demoUrl}
            isExternal
            cursor={'pointer'}
            _hover={{ textDecoration: 'none' }}
          >
            <Stack>
              <Image src={project.imageUrl} alt={project.title} borderTopRadius={'12px'} />
            </Stack>
            <Stack backgroundColor={'color.lightAsh'} p={'5px'} borderBottomRadius={'12px'}>
              <Stack display={'flex'} flexDirection={'row'} flexWrap={'wrap'}>
                {project.technologies.map((technology, index) => (
                  <Text
                    key={index}
                    fontSize={'12px'}
                    color={'color.tertiary'}
                    p={'2px'}
                  >{`#${technology}`}</Text>
                ))}
              </Stack>
              <Stack>
                <Text fontWeight={'600'} fontSize={'16px'} color={'color.black'}>
                  {project.title}
                </Text>
              </Stack>
            </Stack>
          </Link>
        ))}
        
      </Stack>
      <Button onClick={handlePrev} isDisabled={currentSlide === projects.length - 1}><ArrowForwardIcon /></Button>
    </Box>
  );
};

export default Projects;
