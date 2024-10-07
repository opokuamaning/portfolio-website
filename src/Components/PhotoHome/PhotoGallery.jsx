import { Box, Image, Text, Modal, ModalOverlay, ModalCloseButton, ModalContent } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import Gallery from 'react-photo-gallery';
import { getGalleryImages } from '../Data/db';

const PhotoGallery = () => {
    const shuffleimages = (images) =>{
        return images
        .map((value) => ({value, sort: Math.random()}))
        .sort((a, b) => a.sort - b.sort)
        .map(({value}) => value);
    }
  const [photos, setPhotos] = React.useState([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);

  useEffect(() => {
    const fetchGalleryImages = async () => {
      const galleryImages = await getGalleryImages();
      const shuffledImages = shuffleimages(galleryImages);
        setPhotos(shuffledImages);
    };
    fetchGalleryImages();
  }, []);

  const openModal = (photo) => {
    setSelectedImage(photo);
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  }
  const style = {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',
  };
  return (
    <Box>
      <Text fontSize={{ base: 'px', md: '40px' }} fontWeight={'600'} color={'color.HeadingColor'} padding={{ base: '21px 24px', md: '40px 70px'}}>Photo Gallery</Text>
          <Box display={'flex'} flexDirection={'column'} overflow={'auto'} maxHeight={'400px'} style={style}>
              
              <Gallery
                  photos={photos}
                  direction='row'
                  renderImage={({ photo }) => (
                      <Box
                          margin={'auto'}
                          flexShrink={0}
                          transition={'transform 0.3 ease'}
                          _hover={{ transform: 'scale(1.05' }}
                          onClick={() => openModal(photo)}
                      >
                          <Image
                              alt=''
                              {...photo}
                              style={{
                                  width: `{photo.width}px`,
                                  height: `{photo.height}px`,
                                  objectFit: 'cover',
                              }}
                          />
                      </Box>
                  )}
              />
          </Box>
          <Modal isOpen={isOpen} onClose={closeModal} isCentered>
              <ModalOverlay />
              <ModalContent>
                  <ModalCloseButton color={'color.white'} />
                  {selectedImage && (
                      <Image
                          src={selectedImage.src}
                          alt=""
                          maxW="100%"
                          maxH="80vh" // Limit height of the image
                        //   objectFit="contain" // Ensure the image fits well in the modal
                      />
                  )}
              </ModalContent>
          </Modal>
    </Box>
  );
};

export default PhotoGallery;
