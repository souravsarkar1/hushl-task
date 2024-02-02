// ReefForm.js
import React from 'react';
import { FormControl, FormLabel, Input, Radio, RadioGroup, Stack, Textarea } from '@chakra-ui/react';

const ReefForm = ({ formData, handleInputChange }) => {
    return (
        <>
            <FormControl>
                <FormLabel>Reef Entry Point Sand Length of Swim:</FormLabel>
                <Textarea
                    type="text"
                    value={formData.entryPointSandLengthofSwim}
                    onChange={(e) => handleInputChange('reef', 'entryPointSandLengthofSwim', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Reef Accessible from Beach:</FormLabel>
                <RadioGroup onChange={(value) => handleInputChange('reef', 'accessibleFromBeach', value)} value={formData.accessibleFromBeach.toString()}>
                    <Stack direction="row">
                        <Radio value="true">Yes</Radio>
                        <Radio value="false">No</Radio>
                    </Stack>
                </RadioGroup>
            </FormControl>
            <FormControl>
                <FormLabel>Reef House Reef Accessible by Boat:</FormLabel>
                <RadioGroup onChange={(value) => handleInputChange('reef', 'houseReefAccessiblebyBoat', value)} value={formData.houseReefAccessiblebyBoat.toString()}>
                <Stack direction="row">
                    <Radio value="true">Yes</Radio>
                    <Radio value="false">No</Radio>
                </Stack>
            </RadioGroup>
            </FormControl>
            <FormControl>
                <FormLabel>Reef House Reef Accessible Cost:</FormLabel>
                <Input
                    type="number"
                    value={formData.houseReefAccessibleCost}
                    onChange={(e) => handleInputChange('reef', 'houseReefAccessibleCost', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Reef Accessible by Boat Or Not:</FormLabel>
                <RadioGroup onChange={(value) => handleInputChange('reef', 'accessiblebyBoat', value)} value={formData.accessiblebyBoat.toString()}>
                    <Stack direction="row">
                        <Radio value="true">Yes</Radio>
                        <Radio value="false">No</Radio>
                    </Stack>
                </RadioGroup>
            </FormControl>
            <FormControl>
                <FormLabel>Reef Travel Coast:</FormLabel>
                <Input
                    type="number"
                    value={formData.costTravel}
                    onChange={(e) => handleInputChange('reef', 'costTravel', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Reef Travel Time:</FormLabel>
                <Input
                    type="number"
                    value={formData.travelTime}
                    onChange={(e) => handleInputChange('reef', 'travelTime', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Reef Sites:</FormLabel>
                <Textarea
                    type="text"
                    value={formData.sites}
                    onChange={(e) => handleInputChange('reef', 'sites', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Outer Reef:</FormLabel>
                <RadioGroup onChange={(value) => handleInputChange('reef', 'outerReef', value)} value={formData.outerReef.toString()}>
                    <Stack direction="row">
                        <Radio value="true">Yes</Radio>
                        <Radio value="false">No</Radio>
                    </Stack>
                </RadioGroup>
            </FormControl>
        </>
    );
};

export default ReefForm;
