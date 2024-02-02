import React from 'react';
import { FormControl, FormLabel, Input, CheckboxGroup, Checkbox, Stack, Wrap, WrapItem } from '@chakra-ui/react';

const KidsClubForm = ({ formData, handleInputChange, handleCheckboxChange }) => {
    const languagesList = [
        'English', 'Mandarin', 'Hindi', 'Spanish', 'French',
        'Arabic', 'Bengali', 'Russian', 'Portuguese', 'Urdu'
    ];

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
            <FormControl mb={4}>
                <FormLabel>Languages Spoken:</FormLabel>
                <CheckboxGroup
                    colorScheme="teal"
                    onChange={(values) => handleCheckboxChange('kidsClub', 'languagesSpoken', values)}
                    value={formData.languagesSpoken}
                >
                    <Wrap spacing={4} justify="flex-start">
                        {languagesList.map((language) => (
                            <WrapItem key={language}>
                                <Checkbox value={language}>{language}</Checkbox>
                            </WrapItem>
                        ))}
                    </Wrap>
                </CheckboxGroup>
            </FormControl>
        </>
    );
};

export default KidsClubForm;
