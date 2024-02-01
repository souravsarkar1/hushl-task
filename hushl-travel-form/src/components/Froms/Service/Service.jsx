// ServicesForm.js
import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const ServicesForm = ({ formData, handleInputChange, handleCheckboxChange }) => {
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
                <Input
                    type="text"
                    value={formData.needToPreBook}
                    onChange={(e) => handleInputChange('services', 'needToPreBook', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Length:</FormLabel>
                <Input
                    type="number"
                    value={formData.length}
                    onChange={(e) => handleInputChange('services', 'length', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Depth:</FormLabel>
                <Input
                    type="number"
                    value={formData.depth}
                    onChange={(e) => handleInputChange('services', 'depth', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Lap Pool:</FormLabel>
                <Input
                    type="text"
                    value={formData.lapPool}
                    onChange={(e) => handleInputChange('services', 'lapPool', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Safety Features:</FormLabel>
                <Input
                    type="text"
                    value={formData.safetyFeatures}
                    onChange={(e) => handleInputChange('services', 'safetyFeatures', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
        </>
    );
};

export default ServicesForm;
