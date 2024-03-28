import {
  Box,
  Text,
  Grid,
  Heading,
  GridItem,
  Center,
  FormControl,
  Input,
  Flex,
  Button,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Popup from '../Modal/Popup';
import { useDispatch } from 'react-redux';
import { addProductMedia, getSingleData } from '../../redux/Products/action';
import { MdDelete, MdEdit } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';

const LocationCardOnHotelHome = ({ location, id }) => {
  const { latitude, longitude, address, city, state, postCode, country, atoll, roadAndNumber, suburb } = location;
  const [locationData, setLoacatinData] = useState({
    latitudeData: latitude,
    longitudeData: longitude,
    addressData: address,
    cityData: city,
    stateData: state,
    postCodeData: postCode,
    countryData: country,
    atollData: atoll,
    roadAndNumberData: roadAndNumber,
    suburbData: suburb,
  });
  const dispatch = useDispatch();
  const toast = useToast();
  const handleInputChange = (field, vlaue) => {
    setLoacatinData(prevData => ({
      ...prevData,
      [field]: vlaue,
    }));
  };
  // const handleCheckboxChange = (field, checkboxValues) => {
  //   setLoacatinData(prevData => ({
  //     ...prevData,
  //     [field]: checkboxValues,
  //   }));
  // };
  const handleUpdate = params => {
    if (params === '1') locationData.latitudeData = 0;
    if (params === '2') locationData.longitudeData = 0;
    if (params === '3') locationData.addressData = '';
    if (params === '4') locationData.cityData = '';
    if (params === '5') locationData.stateData = '';
    if (params === '6') locationData.zipCodeData = '';
    if (params === '7') locationData.countryData = '';
    if (params === '8') locationData.atollData = '';
    if (params === '9') locationData.roadAndNumberData = '';
    if (params === '10') locationData.suburbData = '';
    if (params === '11') locationData.postCodeData = 0;

    const data = {
      location: {
        latitude: locationData.latitudeData,
        longitude: locationData.longitudeData,
        address: locationData.addressData,
        city: locationData.cityData,
        state: locationData.stateData,
        postCode: locationData.postCodeData,
        country: locationData.countryData,
        atoll: locationData.atollData,
        roadAndNumber: locationData.roadAndNumberData,
        suburb: locationData.suburbData,
      },
    };

    console.log(data);
    dispatch(addProductMedia(id, data, toast)).then(res => {
      dispatch(getSingleData(id));
    });
  };

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
            City:
          </Text>
          <Text>{city}</Text>
          <Popup
            modalTitle={<MdEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input value={locationData.cityData} onChange={e => handleInputChange('cityData', e.target.value)} />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button onClick={handleUpdate} colorScheme="green">
                      <TiTick size={40} />
                    </Button>
                    <Button onClick={() => handleUpdate('4')} colorScheme="red">
                      <MdDelete size={30} />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, yellow.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Country:
          </Text>
          <Text>{country}</Text>
          <Popup
            modalTitle={<MdEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={locationData.countryData}
                    onChange={e => handleInputChange('countryData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button onClick={handleUpdate} colorScheme="green">
                      <TiTick size={40} />
                    </Button>
                    <Button onClick={() => handleUpdate('7')} colorScheme="red">
                      <MdDelete size={30} />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, green.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            State:
          </Text>
          <Text>{state}</Text>
          <Popup
            modalTitle={<MdEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={locationData.stateData}
                    onChange={e => handleInputChange('stateData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button onClick={handleUpdate} colorScheme="green">
                      <TiTick size={40} />
                    </Button>
                    <Button onClick={() => handleUpdate('5')} colorScheme="red">
                      <MdDelete size={30} />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, blue.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Latitude:
          </Text>
          <Text>{latitude}</Text>
          <Popup
            modalTitle={<MdEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={locationData.latitudeData}
                    onChange={e => handleInputChange('latitudeData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button onClick={handleUpdate} colorScheme="green">
                      <TiTick size={40} />
                    </Button>
                    <Button onClick={() => handleUpdate('1')} colorScheme="red">
                      <MdDelete size={30} />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, purple.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Longitude:
          </Text>
          <Text>{longitude}</Text>
          <Popup
            modalTitle={<MdEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={locationData.longitudeData}
                    onChange={e => handleInputChange('longitudeData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button onClick={handleUpdate} colorScheme="green">
                      <TiTick size={40} />
                    </Button>
                    <Button onClick={() => handleUpdate('2')} colorScheme="red">
                      <MdDelete size={30} />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, pink.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Road and Number:
          </Text>
          <Text>{roadAndNumber}</Text>
          <Popup
            modalTitle={<MdEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={locationData.roadAndNumberData}
                    onChange={e => handleInputChange('roadAndNumberData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button onClick={handleUpdate} colorScheme="green">
                      <TiTick size={40} />
                    </Button>
                    <Button onClick={() => handleUpdate('9')} colorScheme="red">
                      <MdDelete size={30} />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, teal.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Suburb:
          </Text>
          <Text>{suburb}</Text>
          <Popup
            modalTitle={<MdEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={locationData.suburbData}
                    onChange={e => handleInputChange('suburbData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button onClick={handleUpdate} colorScheme="green">
                      <TiTick size={40} />
                    </Button>
                    <Button onClick={() => handleUpdate('10')} colorScheme="red">
                      <MdDelete size={30} />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, orange.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Post Code:
          </Text>
          <Text>{postCode}</Text>
          <Popup
            modalTitle={<MdEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={locationData.postCodeData}
                    onChange={e => handleInputChange('postCodeData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button onClick={handleUpdate} colorScheme="green">
                      <TiTick size={40} />
                    </Button>
                    <Button onClick={() => handleUpdate('11')} colorScheme="red">
                      <MdDelete size={30} />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, blue.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Atoll:
          </Text>
          <Text>{atoll}</Text>
          <Popup
            modalTitle={<MdEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={locationData.atollData}
                    onChange={e => handleInputChange('atollData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button onClick={handleUpdate} colorScheme="green">
                      <TiTick size={40} />
                    </Button>
                    <Button onClick={() => handleUpdate('8')} colorScheme="red">
                      <MdDelete size={30} />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        {/* Add more GridItems for other properties if needed */}
      </Grid>
    </Box>
  );
};

export default LocationCardOnHotelHome;
