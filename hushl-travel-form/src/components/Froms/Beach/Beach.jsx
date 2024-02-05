// BeachForm.js
import React from 'react';
import { FormControl, FormLabel, Input, Textarea, CheckboxGroup, Checkbox, Stack } from '@chakra-ui/react';

const BeachForm = ({ formData, handleInputChange, handleCheckboxChange }) => {
    return (
        <>
            <FormControl>
                <FormLabel>Beach Length:</FormLabel>
                <Input
                    type="number"
                    value={formData.length}
                    onChange={(e) => handleInputChange('beach', 'length', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Beach Features:</FormLabel>
                <Textarea
                    type="text"
                    value={formData.features}
                    onChange={(e) => handleInputChange('beach', 'features', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Beach InstagramSpots:</FormLabel>
                <Input
                    type="text"
                    value={formData.instagramSpots}
                    onChange={(e) => handleInputChange('beach', 'instagramSpots', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Beach Tides/Rips:</FormLabel>
                <Input
                    type="text"
                    value={formData.tidesRips}
                    onChange={(e) => handleInputChange('beach', 'tidesRips', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Beach Hours of lifeguard duty:</FormLabel>
                <Input
                    type="number"
                    value={formData.hoursofLifeguardDuty}
                    onChange={(e) => handleInputChange('beach', 'hoursofLifeguardDuty', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Beach Are off beach patrolled by lifeguards:</FormLabel>
                <Input
                    type="text"
                    value={formData.areoffBeachPatrolledbyLifeguards}
                    onChange={(e) => handleInputChange('beach', 'areoffBeachPatrolledbyLifeguards', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>

            <FormControl mb={4}>
                <FormLabel>Beach Life Guards Qualifications</FormLabel>
                <CheckboxGroup
                    colorScheme="teal"
                    onChange={(values) => handleCheckboxChange('beach', 'lifeguardQualifications', values)}
                    value={formData.lifeguardQualifications}
                >
                    <Stack align="start">
                        <Checkbox value="Matric">Matric</Checkbox>
                        <Checkbox value="highersecondary">Higher secondary</Checkbox>
                        <Checkbox value="graduate">Graduate</Checkbox>
                    </Stack>
                </CheckboxGroup>
            </FormControl>
            
        </>
    );
};

export default BeachForm;
