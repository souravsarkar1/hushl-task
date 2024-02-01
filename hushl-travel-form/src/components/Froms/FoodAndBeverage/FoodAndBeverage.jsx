import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const FoodAndBeveragesForm = ({ formData, handleInputChange }) => {
    return (
        <>
            <FormControl>
                <FormLabel>Quality of Equipment:</FormLabel>
                <Input
                    type="text"
                    value={formData.qualityOfEquipment}
                    onChange={(e) => handleInputChange('foodAndBeverages', 'qualityOfEquipment', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Range of Equipment:</FormLabel>
                <Input
                    type="text"
                    value={formData.rangeofEquipment}
                    onChange={(e) => handleInputChange('foodAndBeverages', 'rangeofEquipment', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Inclusions/Exclusions for Full or Half Board:</FormLabel>
                <Input
                    type="text"
                    value={formData.InclusionsOrExclusionsforFullOrhalfBoard}
                    onChange={(e) => handleInputChange('foodAndBeverages', 'InclusionsOrExclusionsforFullOrhalfBoard', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Extra Cost for Room Service:</FormLabel>
                <Input
                    type="text"
                    value={formData.extraCostForRoomService}
                    onChange={(e) => handleInputChange('foodAndBeverages', 'extraCostForRoomService', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
        </>
    );
};

export default FoodAndBeveragesForm;
