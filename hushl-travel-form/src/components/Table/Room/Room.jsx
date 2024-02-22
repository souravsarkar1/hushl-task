import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import Popup from '../../Modal/Popup';
import RoomUpdate from '../../UpdateData/Room/Room';

const RoomsOnTable = ({ rooms , id}) => {
  const {
    maxOccupancyAdult,
    maxOccupancyChild,
    NeedtoPreBookExtraBedding,
    safetyFeaturesifOverwaterBungalow,
    safetyFeaturesForBalcony,
    safetyFeaturesForPool,
    commentsOnHowPrivacyIsImpacted,
    interconnected,
    noiseAtNight,
    privacyLevelsGoodEnoughForStrictMuslim,
    movieSystemsOrDVDs
  } = rooms;

  return (
    <Box>
      <Heading as="h3" size="md" mb={2}>
        Rooms Information
      </Heading>
      <Text>Max Occupancy Adult: {maxOccupancyAdult}</Text>
      <Text>Max Occupancy Child: {maxOccupancyChild}</Text>
      <Text>Need to Pre-book Extra Bedding: {NeedtoPreBookExtraBedding}</Text>
      <Text>Safety Features if Overwater Bungalow: {safetyFeaturesifOverwaterBungalow}</Text>
      <Text>Safety Features for Balcony: {safetyFeaturesForBalcony}</Text>
      <Text>Safety Features for Pool: {safetyFeaturesForPool}</Text>
      <Text>Comments on How Privacy Is Impacted: {commentsOnHowPrivacyIsImpacted}</Text>
      <Text>Interconnected: {interconnected}</Text>
      <Text>Noise at Night: {noiseAtNight}</Text>
      <Text>Privacy Levels Good Enough for Strict Muslim: {privacyLevelsGoodEnoughForStrictMuslim}</Text>
      <Text>Movie Systems or DVDs: {movieSystemsOrDVDs}</Text>
      <Popup modalTitle={"Edit"} colorofModal={"orange"} children={<RoomUpdate rooms={rooms} id={id}/>}/>
    </Box>
  );
};

export default RoomsOnTable;
