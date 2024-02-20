import React from 'react';
import { Box, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react';

const BeachOnTable = ({ beach }) => {
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
    willBeachVillasbeDisturbed
  } = beach;

  return (
    <Box>
      <Heading as="h3" size="md" mb={2}>
        Beach Information
      </Heading>
      <Text>Type: {Array.isArray(beachType) && beachType?.join(', ')}</Text>
      <Text>Length: {length}</Text>
      <Text>Features: {features}</Text>
      <Text>Instagram Spots: {instagramSpots}</Text>
      <Text>Tides and Rips: {tidesRips}</Text>
      <Text>Hours of Lifeguard Duty: {hoursofLifeguardDuty}</Text>
      <Text>Are Off Beach Patrolled by Lifeguards: {areoffBeachPatrolledbyLifeguards}</Text>
      <Heading as="h4" size="sm" mt={4} mb={2}>
        Lifeguard Qualifications
      </Heading>
      <UnorderedList>
        {lifeguardQualifications?.map((qualification, index) => (
          <ListItem key={index}>{qualification}</ListItem>
        ))}
      </UnorderedList>
      <Text>Are Some Parts of The Beach Only for Private Use: {areSomePartsofTheBeachOnlyForPrivateUse}</Text>
      <Text>Will Beach Villas be Disturbed: {willBeachVillasbeDisturbed}</Text>
    </Box>
  );
};

export default BeachOnTable;
