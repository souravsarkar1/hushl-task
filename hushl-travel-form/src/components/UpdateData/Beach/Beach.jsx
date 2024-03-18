import {
  Box,
  Button,
  Center,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
  Wrap,
  WrapItem,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductMedia, getAllProduct } from '../../../redux/Products/action';
import { FadeLoader } from 'react-spinners';

const BeachUpdate = ({ beach, id }) => {
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
  } = beach;

  const [beachTypeData, setBeachTypeData] = useState([...beachType]);
  const [lengthData, setLengthData] = useState(length);
  const [featuresData, setFeaturesData] = useState(features);
  const [instagramSpotsData, setInstagramSpotsData] = useState(instagramSpots);
  const [tidesRipsData, setTidesRipsData] = useState(tidesRips);
  const [hoursofLifeguardDutyData, setHoursofLifeguardData] = useState(hoursofLifeguardDuty);
  const [areoffBeachPatrolledbyLifeguardsData, setAreoffBeachPatrolledbyLifeguardsData] = useState(
    areoffBeachPatrolledbyLifeguards,
  );
  const [lifeguardQualificationsData, setLifeguardQualificationsData] = useState([...lifeguardQualifications]);
  const [areSomePartsofTheBeachOnlyForPrivateUseData, setAreSomePartsofTheBeachOnlyForPrivateUseData] = useState(
    areSomePartsofTheBeachOnlyForPrivateUse,
  );
  const [willBeachVillasbeDisturbedData, setWillBeachVillasbeDisturbedData] = useState(willBeachVillasbeDisturbed);
  const dispath = useDispatch();
  // const singleData = useSelector(st => st.productReducer.getSingleData);
  const loader = useSelector(st => st.productReducer.addProductMediaIsLoading);
  const toast = useToast();
  const handleSetBeachTypeData = selectedScopes => {
    setBeachTypeData(selectedScopes);
  };
  const hanldeSubmit = () => {
    const singleData = {
      beach: {},
    };
    singleData.beach.beachType = beachTypeData;
    singleData.beach.length = lengthData;
    singleData.beach.features = featuresData;
    singleData.beach.instagramSpots = instagramSpotsData;
    singleData.beach.tidesRips = tidesRipsData;
    singleData.beach.hoursofLifeguardDuty = hoursofLifeguardDutyData;
    singleData.beach.areoffBeachPatrolledbyLifeguards = areoffBeachPatrolledbyLifeguardsData;
    singleData.beach.lifeguardQualifications = lifeguardQualificationsData;
    singleData.beach.areSomePartsofTheBeachOnlyForPrivateUse = areSomePartsofTheBeachOnlyForPrivateUseData;
    singleData.beach.willBeachVillasbeDisturbed = willBeachVillasbeDisturbedData;
    dispath(addProductMedia(id, singleData, toast)).then(res => {
      dispath(getAllProduct());
    });

    // console.log(scopeOfRenovationData);
  };
  if (loader) {
    return (
      <Center>
        <FadeLoader color="#36d7b7" />
      </Center>
    );
  }
  return (
    <Box>
      <FormControl>
        <FormLabel>Beach Type:</FormLabel>
        <CheckboxGroup
          colorScheme="teal"
          value={beachTypeData}
          // onChange={(e)=>setBeachTypeData(e.target.value)}
          onChange={handleSetBeachTypeData}
        >
          <Wrap spacing={4} justify="flex-start">
            <WrapItem>
              {' '}
              <Checkbox value="White">White</Checkbox>
            </WrapItem>
            <WrapItem>
              <Checkbox value="Queaky sand fine grain,">Queaky sand fine grain,</Checkbox>
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
      </FormControl>
      <FormControl>
        <FormLabel>Beach Length(meter)</FormLabel>
        <Input value={lengthData} onChange={e => setLengthData(e.target.value)} size="sm" borderRadius="md" />
      </FormControl>
      <FormControl>
        <FormLabel>Features:</FormLabel>
        <Textarea value={featuresData} onChange={e => setFeaturesData(e.target.value)} size="sm" borderRadius="md" />
      </FormControl>
      <FormControl>
        <FormLabel>Instagram Spots:</FormLabel>
        <Textarea
          value={instagramSpotsData}
          onChange={e => setInstagramSpotsData(e.target.value)}
          size="sm"
          borderRadius="md"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Tides/Rips:</FormLabel>
        <Textarea value={tidesRipsData} onChange={e => setTidesRipsData(e.target.value)} size="sm" borderRadius="md" />
      </FormControl>
      <FormControl>
        <FormLabel>Hours of Lifeguard Duty(Hours):</FormLabel>
        <Input
          value={hoursofLifeguardDutyData}
          onChange={e => setHoursofLifeguardData(e.target.value)}
          size="sm"
          borderRadius="md"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Are off Beach Patrolled by Lifeguards:</FormLabel>
        <RadioGroup onChange={setAreoffBeachPatrolledbyLifeguardsData} value={areoffBeachPatrolledbyLifeguardsData}>
          <Stack direction="row">
            <Radio value={'true'}>Yes</Radio>
            <Radio value={'false'}>No</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Lifeguard Qualifications:</FormLabel>
        <CheckboxGroup colorScheme="teal" onChange={setLifeguardQualificationsData} value={lifeguardQualificationsData}>
          <Stack align="start">
            <Checkbox value="1">1</Checkbox>
            <Checkbox value="2">2</Checkbox>
            <Checkbox value="3">3</Checkbox>
          </Stack>
        </CheckboxGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Are some parts of the beach only for private use:</FormLabel>
        <RadioGroup
          onChange={setAreSomePartsofTheBeachOnlyForPrivateUseData}
          value={areSomePartsofTheBeachOnlyForPrivateUseData}
        >
          <Stack direction="row">
            <Radio value={'true'}>Yes</Radio>
            <Radio value={'false'}>No</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Will Beach Villasbe Disturbed:</FormLabel>
        <RadioGroup onChange={setWillBeachVillasbeDisturbedData} value={willBeachVillasbeDisturbedData}>
          <Stack direction="row">
            <Radio value={'true'}>Yes</Radio>
            <Radio value={'false'}>No</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>

      <Center>
        <Button colorScheme="teal" onClick={hanldeSubmit}>
          Update Data
        </Button>
      </Center>
    </Box>
  );
};

export default BeachUpdate;
