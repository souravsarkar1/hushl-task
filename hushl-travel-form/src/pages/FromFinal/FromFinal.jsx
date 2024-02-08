'use client'

import { Box, Heading, Text } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { useEffect } from 'react'

export default function SuccessFormSubmission() {
    useEffect(()=>{
       setTimeout(() => {
        window.location.href="/"
       }, 2000);
    },[])
  return (
    <Box textAlign="center" py={10} px={6}>
      <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
      <Heading as="h2" size="xl" mt={6} mb={4} color="green.500">
        Form Submitted Successfully!
      </Heading>
      <Text fontSize="lg" color={'gray.600'} mb={6}>
      Thank you for submitting the form. Your input is valuable to us.
    </Text>
    </Box>
  )
}