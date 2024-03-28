import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
  useToast,
  Center,
  FormControl,
  Input,
  Flex,
  Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProductMedia, getSingleData } from '../../redux/Products/action';
import Popup from '../Modal/Popup';
import { TiEdit, TiTick } from 'react-icons/ti';
import { ImCross } from 'react-icons/im';

const WaterSportsOnHotelHome = ({ waterSports, id }) => {
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
  const dispatch = useDispatch();
  const toast = useToast();

  const [waterSportsData, setwaterSportsData] = useState({
    divingData: diving,
    affiliationData: affiliation,
    sitesData: sites,
    languagesSpokenData: languagesSpoken,
    submarineTourData: submarineTour,
    costsData: costs,
    maximumOccupancyData: maximumOccupancy,
    imagesData: images,
    whatflotationDevicesProvidedData: whatflotationDevicesProvided,
    minimumAgeData: minimumAge,
    equipmentProvidedData: equipmentProvided,
    otherServicesData: otherServices,
    nameOfSurfSiteData: nameOfSurfSite,
    reviewsSentimentsData: reviewsSentiments,
  });
  const handleInputChange = (field, value) => {
    setwaterSportsData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };

  // const handleCheckboxChange = (field, checkboxValues) => {
  //   setwaterSportsData(prevData => ({
  //     ...prevData,
  //     [field]: checkboxValues,
  //   }));
  // };
  const handleUpdate = params => {
    if (params === 'diving') waterSportsData.divingData = '';
    if (params === 'affiliation') waterSportsData.affiliationData = '';
    if (params === 'sites') waterSportsData.sitesData = '';
    if (params === 'languagesSpoken') waterSportsData.languagesSpokenData = '';
    if (params === 'submarineTour') waterSportsData.submarineTourData = '';
    if (params === 'costs') waterSportsData.costsData = '';
    if (params === 'maximumOccupancy') waterSportsData.maximumOccupancyData = '';
    if (params === 'whatflotationDevicesProvided') waterSportsData.whatflotationDevicesProvidedData = '';
    if (params === 'minimumAge') waterSportsData.minimumAgeData = '';
    if (params === 'equipmentProvided') waterSportsData.equipmentProvidedData = '';
    if (params === 'otherServices') waterSportsData.otherServicesData = '';
    if (params === 'nameOfSurfSite') waterSportsData.nameOfSurfSiteData = '';
    if (params === 'reviewsSentiments') waterSportsData.reviewsSentimentsData = '';

    const data = {
      waterSports: {
        diving: waterSportsData.divingData,
        affiliation: waterSportsData.affiliationData,
        sites: waterSportsData.sitesData,
        languagesSpoken: waterSportsData.languagesSpokenData,
        submarineTour: waterSportsData.submarineTourData,
        costs: waterSportsData.costsData,
        maximumOccupancy: waterSportsData.maximumOccupancyData,
        images: waterSportsData.imagesData,
        whatflotationDevicesProvided: waterSportsData.whatflotationDevicesProvidedData,
        minimumAge: waterSportsData.minimumAgeData,
        equipmentProvided: waterSportsData.equipmentProvidedData,
        otherServices: waterSportsData.otherServicesData,
        nameOfSurfSite: waterSportsData.nameOfSurfSiteData,
      },
    };
    dispatch(addProductMedia(id, data, toast)).then(() => {
      dispatch(getSingleData(id));
    });
  };

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
          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={waterSportsData.divingData}
                    onChange={e => handleInputChange('divingData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('diving')}>
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
            Affiliation:
          </Text>
          <Text>{affiliation}</Text>
          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={waterSportsData.affiliationData}
                    onChange={e => handleInputChange('affiliationData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('affiliation')}>
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
            Sites:
          </Text>
          <Text>{sites}</Text>
          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={waterSportsData.sitesData}
                    onChange={e => handleInputChange('sitesData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('sites')}>
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
            Languages Spoken:
          </Text>
          <Text>{languagesSpoken}</Text>
          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={waterSportsData.languagesSpokenData}
                    onChange={e => handleInputChange('languagesSpokenData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('languagesSpoken')}>
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
            Submarine Tour:
          </Text>
          <Text>{submarineTour}</Text>
          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={waterSportsData.submarineTourData}
                    onChange={e => handleInputChange('submarineTourData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('submarineTour')}>
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
            Costs:
          </Text>
          <Text>{costs}</Text>
          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={waterSportsData.costsData}
                    onChange={e => handleInputChange('costsData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('costs')}>
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
            Maximum Occupancy:
          </Text>
          <Text>{maximumOccupancy}</Text>
          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={waterSportsData.maximumOccupancyData}
                    onChange={e => handleInputChange('maximumOccupancyData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('maximumOccupancy')}>
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
          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={waterSportsData.whatflotationDevicesProvidedData}
                    onChange={e => handleInputChange('whatflotationDevicesProvidedData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('whatflotationDevicesProvided')}>
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
            Minimum Age:
          </Text>
          <Text>{minimumAge}</Text>
          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={waterSportsData.minimumAgeData}
                    onChange={e => handleInputChange('minimumAgeData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('minimumAge')}>
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
            Equipment Provided:
          </Text>
          <Text>{equipmentProvided}</Text>
          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={waterSportsData.equipmentProvidedData}
                    onChange={e => handleInputChange('equipmentProvidedData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('equipmentProvided')}>
                      <ImCross />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, green.300, green.500)">
          <Text mb={2} fontWeight="bold">
            Other Services:
          </Text>
          <Text>{otherServices}</Text>
          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={waterSportsData.otherServicesData}
                    onChange={e => handleInputChange('otherServicesData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('otherServices')}>
                      <ImCross />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, #c603fc, gray.500)">
          <Text mb={2} fontWeight="bold">
            Name of Surf Site:
          </Text>
          <Text>{nameOfSurfSite}</Text>
          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={waterSportsData.nameOfSurfSiteData}
                    onChange={e => handleInputChange('nameOfSurfSiteData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('nameOfSurfSite')}>
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
            Reviews Sentiments:
          </Text>
          <Text>{reviewsSentiments}</Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default WaterSportsOnHotelHome;
