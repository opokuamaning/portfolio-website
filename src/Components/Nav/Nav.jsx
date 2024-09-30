import { Box, Button, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Nav = () => {
  return (
    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} padding={'14px 72px'} backgroundColor={'color.white'}>
        <Text fontWeight={'900'} fontSize={'30px'} color={'color.HeadingColor'}>POA</Text>
        <Stack>
              <Button backgroundColor={'color.primary'} color={'color.white'}>View Photography Portfolio</Button>
        </Stack>
    </Box>
  )
}

export default Nav