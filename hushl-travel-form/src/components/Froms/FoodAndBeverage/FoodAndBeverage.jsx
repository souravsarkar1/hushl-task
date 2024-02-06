import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const FoodAndBeveragesForm = ({ formData, handleInputChange }) => {
    console.log({formData});
    return (
        <>
            <FormControl>
                <FormLabel>Inclusions/Exclusions for Full or Half Board:</FormLabel>
                <Input
                    type="text"
                    value={formData.InclusionsOrExclusionsforFullOrhalfBoard}
                    onChange={(e) => handleInputChange('foodAndBeverage', 'InclusionsOrExclusionsforFullOrhalfBoard', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Extra Cost for Room Service:</FormLabel>
                <Input
                    type="text"
                    value={formData.extraCostForRoomService}
                    onChange={(e) => handleInputChange('foodAndBeverage', 'extraCostForRoomService', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
        </>
    );
};

export default FoodAndBeveragesForm;
