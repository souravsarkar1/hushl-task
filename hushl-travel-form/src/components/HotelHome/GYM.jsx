import React from 'react';
import { Box, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';

const GYMOnHotelHome = ({ gym }) => {
  const {
    qualityOfEquipment,
    rangeofEquipment,
    spaPreBookingAdvised,
    classes,
    specialistMachines,
    trainerOnSite,
    cost,
    openingTimes,
    images,
    reviewsSentiments,
  } = gym;

  return (
    <Box bgGradient="linear(to-tr, gray.100, gray.200)" p={4} borderRadius="lg" minH={'90vh'}>
      <Heading as="h3" size="md" mb={2}>
        GYM Information
      </Heading>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, red.100, gray.200)">
          <Text mb={2} fontWeight="bold">
            Quality of Equipment:
          </Text>
          <Text>{qualityOfEquipment}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, yellow.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Range of Equipment:
          </Text>
          <Text>{rangeofEquipment}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, green.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Spa Pre-Booking Advised:
          </Text>
          <Text>{spaPreBookingAdvised ? 'Yes' : 'No'}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, blue.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Classes Available:
          </Text>
          <Text>{classes ? 'Yes' : 'No'}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, purple.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Specialist Machines:
          </Text>
          <Text>{specialistMachines}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, pink.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Trainer On-Site:
          </Text>
          <Text>{trainerOnSite ? 'Yes' : 'No'}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, teal.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Cost:
          </Text>
          <Text>{cost}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, cyan.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Opening Times:
          </Text>
          <Text>{openingTimes}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, orange.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Images:
          </Text>
          {images?.map((image, index) => (
            <Image key={index} src={image} alt={`Image ${index}`} />
          ))}
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, indigo.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Reviews Sentiments:
          </Text>
          <Text>{reviewsSentiments}</Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default GYMOnHotelHome;
