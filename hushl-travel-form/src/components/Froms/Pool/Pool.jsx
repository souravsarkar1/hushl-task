import React from 'react';
import { FormControl, FormLabel, Input, RadioGroup, HStack, Radio } from '@chakra-ui/react';

const PoolForm = ({ formData, handleInputChange }) => {
    return (
        <>
            <FormControl>
                <FormLabel>Length:</FormLabel>
                <Input
                    type="number"
                    value={formData.length}
                    onChange={(e) => handleInputChange('pool', 'length', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Width:</FormLabel>
                <Input
                    type="number"
                    value={formData.depth}
                    onChange={(e) => handleInputChange('pool', 'depth', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Lap Pool:</FormLabel>
                <RadioGroup
                    onChange={(value) => handleInputChange('pool', 'lapPool', value)}
                    value={formData.lapPool}
                >
                    <HStack spacing={4}>
                        <Radio value="yes">Yes</Radio>
                        <Radio value="no">No</Radio>
                    </HStack>
                </RadioGroup>
            </FormControl>
        </>
    );
};

export default PoolForm;
