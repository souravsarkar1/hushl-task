// ReefForm.js
import React from 'react';
import { FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';

const ReefForm = ({ formData, handleInputChange }) => {
    return (
        <>
            <FormControl>
                <FormLabel>Reef Entry Point Sand Length of Swim:</FormLabel>
                <Input
                    type="text"
                    value={formData.entryPointSandLengthofSwim}
                    onChange={(e) => handleInputChange('reef', 'entryPointSandLengthofSwim', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Reef Accessible from Beach:</FormLabel>
                <Textarea
                    type="text"
                    value={formData.accessibleFromBeach}
                    onChange={(e) => handleInputChange('reef', 'accessibleFromBeach', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Reef House Reef Accessible by Boat:</FormLabel>
                <Input
                    type="text"
                    value={formData.houseReefAccessiblebyBoat}
                    onChange={(e) => handleInputChange('reef', 'houseReefAccessiblebyBoat', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
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
                <FormLabel>Reef Accessible by Boat Cost and Travel Time:</FormLabel>
                <Textarea
                    type="text"
                    value={formData.accessiblebyBoatCostTravelTime}
                    onChange={(e) => handleInputChange('reef', 'accessiblebyBoatCostTravelTime', e.target.value)}
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
        </>
    );
};

export default ReefForm;
