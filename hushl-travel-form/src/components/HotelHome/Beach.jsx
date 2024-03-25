import React from 'react';
import { Box, Heading, Text, Grid, GridItem, Image } from '@chakra-ui/react';

const BeachOnHotelHome = ({ beach }) => {
  const {
    beachType,
    length,
    features,
    instagramSpots,
    tidesRips,
    hoursofLifeguardDuty,
    areoffBeachPatrolledbyLifeguards,
    lifeguardQualifications,
    areSomePartsofTheBeachOnlyForPrivateUse,
    willBeachVillasbeDisturbed,
    cleanliness,
    include,
    BBQSpots,
    images,
  } = beach;

  return (
    <Box bgGradient="linear(to-tr, gray.100, gray.200)" p={4} borderRadius="lg" minH={'90vh'}>
      <Heading as="h3" size="md" mb={2}>
        Beach Information
      </Heading>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, red.100, gray.200)">
          <Text mb={2} fontWeight="bold">
            Beach Type:
          </Text>
          <Text>{beachType.join(', ')}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, yellow.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Length (M):
          </Text>
          <Text>{length}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, green.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Features:
          </Text>
          <Text>{features}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, blue.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Instagram Spots:
          </Text>
          <Text>{instagramSpots}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, pink.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Tides Rips:
          </Text>
          <Text>{tidesRips}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, teal.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Hours of Lifeguard Duty:
          </Text>
          <Text>{hoursofLifeguardDuty}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, purple.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Lifeguard Qualifications:
          </Text>
          <Text>{lifeguardQualifications.join(', ')}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, pink.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Are Some Parts of The Beach Only For Private Use:
          </Text>
          <Text>{areSomePartsofTheBeachOnlyForPrivateUse}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, teal.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Will Beach Villas be Disturbed:
          </Text>
          <Text>{willBeachVillasbeDisturbed}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, purple.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Cleanliness:
          </Text>
          <Text>{cleanliness}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, teal.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Include:
          </Text>
          <Text>{include}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, orange.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            BBQ Spots:
          </Text>
          <Text>{BBQSpots}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, blue.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Are off Beach Patrolled by Lifeguards :
          </Text>
          <Text>{areoffBeachPatrolledbyLifeguards}</Text>
        </GridItem>

        {images?.map((image, index) => (
          <GridItem key={index} p={20} borderRadius="md" bgGradient="linear(to-tr, green.300, gray.500)">
            <Image src={image.url} alt="image" />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default BeachOnHotelHome;
