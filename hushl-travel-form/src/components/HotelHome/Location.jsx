import { Box, Text, Grid, Heading, GridItem } from '@chakra-ui/react';
import React from 'react';

const LocationCardOnHotelHome = ({ location }) => {
  const location1 = {
    city: 'London',
    state: 'London',
    country: 'United States',
    // address: location.address,
    latitude: '123',
    longitude: '123',
    roadAndNumber: '123',
    suburb: '123',
    postCode: '123',
    atoll: '123',
  };
  const { latitude, longitude, city, roadAndNumber, suburb, postCode, country, state, atoll } = location
    ? location
    : location1;
  return (
    <Box
      bgGradient="linear(to-tr, gray.100, gray.200)" // Gradient from gray.100 to gray.200 from bottom-left to top-right
      p={4}
      borderRadius="lg"
      minH={'90vh'}
    >
      <Heading as="h3" size="md" mb={2}>
        Property Information
      </Heading>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, red.100, gray.200)">
          <Text mb={2} fontWeight="bold">
            City:
          </Text>
          <Text>{city}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, yellow.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Country:
          </Text>
          <Text>{country}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, green.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            State:
          </Text>
          <Text>{state}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, blue.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Latitude:
          </Text>
          <Text>{latitude}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, purple.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Longitude:
          </Text>
          <Text>{longitude}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, pink.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Road and Number:
          </Text>
          <Text>{roadAndNumber}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, teal.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Suburb:
          </Text>
          <Text>{suburb}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, orange.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Post Code:
          </Text>
          <Text>{postCode}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, blue.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Atoll:
          </Text>
          <Text>{atoll}</Text>
        </GridItem>
        {/* Add more GridItems for other properties if needed */}
      </Grid>
    </Box>
  );
};

export default LocationCardOnHotelHome;
