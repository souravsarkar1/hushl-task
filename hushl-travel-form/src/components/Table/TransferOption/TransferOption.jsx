import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const TransferOptionsOnTable = ({ transferOptions }) => {
  const {
    weatherlimited,
    timeLimitedbyTransferType,
    hotelFacilitatesTransferBooking,
    qualityofBoats
  } = transferOptions;

  return (
    <Box>
      <Heading as="h3" size="md" mb={2}>
        Transfer Options
      </Heading>
      <Text>Weather Limited: {weatherlimited}</Text>
      <Text>Time Limited by Transfer Type: {timeLimitedbyTransferType}</Text>
      <Text>Hotel Facilitates Transfer Booking: {hotelFacilitatesTransferBooking}</Text>
      <Text>Quality of Boats: {qualityofBoats}</Text>
    </Box>
  );
};

export default TransferOptionsOnTable;
