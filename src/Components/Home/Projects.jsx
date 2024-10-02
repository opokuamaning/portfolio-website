import { Box, Text, Stack, Image, Link } from '@chakra-ui/react';
import { projects } from '../Data/db';
// import { Link } from 'react-router-dom'
const Projects = () => {
  return (
    <Box padding={{base: '21px 24px', md:'82px 72px'}} color={'color.HeadingColor'}>
      <Text fontSize={'3xl'} fontWeight={'800'}>
        Recent Projects
      </Text>
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
    </Box>
  );
};

export default Projects;
