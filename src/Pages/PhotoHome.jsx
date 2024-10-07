import React from 'react';
import { Box } from '@chakra-ui/react';
import BackToTop from '../utils/BackToTop';
import Nav from '../Components/PhotoHome/Nav/Nav';
import Hero from '../Components/PhotoHome/Hero';
import PhotoGallery from '../Components/PhotoHome/PhotoGallery';

const PhotoHome = () => {
  return <Box>
    <BackToTop />
    <Nav />
    <Hero />
    <PhotoGallery />
  </Box>;
};

export default PhotoHome;
