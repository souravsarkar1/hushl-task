import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const TransferOptionsForm = ({ formData, handleInputChange }) => {
    return (
        <>
            <FormControl>
                <FormLabel>Weather Limited:</FormLabel>
                <Input
                    type="text"
                    value={formData.weatherlimited}
                    onChange={(e) => handleInputChange('transferOptions', 'weatherlimited', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Time Limited by Transfer Type:</FormLabel>
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

export default TransferOptionsForm;
