import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  Grid,
  GridItem,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProductMedia, getSingleData } from '../../redux/Products/action';
import Popup from '../Modal/Popup';
import { CiEdit } from 'react-icons/ci';
import { TiTick } from 'react-icons/ti';
import { MdDelete } from 'react-icons/md';

const HealthAndSeaftyOnHotelHome = ({ healthSafety, id }) => {
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
  const [healthSafetyData, setHealthSafetyData] = useState({
    lastReviewDateData: lastReviewDate,
    ratingData: rating,
    commentsData: comments,
    policyForEvacuationData: policyForEvacuation,
    medicalEmergencyPolicyData: medicalEmergencyPolicy,
    doctorOnSiteData: doctorOnSite,
    doctorIsPermanentData: doctorIsPermanent,
    nurseOnsiteData: nurseOnsite,
    nurseIsPermanentData: nurseIsPermanent,
    onPremiseQualificationsData: onPremiseQualifications,
    defibrillatorsOnPropertyData: defibrillatorsOnProperty,
    defibrillatorsByPoolData: defibrillatorsByPool,
    nearestClinicHospitalData: nearestClinicHospital,
    specialitiesOfNearestHospitalData: specialitiesOfNearestHospital,
    nearestChildrenHospitalData: nearestChildrenHospital,
  });
  const dispatch = useDispatch();
  const toast = useToast();
  const handleInputChange = (field, value) => {
    setHealthSafetyData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };
  // const handleCheckboxChange = (field, value) => {
  //   setHealthSafetyData(prevData => ({
  //     ...prevData,
  //     [field]: value,
  //   }));
  // };
  const handleUpdate = params => {
    if (params === 'lastReviewDate') healthSafetyData.lastReviewDateData = '';
    if (params === 'rating') healthSafetyData.ratingData = '';
    if (params === 'comments') healthSafetyData.commentsData = '';
    if (params === 'policyForEvacuation') healthSafetyData.policyForEvacuationData = '';
    if (params === 'medicalEmergencyPolicy') healthSafetyData.medicalEmergencyPolicyData = '';
    if (params === 'doctorOnSite') healthSafetyData.doctorOnSiteData = '';
    if (params === 'doctorIsPermanent') healthSafetyData.doctorIsPermanentData = '';
    if (params === 'nurseOnsite') healthSafetyData.nurseOnsiteData = '';
    if (params === 'nurseIsPermanent') healthSafetyData.nurseIsPermanentData = '';
    if (params === 'onPremiseQualifications') healthSafetyData.onPremiseQualificationsData = '';
    if (params === 'defibrillatorsOnProperty') healthSafetyData.defibrillatorsOnPropertyData = '';
    if (params === 'defibrillatorsByPool') healthSafetyData.defibrillatorsByPoolData = '';
    if (params === 'nearestClinicHospital') healthSafetyData.nearestClinicHospitalData = '';
    if (params === 'specialitiesOfNearestHospital') healthSafetyData.specialitiesOfNearestHospitalData = '';
    if (params === 'nearestChildrenHospital') healthSafetyData.nearestChildrenHospitalData = '';
    const data = {
      healthSafety: {
        lastReviewDate: healthSafetyData.lastReviewDateData,
        rating: healthSafetyData.ratingData,
        comments: healthSafetyData.commentsData,
        policyForEvacuation: healthSafetyData.policyForEvacuationData,
        medicalEmergencyPolicy: healthSafetyData.medicalEmergencyPolicyData,
        doctorOnSite: healthSafetyData.doctorOnSiteData,
        doctorIsPermanent: healthSafetyData.doctorIsPermanentData,
        nurseOnsite: healthSafetyData.nurseOnsiteData,
        nurseIsPermanent: healthSafetyData.nurseIsPermanentData,
        onPremiseQualifications: healthSafetyData.onPremiseQualificationsData,
        defibrillatorsOnProperty: healthSafetyData.defibrillatorsOnPropertyData,
        defibrillatorsByPool: healthSafetyData.defibrillatorsByPoolData,
        nearestClinicHospital: healthSafetyData.nearestClinicHospitalData,
        specialitiesOfNearestHospital: healthSafetyData.specialitiesOfNearestHospitalData,
        nearestChildrenHospital: healthSafetyData.nearestChildrenHospitalData,
      },
    };
    dispatch(addProductMedia(id, data, toast)).then(res => {
      dispatch(getSingleData(id));
    });
  };

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
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    type="date"
                    value={healthSafetyData.lastReviewDateData}
                    onChange={e => handleInputChange('lastReviewDateData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('lastReviewDate')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
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
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Textarea
                    value={healthSafetyData.commentsData}
                    onChange={e => handleInputChange('commentsData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('comments')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, blue.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Policy for Evacuation:
          </Text>
          <Text>{JSON.stringify(policyForEvacuation)}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, purple.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Medical Emergency Policy:
          </Text>
          <Text>{JSON.stringify(medicalEmergencyPolicy)}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, pink.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Doctor On Site:
          </Text>
          <Text>{doctorOnSite}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={healthSafetyData.doctorOnSiteData}
                    onChange={e => handleInputChange('doctorOnSiteData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('doctorOnSite')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, teal.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Doctor Is Permanent:
          </Text>
          <Text>{doctorIsPermanent}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={healthSafetyData.doctorIsPermanentData}
                    onChange={e => handleInputChange('doctorIsPermanentData', e.target.value)}
                  />

                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('doctorIsPermanent')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, orange.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Nurse On Site:
          </Text>
          <Text>{nurseOnsite}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={healthSafetyData.nurseOnsiteData}
                    onChange={e => handleInputChange('nurseOnsiteData', e.target.value)}
                  />

                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('nurseOnsite')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, blue.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Nurse Is Permanent:
          </Text>
          <Text>{nurseIsPermanent}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={healthSafetyData.nurseIsPermanentData}
                    onChange={e => handleInputChange('nurseIsPermanentData', e.target.value)}
                  />

                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('nurseIsPermanent')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, purple.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            On Premise Qualifications:
          </Text>
          <Text>{onPremiseQualifications}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={healthSafetyData.onPremiseQualificationsData}
                    onChange={e => handleInputChange('onPremiseQualificationsData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('onPremiseQualifications')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, pink.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Defibrillators On Property:
          </Text>
          <Text>{defibrillatorsOnProperty}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={healthSafetyData.defibrillatorsOnPropertyData}
                    onChange={e => handleInputChange('defibrillatorsOnPropertyData', e.target.value)}
                  />

                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('defibrillatorsOnProperty')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, teal.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Defibrillators By Pool:
          </Text>
          <Text>{defibrillatorsByPool}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={healthSafetyData.defibrillatorsByPoolData}
                    onChange={e => handleInputChange('defibrillatorsByPoolData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('defibrillatorsByPool')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, orange.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Nearest Clinic/Hospital:
          </Text>
          <Text>{nearestClinicHospital}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={healthSafetyData.nearestClinicHospitalData}
                    onChange={e => handleInputChange('nearestClinicHospitalData', e.target.value)}
                  />

                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('nearestClinicHospital')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, blue.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Specialities of Nearest Hospital:
          </Text>
          <Text>{specialitiesOfNearestHospital}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={healthSafetyData.specialitiesOfNearestHospitalData}
                    onChange={e => handleInputChange('specialitiesOfNearestHospitalData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('specialitiesOfNearestHospital')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, purple.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Nearest Children Hospital:
          </Text>
          <Text>{nearestChildrenHospital}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={healthSafetyData.nearestChildrenHospitalData}
                    onChange={e => handleInputChange('nearestChildrenHospitalData', e.target.value)}
                  />

                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('nearestChildrenHospital')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default HealthAndSeaftyOnHotelHome;
