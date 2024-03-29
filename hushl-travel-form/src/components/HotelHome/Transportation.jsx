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
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProductMedia, getSingleData } from '../../redux/Products/action';
import Popup from '../Modal/Popup';
import { CiEdit } from 'react-icons/ci';
import { TiTick } from 'react-icons/ti';
import { ImCross } from 'react-icons/im';

const TransportationOnHotelHome = ({ transferOptions, id }) => {
  const {
    weatherlimited,
    timeLimitedbyTransferType,
    hotelFacilitatesTransferBooking,
    qualityofBoats,
    transferOption,
    boatschedules,
    seaplaneSchedules,
    seaplaneProvider,
    domesticAirlineSchedules,
    likelihoodofDelays,
    distanceOrTimeFromMale,
    meetAndGreetAtAirport,
  } = transferOptions;
  const dispatch = useDispatch();
  const toast = useToast();
  const [transferOptionData, setTransferOptionsData] = useState({
    weatherlimitedData: weatherlimited,
    timeLimitedbyTransferTypeData: timeLimitedbyTransferType,
    hotelFacilitatesTransferBookingData: hotelFacilitatesTransferBooking,
    qualityofBoatsData: qualityofBoats,
    transferOptionData: transferOption,
    boatschedulesData: boatschedules,
    seaplaneSchedulesData: seaplaneSchedules,
    seaplaneProviderData: seaplaneProvider,
    domesticAirlineSchedulesData: domesticAirlineSchedules,
    likelihoodofDelaysData: likelihoodofDelays,
    distanceOrTimeFromMaleData: distanceOrTimeFromMale,
    meetAndGreetAtAirportData: meetAndGreetAtAirport,
  });
  const handleInputChange = (field, value) => {
    setTransferOptionsData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };
  const handleUpdate = params => {
    if (params === 'weatherlimited') transferOptionData.weatherlimitedData = '';
    if (params === 'timeLimitedbyTransferType') transferOptionData.timeLimitedbyTransferTypeData = '';
    if (params === 'hotelFacilitatesTransferBooking') transferOptionData.hotelFacilitatesTransferBookingData = '';
    if (params === 'qualityofBoats') transferOptionData.qualityofBoatsData = '';
    if (params === 'transferOption') transferOptionData.transferOptionData = '';
    if (params === 'boatschedules') transferOptionData.boatschedulesData = '';
    if (params === 'seaplaneSchedules') transferOptionData.seaplaneSchedulesData = '';
    if (params === 'seaplaneProvider') transferOptionData.seaplaneProviderData = '';
    if (params === 'domesticAirlineSchedules') transferOptionData.domesticAirlineSchedulesData = '';
    if (params === 'likelihoodofDelays') transferOptionData.likelihoodofDelaysData = '';
    if (params === 'distanceOrTimeFromMale') transferOptionData.distanceOrTimeFromMaleData = '';
    if (params === 'meetAndGreetAtAirport') transferOptionData.meetAndGreetAtAirportData = '';

    const data = {
      transferOptions: {},
    };
    data.transferOptions.weatherlimited = transferOptionData.weatherlimitedData;
    data.transferOptions.timeLimitedbyTransferType = transferOptionData.timeLimitedbyTransferTypeData;
    data.transferOptions.hotelFacilitatesTransferBooking = transferOptionData.hotelFacilitatesTransferBookingData;
    data.transferOptions.qualityofBoats = transferOptionData.qualityofBoatsData;
    data.transferOptions.transferOption = transferOptionData.transferOptionData;
    data.transferOptions.boatschedules = transferOptionData.boatschedulesData;
    data.transferOptions.seaplaneSchedules = transferOptionData.seaplaneSchedulesData;
    data.transferOptions.seaplaneProvider = transferOptionData.seaplaneProviderData;
    data.transferOptions.domesticAirlineSchedules = transferOptionData.domesticAirlineSchedulesData;
    data.transferOptions.likelihoodofDelays = transferOptionData.likelihoodofDelaysData;
    data.transferOptions.distanceOrTimeFromMale = transferOptionData.distanceOrTimeFromMaleData;
    data.transferOptions.meetAndGreetAtAirport = transferOptionData.meetAndGreetAtAirportData;
    // console.log(data);
    dispatch(addProductMedia(id, data, toast)).then(res => {
      dispatch(getSingleData(id));
    });
  };

  return (
    <Box>
      <Heading as="h3" size="md" mb={2}>
        Transportation
      </Heading>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, red.100, gray.200)">
          <Text mb={2} fontWeight="bold">
            Weather Limited:
          </Text>
          <Text>{weatherlimited}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={transferOptionData.weatherlimitedData}
                    onChange={e => handleInputChange('weatherlimitedData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('weatherlimited')}>
                      <ImCross />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, red.300, green.500)">
          <Text mb={2} fontWeight="bold">
            Time Limited by Transfer Type:
          </Text>
          <Text>{timeLimitedbyTransferType}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={transferOptionData.timeLimitedbyTransferTypeData}
                    onChange={e => handleInputChange('timeLimitedbyTransferTypeData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('timeLimitedbyTransferType')}>
                      <ImCross />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, yellow.300, red.500)">
          <Text mb={2} fontWeight="bold">
            Hotel Facilitates Transfer Booking:
          </Text>
          <Text>{hotelFacilitatesTransferBooking}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={transferOptionData.hotelFacilitatesTransferBookingData}
                    onChange={e => handleInputChange('hotelFacilitatesTransferBookingData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('hotelFacilitatesTransferBooking')}>
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
            Quality of Boats:
          </Text>
          <Text>{qualityofBoats}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={transferOptionData.qualityofBoatsData}
                    onChange={e => handleInputChange('qualityofBoatsData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('qualityofBoats')}>
                      <ImCross />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, blue.300, red.500)">
          <Text mb={2} fontWeight="bold">
            Transfer Option:
          </Text>
          <Text>{transferOption}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={transferOptionData.transferOptionData}
                    onChange={e => handleInputChange('transferOptionData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('transferOption')}>
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
            Boat Schedules:
          </Text>
          <Text>{boatschedules}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={transferOptionData.boatschedulesData}
                    onChange={e => handleInputChange('boatschedulesData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('boatschedules')}>
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
            Seaplane Schedules:
          </Text>
          <Text>{seaplaneSchedules}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={transferOptionData.seaplaneSchedulesData}
                    onChange={e => handleInputChange('seaplaneSchedulesData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('seaplaneSchedules')}>
                      <ImCross />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, red.300, pink.500)">
          <Text mb={2} fontWeight="bold">
            Seaplane Provider:
          </Text>
          <Text>{seaplaneProvider}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={transferOptionData.seaplaneProviderData}
                    onChange={e => handleInputChange('seaplaneProviderData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('seaplaneProvider')}>
                      <ImCross />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, blue.300, red.500)">
          <Text mb={2} fontWeight="bold">
            Domestic Airline Schedules:
          </Text>
          <Text>{domesticAirlineSchedules}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={transferOptionData.domesticAirlineSchedulesData}
                    onChange={e => handleInputChange('domesticAirlineSchedulesData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('domesticAirlineSchedules')}>
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
            Likelihood of Delays:
          </Text>
          <Text>{likelihoodofDelays}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={transferOptionData.likelihoodofDelaysData}
                    onChange={e => handleInputChange('likelihoodofDelaysData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('likelihoodofDelays')}>
                      <ImCross />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, green.300, blue.500)">
          <Text mb={2} fontWeight="bold">
            Distance or Time From Male:
          </Text>
          <Text>{distanceOrTimeFromMale}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={transferOptionData.distanceOrTimeFromMaleData}
                    onChange={e => handleInputChange('distanceOrTimeFromMaleData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('distanceOrTimeFromMale')}>
                      <ImCross />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, yellow.300, red.500)">
          <Text mb={2} fontWeight="bold">
            Meet and Greet at Airport:
          </Text>
          <Text>{meetAndGreetAtAirport}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={transferOptionData.meetAndGreetAtAirportData}
                    onChange={e => handleInputChange('meetAndGreetAtAirportData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('meetAndGreetAtAirport')}>
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

export default TransportationOnHotelHome;
