import { Box, Button, Center, Checkbox, CheckboxGroup, FormControl, FormLabel, Input, Radio, RadioGroup, Stack, Wrap, WrapItem, useToast } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProductMedia, getAllProduct } from '../../../redux/Products/action';
import { FadeLoader } from 'react-spinners';
const gymeEquipmentRange = ["Free weights", "Machines", "Running", "Cycling", "Rowing", "Elliptical machines", "Swimming pool", "Resistance bands", "Stability balls", "Treadmills", "Stationary bikes", "Jump ropes"];
const GymUpdate = ({ gym, id }) => {
    const { qualityOfEquipment, rangeofEquipment, spaPreBookingAdvised } = gym;
    const [qualityOfEquipmentData, setQualityOfEquipmentData] = useState(qualityOfEquipment);
    const [rangeofEquipmentData, setRangeofEquipmentData] = useState(rangeofEquipment);
    const [spaPreBookingAdvisedData, setSpaPreBookingAdvisedData] = useState(spaPreBookingAdvised);
    const loader = useSelector(st => st.productReducer.addProductMediaIsLoading);
    const toast = useToast();
    const dispath = useDispatch();
    const handleSubmit = () => {
        const data = {
            gym: {}
        }
        data.gym.qualityOfEquipment = qualityOfEquipmentData;
        data.gym.rangeofEquipment = rangeofEquipmentData;
        data.gym.spaPreBookingAdvised = spaPreBookingAdvisedData;
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
                <FormLabel>Gym Quality of Equipment:</FormLabel>
                <Input
                    type="text"
                    value={qualityOfEquipmentData}
                    onChange={(e) => setQualityOfEquipmentData(e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Gym Range of Equipment:</FormLabel>
                <CheckboxGroup
                    colorScheme="teal"
                    onChange={setRangeofEquipmentData}
                    value={rangeofEquipmentData}
                >
                    <Wrap spacing={4} justify="flex-start">
                        {gymeEquipmentRange.map((feature) => (
                            <WrapItem key={feature}>
                                <Checkbox value={feature}>{feature}</Checkbox>
                            </WrapItem>
                        ))}
                    </Wrap>
                </CheckboxGroup>
            </FormControl>
            <FormControl>
                <FormLabel> SPA Pre Booking Advised:</FormLabel>
                <RadioGroup onChange={setSpaPreBookingAdvisedData} value={spaPreBookingAdvisedData}>
                    <Stack direction="row">
                        <Radio value={"true"}>Yes</Radio>
                        <Radio value={"false"}>No</Radio>
                    </Stack>
                </RadioGroup>
            </FormControl>
            <Center>
                <Button onClick={handleSubmit} colorScheme='teal'>Update</Button>
            </Center>
        </Box>
    )
}

export default GymUpdate;