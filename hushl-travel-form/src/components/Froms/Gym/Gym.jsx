// GymForm.js
import React from 'react';
import { Checkbox, CheckboxGroup, FormControl, FormLabel, Input, Radio, RadioGroup, Stack, Wrap, WrapItem } from '@chakra-ui/react';
const gymeEquipmentRange = ["Free weights", "Machines", "Running", "Cycling", "Rowing", "Elliptical machines", "Swimming pool", "Resistance bands", "Stability balls", "Treadmills", "Stationary bikes", "Jump ropes"];

const GymForm = ({ formData, handleInputChange ,handleCheckboxChange}) => {
    return (
        <>
            <FormControl>
                <FormLabel>Gym Quality of Equipment:</FormLabel>
                <Input
                    type="text"
                    value={formData.qualityOfEquipment}
                    onChange={(e) => handleInputChange('gym', 'qualityOfEquipment', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Gym Range of Equipment:</FormLabel>
                <CheckboxGroup
                    colorScheme="teal"
                    onChange={(values) => handleCheckboxChange('gym', 'rangeofEquipment', values)}
                    value={formData.rangeofEquipment}
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
                <RadioGroup onChange={(value) => handleInputChange('gym','spaPreBookingAdvised', value)} value={formData.spaPreBookingAdvised.toString()}>
                    <Stack direction="row">
                        <Radio value={"true"}>Yes</Radio>
                        <Radio value={"false"}>No</Radio>
                    </Stack>
                </RadioGroup>
            </FormControl>
        </>
    );
};

export default GymForm;
