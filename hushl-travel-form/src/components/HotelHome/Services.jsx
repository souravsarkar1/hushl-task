import React from 'react';
import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react';

const ServicesOnHotelHome = ({ services }) => {
  // const { needToPreBook, safetyFeatures, isNannyavAilable, cost } = services;
  //trainingOrQualifications

  return (
    <Box bgGradient="linear(to-tr, gray.100, gray.200)" p={4} borderRadius="lg" minH={'90vh'}>
      <Heading as="h2" size="md" mb={2}>
        Services Information
      </Heading>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, red.100, gray.200)">
          <Text mb={2} fontWeight="bold">
            Training or Qualifications:
          </Text>
          <Text>{'trainingOrQualifications'}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, yellow.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Need to Pre-Book:
          </Text>
          {/*<Text>{needToPreBook ? 'Yes' : 'No'}</Text>*/}
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, green.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Safety Features:
          </Text>
          <Text>{'safetyFeatures'}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, blue.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Is Nanny Available:
          </Text>
          {/* <Text>{isNannyavAilable ? 'Yes' : 'No'}</Text>*/}
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, purple.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Cost:
          </Text>
          <Text>{'cost'}</Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default ServicesOnHotelHome;
