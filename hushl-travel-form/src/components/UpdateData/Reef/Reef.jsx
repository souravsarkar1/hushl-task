import { Box, Button, Center, FormControl, FormLabel, Input, Radio, RadioGroup, Stack, Textarea, useToast } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProductMedia, getAllProduct } from '../../../redux/Products/action';
import { FadeLoader } from 'react-spinners';

const ReefUpdate = ({ reef, id }) => {
    const {
        entryPointSandLengthofSwim,
        accessibleFromBeach,
        houseReefAccessiblebyBoat,
        houseReefAccessibleCost,
        accessiblebyBoat,
        costTravel,
        travelTime,
        sites,
        outerReef
    } = reef;

    const [entryPointSandLengthofSwimData, setEntryPointSandLengthofSwimData] = useState(entryPointSandLengthofSwim);
    const [accessibleFromBeachData, setAccessibleFromBeachData] = useState(accessibleFromBeach);
    const [houseReefAccessiblebyBoatData, setHouseReefAccessiblebyBoatData] = useState(houseReefAccessiblebyBoat);
    const [houseReefAccessibleCostData, setHouseReefAccessibleCostData] = useState(houseReefAccessibleCost);
    const [accessiblebyBoatData, setAccessiblebyBoatData] = useState(accessiblebyBoat);
    const [costTravelData, setCostTravelData] = useState(costTravel);
    const [travelTimeData, setTravelTimeData] = useState(travelTime);
    const [sitesData, setSitesData] = useState(sites);
    const [outerReefData, setOuterReefData] = useState(outerReef);
    const loader = useSelector(st => st.productReducer.addProductMediaIsLoading);
    const toast = useToast();
    const dispath = useDispatch();
    const handleSubmit = () => {
        const data = {
            reef: {}
        }
        data.reef.entryPointSandLengthofSwim = entryPointSandLengthofSwimData;
        data.reef.accessibleFromBeach = accessibleFromBeachData;
        data.reef.houseReefAccessiblebyBoat = houseReefAccessiblebyBoatData;
        data.reef.houseReefAccessibleCost = houseReefAccessibleCostData;
        data.reef.accessiblebyBoat = accessiblebyBoatData;
        data.reef.costTravel = costTravelData;
        data.reef.travelTime = travelTimeData;
        data.reef.sites = sitesData;
        data.reef.outerReef = outerReefData;
        dispath(addProductMedia(id, data, toast)).then((res) => {
            dispath(getAllProduct());
        })

    }
    if (loader) {
        return <Center><FadeLoader color="#36d7b7" /></Center>
    }
    return (
        <Box>
            <FormControl>
                <FormLabel>Entry Point Sand Length of Swim:</FormLabel>
                <Input
                    value={entryPointSandLengthofSwimData}
                    onChange={(e) => setEntryPointSandLengthofSwimData(e.target.value)}
                    size="sm"
                    borderRadius="md"
                />

            </FormControl>
            <FormControl>
                <FormLabel>Accessible from Beach:</FormLabel>
                <RadioGroup value={accessibleFromBeachData} onChange={setAccessibleFromBeachData}>
                    <Stack direction="row">
                        <Radio value="true">Yes</Radio>
                        <Radio value="false">No</Radio>
                    </Stack>
                </RadioGroup>

            </FormControl>
            <FormControl>
                <FormLabel>House Reef Accessible by Boat:</FormLabel>
                <RadioGroup value={houseReefAccessiblebyBoatData} onChange={setHouseReefAccessiblebyBoatData}>
                    <Stack direction="row">
                        <Radio value="true">Yes</Radio>
                        <Radio value="false">No</Radio>
                    </Stack>
                </RadioGroup>

            </FormControl>
            <FormControl>
                <FormLabel>House Reef Accessible Cost(MRF):</FormLabel>
                <Input
                    value={houseReefAccessibleCostData}
                    onChange={(e) => setHouseReefAccessibleCostData(e.target.value)}
                    size="sm"
                    borderRadius="md"
                />

            </FormControl>
            <FormControl>
                <FormLabel>Reef Accessible by Boat Or Not:</FormLabel>
                <RadioGroup value={accessiblebyBoatData} onChange={setAccessiblebyBoatData}>
                    <Stack direction="row">
                        <Radio value="true">Yes</Radio>
                        <Radio value="false">No</Radio>
                    </Stack>
                </RadioGroup>


            </FormControl>
            <FormControl>
                <FormLabel>Reef Travel Coast(MRF):</FormLabel>
                <Input
                    value={costTravelData}
                    onChange={(e) => setCostTravelData(e.target.value)}
                    size="sm"
                    borderRadius="md"
                />

            </FormControl>
            <FormControl>
                <FormLabel>Reef Travel Time(Hours):</FormLabel>
                <Input
                    value={travelTimeData}
                    onChange={(e) => setTravelTimeData(e.target.value)}
                    size="sm"
                    borderRadius="md"
                />

            </FormControl>
            <FormControl>
                <FormLabel>Reef Sites:</FormLabel>
                <Textarea
                    value={sitesData}
                    onChange={(e) => setSitesData(e.target.value)}
                    size="sm"
                    borderRadius="md"
                />

            </FormControl>
            <FormControl>
                <FormLabel>Outer Reef:</FormLabel>
                <RadioGroup value={outerReefData} onChange={setOuterReefData}>
                    <Stack direction="row">
                        <Radio value="true">Yes</Radio>
                        <Radio value="false">No</Radio>
                    </Stack>

                </RadioGroup>

            </FormControl>
            <Center>
                <Button onClick={handleSubmit} colorScheme='teal'>Update</Button>
            </Center>
        </Box>
    )
}

export default ReefUpdate;