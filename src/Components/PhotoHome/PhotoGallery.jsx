import { Box, Image, Text } from '@chakra-ui/react';
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

  useEffect(() => {
    const fetchGalleryImages = async () => {
      const galleryImages = await getGalleryImages();
      const shuffledImages = shuffleimages(galleryImages);
        setPhotos(shuffledImages);
    };
    fetchGalleryImages();
  }, []);
  const style = {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',
  };
  return (
    <Box>
          <Text fontSize={'40px'} fontWeight={'600'} color={'color.HeadingColor'} padding={'40px 101px'}>Photo Gallery</Text>
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
    </Box>
  );
};

export default PhotoGallery;
