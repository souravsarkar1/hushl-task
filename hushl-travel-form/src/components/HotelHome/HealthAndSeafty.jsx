import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const HealthAndSeaftyOnHotelHome = ({ healthSafety }) => {
  const {
    lastReviewDate,
    rating,
    comments,
    policyForEvacuation,
    medicalEmergencyPolicy,
    doctorOnSite,
    doctorIsPermanent,
    nurseOnsite,
    nurseIsPermanent,
    onPremiseQualifications,
    defibrillatorsOnProperty,
    defibrillatorsByPool,
    nearestClinicHospital,
    specialitiesOfNearestHospital,
    nearestChildrenHospital,
  } = healthSafety;

  return (
    <Box bgGradient="linear(to-tr, gray.100, gray.200)" p={4} borderRadius="lg" minH={'90vh'}>
      <Heading as="h3" size="md" mb={2}>
        Health and Safety Information
      </Heading>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, red.100, gray.200)">
          <Text mb={2} fontWeight="bold">
            Last Review Date:
          </Text>
          <Text>{lastReviewDate}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, yellow.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Rating:
          </Text>
          <Text>{rating}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, green.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Comments:
          </Text>
          <Text>{comments}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, blue.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Policy for Evacuation:
          </Text>
          <Text>{policyForEvacuation}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, purple.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Medical Emergency Policy:
          </Text>
          <Text>{medicalEmergencyPolicy}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, pink.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Doctor On Site:
          </Text>
          <Text>{doctorOnSite}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, teal.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Doctor Is Permanent:
          </Text>
          <Text>{doctorIsPermanent}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, orange.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Nurse On Site:
          </Text>
          <Text>{nurseOnsite}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, blue.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Nurse Is Permanent:
          </Text>
          <Text>{nurseIsPermanent}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, purple.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            On Premise Qualifications:
          </Text>
          <Text>{onPremiseQualifications}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, pink.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Defibrillators On Property:
          </Text>
          <Text>{defibrillatorsOnProperty}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, teal.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Defibrillators By Pool:
          </Text>
          <Text>{defibrillatorsByPool}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, orange.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Nearest Clinic/Hospital:
          </Text>
          <Text>{nearestClinicHospital}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, blue.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Specialities of Nearest Hospital:
          </Text>
          <Text>{specialitiesOfNearestHospital}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, purple.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Nearest Children Hospital:
          </Text>
          <Text>{nearestChildrenHospital}</Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default HealthAndSeaftyOnHotelHome;
