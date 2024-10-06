import { Button, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa6';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
        position={'fixed'}
        bottom={'20px'}
        right={'20px'}
        zIndex={'1000'}
        bg={'color.primary'}
        borderRadius={'50%'}
        p={'4px'}
        >
          <Text color={'color.white'}>
            <FaArrowUp />
          </Text>
        </Button>
      )}
    </>
  );
};

export default BackToTop;
