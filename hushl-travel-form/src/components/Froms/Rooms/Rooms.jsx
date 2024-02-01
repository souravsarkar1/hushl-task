// RoomsForm.js
import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const RoomsForm = ({ formData, handleInputChange }) => {
    return (
        <>
            <FormControl>
                <FormLabel>Max Occupancy:</FormLabel>
                <Input
                    type="text"
                    value={formData.maxOccupancy}
                    onChange={(e) => handleInputChange('rooms', 'maxOccupancy', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Adult and Child Combinations:</FormLabel>
                <Input
                    type="text"
                    value={formData.adultAndChildCombinations}
                    onChange={(e) => handleInputChange('rooms', 'adultAndChildCombinations', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Need to Pre-Book Extra Bedding:</FormLabel>
                <Input
                    type="text"
                    value={formData.NeedtoPreBookExtraBedding}
                    onChange={(e) => handleInputChange('rooms', 'NeedtoPreBookExtraBedding', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Safety Features for Pool:</FormLabel>
                <Input
                    type="text"
                    value={formData.safetyFeaturesForPool}
                    onChange={(e) => handleInputChange('rooms', 'safetyFeaturesForPool', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Safety Features if Overwater Bungalow:</FormLabel>
                <Input
                    type="text"
                    value={formData.safetyFeaturesifOverwaterBungalow}
                    onChange={(e) => handleInputChange('rooms', 'safetyFeaturesifOverwaterBungalow', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Interconnected:</FormLabel>
                <Input
                    type="text"
                    value={formData.interconnected}
                    onChange={(e) => handleInputChange('rooms', 'interconnected', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Noise at Night:</FormLabel>
                <Input
                    type="text"
                    value={formData.noiseAtNight}
                    onChange={(e) => handleInputChange('rooms', 'noiseAtNight', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Privacy Levels Good Enough for Strict Muslim:</FormLabel>
                <Input
                    type="text"
                    value={formData.privacyLevelsGoodEnoughForStrictMuslim}
                    onChange={(e) => handleInputChange('rooms', 'privacyLevelsGoodEnoughForStrictMuslim', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Movie Systems or DVDs:</FormLabel>
                <Input
                    type="text"
                    value={formData.movieSystemsOrDVDs}
                    onChange={(e) => handleInputChange('rooms', 'movieSystemsOrDVDs', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
        </>
    );
};

export default RoomsForm;
