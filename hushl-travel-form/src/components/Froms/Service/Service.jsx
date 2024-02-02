import React from 'react';
import { FormControl, FormLabel, Input, Radio, RadioGroup, Stack, CheckboxGroup, Checkbox, Wrap, WrapItem } from '@chakra-ui/react';

const ServicesForm = ({ formData, handleInputChange, handleCheckboxChange }) => {
    const commonSafetyFeatures = [
        'Lifeguards on duty',
        'First aid kit available',
        'Emergency phone',
        'Pool depth markers',
        'Non-slip surfaces',
    ];

    return (
        <>
            <FormControl>
                <FormLabel>Training or Qualifications:</FormLabel>
                <Input
                    type="text"
                    value={formData.trainingOrQualifications}
                    onChange={(e) => handleInputChange('services', 'trainingOrQualifications', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Need to Pre-Book:</FormLabel>
                <RadioGroup onChange={(value) => handleInputChange('services', 'needToPreBook', value)} value={formData.needToPreBook.toString()}>
                    <Stack direction="row">
                        <Radio value="true">Yes</Radio>
                        <Radio value="false">No</Radio>
                    </Stack>
                </RadioGroup>
            </FormControl>
            <FormControl>
                <FormLabel>Safety Features:</FormLabel>
                <CheckboxGroup
                    colorScheme="teal"
                    onChange={(values) => handleCheckboxChange('services', 'safetyFeatures', values)}
                    value={formData.safetyFeatures}
                >
                    <Wrap spacing={4} justify="flex-start">
                        {commonSafetyFeatures.map((feature) => (
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

export default ServicesForm;
