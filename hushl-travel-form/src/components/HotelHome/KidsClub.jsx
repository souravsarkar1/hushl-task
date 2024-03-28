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
import { MdDelete } from 'react-icons/md';

const KidsClubOnHotelHome = ({ kidsClub, id }) => {
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
  const [kidsClubData, setKidsClubData] = useState({
    ratioofStafftoChildrenData: ratioofStafftoChildren,
    staffQualificationsData: [...staffQualifications],
    languagesSpokenData: [...languagesSpoken],
    hoursOfOperationData: hours,
    costData: cost,
    preBbookingAdvisedData: preBbookingAdvised,
    agesAccommodatedData: agesAccommodated,
    activitiesData: activities,
    imagesData: images,
  });
  const dispatch = useDispatch();
  const toast = useToast();
  const handleInputChange = (name, value) => {
    setKidsClubData({ ...kidsClubData, [name]: value });
  };
  const handleUpdate = params => {
    if (params === 'ratioofStafftoChildren') kidsClubData.ratioofStafftoChildrenData = 0;
    if (params === 'staffQualifications') kidsClubData.staffQualificationsData = [];
    if (params === 'languagesSpoken') kidsClubData.languagesSpokenData = [];
    if (params === 'hoursOfOperation') kidsClubData.hoursOfOperationData = '';
    if (params === 'cost') kidsClubData.costData = '';
    if (params === 'preBbookingAdvised') kidsClubData.preBbookingAdvisedData = '';
    if (params === 'agesAccommodated') kidsClubData.agesAccommodatedData = '';
    if (params === 'activities') kidsClubData.activitiesData = [];
    if (params === 'images') kidsClubData.imagesData = [];

    const data = {
      kidsClub: {
        ratioofStafftoChildren: kidsClubData.ratioofStafftoChildrenData,
        staffQualifications: kidsClubData.staffQualificationsData,
        languagesSpoken: kidsClubData.languagesSpokenData,
        hours: kidsClubData.hoursOfOperationData,
        cost: kidsClubData.costData,
        preBbookingAdvised: kidsClubData.preBbookingAdvisedData,
        agesAccommodated: kidsClubData.agesAccommodatedData,
        activities: kidsClubData.activitiesData,
        images: kidsClubData.imagesData,
      },
    };
    dispatch(addProductMedia(id, data, toast)).then(res => {
      dispatch(getSingleData(id));
    });
  };

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
          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={kidsClubData.ratioofStafftoChildrenData}
                    onChange={e => handleInputChange('ratioofStafftoChildrenData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('ratioofStafftoChildren')}>
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
            Staff Qualifications:
          </Text>
          <Text>{staffQualifications}</Text>
          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={kidsClubData.staffQualificationsData}
                    onChange={e => handleInputChange('staffQualificationsData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('staffQualifications')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, green.300, gray.500)">
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
                    value={kidsClubData.languagesSpokenData}
                    onChange={e => handleInputChange('languagesSpokenData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('languagesSpoken')}>
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
            Hours:
          </Text>
          <Text>{hours}</Text>
          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={kidsClubData.hoursOfOperationData}
                    onChange={e => handleInputChange('hoursOfOperationData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('hoursOfOperation')}>
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
            Cost:
          </Text>
          <Text>{cost}</Text>
          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input value={kidsClubData.costData} onChange={e => handleInputChange('costData', e.target.value)} />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('cost')}>
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
            Pre-Booking Advised:
          </Text>
          <Text>{preBbookingAdvised ? 'Yes' : 'No'}</Text>
          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={kidsClubData.preBbookingAdvisedData}
                    onChange={e => handleInputChange('preBbookingAdvisedData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('preBbookingAdvised')}>
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
            Ages Accommodated:
          </Text>
          <Text>{agesAccommodated}</Text>
          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={kidsClubData.agesAccommodatedData}
                    onChange={e => handleInputChange('agesAccommodatedData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('agesAccommodated')}>
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
            Activities:
          </Text>
          <Text>{activities}</Text>
          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={kidsClubData.activitiesData}
                    onChange={e => handleInputChange('activitiesData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('activities')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
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
