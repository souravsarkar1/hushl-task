import React from 'react';
import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react';

const ReefOnHotelHome = ({ reef }) => {
  const {
    entryPointSandLengthofSwim,
    accessibleFromBeach,
    houseReefAccessiblebyBoat,
    houseReefAccessibleCost,
    accessiblebyBoat,
    costTravel,
    travelTime,
    sites,
    outerReef,
    qualityOfCoral,
    houseReef,
    distanceFromBeach,
    qualityofFish,
    nearestOtherReefforGoodCoral,
    onsiteMarineBiologist,
    entryPointsAndLengthOfSwim,
    abundanceOfReefSharks,
    reviewsSentiments,
  } = reef;

  return (
    <Box bgGradient="linear(to-tr, gray.100, gray.200)" p={4} borderRadius="lg" minH={'90vh'}>
      <Heading as="h3" size="md" mb={2}>
        Reef Information
      </Heading>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, red.100, gray.200)">
          <Text mb={2} fontWeight="bold">
            Entry Point & Length of Swim:
          </Text>
          <Text>{entryPointSandLengthofSwim}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, yellow.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Accessible From Beach:
          </Text>
          <Text>{accessibleFromBeach.join(', ')}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, green.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            House Reef Accessible by Boat:
          </Text>
          <Text>{houseReefAccessiblebyBoat ? 'Yes' : 'No'}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, blue.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            House Reef Accessible Cost:
          </Text>
          <Text>{houseReefAccessibleCost}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, purple.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Accessible by Boat:
          </Text>
          <Text>{accessiblebyBoat ? 'Yes' : 'No'}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, pink.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Cost of Travel:
          </Text>
          <Text>{costTravel}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, teal.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Travel Time:
          </Text>
          <Text>{travelTime}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, orange.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Sites:
          </Text>
          <Text>{sites}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, indigo.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Outer Reef:
          </Text>
          <Text>{outerReef}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, cyan.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Quality of Coral:
          </Text>
          <Text>{qualityOfCoral}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, lime.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            House Reef:
          </Text>
          <Text>{houseReef}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, brown.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Distance From Beach:
          </Text>
          <Text>{distanceFromBeach}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, violet.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Quality of Fish:
          </Text>
          <Text>{qualityofFish}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, lime.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Nearest Other Reef for Good Coral:
          </Text>
          <Text>{nearestOtherReefforGoodCoral}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, teal.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Onsite Marine Biologist:
          </Text>
          <Text>{onsiteMarineBiologist ? 'Yes' : 'No'}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, yellow.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Entry Points & Length Of Swim:
          </Text>
          <Text>{entryPointsAndLengthOfSwim}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, purple.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Abundance of Reef Sharks:
          </Text>
          <Text>{abundanceOfReefSharks}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, orange.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Reviews Sentiments:
          </Text>
          <Text>{reviewsSentiments}</Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default ReefOnHotelHome;
