import React from 'react';
import { Stack, FormControl, Select, Input, FormErrorMessage, Box, Textarea, Button } from '@chakra-ui/react';
const PhotoContactForm = () => {
    
  return (
      <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
          <Stack width={'100%'} spacing={6} direction={{ base: 'column', md: 'row' }}>
              <FormControl>
                  {/* <FormLabel htmlFor='fullName'>Full Name</FormLabel> */}
                  <Input
                      id='firstName'
                      type='text'
                      placeholder='First Name'
                      bg={'color.white'}
                      h={'60px'}
                  />
                  <FormErrorMessage></FormErrorMessage>
              </FormControl>

              <FormControl>
                  {/* <FormLabel htmlFor='email'>Your Email</FormLabel> */}
                  <Input
                      id='lastName'
                      type='text'
                      placeholder='Your Last Name'
                      bg={'color.white'}
                      h={'60px'}
                  />
                  <FormErrorMessage></FormErrorMessage>
              </FormControl>
          </Stack>
          <Stack width={'100%'} spacing={6} direction={{ base: 'column', md: 'row' }}>
              <FormControl>
                  {/* <FormLabel htmlFor='email'>Your Email</FormLabel> */}
                  <Input
                      id='email'
                      type='email'
                      placeholder='Your Email'
                      bg={'color.white'}
                      h={'60px'}
                  />
                  <FormErrorMessage></FormErrorMessage>
              </FormControl>
              <FormControl>
                  {/* <FormLabel htmlFor='fullName'>Full Name</FormLabel> */}
                  <Input
                      id='phoneNumber'
                      type='tel'
                      placeholder='Phone Number'
                      bg={'color.white'}
                      h={'60px'}
                  />
                  <FormErrorMessage></FormErrorMessage>
              </FormControl>
          </Stack>
          <Stack width={'100%'} spacing={6} direction={{ base: 'column', md: 'row' }}>
              <FormControl>
                  {/* <FormLabel htmlFor='fullName'>Full Name</FormLabel> */}
                  <Input
                      id='preferredDate'
                      type='date'
                      placeholder='Preferred Date'
                      bg={'color.white'}
                      h={'60px'}
                  />
                  <FormErrorMessage></FormErrorMessage>
              </FormControl>

              <FormControl>
                  {/* <FormLabel htmlFor='email'>Your Email</FormLabel> */}
                  <Select placeholder='Service type' h={'60px'} color={'color.'} bg={'color.white'}>
                      <option value='option1'>Portrait Photography</option>
                      <option value='option2'>Wedding Photography</option>
                      <option value='option3'>Sports Photography</option>
                      <option value='option3'>Event Photography</option>
                  </Select>
                  <FormErrorMessage></FormErrorMessage>
              </FormControl>
          </Stack>
          <Stack width={'100%'} spacing={6} direction={{ base: 'column', md: 'row' }}>
              <FormControl>
                  {/* <FormLabel htmlFor='fullName'>Full Name</FormLabel> */}
                  <Textarea placeholder='Message' h={'120px'} bg={'color.white'} />
                  <FormErrorMessage></FormErrorMessage>
              </FormControl>
          </Stack>
          <Stack display={'flex'} justifyContent={'flex-end'} alignItems={'flex-end'}>
              <Button bg={'color.primary'} color={'color.white'} w={{base: '100%', md: '30%'}}>Book Appointment</Button>
          </Stack>
      </Box>
  )
}

export default PhotoContactForm