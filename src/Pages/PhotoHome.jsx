import React from 'react';
import { Box } from '@chakra-ui/react';
import BackToTop from '../utils/BackToTop';
import Nav from '../Components/PhotoHome/Nav/Nav';
import Hero from '../Components/PhotoHome/Hero';
import PhotoGallery from '../Components/PhotoHome/PhotoGallery';
import AboutMe from '../Components/PhotoHome/AboutMe';
import Services from '../Components/PhotoHome/Services';
import Contact from '../Components/Home/Contact';
import PhotoContact from '../Components/PhotoHome/PhotoContact';
import Footer from '../Components/Home/Footer';

const PhotoHome = () => {
  return <Box>
    <BackToTop />
    <Nav />
    <Hero />
    <PhotoGallery />
    <AboutMe />
    <Services />
    <section id='contactForm'>
      <PhotoContact />
    </section>
    <Footer />
  </Box>;
};

export default PhotoHome;
