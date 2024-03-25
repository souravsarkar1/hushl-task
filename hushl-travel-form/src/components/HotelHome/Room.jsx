import React from 'react';
import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react';

const RoomOnHotelHome = ({ room }) => {
  const {
    maxOccupancyAdult,
    maxOccupancyChild,
    //adultAndChildCombinations: "",
    NeedtoPreBookExtraBedding,
    safetyFeaturesifOverwaterBungalow,
    safetyFeaturesForBalcony,
    safetyFeaturesForPool,
    commentsOnHowPrivacyIsImpacted,
    interconnected,
    noiseAtNight,
    privacyLevelsGoodEnoughForStrictMuslim,
    movieSystemsOrDVDs,
    roomName,
    numberOfRooms,
    reviewsSentiments,
    roomSize,
    childAgeCategory,
    cotAllowedAndcost,
    rollawayBedAllowedAndCost,
    roomLayoutMap,
    separateToilet,
    separateLivinRoomwoutDoor,
    needToPreBookExtrabedding, //(limited availability)
    numberOfBathrooms,
    bath,
    freeWifi, // boolean
    balconyPatio,
    privatePool,
    dimensionsOfPool,
    poolHeated,
    overwater,
    beachAccess,
    isTV, // boolean
    ironIroningBoard, // boolean
    teaOrCoffeeOrKettle, // boolean
    isMicrowave, // boolean
    musicSystem,
    laundryService,
    kitchenFacilitiesAndWhatFacilities,
    safe,
    pillowMenu,
    blackoutCurtains,
    FanOrAC,
    babyBath,
    babyMonitor,
    childrensToys,
    childrensCutlery,
  } = room;

  return (
    <Box bgGradient="linear(to-tr, gray.100, gray.200)" p={4} borderRadius="lg" minH={'90vh'}>
      <Heading as="h2" size="md" mb={2}>
        Room Information
      </Heading>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, red.100, gray.200)">
          <Text mb={2} fontWeight="bold">
            Max Occupancy (Adult):
          </Text>
          {<Text>{maxOccupancyAdult}</Text>}
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, yellow.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Max Occupancy (Child):
          </Text>
          <Text>{maxOccupancyChild}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, green.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Need to Pre-Book Extra Bedding:
          </Text>
          <Text>{NeedtoPreBookExtraBedding}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, gray.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            Safety Features if Overwater Bungalow:
          </Text>
          <Text>{safetyFeaturesifOverwaterBungalow.join(', ')}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, gray.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            Safety Features For Balcony:
          </Text>
          <Text>{safetyFeaturesForBalcony.join(', ')}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, gray.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            Safety Features For Pool:
          </Text>
          <Text>{safetyFeaturesForPool.join(', ')}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, blue.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Comments on How Privacy Is Impacted:
          </Text>
          <Text>{commentsOnHowPrivacyIsImpacted}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, purple.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Interconnected:
          </Text>
          <Text>{interconnected}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, pink.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Noise at Night:
          </Text>
          <Text>{noiseAtNight}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, teal.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Privacy Levels Good Enough for Strict Muslim:
          </Text>
          <Text>{privacyLevelsGoodEnoughForStrictMuslim}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, orange.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Movie Systems or DVDs:
          </Text>
          <Text>{movieSystemsOrDVDs}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, indigo.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Room Name:
          </Text>
          <Text>{roomName}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, cyan.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Number of Rooms:
          </Text>
          <Text>{numberOfRooms}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, lime.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Reviews Sentiments:
          </Text>
          <Text>{reviewsSentiments}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, brown.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Room Size:
          </Text>
          <Text>{roomSize}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, gray.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            Child Age Category:
          </Text>
          <Text>{childAgeCategory}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, gray.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            Cot Allowed and Cost:
          </Text>
          <Text>{cotAllowedAndcost}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, gray.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            Rollaway Bed Allowed and Cost:
          </Text>
          <Text>{rollawayBedAllowedAndCost}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, gray.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            Room Layout Map:
          </Text>
          <Text>{roomLayoutMap}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, gray.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            Separate Toilet:
          </Text>
          <Text>{separateToilet}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, gray.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            Separate Living Room Without Door:
          </Text>
          <Text>{separateLivinRoomwoutDoor}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, gray.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            Need to Pre-Book Extra Bedding:
          </Text>
          <Text>{needToPreBookExtrabedding}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, gray.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            Number of Bathrooms:
          </Text>
          <Text>{numberOfBathrooms}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, gray.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            Bath:
          </Text>
          <Text>{bath}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, gray.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            Free Wifi:
          </Text>
          <Text>{freeWifi ? 'Yes' : 'No'}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, gray.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            Balcony/Patio:
          </Text>
          <Text>{balconyPatio ? 'Yes' : 'No'}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, gray.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            Private Pool:
          </Text>
          <Text>{privatePool ? 'Yes' : 'No'}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, gray.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            Dimensions of Pool:
          </Text>
          <Text>{dimensionsOfPool}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, gray.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            Pool Heated:
          </Text>
          <Text>{poolHeated ? 'Yes' : 'No'}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, gray.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            Overwater:
          </Text>
          <Text>{overwater ? 'Yes' : 'No'}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, gray.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            Beach Access:
          </Text>
          <Text>{beachAccess ? 'Yes' : 'No'}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, gray.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            TV:
          </Text>
          <Text>{isTV ? 'Yes' : 'No'}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, gray.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            Iron/Ironing Board:
          </Text>
          <Text>{ironIroningBoard ? 'Yes' : 'No'}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, gray.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            Tea/Coffee/Kettle:
          </Text>
          <Text>{teaOrCoffeeOrKettle ? 'Yes' : 'No'}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, gray.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            Microwave:
          </Text>
          <Text>{isMicrowave ? 'Yes' : 'No'}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, gray.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            Music System:
          </Text>
          <Text>{musicSystem}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, gray.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            Laundry Service:
          </Text>
          <Text>{laundryService}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, gray.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            Kitchen Facilities and What Facilities:
          </Text>
          <Text>{kitchenFacilitiesAndWhatFacilities}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, gray.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            Safe:
          </Text>
          <Text>{safe}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, gray.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            Pillow Menu:
          </Text>
          <Text>{pillowMenu}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, gray.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            Blackout Curtains:
          </Text>
          <Text>{blackoutCurtains}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, gray.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            Fan or AC:
          </Text>
          <Text>{FanOrAC}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, gray.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            Baby Bath:
          </Text>
          <Text>{babyBath}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, gray.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            Baby Monitor:
          </Text>
          <Text>{babyMonitor}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, gray.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            {`Children's Toys:`}
          </Text>
          <Text>{childrensToys}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, gray.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            {` Children's Cutlery:`}
          </Text>
          <Text>{childrensCutlery}</Text>
        </GridItem>
        {/* Continue adding GridItems for the remaining room information */}
      </Grid>
    </Box>
  );
};

export default RoomOnHotelHome;
