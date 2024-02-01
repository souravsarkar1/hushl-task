// GymForm.js
import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const GymForm = ({ formData, handleInputChange }) => {
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
                <Input
                    type="text"
                    value={formData.rangeofEquipment}
                    onChange={(e) => handleInputChange('gym', 'rangeofEquipment', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
        </>
    );
};

export default GymForm;
