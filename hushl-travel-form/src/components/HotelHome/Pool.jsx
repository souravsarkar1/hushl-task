import React, { useState } from 'react';
import {
  Box,
  Center,
  Flex,
  FormControl,
  Grid,
  GridItem,
  Heading,
  Input,
  Text,
  useToast,
  Button,
  RadioGroup,
  HStack,
  Radio,
  CheckboxGroup,
  WrapItem,
  Wrap,
  Checkbox,
} from '@chakra-ui/react';
import Popup from '../Modal/Popup';
import { TiEdit, TiTick } from 'react-icons/ti';
import { ImCross } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { addProductMedia, getSingleData } from '../../redux/Products/action';
import { poolSafetyFeatures } from '../Froms/Pool/Pool';

const PoolOnHotelHome = ({ pool, id }) => {
  const {
    length,
    depth,
    lapPool,
    safetyFeatures,
    totalNumberOfPool,
    IsadultOnly, // boolean
    kidsFeatures,
    heated,
    cleanliness,
  } = pool;
  const dispatch = useDispatch();
  const toast = useToast();
  const [poolData, setPoolData] = useState({
    lengthData: length,
    depthData: depth,
    lapPoolData: lapPool,
    safetyFeaturesData: [...safetyFeatures], // Initialize as an array
    totalNumberOfPoolData: totalNumberOfPool,
    IsadultOnlyData: IsadultOnly, // boolean
    kidsFeaturesData: kidsFeatures,
    heatedData: heated,
    cleanlinessData: cleanliness,
  });

  const handleInputChange = (field, value) => {
    setPoolData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleCheckboxChange = (field, checkboxValues) => {
    setPoolData(prevData => ({
      ...prevData,
      [field]: checkboxValues,
    }));
  };

  const handleUpdate = params => {
    // console.log(params);
    if (params === 'length') poolData.lengthData = 0;
    if (params === 'depth') poolData.depthData = 0;
    if (params === 'lapPool') poolData.lapPoolData = 0;
    if (params === 'safetyFeatures') poolData.safetyFeaturesData = [];
    if (params === 'totalNumberOfPool') poolData.totalNumberOfPoolData = 0;
    if (params === 'IsadultOnly') poolData.IsadultOnlyData = false;
    if (params === 'kidsFeatures') poolData.kidsFeaturesData = [];
    if (params === 'heated') poolData.heatedData = 0;
    if (params === 'cleanliness') poolData.cleanlinessData = 0;

    const data = {
      pool: {
        length: poolData.lengthData,
        depth: poolData.depthData,
        lapPool: poolData.lapPoolData,
        safetyFeatures: poolData.safetyFeaturesData,
        totalNumberOfPool: poolData.totalNumberOfPoolData,
        IsadultOnly: poolData.IsadultOnlyData, // boolean
        kidsFeatures: poolData.kidsFeaturesData,
        heated: poolData.heatedData,
        cleanliness: poolData.cleanlinessData,
      },
    };
    // console.log(data);
    dispatch(addProductMedia(id, data, toast)).then(() => {
      dispatch(getSingleData(id));
    });
  };

  return (
    <Box bgGradient="linear(to-tr, gray.100, gray.200)" p={4} borderRadius="lg" minH={'90vh'}>
      <Heading as="h2" size="md" mb={2}>
        Pool Information
      </Heading>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, red.100, gray.200)">
          <Text mb={2} fontWeight="bold">
            Pool Length:
          </Text>
          <Text>{length}</Text>
          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input value={poolData.lengthData} onChange={e => handleInputChange('lengthData', e.target.value)} />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('length')}>
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
            Pool Depth:
          </Text>
          <Text>{depth}</Text>

          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input value={poolData.depthData} onChange={e => handleInputChange('depthData', e.target.value)} />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('depth')}>
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
            Lap Pool:
          </Text>
          <Text>{lapPool}</Text>
          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <RadioGroup onChange={value => handleInputChange('lapPool', value)} value={poolData.lapPoolData}>
                    <HStack spacing={4}>
                      <Radio value={true}>Yes</Radio>
                      <Radio value={false}>No</Radio>
                    </HStack>
                  </RadioGroup>
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('lapPool')}>
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
            Safety Features:
          </Text>
          <Text>{safetyFeatures}</Text>
          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <CheckboxGroup
                    colorScheme="teal"
                    onChange={values => handleCheckboxChange('safetyFeaturesData', values)}
                    value={poolData.safetyFeaturesData}
                  >
                    <Wrap spacing={4} justify="flex-start">
                      {poolSafetyFeatures.map(feature => (
                        <WrapItem key={feature}>
                          <Checkbox value={feature}>{feature}</Checkbox>
                        </WrapItem>
                      ))}
                    </Wrap>
                  </CheckboxGroup>
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
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, purple.300, gray.500)">
          <Text mb={2} fontWeight="bold">
            Total Number of Pools:
          </Text>
          <Text>{totalNumberOfPool}</Text>
          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    value={poolData.totalNumberOfPoolData}
                    onChange={e => handleInputChange('totalNumberOfPoolData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('totalNumberOfPool')}>
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
            Adult Only:
          </Text>
          <Text>{IsadultOnly ? 'Yes' : 'No'}</Text>
          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <RadioGroup
                    onChange={value => handleInputChange('IsadultOnlyData', value)}
                    value={poolData.IsadultOnlyData}
                  >
                    <HStack spacing={4}>
                      <Radio value={true}>Yes</Radio>
                      <Radio value={false}>No</Radio>
                    </HStack>
                  </RadioGroup>
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('IsadultOnly')}>
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
            Kids Features:
          </Text>
          <Text>{kidsFeatures}</Text>
          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  {/*<CheckboxGroup
                    colorScheme="teal"
                    onChange={values => handleCheckboxChange('kidsFeaturesData', values)}
                    value={poolData.kidsFeaturesData}
                  >
                    <Wrap spacing={4} justify="flex-start">
                      {poolKidsFeatures.map(feature => (
                        <WrapItem key={feature}>
                          <Checkbox value={feature}>{feature}</Checkbox>
                        </WrapItem>
                      ))}
                    </Wrap>
                      </CheckboxGroup>*/}
                  <Input
                    value={poolData.kidsFeaturesData}
                    onChange={e => handleInputChange('kidsFeaturesData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('kidsFeatures')}>
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
            Heated:
          </Text>
          <Text>{heated}</Text>
          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <RadioGroup onChange={value => handleInputChange('heatedData', value)} value={poolData.heatedData}>
                    <HStack spacing={4}>
                      <Radio value={true}>Yes</Radio>
                      <Radio value={false}>No</Radio>
                    </HStack>
                  </RadioGroup>
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('heated')}>
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
            Cleanliness:
          </Text>
          <Text>{cleanliness}</Text>
          <Popup
            modalTitle={<TiEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  {/* <RadioGroup
                    onChange={value => handleInputChange('cleanlinessData', value)}
                    value={poolData.cleanlinessData}
                  >
                    <HStack spacing={4}>
                      <Radio value={true}>Yes</Radio>
                      <Radio value={false}>No</Radio>
                    </HStack>
            </RadioGroup>*/}
                  <Input
                    value={poolData.cleanlinessData}
                    onChange={e => handleInputChange('cleanlinessData', e.target.value)}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('cleanliness')}>
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

export default PoolOnHotelHome;
