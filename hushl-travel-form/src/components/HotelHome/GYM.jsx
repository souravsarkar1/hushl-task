import React, { useState } from 'react';
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addProductMedia, getSingleData } from '../../redux/Products/action';
import Popup from '../Modal/Popup';
import { TiEdit, TiTick } from 'react-icons/ti';
import { ImCross } from 'react-icons/im';

const GYMOnHotelHome = ({ gym, id }) => {
  const {
    qualityOfEquipment,
    rangeofEquipment,
    spaPreBookingAdvised,
    classes,
    specialistMachines,
    trainerOnSite,
    cost,
    openingTimes,
    images,
    reviewsSentiments,
  } = gym;
  const [gymData, setGymData] = useState({
    qualityOfEquipmentData: qualityOfEquipment,
    rangeofEquipmentData: rangeofEquipment,
    spaPreBookingAdvisedData: spaPreBookingAdvised,
    classesData: classes,
    specialistMachinesData: specialistMachines,
    trainerOnSiteData: trainerOnSite,
    costData: cost,
    openingTimesData: openingTimes,
    imagesData: images,
    reviewsSentimentsData: reviewsSentiments,
  });
  const dispatch = useDispatch();
  const toast = useToast();
  const handleInputChange = (field, value) => {
    setGymData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleUpdate = param => {
    // console.log(gymData);
    if (param === '1') gymData.qualityOfEquipmentData = '';
    if (param === '2') gymData.rangeofEquipmentData = '';
    if (param === '3') gymData.spaPreBookingAdvisedData = '';
    if (param === '4') gymData.classesData = '';
    if (param === '5') gymData.specialistMachinesData = '';
    if (param === '6') gymData.trainerOnSiteData = '';
    if (param === '7') gymData.costData = '';
    if (param === '8') gymData.openingTimesData = '';
    if (param === '9') gymData.imagesData = [];

    const data = {
      gym: {
        qualityOfEquipment: gymData.qualityOfEquipmentData,
        rangeofEquipment: gymData.rangeofEquipmentData,
        spaPreBookingAdvised: gymData.spaPreBookingAdvisedData,
        classes: gymData.classesData,
        specialistMachines: gymData.specialistMachinesData,
        trainerOnSite: gymData.trainerOnSiteData,
        cost: gymData.costData,
        openingTimes: gymData.openingTimesData,
        images: gymData.imagesData,
        reviewsSentiments: gymData.reviewsSentimentsData,
      },
    };
    dispatch(addProductMedia(id, data, toast)).then(res => {
      dispatch(getSingleData(id));
    });
  };

  return (
    <Box bgGradient="linear(to-tr, gray.100, gray.200)" p={4} borderRadius="lg" minH={'90vh'}>
      <Heading as="h3" size="md" mb={2}>
        GYM Information
      </Heading>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, red.100, gray.200)">
          <Text mb={2} fontWeight="bold">
            Quality of Equipment:
          </Text>
          <Text>{qualityOfEquipment}</Text>
          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={gymData.qualityOfEquipmentData}
                    onChange={e => handleInputChange('qualityOfEquipmentData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('1')}>
                      <ImCross />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, yellow.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Range of Equipment:
          </Text>
          <Text>{rangeofEquipment}</Text>
          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={gymData.rangeofEquipmentData}
                    onChange={e => handleInputChange('rangeofEquipmentData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('2')}>
                      <ImCross />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, green.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Spa Pre-Booking Advised:
          </Text>
          <Text>{spaPreBookingAdvised ? 'Yes' : 'No'}</Text>
          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={gymData.spaPreBookingAdvisedData}
                    onChange={e => handleInputChange('spaPreBookingAdvisedData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('3')}>
                      <ImCross />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, blue.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Classes Available:
          </Text>
          <Text>{classes ? 'Yes' : 'No'}</Text>
          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input value={gymData.classesData} onChange={e => handleInputChange('classesData', e.target.value)} />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('4')}>
                      <ImCross />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, purple.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Specialist Machines:
          </Text>
          <Text>{specialistMachines}</Text>
          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={gymData.specialistMachinesData}
                    onChange={e => handleInputChange('specialistMachinesData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('5')}>
                      <ImCross />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, pink.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Trainer On-Site:
          </Text>
          <Text>{trainerOnSite ? 'Yes' : 'No'}</Text>
          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={gymData.trainerOnSiteData}
                    onChange={e => handleInputChange('trainerOnSiteData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('6')}>
                      <ImCross />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, teal.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Cost:
          </Text>
          <Text>{cost}</Text>
          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input value={gymData.costData} onChange={e => handleInputChange('costData', e.target.value)} />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('7')}>
                      <ImCross />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, cyan.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Opening Times:
          </Text>
          <Text>{openingTimes}</Text>
          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={gymData.openingTimesData}
                    onChange={e => handleInputChange('openingTimesData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('8')}>
                      <ImCross />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, orange.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Images:
          </Text>
          {images?.map((image, index) => (
            <Image key={index} src={image} alt={`Image ${index}`} />
          ))}
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, indigo.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Reviews Sentiments:
          </Text>
          <Text>{reviewsSentiments}</Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default GYMOnHotelHome;
