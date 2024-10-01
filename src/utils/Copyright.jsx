import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { useState, useEffect, } from 'react';

const getCurrentYear = () => {
  return new Date().getFullYear()
}
const Copyright = () => {
    const [year, setYear] = useState(getCurrentYear());

    useEffect(() => {
        const checkYear = () => {
            const currentYear = getCurrentYear();
            if (currentYear !== year) {
                setYear(currentYear);
            }
        }
        // Check every day if the year has changed
        const intervalId = setInterval(checkYear, 1000 * 60 * 60 * 24);

        return () => clearInterval(intervalId);
    }, [year]);

    
  return (
    <Box padding={'30px'}>
        <Text fontSize={'14px'} textAlign={'center'}>© {year} All Rights Reserved</Text>
    </Box>
  )
}

export default Copyright