import React from 'react';
import { Box, Heading, Text, Grid, GridItem, Input } from '@chakra-ui/react';
import Popup from '../Modal/Popup';

const PropertyInformationOnHotelHome = ({ propertyInformation, id }) => {
  const {
    scopeOfRenovation,
    stateOfRepair,
    propertyType,
    rating,
    numberofRooms,
    LGBTQIFriendly,
    Design,
    isAdultOnly,
    propertymap,
    lastRenovated,
    thirdPartyReviewsaorAwards,
    ecoAwardsOrCertification,
    wifi,
    uniqueSellingPoints,
  } = propertyInformation;
  //   const [scopeOfRenovationData, setScopeOfRenovationData] = useState([...scopeOfRenovation]);
  console.log({ id });
  return (
    <Box
      bgGradient="linear(to-tr, gray.100, gray.200)" // Gradient from gray.100 to gray.200 from bottom-left to top-right
      p={4}
      borderRadius="lg"
      minH={'90vh'}
    >
      <Heading as="h3" size="md" mb={2}>
        Property Information
      </Heading>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, red.100, gray.200)">
          <Text mb={2} fontWeight="bold">
            Scope of Renovation:
          </Text>
          <Text>{scopeOfRenovation.join(', ')}</Text>
          <Popup
            modalTitle={'Edit'}
            children={
              <Box>
                <Input />
              </Box>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, yellow.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            State of Repair:
          </Text>
          <Text>{stateOfRepair}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, green.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Property Type:
          </Text>
          <Text>{propertyType}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, blue.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Rating:
          </Text>
          <Text>{rating}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, purple.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Number of Rooms:
          </Text>
          <Text>{numberofRooms}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, pink.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            LGBTQI Friendly:
          </Text>
          <Text>{LGBTQIFriendly}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, teal.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Design:
          </Text>
          <Text>{Design}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, orange.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Is Adult Only:
          </Text>
          <Text>{isAdultOnly}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, blue.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Property Map:
          </Text>
          <Text>{propertymap}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, purple.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Last Renovated:
          </Text>
          <Text>{lastRenovated}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, pink.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Third Party Reviews/Awards:
          </Text>
          <Text>{thirdPartyReviewsaorAwards}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, teal.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Eco Awards/Certification:
          </Text>
          <Text>{ecoAwardsOrCertification}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, orange.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Wifi:
          </Text>
          <Text>{wifi}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, blue.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Unique Selling Points:
          </Text>
          <Text>{uniqueSellingPoints}</Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default PropertyInformationOnHotelHome;
