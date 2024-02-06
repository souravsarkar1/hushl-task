// HealthAndSafetyForm.js
import React from 'react';
import { FormControl, FormLabel, Input, Textarea, RadioGroup, Radio,  Stack } from '@chakra-ui/react';
import Rating from '../../Rating/Rating';



const HealthAndSafetyForm = ({ formData, handleInputChange, handleCheckboxChange, handleMediaDataChange }) => {
    return (
        <>
            <FormControl>
                <FormLabel>Last Review Date:</FormLabel>
                <Input
                    type="date"
                    value={formData.lastReviewDate}
                    onChange={(e) => handleInputChange('healthSafety', 'lastReviewDate', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Rating:</FormLabel>
                <Rating value={formData.rating} onChange={(newRating) => handleInputChange('healthSafety', 'rating', newRating)} />
            </FormControl>
            <FormControl>
                <FormLabel>Comments:</FormLabel>
                <Textarea
                    id="comments"
                    name="comments"
                    value={formData.comments}
                    onChange={(e) => handleInputChange('healthSafety', 'comments', e.target.value)}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Is There Any Doctor On Site:</FormLabel>
                <RadioGroup onChange={(value) => handleInputChange('healthSafety', 'doctorOnSite', value)} value={formData.doctorOnSite.toString()}>
                    <Stack direction="row">
                        <Radio value="true">Yes</Radio>
                        <Radio value="false">No</Radio>
                    </Stack>
                </RadioGroup>
            </FormControl>
            {/* Add other health and safety form elements here */}
           
        </>
    );
};

export default HealthAndSafetyForm;
