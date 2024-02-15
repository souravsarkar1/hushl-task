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
                <FormLabel>transferOptions Range of Equipment:</FormLabel>
                <Input
                    type="text"
                    value={formData.timeLimitedbyTransferType}
                    onChange={(e) => handleInputChange('transferOptions', 'timeLimitedbyTransferType', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
        </>
    );
};

export default TransferOptions;
