import React from 'react';
import { Stack, FormControl, Select, Input, FormErrorMessage, Box, Textarea, Button } from '@chakra-ui/react';
const ContactForm = () => {
    
  return (
      <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
          <Stack width={'100%'} spacing={6} direction={{ base: 'column', md: 'row' }}>
              <FormControl>
                  {/* <FormLabel htmlFor='fullName'>Full Name</FormLabel> */}
                  <Input
                      id='fullName'
                      type='text'
                      placeholder='Full Name'
                      bg={'color.white'}
                      h={'60px'}
                  />
                  <FormErrorMessage></FormErrorMessage>
              </FormControl>

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
          </Stack>
          <Stack width={'100%'} spacing={6} direction={{ base: 'column', md: 'row' }}>
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

              <FormControl>
                  {/* <FormLabel htmlFor='email'>Your Email</FormLabel> */}
                  <Select placeholder='Project type' h={'60px'} color={'color.'} bg={'color.white'}>
                      <option value='option1'>Option 1</option>
                      <option value='option2'>Option 2</option>
                      <option value='option3'>Option 3</option>
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
              <Button bg={'color.primary'} color={'color.white'} w={'20%'}>Book Appointment</Button>
          </Stack>
      </Box>
  )
}

export default ContactForm