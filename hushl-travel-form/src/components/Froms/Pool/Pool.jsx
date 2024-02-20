import React from 'react';
import { FormControl, FormLabel, Input, RadioGroup, HStack, Radio, CheckboxGroup, Wrap, WrapItem, Checkbox } from '@chakra-ui/react';
const poolSafetyFeatures = [
    "Pool fence with self-closing gate",
    "Lifebuoy rings",
    "Swimming lessons for guests",
    "Clear and visible depth markers",
    "Safety signage with pool rules",
    "CPR-trained staff on-site",
    "Regular pool maintenance and cleaning",
    "Non-slip pool deck surface",
    "Emergency phone or intercom near the pool area",
    "Pool alarm system for detecting motion or unauthorized entry"
  ];
const PoolForm = ({ formData, handleInputChange,handleCheckboxChange }) => {
    return (
        <>
            <FormControl>
                <FormLabel>Pool Length(meter):</FormLabel>
               
                <Input
                    type="number"
                    value={formData.length}
                    onChange={(e) => handleInputChange('pool', 'length', e.target.value)}
                    size="sm"
                    borderRadius="md"
                   
                />
               
            </FormControl>
            <FormControl>
                <FormLabel>Pool Width(meter):</FormLabel>
                <Input
                    type="number"
                    value={formData.width}
                    onChange={(e) => handleInputChange('pool', 'width', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Pool Depth(meter):</FormLabel>
                <Input
                    type="number"
                    value={formData.depth}
                    onChange={(e) => handleInputChange('pool', 'depth', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Lap Pool:</FormLabel>
                <RadioGroup
                    onChange={(value) => handleInputChange('pool', 'lapPool', value)}
                    value={formData.lapPool}
                >
                    <HStack spacing={4}>
                        <Radio value="yes">Yes</Radio>
                        <Radio value="no">No</Radio>
                    </HStack>
                </RadioGroup>
            </FormControl>
            <FormControl>
                <FormLabel>Safety Features:</FormLabel>
                <CheckboxGroup
                    colorScheme="teal"
                    onChange={(values) => handleCheckboxChange('pool', 'safetyFeatures', values)}
                    value={formData.safetyFeatures}
                >
                    <Wrap spacing={4} justify="flex-start">
                        {poolSafetyFeatures.map((feature) => (
                            <WrapItem key={feature}>
                                <Checkbox value={feature}>{feature}</Checkbox>
                            </WrapItem>
                        ))}
                    </Wrap>
                </CheckboxGroup>
            </FormControl>
        </>
    );
};

export default PoolForm;
