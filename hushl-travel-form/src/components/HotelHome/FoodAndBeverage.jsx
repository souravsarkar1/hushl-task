import React from 'react';
import { Box, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';

const FoodAndBeverageOnHotelHome = ({ foodAndBeverage }) => {
  const {
    InclusionsOrExclusionsforFullOrhalfBoard,
    extraCostForRoomService,
    numberOfBarsAndNames,
    hoursOfOperation,
    specialties,
    reviewsSentiments,
    numberOfRestaurantsandNames,
    typesOfCuisine,
    halaalOption,
    kidsMenu,
    roomService,
    seviewsSentiments,
    images,
  } = foodAndBeverage;

  return (
    <Box bgGradient="linear(to-tr, gray.100, gray.200)" p={4} borderRadius="lg" minH={'90vh'}>
      <Heading as="h2" size="md" mb={2}>
        Food and Beverage Information
      </Heading>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, red.100, gray.200)">
          <Text mb={2} fontWeight="bold">
            Inclusions/Exclusions for Full or Half Board:
          </Text>
          <Text>{InclusionsOrExclusionsforFullOrhalfBoard}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, yellow.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Extra Cost for Room Service:
          </Text>
          <Text>{extraCostForRoomService}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, green.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Number of Bars and Names:
          </Text>
          <Text>{numberOfBarsAndNames}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, blue.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Hours of Operation:
          </Text>
          <Text>{hoursOfOperation}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, purple.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Specialties:
          </Text>
          <Text>{specialties}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, pink.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Reviews Sentiments:
          </Text>
          <Text>{reviewsSentiments}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, teal.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Number of Restaurants and Names:
          </Text>
          <Text>{numberOfRestaurantsandNames}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, orange.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Types of Cuisine:
          </Text>
          <Text>{typesOfCuisine}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, indigo.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Halaal Option:
          </Text>
          <Text>{halaalOption}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, cyan.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Kids Menu:
          </Text>
          <Text>{kidsMenu}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, lime.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Room Service:
          </Text>
          <Text>{roomService}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, brown.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Reviews Sentiments for Room Service:
          </Text>
          <Text>{seviewsSentiments}</Text>
        </GridItem>
      </Grid>
      {/* Render images if available */}
      {images && images.length > 0 && (
        <Box mt={20}>
          <Heading as="h3" size="sm" mb={2}>
            Images:
          </Heading>
          <Grid templateColumns="repeat(auto-fit, minmax(150px, 1fr))" gap={2}>
            {images.map((image, index) => (
              <Box key={index} borderRadius="md" overflow="hidden">
                <Image src={image} alt={`Image ${index}`} />
              </Box>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default FoodAndBeverageOnHotelHome;
