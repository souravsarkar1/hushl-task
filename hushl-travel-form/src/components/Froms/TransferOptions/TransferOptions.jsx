// GymForm.js
import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const TransferOptions = ({ formData, handleInputChange }) => {
    return (
        <>
            <FormControl>
                <FormLabel>Transfer Options weather limited:</FormLabel>
                <Input
                    type="text"
                    value={formData.weatherlimited}
                    onChange={(e) => handleInputChange('transferOptions', 'weatherlimited', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Time limited by transfer type(e.g. SeaPlanes can only fly in the daylight):</FormLabel>
                <Input
                    type="text"
                    value={formData.timeLimitedbyTransferType}
                    onChange={(e) => handleInputChange('transferOptions', 'timeLimitedbyTransferType', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Hotel facilitates transfer booking:</FormLabel>
                <Input
                    type="text"
                    value={formData.hotelFacilitatesTransferBooking}
                    onChange={(e) => handleInputChange('transferOptions', 'hotelFacilitatesTransferBooking', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Quality of boats:</FormLabel>
                <Input
                    type="text"
                    value={formData.qualityofBoats}
                    onChange={(e) => handleInputChange('transferOptions', 'qualityofBoats', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
        </>
    );
};

export default TransferOptions;
