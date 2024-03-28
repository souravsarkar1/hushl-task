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
  Input,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addProductMedia, getSingleData } from '../../redux/Products/action';
import Popup from '../Modal/Popup';
import { TiEdit, TiTick } from 'react-icons/ti';
import { ImCross } from 'react-icons/im';

const ServicesOnHotelHome = ({ services, id }) => {
  const { trainingOrQualifications, needToPreBook, safetyFeatures, isNannyavAilable, cost } = services;
  const [servicesData, setServiecesData] = useState({
    trainingOrQualificationsData: trainingOrQualifications,
    needToPreBookData: needToPreBook,
    safetyFeaturesData: safetyFeatures,
    isNannyavAilableData: isNannyavAilable,
    costData: cost,
  });
  const dispatch = useDispatch();
  const toast = useToast();
  const handleInputChange = (field, value) => {
    setServiecesData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };
  const handleUpdate = params => {
    if (params === 'trainingOrQualifications') servicesData.trainingOrQualificationsData = '';
    if (params === 'needToPreBook') servicesData.needToPreBookData = '';
    if (params === 'safetyFeatures') servicesData.safetyFeaturesData = '';
    if (params === 'isNannyavAilable') servicesData.isNannyavAilableData = '';
    if (params === 'cost') servicesData.costData = '';

    const data = {
      services: {},
    };
    data.services.trainingOrQualifications = servicesData.trainingOrQualificationsData;
    data.services.needToPreBook = servicesData.needToPreBookData;
    data.services.safetyFeatures = servicesData.safetyFeaturesData;
    data.services.isNannyavAilable = servicesData.isNannyavAilableData;
    data.services.cost = servicesData.costData;
    dispatch(addProductMedia(id, data, toast)).then(res => {
      dispatch(getSingleData(id));
    });
  };

  return (
    <Box bgGradient="linear(to-tr, gray.100, gray.200)" p={4} borderRadius="lg" minH={'90vh'}>
      <Heading as="h2" size="md" mb={2}>
        Services Information
      </Heading>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, red.100, gray.200)">
          <Text mb={2} fontWeight="bold">
            Training or Qualifications:
          </Text>
          <Text>{trainingOrQualifications}</Text>
          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={servicesData.trainingOrQualificationsData}
                    onChange={e => handleInputChange('trainingOrQualificationsData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('trainingOrQualifications')}>
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
            Need to Pre-Book:
          </Text>
          <Text>{needToPreBook ? 'Yes' : 'No'}</Text>
          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={servicesData.needToPreBookData}
                    onChange={e => handleInputChange('needToPreBookData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('needToPreBook')}>
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
            Safety Features:
          </Text>
          <Text>{safetyFeatures}</Text>
          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={servicesData.safetyFeaturesData}
                    onChange={e => handleInputChange('safetyFeaturesData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('safetyFeatures')}>
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
            Is Nanny Available:
          </Text>
          <Text>{isNannyavAilable ? 'Yes' : 'No'}</Text>
          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={servicesData.isNannyavAilableData}
                    onChange={e => handleInputChange('isNannyavAilableData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('isNannyavAilable')}>
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
            Cost:
          </Text>
          <Text>{cost}</Text>
          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input value={servicesData.costData} onChange={e => handleInputChange('costData', e.target.value)} />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('cost')}>
                      <ImCross />
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

export default ServicesOnHotelHome;
