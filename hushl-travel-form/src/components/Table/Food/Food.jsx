import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const FoodAndBeverageOnTable = ({ foodAndBeverage }) => {
  const { InclusionsOrExclusionsforFullOrhalfBoard, extraCostForRoomService } = foodAndBeverage;

  return (
    <Box>
      <Heading as="h3" size="md" mb={2}>
        Food and Beverage Information
      </Heading>
      <Text>Inclusions/Exclusions for Full or Half Board: {InclusionsOrExclusionsforFullOrhalfBoard}</Text>
      <Text>Extra Cost for Room Service: {extraCostForRoomService}</Text>
    </Box>
  );
};

export default FoodAndBeverageOnTable;
