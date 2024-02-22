import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import Popup from '../../Modal/Popup';
import PropertyInformationUpdate from '../../UpdateData/PropertyInformation/PropertyInformation';

const PropertyInformationOnTable = ({ propertyInformation, id }) => {
  const { scopeOfRenovation, stateOfRepair } = propertyInformation;
console.log({id});
  return (
    <Box>
      <Heading as="h3" size="md" mb={2}>
        Property Information
      </Heading>
      <Text mb={2}>Scope of Renovation: {scopeOfRenovation.join(', ')}</Text>
      <Text>State of Repair: {stateOfRepair}</Text>
      <Popup modalTitle={"Edit"} colorofModal={"orange"} children={<PropertyInformationUpdate scopeOfRenovation={scopeOfRenovation} stateOfRepair={stateOfRepair} id={id}/>}/>
    </Box>
  );
};

export default PropertyInformationOnTable;
