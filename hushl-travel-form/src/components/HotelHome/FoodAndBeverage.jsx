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
import { CiEdit } from 'react-icons/ci';
import { TiTick } from 'react-icons/ti';
import { ImCross } from 'react-icons/im';

const FoodAndBeverageOnHotelHome = ({ foodAndBeverage, id }) => {
  const {
    InclusionsOrExclusionsforFullOrhalfBoard,
    extraCostForRoomService,
    numberOfBarsAndNames,
    hoursOfOperation,
    specialties,
    reviewsSentiments,
    numberOfRestaurantsandNames,
    typesOfCuisine,
    halaalOption,
    kidsMenu,
    roomService,
    seviewsSentiments,
    images,
  } = foodAndBeverage;
  const [foodAndBeverageData, setFootAndBeverageData] = useState({
    InclusionsOrExclusionsforFullOrhalfBoardData: InclusionsOrExclusionsforFullOrhalfBoard,
    extraCostForRoomServiceData: extraCostForRoomService,
    numberOfBarsAndNamesData: numberOfBarsAndNames,
    hoursOfOperationData: hoursOfOperation,
    specialtiesData: specialties,
    reviewsSentimentsData: reviewsSentiments,
    numberOfRestaurantsandNamesData: numberOfRestaurantsandNames,
    typesOfCuisineData: typesOfCuisine,
    halaalOptionData: halaalOption,
    kidsMenuData: kidsMenu,
    roomServiceData: roomService,
    seviewsSentimentsData: seviewsSentiments,
    imagesData: [...images],
  });
  const dispatch = useDispatch();
  const toast = useToast();
  const handleInputChange = (field, value) => {
    setFootAndBeverageData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };
  const handleUpdate = params => {
    if (params === 'InclusionsOrExclusionsforFullOrhalfBoard')
      foodAndBeverageData.InclusionsOrExclusionsforFullOrhalfBoardData = '';
    if (params === 'extraCostForRoomService') foodAndBeverageData.extraCostForRoomServiceData = '';
    if (params === 'numberOfBarsAndNames') foodAndBeverageData.numberOfBarsAndNamesData = '';
    if (params === 'hoursOfOperation') foodAndBeverageData.hoursOfOperationData = '';
    if (params === 'specialties') foodAndBeverageData.specialtiesData = '';
    if (params === 'reviewsSentiments') foodAndBeverageData.reviewsSentimentsData = '';
    if (params === 'numberOfRestaurantsandNames') foodAndBeverageData.numberOfRestaurantsandNamesData = '';
    if (params === 'typesOfCuisine') foodAndBeverageData.typesOfCuisineData = '';
    if (params === 'halalOption') foodAndBeverageData.halalOptionData = '';
    if (params === 'kidsMenu') foodAndBeverageData.kidsMenuData = '';
    if (params === 'roomService') foodAndBeverageData.roomServiceData = '';
    if (params === 'seviewsSentiments') foodAndBeverageData.seviewsSentimentsData = '';
    if (params === 'images') foodAndBeverageData.imagesData = [];
    if (params === 'specialties') foodAndBeverageData.specialtiesData = '';
    if (params === 'halaalOption') foodAndBeverageData.halaalOptionData = '';

    const data = {
      foodAndBeverage: {
        InclusionsOrExclusionsforFullOrhalfBoard: foodAndBeverageData.InclusionsOrExclusionsforFullOrhalfBoardData,
        extraCostForRoomService: foodAndBeverageData.extraCostForRoomServiceData,
        numberOfBarsAndNames: foodAndBeverageData.numberOfBarsAndNamesData,
        hoursOfOperation: foodAndBeverageData.hoursOfOperationData,
        specialties: foodAndBeverageData.specialtiesData,
        reviewsSentiments: foodAndBeverageData.reviewsSentimentsData,
        numberOfRestaurantsandNames: foodAndBeverageData.numberOfRestaurantsandNamesData,
        typesOfCuisine: foodAndBeverageData.typesOfCuisineData,
        halaalOption: foodAndBeverageData.halaalOptionData,
        kidsMenu: foodAndBeverageData.kidsMenuData,
        roomService: foodAndBeverageData.roomServiceData,
        seviewsSentiments: foodAndBeverageData.seviewsSentimentsData,
        images: [...foodAndBeverageData.imagesData],
      },
    };
    dispatch(addProductMedia(id, data, toast)).then(res => {
      dispatch(getSingleData(id));
    });
  };

  return (
    <Box bgGradient="linear(to-tr, gray.100, gray.200)" p={4} borderRadius="lg" minH={'90vh'}>
      <Heading as="h2" size="md" mb={2}>
        Food and Beverage Information
      </Heading>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, red.100, gray.200)">
          <Text mb={2} fontWeight="bold">
            Inclusions/Exclusions for Full or Half Board:
          </Text>
          <Text>{InclusionsOrExclusionsforFullOrhalfBoard}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={foodAndBeverageData.InclusionsOrExclusionsforFullOrhalfBoardData}
                    onChange={e => handleInputChange('InclusionsOrExclusionsforFullOrhalfBoardData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('InclusionsOrExclusionsforFullOrhalfBoard')}>
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
            Extra Cost for Room Service:
          </Text>
          <Text>{extraCostForRoomService}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={foodAndBeverageData.extraCostForRoomServiceData}
                    onChange={e => handleInputChange('extraCostForRoomServiceData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('extraCostForRoomService')}>
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
            Number of Bars and Names:
          </Text>
          <Text>{numberOfBarsAndNames}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={foodAndBeverageData.numberOfBarsAndNamesData}
                    onChange={e => handleInputChange('numberOfBarsAndNamesData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('numberOfBarsAndNames')}>
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
            Hours of Operation:
          </Text>
          <Text>{hoursOfOperation}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={foodAndBeverageData.hoursOfOperationData}
                    onChange={e => handleInputChange('hoursOfOperationData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('hoursOfOperation')}>
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
            Specialties:
          </Text>
          <Text>{specialties}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={foodAndBeverageData.specialtiesData}
                    onChange={e => handleInputChange('specialtiesData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('specialties')}>
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
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={foodAndBeverageData.reviewsSentimentsData}
                    onChange={e => handleInputChange('reviewsSentimentsData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('openingTimes')}>
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
            Number of Restaurants and Names:
          </Text>
          <Text>{numberOfRestaurantsandNames}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={foodAndBeverageData.numberOfRestaurantsandNamesData}
                    onChange={e => handleInputChange('numberOfRestaurantsandNamesData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('numberOfRestaurantsandNames')}>
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
            Types of Cuisine:
          </Text>
          <Text>{typesOfCuisine}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={foodAndBeverageData.typesOfCuisineData}
                    onChange={e => handleInputChange('typesOfCuisineData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('typesOfCuisine')}>
                      <ImCross />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, red.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Halaal Option:
          </Text>
          <Text>{halaalOption}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={foodAndBeverageData.halaalOptionData}
                    onChange={e => handleInputChange('halaalOptionData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('halaalOption')}>
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
            Kids Menu:
          </Text>
          <Text>{kidsMenu}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={foodAndBeverageData.kidsMenuData}
                    onChange={e => handleInputChange('kidsMenuData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('kidsMenu')}>
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
            Room Service:
          </Text>
          <Text>{roomService}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={foodAndBeverageData.roomServiceData}
                    onChange={e => handleInputChange('roomServiceData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('roomService')}>
                      <ImCross />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, red.300, yellow.500)">
          <Text mb={2} fontWeight="bold">
            Reviews Sentiments for Room Service:
          </Text>
          <Text>{seviewsSentiments}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Reviews Sentiments"
                    value={foodAndBeverageData.reviewsSentimentsData}
                    onChange={e => handleInputChange('reviewsSentimentsData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('seviewsSentiments')}>
                      <ImCross />
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

export default FoodAndBeverageOnHotelHome;
