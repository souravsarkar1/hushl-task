import React from 'react';
import { Box, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';

const KidsClubOnHotelHome = ({ kidsClub }) => {
  const {
    ratioofStafftoChildren,
    staffQualifications,
    languagesSpoken,
    hours,
    cost,
    preBbookingAdvised,
    agesAccommodated,
    activities,
    images,
  } = kidsClub;

  return (
    <Box bgGradient="linear(to-tr, gray.100, gray.200)" p={4} borderRadius="lg" minH={'90vh'}>
      <Heading as="h2" size="md" mb={2}>
        Kids Club Information
      </Heading>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, red.100, gray.200)">
          <Text mb={2} fontWeight="bold">
            Ratio of Staff to Children:
          </Text>
          <Text>{ratioofStafftoChildren}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, yellow.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Staff Qualifications:
          </Text>
          <Text>{staffQualifications}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, green.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Languages Spoken:
          </Text>
          <Text>{languagesSpoken}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, blue.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Hours:
          </Text>
          <Text>{hours}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, purple.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Cost:
          </Text>
          <Text>{cost}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, pink.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Pre-Booking Advised:
          </Text>
          <Text>{preBbookingAdvised ? 'Yes' : 'No'}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, teal.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Ages Accommodated:
          </Text>
          <Text>{agesAccommodated}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, orange.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Activities:
          </Text>
          <Text>{activities}</Text>
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

export default KidsClubOnHotelHome;
