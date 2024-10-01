import { Stack, } from '@chakra-ui/react';
import Nav from '../Components/Home/Nav/Nav';
import Hero from '../Components/Home/Hero';
import Projects from '../Components/Home/Projects';
import MySkills from '../Components/Home/MySkills';
import MyTools from '../Components/Home/MyTools';
import Contact from '../Components/Home/Contact';
import Footer from '../Components/Home/Footer';

const Home = () => {
  return (
    <Stack>
      <Nav />
      <Hero />
      <Projects />
      <MySkills />
      <MyTools />
      <Contact />
      <Footer />
    </Stack>
  );
};

export default Home;
