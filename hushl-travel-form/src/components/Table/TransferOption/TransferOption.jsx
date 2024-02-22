import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import Popup from '../../Modal/Popup';
import TransferOptionsUpdate from '../../UpdateData/TransferOptions/TransferOptions';

const TransferOptionsOnTable = ({ transferOptions,id }) => {
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
      <Popup modalTitle={"Edit"} colorofModal={"orange"} children={<TransferOptionsUpdate transferOptions={transferOptions} id={id}/>}/>
    </Box>
  );
};

export default TransferOptionsOnTable;
