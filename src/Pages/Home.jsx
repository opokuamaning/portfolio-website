import { Stack, } from '@chakra-ui/react';
import Nav from '../Components/Home/Nav/Nav';
import Hero from '../Components/Home/Hero';

const Home = () => {
  return (
    <Stack>
      <Nav />
      <Hero />
    </Stack>
  );
};

export default Home;
