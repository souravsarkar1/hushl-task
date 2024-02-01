// KidsClubForm.js
import React from 'react';
import { FormControl, FormLabel, Input, CheckboxGroup, Checkbox, Stack } from '@chakra-ui/react';

const KidsClubForm = ({ formData, handleInputChange, handleCheckboxChange }) => {
    return (
        <>
            <FormControl>
                <FormLabel>Ratio of Staff to Children:</FormLabel>
                <Input
                    type="number"
                    value={formData.ratioofStafftoChildren}
                    onChange={(e) => handleInputChange('kidsClub', 'ratioofStafftoChildren', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Staff Qualifications</FormLabel>
                <CheckboxGroup
                    colorScheme="teal"
                    onChange={(values) => handleCheckboxChange('kidsClub', 'staffQualifications', values)}
                    value={formData.staffQualifications}
                >
                    <Stack align="start">
                        <Checkbox value="FirstAid">First Aid</Checkbox>
                        <Checkbox value="ChildCareCertification">Child Care Certification</Checkbox>
                        <Checkbox value="CPR">CPR</Checkbox>
                    </Stack>
                </CheckboxGroup>
            </FormControl>
            <FormControl>
                <FormLabel>Languages Spoken:</FormLabel>
                <Input
                    type="text"
                    value={formData.languagesSpoken}
                    onChange={(e) => handleInputChange('kidsClub', 'languagesSpoken', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
        </>
    );
};

export default KidsClubForm;
