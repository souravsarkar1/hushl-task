import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const PropertyInformationOnTable = ({ propertyInformation }) => {
  const { scopeOfRenovation, stateOfRepair } = propertyInformation;

  return (
    <Box>
      <Heading as="h3" size="md" mb={2}>
        Property Information
      </Heading>
      <Text mb={2}>Scope of Renovation: {scopeOfRenovation.join(', ')}</Text>
      <Text>State of Repair: {stateOfRepair}</Text>
    </Box>
  );
};

export default PropertyInformationOnTable;
