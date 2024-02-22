import React from 'react';
import { Box, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react';
import Popup from '../../Modal/Popup';
import GymUpdate from '../../UpdateData/Gym/Gym';

const GymOnTable = ({ gym, id }) => {
  const { qualityOfEquipment, rangeofEquipment, spaPreBookingAdvised } = gym;

  return (
    <Box>
      <Heading as="h3" size="md" mb={2}>
        Gym Information
      </Heading>
      <Text>Quality of Equipment: {qualityOfEquipment}</Text>
      <Heading as="h4" size="sm" mt={4} mb={2}>
        Range of Equipment
      </Heading>
      <UnorderedList>
        {rangeofEquipment.map((equipment, index) => (
          <ListItem key={index}>{equipment}</ListItem>
        ))}
      </UnorderedList>
      <Text>Spa Pre-Booking Advised: {spaPreBookingAdvised}</Text>
      <Popup modalTitle={"Edit"} colorofModal={"orange"} children={<GymUpdate gym={gym} id ={id}/>}/>
    </Box>
  );
};

export default GymOnTable;
