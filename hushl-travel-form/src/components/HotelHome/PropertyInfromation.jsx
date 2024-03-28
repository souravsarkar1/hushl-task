import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Grid,
  GridItem,
  Textarea,
  Center,
  Button,
  FormControl,
  useToast,
  CheckboxGroup,
  Wrap,
  WrapItem,
  Checkbox,
  Input,
  Flex,
  RadioGroup,
  Stack,
  Radio,
} from '@chakra-ui/react';
import Popup from '../Modal/Popup';
import { useDispatch } from 'react-redux';
import { addProductMedia, getSingleData } from '../../redux/Products/action';
import { MdDelete, MdEdit } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';
import NewRating from '../Rating/NewRating';
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
  const dispatch = useDispatch();

  const [propertyInformationData, setPropertyInformationData] = useState({
    scopeOfRenovationData: scopeOfRenovation,
    stateOfRepairData: stateOfRepair,
    propertyTypeData: propertyType,
    ratingData: rating,
    numberofRoomsData: numberofRooms,
    LGBTQIFriendlyData: LGBTQIFriendly,
    DesignData: Design,
    isAdultOnlyData: isAdultOnly,
    propertymapData: propertymap,
    lastRenovatedData: lastRenovated,
    thirdPartyReviewsaorAwardsData: thirdPartyReviewsaorAwards,
    ecoAwardsOrCertificationData: ecoAwardsOrCertification,
    wifiData: wifi,
    uniqueSellingPointsData: uniqueSellingPoints,
  });
  const handleInputChange = (field, vlaue) => {
    setPropertyInformationData(prevData => ({
      ...prevData,
      [field]: vlaue,
    }));
  };
  const handleCheckboxChange = (field, checkboxValues) => {
    setPropertyInformationData(prevData => ({
      ...prevData,
      [field]: checkboxValues,
    }));
  };

  const toast = useToast();
  const hanldeUpdate = params => {
    if (params === '1') propertyInformationData.scopeOfRenovationData = [];
    if (params === '2') propertyInformationData.stateOfRepairData = '';
    if (params === '3') propertyInformationData.propertyTypeData = '';
    if (params === '4') propertyInformationData.ratingData = 0;
    if (params === '5') propertyInformationData.numberofRoomsData = '';
    if (params === '6') propertyInformationData.LGBTQIFriendlyData = false;
    if (params === '7') propertyInformationData.DesignData = '';
    if (params === '8') propertyInformationData.isAdultOnlyData = '';
    if (params === '9') propertyInformationData.propertymapData = '';
    if (params === '10') propertyInformationData.lastRenovatedData = '';
    if (params === '11') propertyInformationData.thirdPartyReviewsaorAwardsData = '';
    if (params === '12') propertyInformationData.ecoAwardsOrCertificationData = '';
    if (params === '13') propertyInformationData.wifiData = '';
    if (params === '14') propertyInformationData.uniqueSellingPointsData = '';

    const hotel = {
      propertyInformation: {
        scopeOfRenovation: propertyInformationData.scopeOfRenovationData,
        stateOfRepair: propertyInformationData.stateOfRepairData,
        propertyType: propertyInformationData.propertyTypeData,
        rating: propertyInformationData.ratingData,
        numberofRooms: propertyInformationData.numberofRoomsData,
        LGBTQIFriendly: propertyInformationData.LGBTQIFriendlyData,
        Design: propertyInformationData.DesignData,
        isAdultOnly: propertyInformationData.isAdultOnlyData,
        propertymap: propertyInformationData.propertymapData,
        lastRenovated: propertyInformationData.lastRenovatedData,
        thirdPartyReviewsaorAwards: propertyInformationData.thirdPartyReviewsaorAwardsData,
        ecoAwardsOrCertification: propertyInformationData.ecoAwardsOrCertificationData,
        wifi: propertyInformationData.wifiData,
        uniqueSellingPoints: propertyInformationData.uniqueSellingPointsData,
      },
    };

    dispatch(addProductMedia(id, hotel, toast)).then(res => {
      dispatch(getSingleData(id));
    });
  };

  return (
    <Box bgGradient="linear(to-tr, gray.100, gray.200)" p={4} borderRadius="lg" minH={'90vh'}>
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
            modalTitle={<MdEdit />}
            colorofModal={'blue'}
            children={
              <FormControl>
                <CheckboxGroup
                  colorScheme="teal"
                  value={propertyInformationData.scopeOfRenovationData}
                  onChange={e => handleCheckboxChange('scopeOfRenovationData', e)}
                >
                  <Wrap align="start">
                    <WrapItem>
                      <Checkbox value="Soft">Soft</Checkbox>
                    </WrapItem>
                    <WrapItem>
                      <Checkbox value="Full">Full</Checkbox>
                    </WrapItem>
                    <WrapItem>
                      <Checkbox value="Rooms">Rooms</Checkbox>
                    </WrapItem>
                    <WrapItem>
                      <Checkbox value="Bathrooms">Bathrooms</Checkbox>
                    </WrapItem>
                    <WrapItem>
                      <Checkbox value="Amenities">Amenities</Checkbox>
                    </WrapItem>
                    <WrapItem>
                      <Checkbox value="CommonAreas">Common Areas</Checkbox>
                    </WrapItem>
                  </Wrap>
                </CheckboxGroup>

                <Flex
                  alignItems={'center'}
                  flexDir={'row'}
                  justifyContent={'space-around'}
                  mt={3}
                  // border={'1px solid red'}
                  width={'60%'}
                >
                  <Button onClick={hanldeUpdate} colorScheme="green">
                    <TiTick size={40} />
                  </Button>
                  <Button onClick={() => hanldeUpdate('1')} colorScheme="red">
                    <MdDelete size={30} />
                  </Button>
                </Flex>
              </FormControl>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, yellow.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            State of Repair:
          </Text>
          <Text>{stateOfRepair}</Text>
          <Popup
            modalTitle={<MdEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Textarea
                    value={propertyInformationData.stateOfRepairData}
                    onChange={e => handleInputChange('stateOfRepairData', e.target.value)}
                  />
                  <Flex
                    alignItems={'center'}
                    flexDir={'row'}
                    justifyContent={'space-around'}
                    mt={3}
                    // border={'1px solid red'}
                    width={'60%'}
                  >
                    <Button onClick={hanldeUpdate} colorScheme="green">
                      <TiTick size={40} />
                    </Button>
                    <Button onClick={() => hanldeUpdate(2)} colorScheme="red">
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
            Property Type:
          </Text>
          <Text>{propertyType}</Text>
          <Popup
            modalTitle={<MdEdit />}
            colorofModal={'blue'}
            children={
              <FormControl>
                <Input
                  value={propertyInformationData.propertyTypeData}
                  onChange={e => handleInputChange('propertyTypeData', e.target.value)}
                />
                <Flex
                  alignItems={'center'}
                  flexDir={'row'}
                  justifyContent={'space-around'}
                  mt={3}
                  // border={'1px solid red'}
                  width={'60%'}
                >
                  <Button onClick={hanldeUpdate} colorScheme="green">
                    <TiTick size={40} />
                  </Button>
                  <Button onClick={() => hanldeUpdate('3')} colorScheme="red">
                    <MdDelete size={30} />
                  </Button>
                </Flex>
              </FormControl>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, blue.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Rating:
          </Text>
          <Text>{rating}</Text>
          <Popup
            modalTitle={<MdEdit />}
            colorofModal={'blue'}
            children={
              <FormControl>
                <NewRating
                  value={propertyInformationData.ratingData}
                  onChange={rating => handleInputChange('ratingData', rating)}
                />
                <Flex
                  alignItems={'center'}
                  flexDir={'row'}
                  justifyContent={'space-around'}
                  mt={3}
                  // border={'1px solid red'}
                  width={'60%'}
                >
                  <Button onClick={hanldeUpdate} colorScheme="green">
                    <TiTick size={40} />
                  </Button>
                  <Button onClick={() => hanldeUpdate('4')} colorScheme="red">
                    <MdDelete size={30} />
                  </Button>
                </Flex>
              </FormControl>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, purple.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Number of Rooms:
          </Text>
          <Text>{numberofRooms}</Text>
          <Popup
            modalTitle={<MdEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={propertyInformationData.numberofRoomsData}
                    onChange={e => handleInputChange('numberofRoomsData', e.target.value)}
                  />
                  <Flex
                    alignItems={'center'}
                    flexDir={'row'}
                    justifyContent={'space-around'}
                    mt={3}
                    // border={'1px solid red'}
                    width={'60%'}
                  >
                    <Button onClick={hanldeUpdate} colorScheme="green">
                      <TiTick size={40} />
                    </Button>
                    <Button onClick={() => hanldeUpdate('5')} colorScheme="red">
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
            LGBTQI Friendly:
          </Text>
          <Text>{LGBTQIFriendly}</Text>
          <Popup
            modalTitle={<MdEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={propertyInformationData.LGBTQIFriendlyData}
                    onChange={e => handleInputChange('LGBTQIFriendlyData', e.target.value)}
                  />
                  <Flex
                    alignItems={'center'}
                    flexDir={'row'}
                    justifyContent={'space-around'}
                    mt={3}
                    // border={'1px solid red'}
                    width={'60%'}
                  >
                    <Button onClick={hanldeUpdate} colorScheme="green">
                      <TiTick size={40} />
                    </Button>
                    <Button onClick={() => hanldeUpdate('6')} colorScheme="red">
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
            Design:
          </Text>
          <Text>{Design}</Text>
          <Popup
            modalTitle={<MdEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={propertyInformationData.DesignData}
                    onChange={e => handleInputChange('DesignData', e.target.value)}
                  />
                  <Flex
                    alignItems={'center'}
                    flexDir={'row'}
                    justifyContent={'space-around'}
                    mt={3}
                    // border={'1px solid red'}
                    width={'60%'}
                  >
                    <Button onClick={hanldeUpdate} colorScheme="green">
                      <TiTick size={40} />
                    </Button>
                    <Button onClick={() => hanldeUpdate('7')} colorScheme="red">
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
            Is Adult Only:
          </Text>
          <Text>{isAdultOnly}</Text>
          <Popup
            modalTitle={<MdEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <RadioGroup
                    onChange={value => handleInputChange('isAdultOnlyData', value === 'true')}
                    value={String(propertyInformationData.isAdultOnlyData)}
                  >
                    <Stack direction="row">
                      <Radio value="true">Yes</Radio>
                      <Radio value="false">No</Radio>
                    </Stack>
                  </RadioGroup>

                  <Flex
                    alignItems={'center'}
                    flexDir={'row'}
                    justifyContent={'space-around'}
                    mt={3}
                    // border={'1px solid red'}
                    width={'60%'}
                  >
                    <Button onClick={hanldeUpdate} colorScheme="green">
                      <TiTick size={40} />
                    </Button>
                    <Button onClick={() => hanldeUpdate('8')} colorScheme="red">
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
            Property Map:
          </Text>
          <Text>{propertymap}</Text>
          <Popup
            modalTitle={<MdEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={propertyInformationData.propertymapData}
                    onChange={e => handleInputChange('propertymapData', e.target.value)}
                  />
                  <Flex
                    alignItems={'center'}
                    flexDir={'row'}
                    justifyContent={'space-around'}
                    mt={3}
                    // border={'1px solid red'}
                    width={'60%'}
                  >
                    <Button onClick={hanldeUpdate} colorScheme="green">
                      <TiTick size={40} />
                    </Button>
                    <Button onClick={() => hanldeUpdate('9')} colorScheme="red">
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
            Last Renovated:
          </Text>
          <Text>{lastRenovated}</Text>
          <Popup
            modalTitle={<MdEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    type="date"
                    value={propertyInformationData.lastRenovatedData}
                    onChange={e => handleInputChange('lastRenovatedData', new Date(e.target.value))}
                  />
                  <Flex
                    alignItems={'center'}
                    flexDir={'row'}
                    justifyContent={'space-around'}
                    mt={3}
                    // border={'1px solid red'}
                    width={'60%'}
                  >
                    <Button onClick={hanldeUpdate} colorScheme="green">
                      <TiTick size={40} />
                    </Button>
                    <Button onClick={() => hanldeUpdate('10')} colorScheme="red">
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
            Third Party Reviews/Awards:
          </Text>
          <Text>{thirdPartyReviewsaorAwards}</Text>
          <Popup
            modalTitle={<MdEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={propertyInformationData.thirdPartyReviewsaorAwardsData}
                    onChange={e => handleInputChange('thirdPartyReviewsaorAwardsData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button onClick={hanldeUpdate} colorScheme="green">
                      <TiTick size={40} />
                    </Button>
                    <Button onClick={() => hanldeUpdate('11')} colorScheme="red">
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
            Eco Awards/Certification:
          </Text>
          <Text>{ecoAwardsOrCertification}</Text>
          <Popup
            modalTitle={<MdEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={propertyInformationData.ecoAwardsOrCertificationData}
                    onChange={e => handleInputChange('ecoAwardsOrCertificationData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button onClick={hanldeUpdate} colorScheme="green">
                      <TiTick size={40} />
                    </Button>
                    <Button onClick={() => hanldeUpdate('12')} colorScheme="red">
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
            Wifi:
          </Text>
          <Text>{wifi}</Text>
          <Popup
            modalTitle={<MdEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={propertyInformationData.wifiData}
                    onChange={e => handleInputChange('wifiData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button onClick={hanldeUpdate} colorScheme="green">
                      <TiTick size={40} />
                    </Button>
                    <Button onClick={() => hanldeUpdate('13')} colorScheme="red">
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
            Unique Selling Points:
          </Text>
          <Text>{uniqueSellingPoints ? uniqueSellingPoints : 'null'}</Text>
          <Popup
            modalTitle={<MdEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={propertyInformationData.uniqueSellingPointsData}
                    onChange={e => handleInputChange('uniqueSellingPointsData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button onClick={hanldeUpdate} colorScheme="green">
                      <TiTick size={40} />
                    </Button>
                    <Button onClick={() => hanldeUpdate('14')} colorScheme="red">
                      <MdDelete size={30} />
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

export default PropertyInformationOnHotelHome;
