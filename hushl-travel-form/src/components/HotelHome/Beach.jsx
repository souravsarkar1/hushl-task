import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Grid,
  GridItem,
  Image,
  useToast,
  Center,
  FormControl,
  Input,
  Flex,
  Button,
  CheckboxGroup,
  Wrap,
  WrapItem,
  Checkbox,
  RadioGroup,
  Stack,
  Radio,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addProductMedia, getSingleData } from '../../redux/Products/action';
import Popup from '../Modal/Popup';
import { MdDelete, MdEdit } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';

const BeachOnHotelHome = ({ beach, id }) => {
  const {
    beachType,
    length,
    features,
    instagramSpots,
    tidesRips,
    hoursofLifeguardDuty,
    areoffBeachPatrolledbyLifeguards,
    lifeguardQualifications,
    areSomePartsofTheBeachOnlyForPrivateUse,
    willBeachVillasbeDisturbed,
    cleanliness,
    include,
    BBQSpots,
    images,
  } = beach;
  const [beachData, setBachData] = useState({
    beachTypeData: beachType,
    lengthData: length,
    featuresData: features,
    instagramSpotsData: instagramSpots,
    tidesRipsData: tidesRips,
    hoursofLifeguardDutyData: hoursofLifeguardDuty,
    areoffBeachPatrolledbyLifeguardsData: areoffBeachPatrolledbyLifeguards,
    lifeguardQualificationsData: lifeguardQualifications,
    areSomePartsofTheBeachOnlyForPrivateUseData: areSomePartsofTheBeachOnlyForPrivateUse,
    willBeachVillasbeDisturbedData: willBeachVillasbeDisturbed,
    cleanlinessData: cleanliness,
    includeData: include,
    BBQSpotsData: BBQSpots,
    imagesData: images,
  });
  const toast = useToast();
  const dispatch = useDispatch();
  const handleInputChange = (field, value) => {
    setBachData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };
  const handleCheckboxChange = (field, value) => {
    setBachData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };
  const handleUpdate = params => {
    if (params === 'beachType') beachData.beachTypeData = [''];
    if (params === 'length') beachData.lengthData = '';
    if (params === 'features') beachData.featuresData = '';
    if (params === 'instagramSpots') beachData.instagramSpotsData = '';
    if (params === 'tidesRips') beachData.tidesRipsData = '';
    if (params === 'hoursofLifeguardDuty') beachData.hoursofLifeguardDutyData = '';
    if (params === 'areoffBeachPatrolledbyLifeguards') beachData.areoffBeachPatrolledbyLifeguardsData = '';
    if (params === 'lifeguardQualifications') beachData.lifeguardQualificationsData = [];
    if (params === 'areSomePartsofTheBeachOnlyForPrivateUse')
      beachData.areSomePartsofTheBeachOnlyForPrivateUseData = '';
    if (params === 'willBeachVillasbeDisturbed') beachData.willBeachVillasbeDisturbedData = '';
    if (params === 'cleanliness') beachData.cleanlinessData = '';
    if (params === 'include') beachData.includeData = '';
    if (params === 'BBQSpots') beachData.BBQSpotsData = '';
    if (params === 'images') beachData.imagesData = [];

    const singleData = {
      beach: {
        beachType: beachData.beachTypeData,
        length: beachData.lengthData,
        features: beachData.featuresData,
        instagramSpots: beachData.instagramSpotsData,
        tidesRips: beachData.tidesRipsData,
        hoursofLifeguardDuty: beachData.hoursofLifeguardDutyData,
        areoffBeachPatrolledbyLifeguards: beachData.areoffBeachPatrolledbyLifeguardsData,
        lifeguardQualifications: beachData.lifeguardQualificationsData,
        areSomePartsofTheBeachOnlyForPrivateUse: beachData.areSomePartsofTheBeachOnlyForPrivateUseData,
        willBeachVillasbeDisturbed: beachData.willBeachVillasbeDisturbedData,
        cleanliness: beachData.cleanlinessData,
        include: beachData.includeData,
        BBQSpots: beachData.BBQSpotsData,
        images: beachData.imagesData,
      },
    };
    // console.log(singleData);
    dispatch(addProductMedia(id, singleData, toast)).then(res => {
      dispatch(getSingleData(id));
    });
  };

  return (
    <Box bgGradient="linear(to-tr, gray.100, gray.200)" p={4} borderRadius="lg" minH={'90vh'}>
      <Heading as="h3" size="md" mb={2}>
        Beach Information
      </Heading>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
        <GridItem p={20} borderRadius="md" bgGradient="linear(to-tr, red.100, gray.200)">
          <Text mb={2} fontWeight="bold">
            Beach Type:
          </Text>
          <Text>{beachType.join(', ')}</Text>
          <Popup
            modalTitle={<MdEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <CheckboxGroup
                    colorScheme="teal"
                    onChange={values => handleCheckboxChange('beachTypeData', values)}
                    value={beachData.beachTypeData}
                  >
                    <Wrap spacing={4} justify="flex-start">
                      <WrapItem>
                        {' '}
                        <Checkbox value="White">White</Checkbox>
                      </WrapItem>
                      <WrapItem>
                        <Checkbox value="Queaky sand fine grain,">Queaky sand fine grain</Checkbox>
                      </WrapItem>
                      <WrapItem>
                        <Checkbox value="Granular">Granular</Checkbox>
                      </WrapItem>
                      <WrapItem>
                        {' '}
                        <Checkbox value="Brown">Brown</Checkbox>
                      </WrapItem>
                      <WrapItem>
                        <Checkbox value="Black">Black</Checkbox>
                      </WrapItem>
                      <WrapItem>
                        <Checkbox value="Volcanic">Volcanic</Checkbox>
                      </WrapItem>
                    </Wrap>
                  </CheckboxGroup>
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('beachType')}>
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
            Length (M):
          </Text>
          <Text>{length}</Text>
          <Popup
            modalTitle={<MdEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input onChange={e => handleInputChange('lengthData', e.target.value)} value={beachData.lengthData} />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('length')}>
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
            Features:
          </Text>
          <Text>{features}</Text>
          <Popup
            modalTitle={<MdEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    onChange={e => handleInputChange('featuresData', e.target.value)}
                    value={beachData.featuresData}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('features')}>
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
            Instagram Spots:
          </Text>
          <Text>{instagramSpots}</Text>
          <Popup
            modalTitle={<MdEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    onChange={e => handleInputChange('instagramSpotsData', e.target.value)}
                    value={beachData.instagramSpotsData}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('instagramSpots')}>
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
            Tides Rips:
          </Text>
          <Text>{tidesRips}</Text>

          <Popup
            modalTitle={<MdEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    onChange={e => handleInputChange('tidesRipsData', e.target.value)}
                    value={beachData.tidesRipsData}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('tidesRips')}>
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
            Hours of Lifeguard Duty:
          </Text>
          <Text>{hoursofLifeguardDuty}</Text>
          <Popup
            modalTitle={<MdEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    onChange={e => handleInputChange('hoursofLifeguardDutyData', e.target.value)}
                    value={beachData.hoursofLifeguardDutyData}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('hoursofLifeguardDuty')}>
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
            Lifeguard Qualifications:
          </Text>
          <Text>{lifeguardQualifications.join(', ')}</Text>
          <Popup
            modalTitle={<MdEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <CheckboxGroup
                    colorScheme="teal"
                    onChange={values => handleCheckboxChange('lifeguardQualificationsData', values)}
                    value={beachData.lifeguardQualificationsData}
                  >
                    <Stack align="start">
                      <Checkbox value="1">1</Checkbox>
                      <Checkbox value="2">2</Checkbox>
                      <Checkbox value="3">3</Checkbox>
                    </Stack>
                  </CheckboxGroup>
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('lifeguardQualifications')}>
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
            Are Some Parts of The Beach Only For Private Use:
          </Text>
          <Text>{areSomePartsofTheBeachOnlyForPrivateUse}</Text>
          <Popup
            modalTitle={<MdEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    onChange={e => handleInputChange('areSomePartsofTheBeachOnlyForPrivateUseData', e.target.value)}
                    value={beachData.areSomePartsofTheBeachOnlyForPrivateUseData}
                  />
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('areSomePartsofTheBeachOnlyForPrivateUse')}>
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
            Will Beach Villas be Disturbed:
          </Text>
          <Text>{willBeachVillasbeDisturbed}</Text>
          <Popup
            modalTitle={<MdEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <RadioGroup
                    onChange={value => handleInputChange('willBeachVillasbeDisturbedData', value)}
                    value={beachData.willBeachVillasbeDisturbedData}
                  >
                    <Stack direction="row">
                      <Radio value={'true'}>Yes</Radio>
                      <Radio value={'false'}>No</Radio>
                    </Stack>
                  </RadioGroup>
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('willBeachVillasbeDisturbed')}>
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
            Cleanliness:
          </Text>
          <Text>{cleanliness}</Text>
          <Popup
            modalTitle={<MdEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    onChange={e => handleInputChange('cleanlinessData', e.target.value)}
                    value={beachData.cleanlinessData}
                  />

                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('cleanliness')}>
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
            Include:
          </Text>
          <Text>{include}</Text>
          <Popup
            modalTitle={<MdEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    onChange={e => handleInputChange('includeData', e.target.value)}
                    value={beachData.includeData}
                  />

                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('include')}>
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
            BBQ Spots:
          </Text>
          <Text>{BBQSpots}</Text>
          <Popup
            modalTitle={<MdEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <Input
                    onChange={e => handleInputChange('BBQSpotsData', e.target.value)}
                    value={beachData.BBQSpotsData}
                  />

                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('BBQSpots')}>
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
            Are off Beach Patrolled by Lifeguards :
          </Text>
          <Text>{areoffBeachPatrolledbyLifeguards}</Text>
          <Popup
            modalTitle={<MdEdit />}
            colorofModal={'blue'}
            children={
              <Center>
                <FormControl>
                  <RadioGroup
                    onChange={value => handleInputChange('areoffBeachPatrolledbyLifeguardsData', value)}
                    value={beachData.areoffBeachPatrolledbyLifeguardsData}
                  >
                    <Stack direction="row">
                      <Radio value={'true'}>Yes</Radio>
                      <Radio value={'false'}>No</Radio>
                    </Stack>
                  </RadioGroup>
                  <Flex alignItems={'center'} flexDir={'row'} justifyContent={'space-around'} mt={3}>
                    <Button colorScheme="green" onClick={handleUpdate}>
                      <TiTick />
                    </Button>
                    <Button colorScheme="red" onClick={() => handleUpdate('areoffBeachPatrolledbyLifeguards')}>
                      <MdDelete />
                    </Button>
                  </Flex>
                </FormControl>
              </Center>
            }
          />
        </GridItem>

        {images?.map((image, index) => (
          <GridItem key={index} p={20} borderRadius="md" bgGradient="linear(to-tr, green.300, gray.500)">
            <Image src={image.url} alt="image" />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default BeachOnHotelHome;
