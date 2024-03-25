import React from 'react';
import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react';

const PoolOnHotelHome = ({ pool }) => {
  const {
    length: poolLength,
    depth: poolDepth,
    lapPool,
    safetyFeatures,
    totalNumberOfPool,
    // reviewsSentiments,
    IsadultOnly, // boolean
    kidsFeatures,
    heated,
    cleanliness,
  } = pool;

  return (
    <Box bgGradient="linear(to-tr, gray.100, gray.200)" p={4} borderRadius="lg" minH={'90vh'}>
      <Heading as="h2" size="md" mb={2}>
        Pool Information
      </Heading>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, red.100, gray.200)">
          <Text mb={2} fontWeight="bold">
            Pool Length:
          </Text>
          <Text>{poolLength}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, yellow.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Pool Depth:
          </Text>
          <Text>{poolDepth}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, green.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Lap Pool:
          </Text>
          <Text>{lapPool}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, blue.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Safety Features:
          </Text>
          <Text>{safetyFeatures}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, purple.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Total Number of Pools:
          </Text>
          <Text>{totalNumberOfPool}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, pink.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Adult Only:
          </Text>
          <Text>{IsadultOnly ? 'Yes' : 'No'}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, teal.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Kids Features:
          </Text>
          <Text>{kidsFeatures}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, orange.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Heated:
          </Text>
          <Text>{heated}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, indigo.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Cleanliness:
          </Text>
          <Text>{cleanliness}</Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default PoolOnHotelHome;
