import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import Popup from '../../Modal/Popup';
import FoodAndBeverageUpdate from '../../UpdateData/FoodandBeverage/FoodAndBeverage';

const FoodAndBeverageOnTable = ({ foodAndBeverage , id}) => {
  const { InclusionsOrExclusionsforFullOrhalfBoard, extraCostForRoomService } = foodAndBeverage;

  return (
    <Box>
      <Heading as="h3" size="md" mb={2}>
        Food and Beverage Information
      </Heading>
      <Text>Inclusions/Exclusions for Full or Half Board: {InclusionsOrExclusionsforFullOrhalfBoard}</Text>
      <Text>Extra Cost for Room Service: {extraCostForRoomService}</Text>
      <Popup modalTitle={"Edit"} colorofModal={"orange"} children={<FoodAndBeverageUpdate foodAndBeverage={foodAndBeverage} id={id}/>}/>
    </Box>
  );
};

export default FoodAndBeverageOnTable;
