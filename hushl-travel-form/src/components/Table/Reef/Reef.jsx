import React from 'react';
import { Box, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react';

const ReefOnTable = ({ reef }) => {
  const {
    entryPointSandLengthofSwim,
    accessibleFromBeach,
    houseReefAccessiblebyBoat,
    houseReefAccessibleCost,
    accessiblebyBoat,
    costTravel,
    travelTime,
    sites,
    outerReef
  } = reef;

  return (
    <Box>
      <Heading as="h3" size="md" mb={2}>
        Reef Information
      </Heading>
      <Text>Entry Point Sand Length of Swim: {entryPointSandLengthofSwim}</Text>
      <Heading as="h4" size="sm" mt={4} mb={2}>
        Accessible from Beach
      </Heading>
      <UnorderedList>
        {accessibleFromBeach.map((access, index) => (
          <ListItem key={index}>{access}</ListItem>
        ))}
      </UnorderedList>
      <Text>House Reef Accessible by Boat: {houseReefAccessiblebyBoat}</Text>
      <Text>House Reef Accessible Cost: {houseReefAccessibleCost}</Text>
      <Text>Accessible by Boat: {accessiblebyBoat}</Text>
      <Text>Cost Travel: {costTravel}</Text>
      <Text>Travel Time: {travelTime}</Text>
      <Text>Sites: {sites}</Text>
      <Text>Outer Reef: {outerReef}</Text>
    </Box>
  );
};

export default ReefOnTable;
