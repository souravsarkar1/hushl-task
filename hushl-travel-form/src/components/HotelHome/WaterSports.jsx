import { Box, Grid, GridItem, Heading, Text, Image } from '@chakra-ui/react';
import React from 'react';

const WaterSportsOnHotelHome = ({ waterSports }) => {
  const {
    diving,
    affiliation,
    sites,
    languagesSpoken,
    submarineTour,
    costs,
    maximumOccupancy,
    images,
    whatflotationDevicesProvided,
    minimumAge,
    equipmentProvided,
    otherServices,
    nameOfSurfSite,
    reviewsSentiments,
  } = waterSports;
  return (
    <Box bgGradient="linear(to-tr, gray.100, gray.200)" p={4} borderRadius="lg" minH={'90vh'}>
      <Heading as="h3" size="md" mb={2}>
        Water Sports Information
      </Heading>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, red.100, gray.200)">
          <Text mb={2} fontWeight="bold">
            Diving:
          </Text>
          <Text>{diving}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, yellow.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Affiliation:
          </Text>
          <Text>{affiliation}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, green.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Sites:
          </Text>
          <Text>{sites}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, blue.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Languages Spoken:
          </Text>
          <Text>{languagesSpoken}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, purple.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Submarine Tour:
          </Text>
          <Text>{submarineTour}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, pink.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Costs:
          </Text>
          <Text>{costs}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, teal.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Maximum Occupancy:
          </Text>
          <Text>{maximumOccupancy}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, cyan.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Images:
          </Text>
          {images?.map((image, index) => (
            <Image key={index} src={image} alt={`Image ${index}`} />
          ))}
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, orange.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Flotation Devices Provided:
          </Text>
          <Text>{whatflotationDevicesProvided}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, blue.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Minimum Age:
          </Text>
          <Text>{minimumAge}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, yellow.300, red.500)">
          <Text mb={2} fontWeight="bold">
            Equipment Provided:
          </Text>
          <Text>{equipmentProvided}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, green.300, green.500)">
          <Text mb={2} fontWeight="bold">
            Other Services:
          </Text>
          <Text>{otherServices}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, #c603fc, gray.500)">
          <Text mb={2} fontWeight="bold">
            Name of Surf Site:
          </Text>
          <Text>{nameOfSurfSite}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, pink.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Reviews Sentiments:
          </Text>
          <Text>{reviewsSentiments}</Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default WaterSportsOnHotelHome;
