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
import { CiEdit } from 'react-icons/ci';
import { TiTick } from 'react-icons/ti';
import { MdDelete } from 'react-icons/md';

const RoomOnHotelHome = ({ room, id }) => {
  const {
    maxOccupancyAdult,
    maxOccupancyChild,
    adultAndChildCombinations,
    NeedtoPreBookExtraBedding,
    safetyFeaturesifOverwaterBungalow,
    safetyFeaturesForBalcony,
    safetyFeaturesForPool,
    commentsOnHowPrivacyIsImpacted,
    interconnected,
    noiseAtNight,
    privacyLevelsGoodEnoughForStrictMuslim,
    movieSystemsOrDVDs,
    roomName,
    numberOfRooms,
    reviewsSentiments,
    roomSize,
    childAgeCategory,
    cotAllowedAndcost,
    rollawayBedAllowedAndCost,
    roomLayoutMap,
    separateToilet,
    separateLivinRoomwoutDoor,
    needToPreBookExtrabedding, //(limited availability)
    numberOfBathrooms,
    bath,
    freeWifi, // boolean
    balconyPatio,
    privatePool,
    dimensionsOfPool,
    poolHeated,
    overwater,
    beachAccess,
    isTV, // boolean
    ironIroningBoard, // boolean
    teaOrCoffeeOrKettle, // boolean
    isMicrowave, // boolean
    musicSystem,
    laundryService,
    kitchenFacilitiesAndWhatFacilities,
    safe,
    pillowMenu,
    blackoutCurtains,
    FanOrAC,
    babyBath,
    babyMonitor,
    childrensToys,
    childrensCutlery,
  } = room;
  const [roomData, setRoomData] = useState({
    maxOccupancyChildData: maxOccupancyChild,
    maxOccupancyAdultData: maxOccupancyAdult,
    adultAndChildCombinationsData: adultAndChildCombinations,
    NeedtoPreBookExtraBeddingData: NeedtoPreBookExtraBedding,
    safetyFeaturesifOverwaterBungalowData: safetyFeaturesifOverwaterBungalow,
    safetyFeaturesForBalconyData: safetyFeaturesForBalcony,
    safetyFeaturesForPoolData: safetyFeaturesForPool,
    commentsOnHowPrivacyIsImpactedData: commentsOnHowPrivacyIsImpacted,
    interconnectedData: interconnected,
    noiseAtNightData: noiseAtNight,
    privacyLevelsGoodEnoughForStrictMuslimData: privacyLevelsGoodEnoughForStrictMuslim,
    movieSystemsOrDVDsData: movieSystemsOrDVDs,
    roomNameData: roomName,
    numberOfRoomsData: numberOfRooms,
    reviewsSentimentsData: reviewsSentiments,
    roomSizeData: roomSize,
    childAgeCategoryData: childAgeCategory,
    cotAllowedAndcostData: cotAllowedAndcost,
    rollawayBedAllowedAndCostData: rollawayBedAllowedAndCost,
    roomLayoutMapData: roomLayoutMap,
    separateToiletData: separateToilet,
    separateLivinRoomwoutDoorData: separateLivinRoomwoutDoor,
    needToPreBookExtrabeddingData: needToPreBookExtrabedding, //(limited availability)
    numberOfBathroomsData: numberOfBathrooms,
    bathData: bath,
    freeWifiData: freeWifi, // boolean
    balconyPatioData: balconyPatio,
    privatePoolData: privatePool,
    dimensionsOfPoolData: dimensionsOfPool,
    poolHeatedData: poolHeated,
    overwaterData: overwater,
    beachAccessData: beachAccess,
    isTVData: isTV, // boolean
    ironIroningBoardData: ironIroningBoard, // boolean
    teaOrCoffeeOrKettleData: teaOrCoffeeOrKettle, // boolean
    isMicrowaveData: isMicrowave, // boolean
    musicSystemData: musicSystem,
    laundryServiceData: laundryService,
    kitchenFacilitiesAndWhatFacilitiesData: kitchenFacilitiesAndWhatFacilities,
    safeData: safe,
    pillowMenuData: pillowMenu,
    blackoutCurtainsData: blackoutCurtains,
    FanOrACData: FanOrAC,
    babyBathData: babyBath,
    babyMonitorData: babyMonitor,
    childrensToysData: childrensToys,
    childrensCutleryData: childrensCutlery,
  });
  const dispatch = useDispatch();
  const toast = useToast();
  const handleInputChange = (name, value) => {
    setRoomData({ ...roomData, [name]: value });
  };
  const handleUpdate = params => {
    console.log(params);
    if (params === 'maxOccupancyChild') roomData.maxOccupancyChildData = 0;
    if (params === 'maxOccupancyAdult') roomData.maxOccupancyAdultData = 0;
    if (params === 'adultAndChildCombinations') roomData.adultAndChildCombinationsData = [];
    if (params === 'NeedtoPreBookExtraBedding') roomData.NeedtoPreBookExtraBeddingData = '';
    if (params === 'safetyFeaturesifOverwaterBungalow') roomData.safetyFeaturesifOverwaterBungalowData = '';
    if (params === 'safetyFeaturesForBalcony') roomData.safetyFeaturesForBalconyData = '';
    if (params === 'safetyFeaturesForPool') roomData.safetyFeaturesForPoolData = '';
    if (params === 'commentsOnHowPrivacyIsImpacted') roomData.commentsOnHowPrivacyIsImpactedData = '';
    if (params === 'interconnected') roomData.interconnectedData = '';
    if (params === 'noiseAtNight') roomData.noiseAtNightData = '';
    if (params === 'privacyLevelsGoodEnoughForStrictMuslim') roomData.privacyLevelsGoodEnoughForStrictMuslimData = '';
    if (params === 'movieSystemsOrDVDs') roomData.movieSystemsOrDVDsData = '';
    if (params === 'roomName') roomData.roomNameData = '';
    if (params === 'numberOfRooms') roomData.numberOfRoomsData = '';
    if (params === 'reviewsSentiments') roomData.reviewsSentimentsData = '';
    if (params === 'roomSize') roomData.roomSizeData = '';
    if (params === 'childAgeCategory') roomData.childAgeCategoryData = '';
    if (params === 'cotAllowedAndcost') roomData.cotAllowedAndcostData = '';
    if (params === 'rollawayBedAllowedAndCost') roomData.rollawayBedAllowedAndCostData = '';
    if (params === 'roomLayoutMap') roomData.roomLayoutMapData = '';
    if (params === 'separateToilet') roomData.separateToiletData = '';
    if (params === 'separateLivinRoomwoutDoor') roomData.separateLivinRoomwoutDoorData = '';
    if (params === 'needToPreBookExtrabedding') roomData.needToPreBookExtrabeddingData = ''; //(limited availability)
    if (params === 'numberOfBathrooms') roomData.numberOfBathroomsData = '';
    if (params === 'bath') roomData.bathData = '';
    if (params === 'freeWifi') roomData.freeWifiData = ''; // boolean
    if (params === 'balconyPatio') roomData.balconyPatioData = '';
    if (params === 'privatePool') roomData.privatePoolData = '';
    if (params === 'dimensionsOfPool') roomData.dimensionsOfPoolData = '';
    if (params === 'poolHeated') roomData.poolHeatedData = '';
    if (params === 'overwater') roomData.overwaterData = '';
    if (params === 'beachAccess') roomData.beachAccessData = '';
    if (params === 'isT') roomData.isTVData = ''; // boolean
    if (params === 'ironIroningBoar') roomData.ironIroningBoardData = ''; // boolean
    if (params === 'teaOrCoffeeOrKettl') roomData.teaOrCoffeeOrKettleData = ''; // boolean
    if (params === 'isMicrowav') roomData.isMicrowaveData = ''; // boolean
    if (params === 'musicSyste') roomData.musicSystemData = '';
    if (params === 'laundryServic') roomData.laundryServiceData = '';
    if (params === 'kitchenFacilitiesAndWhatFacilitie') roomData.kitchenFacilitiesAndWhatFacilitiesData = '';
    if (params === 'saf') roomData.safeData = '';
    if (params === 'pillowMen') roomData.pillowMenuData = '';
    if (params === 'blackoutCurtain') roomData.blackoutCurtainsData = '';
    if (params === 'FanOrAC') roomData.FanOrACData = '';
    if (params === 'babyBath') roomData.babyBathData = '';
    if (params === 'babyMonitor') roomData.babyMonitorData = '';
    if (params === 'childrensToys') roomData.childrensToysData = '';
    if (params === 'childrensCutlery') roomData.childrensCutleryData = '';

    const data = {
      rooms: {
        maxOccupancyChild: roomData.maxOccupancyChildData,
        maxOccupancyAdult: roomData.maxOccupancyAdultData,
        NeedtoPreBookExtraBedding: roomData.NeedtoPreBookExtraBeddingData,
        safetyFeaturesifOverwaterBungalow: roomData.safetyFeaturesifOverwaterBungalowData,
        safetyFeaturesForBalcony: roomData.safetyFeaturesForBalconyData,
        safetyFeaturesForPool: roomData.safetyFeaturesForPoolData,
        commentsOnHowPrivacyIsImpacted: roomData.commentsOnHowPrivacyIsImpactedData,
        interconnected: roomData.interconnectedData,
        noiseAtNight: roomData.noiseAtNightData,
        privacyLevelsGoodEnoughForStrictMuslim: roomData.privacyLevelsGoodEnoughForStrictMuslimData,
        movieSystemsOrDVDs: roomData.movieSystemsOrDVDsData,
        roomName: roomData.roomNameData,
        numberOfRooms: roomData.numberOfRoomsData,
        reviewsSentiments: roomData.reviewsSentimentsData,
        roomSize: roomData.roomSizeData,
        childAgeCategory: roomData.childAgeCategoryData,
        cotAllowedAndcost: roomData.cotAllowedAndcostData,
        rollawayBedAllowedAndCost: roomData.rollawayBedAllowedAndCostData,
        roomLayoutMap: roomData.roomLayoutMapData,
        separateToilet: roomData.separateToiletData,
        separateLivinRoomwoutDoor: roomData.separateLivinRoomwoutDoorData,
        needToPreBookExtrabedding: roomData.needToPreBookExtrabeddingData, //(limited availability)
        numberOfBathrooms: roomData.numberOfBathroomsData,
        bath: roomData.bathData,
        freeWifi: roomData.freeWifiData, // boolean
        balconyPatio: roomData.balconyPatioData,
        privatePool: roomData.privatePoolData,
        dimensionsOfPool: roomData.dimensionsOfPoolData,
        poolHeated: roomData.poolHeatedData,
        overwater: roomData.overwaterData,
        beachAccess: roomData.beachAccessData,
        isTV: roomData.isTVData, // boolean
        ironIroningBoard: roomData.ironIroningBoardData, // boolean
        teaOrCoffeeOrKettle: roomData.teaOrCoffeeOrKettleData, // boolean
        isMicrowave: roomData.isMicrowaveData, // boolean
        musicSystem: roomData.musicSystemData,
        laundryService: roomData.laundryServiceData,
        kitchenFacilitiesAndWhatFacilities: roomData.kitchenFacilitiesAndWhatFacilitiesData,
        safe: roomData.safeData,
        pillowMenu: roomData.pillowMenuData,
        blackoutCurtains: roomData.blackoutCurtainsData,
        FanOrAC: roomData.FanOrACData,
        babyBath: roomData.babyBathData,
        babyMonitor: roomData.babyMonitorData,
        childrensToys: roomData.childrensToysData,
        childrensCutlery: roomData.childrensCutleryData,
        adultAndChildCombinations: roomData.adultAndChildCombinationsData,
      },
    };
    dispatch(addProductMedia(id, data, toast)).then(res => {
      dispatch(getSingleData(id));
    });
  };
  return (
    <Box bgGradient="linear(to-tr, gray.100, gray.200)" p={4} borderRadius="lg" minH={'90vh'}>
      <Heading as="h2" size="md" mb={2}>
        Room Information
      </Heading>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, red.100, gray.200)">
          <Text mb={2} fontWeight="bold">
            Max Occupancy (Adult):
          </Text>
          <Text>{maxOccupancyAdult}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Max Occupancy (Adult)"
                    value={roomData.maxOccupancyAdultData}
                    onChange={e => handleInputChange('maxOccupancyAdultData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('maxOccupancyAdult')}>
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
            Max Occupancy (Child):
          </Text>
          <Text>{maxOccupancyChild}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Max Occupancy (Child)"
                    value={roomData.maxOccupancyChildData}
                    onChange={e => handleInputChange('maxOccupancyChildData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('maxOccupancyChild')}>
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
            Need to Pre-Book Extra Bedding:
          </Text>
          <Text>{NeedtoPreBookExtraBedding}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Need to Pre-Book Extra Bedding"
                    value={roomData.NeedtoPreBookExtraBeddingData}
                    onChange={e => handleInputChange('NeedtoPreBookExtraBeddingData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('NeedtoPreBookExtraBedding')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, gray.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            Safety Features if Overwater Bungalow:
          </Text>
          <Text>{safetyFeaturesifOverwaterBungalow.join(', ')}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, gray.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            Safety Features For Balcony:
          </Text>
          <Text>{safetyFeaturesForBalcony.join(', ')}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Safety Features For Balcony"
                    value={roomData.safetyFeaturesForBalconyData}
                    onChange={e => handleInputChange('safetyFeaturesForBalconyData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('safetyFeaturesForBalcony')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, gray.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            Safety Features For Pool:
          </Text>
          <Text>{safetyFeaturesForPool.join(', ')}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Safety Features For Pool"
                    value={roomData.safetyFeaturesForPoolData}
                    onChange={e => handleInputChange('safetyFeaturesForPoolData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('safetyFeaturesForPool')}>
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
            Comments on How Privacy Is Impacted:
          </Text>
          <Text>{commentsOnHowPrivacyIsImpacted}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Comments on How Privacy Is Impacted"
                    value={roomData.commentsOnHowPrivacyIsImpactedData}
                    onChange={e => handleInputChange('commentsOnHowPrivacyIsImpactedData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('commentsOnHowPrivacyIsImpacted')}>
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
            Interconnected:
          </Text>
          <Text>{interconnected}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Interconnected"
                    value={roomData.interconnectedData}
                    onChange={e => handleInputChange('interconnectedData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('interconnected')}>
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
            Noise at Night:
          </Text>
          <Text>{noiseAtNight}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Noise at Night"
                    value={roomData.noiseAtNightData}
                    onChange={e => handleInputChange('noiseAtNightData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('noiseAtNight')}>
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
            Privacy Levels Good Enough for Strict Muslim:
          </Text>
          <Text>{privacyLevelsGoodEnoughForStrictMuslim}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Privacy Levels Good Enough for Strict Muslim"
                    value={roomData.privacyLevelsGoodEnoughForStrictMuslimData}
                    onChange={e => handleInputChange('privacyLevelsGoodEnoughForStrictMuslimData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('privacyLevelsGoodEnoughForStrictMuslim')}>
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
            Movie Systems or DVDs:
          </Text>
          <Text>{movieSystemsOrDVDs}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Movie Systems or DVDs"
                    value={roomData.movieSystemsOrDVDsData}
                    onChange={e => handleInputChange('movieSystemsOrDVDsData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('movieSystemsOrDVDs')}>
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
            Room Name:
          </Text>
          <Text>{roomName}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Room Name"
                    value={roomData.roomNameData}
                    onChange={e => handleInputChange('roomNameData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('roomName')}>
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
            Number of Rooms:
          </Text>
          <Text>{numberOfRooms}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Number of Rooms"
                    value={roomData.numberOfRoomsData}
                    onChange={e => handleInputChange('numberOfRoomsData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('numberOfRooms')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, red.300, gray.500)">
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
                    placeholder="Reviews Sentiments"
                    value={roomData.reviewsSentimentsData}
                    onChange={e => handleInputChange('reviewsSentimentsData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('reviewsSentiments')}>
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
            Room Size:
          </Text>
          <Text>{roomSize}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Room Size"
                    value={roomData.roomSizeData}
                    onChange={e => handleInputChange('roomSizeData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('roomSize')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, pink.500, red.700)">
          <Text mb={2} fontWeight="bold">
            Child Age Category:
          </Text>
          <Text>{childAgeCategory}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Child Age Category"
                    value={roomData.childAgeCategoryData}
                    onChange={e => handleInputChange('childAgeCategoryData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('childAgeCategory')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, red.500, green.700)">
          <Text mb={2} fontWeight="bold">
            Cot Allowed and Cost:
          </Text>
          <Text>{cotAllowedAndcost}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Cot Allowed and Cost"
                    value={roomData.cotAllowedAndcostData}
                    onChange={e => handleInputChange('cotAllowedAndcostData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('cotAllowedAndcost')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, yellow.500, blue.700)">
          <Text mb={2} fontWeight="bold">
            Rollaway Bed Allowed and Cost:
          </Text>
          <Text>{rollawayBedAllowedAndCost}</Text>
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, green.500, yellow.700)">
          <Text mb={2} fontWeight="bold">
            Room Layout Map:
          </Text>
          <Text>{roomLayoutMap}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Room Layout Map"
                    value={roomData.roomLayoutMapData}
                    onChange={e => handleInputChange('roomLayoutMapData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('roomLayoutMap')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, red.500, pink.700)">
          <Text mb={2} fontWeight="bold">
            Separate Toilet:
          </Text>
          <Text>{separateToilet}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Separate Toilet"
                    value={roomData.separateToiletData}
                    onChange={e => handleInputChange('separateToiletData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('separateToilet')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, green.500, blue.700)">
          <Text mb={2} fontWeight="bold">
            Separate Living Room Without Door:
          </Text>
          <Text>{separateLivinRoomwoutDoor}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Separate Living Room Without Door"
                    value={roomData.separateLivinRoomwoutDoorData}
                    onChange={e => handleInputChange('separateLivinRoomwoutDoorData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('separateLivinRoomwoutDoor')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, red.500, yellow.700)">
          <Text mb={2} fontWeight="bold">
            Need to Pre-Book Extra Bedding:
          </Text>
          <Text>{needToPreBookExtrabedding}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Need to Pre-Book Extra Bedding"
                    value={roomData.needToPreBookExtrabeddingData}
                    onChange={e => handleInputChange('needToPreBookExtrabeddingData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('needToPreBookExtrabedding')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, pink.500, yellow.700)">
          <Text mb={2} fontWeight="bold">
            Number of Bathrooms:
          </Text>
          <Text>{numberOfBathrooms}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Number of Bathrooms"
                    value={roomData.numberOfBathroomsData}
                    onChange={e => handleInputChange('numberOfBathroomsData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('numberOfBathrooms')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, green.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            Bath:
          </Text>
          <Text>{bath}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Bath"
                    value={roomData.bathData}
                    onChange={e => handleInputChange('bathData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('bath')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, #0fff, green.700)">
          <Text mb={2} fontWeight="bold">
            Free Wifi:
          </Text>
          <Text>{freeWifi ? 'Yes' : 'No'}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Free Wifi"
                    value={roomData.freeWifiData}
                    onChange={e => handleInputChange('freeWifiData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('freeWifi')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, #ff6f, #f4ff)">
          <Text mb={2} fontWeight="bold">
            Balcony/Patio:
          </Text>
          <Text>{balconyPatio ? 'Yes' : 'No'}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Balcony/Patio"
                    value={roomData.balconyPatioData}
                    onChange={e => handleInputChange('balconyPatioData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('balconyPatio')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, red.500, yellow.700)">
          <Text mb={2} fontWeight="bold">
            Private Pool:
          </Text>
          <Text>{privatePool ? 'Yes' : 'No'}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Private Pool"
                    value={roomData.privatePoolData}
                    onChange={e => handleInputChange('privatePoolData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('privatePool')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, green.500, pink.700)">
          <Text mb={2} fontWeight="bold">
            Dimensions of Pool:
          </Text>
          <Text>{dimensionsOfPool}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Dimensions of Pool"
                    value={roomData.dimensionsOfPoolData}
                    onChange={e => handleInputChange('dimensionsOfPoolData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('dimensionsOfPool')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, red.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            Pool Heated:
          </Text>
          <Text>{poolHeated ? 'Yes' : 'No'}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Pool Heated"
                    value={roomData.poolHeatedData}
                    onChange={e => handleInputChange('poolHeatedData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('poolHeated')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, yellow.500, blue.700)">
          <Text mb={2} fontWeight="bold">
            Overwater:
          </Text>
          <Text>{overwater ? 'Yes' : 'No'}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Overwater"
                    value={roomData.overwaterData}
                    onChange={e => handleInputChange('overwaterData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('overwater')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, green.500, pink.700)">
          <Text mb={2} fontWeight="bold">
            Beach Access:
          </Text>
          <Text>{beachAccess ? 'Yes' : 'No'}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Beach Access"
                    value={roomData.beachAccessData}
                    onChange={e => handleInputChange('beachAccessData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('beachAccess')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, pink.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            TV:
          </Text>
          <Text>{isTV ? 'Yes' : 'No'}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="TV"
                    value={roomData.isTVData}
                    onChange={e => handleInputChange('isTVData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('isTV')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, red.500, pink.700)">
          <Text mb={2} fontWeight="bold">
            Iron/Ironing Board:
          </Text>
          <Text>{ironIroningBoard ? 'Yes' : 'No'}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Iron/Ironing Board"
                    value={roomData.ironIroningBoardData}
                    onChange={e => handleInputChange('ironIroningBoardData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('ironIroningBoard')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, green.500, red.700)">
          <Text mb={2} fontWeight="bold">
            Tea/Coffee/Kettle:
          </Text>
          <Text>{teaOrCoffeeOrKettle ? 'Yes' : 'No'}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Tea/Coffee/Kettle"
                    value={roomData.teaOrCoffeeOrKettleData}
                    onChange={e => handleInputChange('teaOrCoffeeOrKettleData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('teaOrCoffeeOrKettle')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, yellow.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            Microwave:
          </Text>
          <Text>{isMicrowave ? 'Yes' : 'No'}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Microwave"
                    value={roomData.isMicrowaveData}
                    onChange={e => handleInputChange('isMicrowaveData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('isMicrowave')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, pink.500, red.700)">
          <Text mb={2} fontWeight="bold">
            Music System:
          </Text>
          <Text>{musicSystem}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Music System"
                    value={roomData.musicSystemData}
                    onChange={e => handleInputChange('musicSystemData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('musicSystem')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, yellow.500, gray.700)">
          <Text mb={2} fontWeight="bold">
            Laundry Service:
          </Text>
          <Text>{laundryService}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Laundry Service"
                    value={roomData.laundryServiceData}
                    onChange={e => handleInputChange('laundryServiceData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('laundryService')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, red.500, yellow.700)">
          <Text mb={2} fontWeight="bold">
            Kitchen Facilities and What Facilities:
          </Text>
          <Text>{kitchenFacilitiesAndWhatFacilities}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Kitchen Facilities and What Facilities"
                    value={roomData.kitchenFacilitiesAndWhatFacilitiesData}
                    onChange={e => handleInputChange('kitchenFacilitiesAndWhatFacilitiesData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('kitchenFacilitiesAndWhatFacilities')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, pink.500, yellow.700)">
          <Text mb={2} fontWeight="bold">
            Safe:
          </Text>
          <Text>{safe}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Safe"
                    value={roomData.safeData}
                    onChange={e => handleInputChange('safeData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('safe')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, red.500, green.700)">
          <Text mb={2} fontWeight="bold">
            Pillow Menu:
          </Text>
          <Text>{pillowMenu}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Pillow Menu"
                    value={roomData.pillowMenuData}
                    onChange={e => handleInputChange('pillowMenuData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('pillowMenu')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, pink.500, red.700)">
          <Text mb={2} fontWeight="bold">
            Blackout Curtains:
          </Text>
          <Text>{blackoutCurtains}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Blackout Curtains"
                    value={roomData.blackoutCurtainsData}
                    onChange={e => handleInputChange('blackoutCurtainsData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('blackoutCurtains')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, red.500, yellow.700)">
          <Text mb={2} fontWeight="bold">
            Fan or AC:
          </Text>
          <Text>{FanOrAC}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Fan or AC"
                    value={roomData.FanOrACData}
                    onChange={e => handleInputChange('FanOrACData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('FanOrAC')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, yellow.500, green.700)">
          <Text mb={2} fontWeight="bold">
            Baby Bath:
          </Text>
          <Text>{babyBath}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Baby Bath"
                    value={roomData.babyBathData}
                    onChange={e => handleInputChange('babyBathData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('babyBath')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, green.500, blue.700)">
          <Text mb={2} fontWeight="bold">
            Baby Monitor:
          </Text>
          <Text>{babyMonitor}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Baby Monitor"
                    value={roomData.babyMonitorData}
                    onChange={e => handleInputChange('babyMonitorData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('babyMonitor')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, gray.500, red.700)">
          <Text mb={2} fontWeight="bold">
            {`Children's Toys:`}
          </Text>
          <Text>{childrensToys}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Children's Toys"
                    value={roomData.childrensToysData}
                    onChange={e => handleInputChange('childrensToysData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('childrensToys')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, pink.500, yellow.700)">
          <Text mb={2} fontWeight="bold">
            {` Children's Cutlery:`}
          </Text>
          <Text>{childrensCutlery}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    placeholder="Children's Cutlery"
                    value={roomData.childrensCutleryData}
                    onChange={e => handleInputChange('childrensCutleryData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('childrensCutlery')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        {/* Continue adding GridItems for the remaining room information */}
      </Grid>
    </Box>
  );
};

export default RoomOnHotelHome;
