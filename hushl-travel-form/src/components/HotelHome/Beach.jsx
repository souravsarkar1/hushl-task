import React from 'react';
import { Box, Heading, Text, UnorderedList, ListItem, Flex, Grid } from '@chakra-ui/react';

const BeachOnHotelHome = ({ beach, id }) => {
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
  } = beach;

  return (
    <Box bg="gray.100" p={4} borderRadius="lg" mb={4}>
      <Heading as="h3" size="md" mb={2}>
        Beach Information
      </Heading>
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={4}>
        <Flex direction="column">
          <Text border={'1px solid red'} fontWeight="bold">
            Type:
          </Text>
          <Text border={'1px solid red'} mb={2}>
            Beach Type : {Array.isArray(beachType) ? beachType.join(', ') : beachType}
          </Text>
          <Text fontWeight="bold">Length:</Text>
          <Text mb={2}>{length}</Text>
          <Text fontWeight="bold">Features:</Text>
          <Text mb={2}>{features}</Text>
          <Text fontWeight="bold">Instagram Spots:</Text>
          <Text mb={2}>{instagramSpots}</Text>
        </Flex>
        <Flex direction="column">
          <Text fontWeight="bold">Tides and Rips:</Text>
          <Text mb={2}>{tidesRips}</Text>
          <Text fontWeight="bold">Hours of Lifeguard Duty:</Text>
          <Text mb={2}>{hoursofLifeguardDuty}</Text>
          <Text fontWeight="bold">Are Off Beach Patrolled by Lifeguards:</Text>
          <Text mb={2}>{areoffBeachPatrolledbyLifeguards}</Text>
          <Heading as="h4" size="sm" mt={4} mb={2}>
            Lifeguard Qualifications
          </Heading>
          <UnorderedList mb={2}>
            {lifeguardQualifications?.map((qualification, index) => (
              <ListItem key={index}>{qualification}</ListItem>
            ))}
          </UnorderedList>
          <Text fontWeight="bold">Are Some Parts of The Beach Only for Private Use:</Text>
          <Text mb={2}>{areSomePartsofTheBeachOnlyForPrivateUse}</Text>
          <Text fontWeight="bold">Will Beach Villas be Disturbed:</Text>
          <Text mb={2}>{willBeachVillasbeDisturbed}</Text>
        </Flex>
      </Grid>
    </Box>
  );
};

export default BeachOnHotelHome;
