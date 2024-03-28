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
import { ImCross } from 'react-icons/im';

const ReefOnHotelHome = ({ reef, id }) => {
  const {
    entryPointSandLengthofSwim,
    accessibleFromBeach,
    houseReefAccessiblebyBoat,
    houseReefAccessibleCost,
    accessiblebyBoat,
    costTravel,
    travelTime,
    sites,
    outerReef,
    qualityOfCoral,
    houseReef,
    distanceFromBeach,
    qualityofFish,
    nearestOtherReefforGoodCoral,
    onsiteMarineBiologist,
    entryPointsAndLengthOfSwim,
    abundanceOfReefSharks,
    reviewsSentiments,
  } = reef;
  const [reefData, setReefData] = useState({
    entryPointSandLengthofSwimData: entryPointSandLengthofSwim,
    accessibleFromBeachData: accessibleFromBeach,
    houseReefAccessiblebyBoatData: houseReefAccessiblebyBoat,
    houseReefAccessibleCostData: houseReefAccessibleCost,
    accessiblebyBoatData: accessiblebyBoat,
    costTravelData: costTravel,
    travelTimeData: travelTime,
    sitesData: sites,
    outerReefData: outerReef,
    qualityOfCoralData: qualityOfCoral,
    houseReefData: houseReef,
    distanceFromBeachData: distanceFromBeach,
    qualityofFishData: qualityofFish,
    nearestOtherReefforGoodCoralData: nearestOtherReefforGoodCoral,
    onsiteMarineBiologistData: onsiteMarineBiologist,
    entryPointsAndLengthOfSwimData: entryPointsAndLengthOfSwim,
    abundanceOfReefSharksData: abundanceOfReefSharks,
    reviewsSentimentsData: reviewsSentiments,
  });
  const toast = useToast();
  const dispatch = useDispatch();
  const handleInputChange = (field, value) => {
    setReefData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };
  const handleUpdate = params => {
    if (params === 'entryPointSandLengthofSwim') reefData.entryPointSandLengthofSwimData = '';
    if (params === 'accessibleFromBeach') reefData.accessibleFromBeachData = '';
    if (params === 'houseReefAccessiblebyBoat') reefData.houseReefAccessiblebyBoatData = '';
    if (params === 'houseReefAccessibleCost') reefData.houseReefAccessibleCostData = '';
    if (params === 'accessiblebyBoat') reefData.accessiblebyBoatData = '';
    if (params === 'costTravel') reefData.costTravelData = '';
    if (params === 'travelTime') reefData.travelTimeData = '';
    if (params === 'sites') reefData.sitesData = '';
    if (params === 'outerReef') reefData.outerReefData = '';
    if (params === 'qualityOfCoral') reefData.qualityOfCoralData = '';
    if (params === 'houseReef') reefData.houseReefData = '';
    if (params === 'distanceFromBeach') reefData.distanceFromBeachData = '';
    if (params === 'qualityofFish') reefData.qualityofFishData = '';
    if (params === 'nearestOtherReefforGoodCoral') reefData.nearestOtherReefforGoodCoralData = '';
    if (params === 'onsiteMarineBiologist') reefData.onsiteMarineBiologistData = '';
    if (params === 'entryPointsAndLengthOfSwim') reefData.entryPointsAndLengthOfSwimData = '';
    if (params === 'abundanceOfReefSharks') reefData.abundanceOfReefSharksData = '';
    if (params === 'reviewsSentiments') reefData.reviewsSentimentsData = '';

    const data = {
      reef: {
        entryPointSandLengthofSwim: reefData.entryPointSandLengthofSwimData,
        accessibleFromBeach: reefData.accessibleFromBeachData,
        houseReefAccessiblebyBoat: reefData.houseReefAccessiblebyBoatData,
        houseReefAccessibleCost: reefData.houseReefAccessibleCostData,
        accessiblebyBoat: reefData.accessiblebyBoatData,
        costTravel: reefData.costTravelData,
        travelTime: reefData.travelTimeData,
        sites: reefData.sitesData,
        outerReef: reefData.outerReefData,
        qualityOfCoral: reefData.qualityOfCoralData,
        houseReef: reefData.houseReefData,
        distanceFromBeach: reefData.distanceFromBeachData,
        qualityofFish: reefData.qualityofFishData,
        nearestOtherReefforGoodCoral: reefData.nearestOtherReefforGoodCoralData,
        onsiteMarineBiologist: reefData.onsiteMarineBiologistData,
        entryPointsAndLengthOfSwim: reefData.entryPointsAndLengthOfSwimData,
      },
    };
    dispatch(addProductMedia(id, data, toast)).then(() => {
      dispatch(getSingleData(id));
    });
  };

  return (
    <Box bgGradient="linear(to-tr, gray.100, gray.200)" p={4} borderRadius="lg" minH={'90vh'}>
      <Heading as="h3" size="md" mb={2}>
        Reef Information
      </Heading>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, red.100, gray.200)">
          <Text mb={2} fontWeight="bold">
            Entry Point & Length of Swim:
          </Text>
          <Text>{entryPointSandLengthofSwim}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={reefData.entryPointSandLengthofSwimData}
                    onChange={e => handleInputChange('entryPointSandLengthofSwimData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('entryPointSandLengthofSwim')}>
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
            Accessible From Beach:
          </Text>
          <Text>{accessibleFromBeach.join(', ')}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={reefData.accessibleFromBeachData}
                    onChange={e => handleInputChange('accessibleFromBeachData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('accessibleFromBeach')}>
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
            House Reef Accessible by Boat:
          </Text>
          <Text>{houseReefAccessiblebyBoat ? 'Yes' : 'No'}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={reefData.houseReefAccessiblebyBoatData}
                    onChange={e => handleInputChange('houseReefAccessiblebyBoatData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('houseReefAccessiblebyBoat')}>
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
            House Reef Accessible Cost:
          </Text>
          <Text>{houseReefAccessibleCost}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={reefData.houseReefAccessibleCostData}
                    onChange={e => handleInputChange('houseReefAccessibleCostData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('houseReefAccessibleCost')}>
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
            Accessible by Boat:
          </Text>
          <Text>{accessiblebyBoat ? 'Yes' : 'No'}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={reefData.accessiblebyBoatData}
                    onChange={e => handleInputChange('accessiblebyBoatData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('accessiblebyBoat')}>
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
            Cost of Travel:
          </Text>
          <Text>{costTravel}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={reefData.costTravelData}
                    onChange={e => handleInputChange('costTravelData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('costTravel')}>
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
            Travel Time:
          </Text>
          <Text>{travelTime}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={reefData.travelTimeData}
                    onChange={e => handleInputChange('travelTimeData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('travelTime')}>
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
            Sites:
          </Text>
          <Text>{sites}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input value={reefData.sitesData} onChange={e => handleInputChange('sitesData', e.target.value)} />
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
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, red.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Outer Reef:
          </Text>
          <Text>{outerReef}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={reefData.outerReefData}
                    onChange={e => handleInputChange('outerReefData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('outerReef')}>
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
            Quality of Coral:
          </Text>
          <Text>{qualityOfCoral}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={reefData.qualityOfCoralData}
                    onChange={e => handleInputChange('qualityOfCoralData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('qualityOfCoral')}>
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
            House Reef:
          </Text>
          <Text>{houseReef}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={reefData.houseReefData}
                    onChange={e => handleInputChange('houseReefData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('houseReef')}>
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
            Distance From Beach:
          </Text>
          <Text>{distanceFromBeach}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={reefData.distanceFromBeachData}
                    onChange={e => handleInputChange('distanceFromBeachData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('distanceFromBeach')}>
                      <ImCross />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, red.300, blue.500)">
          <Text mb={2} fontWeight="bold">
            Quality of Fish:
          </Text>
          <Text>{qualityofFish}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={reefData.qualityofFishData}
                    onChange={e => handleInputChange('qualityofFishData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('qualityofFish')}>
                      <ImCross />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, green.300, yellow.500)">
          <Text mb={2} fontWeight="bold">
            Nearest Other Reef for Good Coral:
          </Text>
          <Text>{nearestOtherReefforGoodCoral}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={reefData.nearestOtherReefforGoodCoralData}
                    onChange={e => handleInputChange('nearestOtherReefforGoodCoralData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('nearestOtherReefforGoodCoral')}>
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
            Onsite Marine Biologist:
          </Text>
          <Text>{onsiteMarineBiologist ? 'Yes' : 'No'}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  {/*<RadioGroup
                    onChange={value => handleInputChange('onsiteMarineBiologistData', value)}
                    value={poolData.onsiteMarineBiologistData}
                  >
                    <HStack spacing={4}>
                      <Radio value={true}>Yes</Radio>
                      <Radio value={false}>No</Radio>
                    </HStack>
            </RadioGroup>*/}
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('onsiteMarineBiologist')}>
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
            Entry Points & Length Of Swim:
          </Text>
          <Text>{entryPointsAndLengthOfSwim}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={reefData.entryPointsAndLengthOfSwimData}
                    onChange={e => handleInputChange('entryPointsAndLengthOfSwimData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('entryPointsAndLengthOfSwim')}>
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
            Abundance of Reef Sharks:
          </Text>
          <Text>{abundanceOfReefSharks}</Text>
          <Popup
            modalTitle={<CiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={reefData.abundanceOfReefSharksData}
                    onChange={e => handleInputChange('abundanceOfReefSharksData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('abundanceOfReefSharks')}>
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
            Reviews Sentiments:
          </Text>
          <Text>{reviewsSentiments}</Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default ReefOnHotelHome;
