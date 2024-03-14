import React from 'react';
import { FormControl, FormLabel, Input, CheckboxGroup, Checkbox, Wrap, WrapItem } from '@chakra-ui/react';

const KidsClubForm = ({ formData, handleInputChange, handleCheckboxChange }) => {
  const languagesList = [
    'English',
    'Mandarin',
    'Hindi',
    'Spanish',
    'French',
    'Arabic',
    'Bengali',
    'Russian',
    'Portuguese',
    'Urdu',
  ];

  return (
    <>
      <FormControl>
        <FormLabel>Ratio of Staff to Children:</FormLabel>
        <Input
          type="number"
          value={formData.ratioofStafftoChildren}
          onChange={e => handleInputChange('kidsClub', 'ratioofStafftoChildren', e.target.value)}
          size="sm"
          borderRadius="md"
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Staff Qualifications</FormLabel>
        <CheckboxGroup
          colorScheme="teal"
          onChange={values => handleCheckboxChange('kidsClub', 'staffQualifications', values)}
          value={formData.staffQualifications}
        >
          <Wrap spacing={4} justify="flex-start">
            <WrapItem>
              <Checkbox value="FirstAid">First Aid</Checkbox>
            </WrapItem>
            <WrapItem>
              <Checkbox value="ChildCareCertification">Child Care Certification</Checkbox>
            </WrapItem>
            <WrapItem>
              <Checkbox value="CPR">CPR</Checkbox>
            </WrapItem>
            <WrapItem>
              <Checkbox value="Other">Other</Checkbox>
            </WrapItem>
          </Wrap>
        </CheckboxGroup>
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Languages Spoken:</FormLabel>
        <CheckboxGroup
          colorScheme="teal"
          onChange={values => handleCheckboxChange('kidsClub', 'languagesSpoken', values)}
          value={formData.languagesSpoken}
        >
          <Wrap spacing={4} justify="flex-start">
            {languagesList.map(language => (
              <WrapItem key={language}>
                <Checkbox value={language}>{language}</Checkbox>
              </WrapItem>
            ))}
          </Wrap>
        </CheckboxGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Time(hours):</FormLabel>
        <Input
          type="number"
          value={formData.hours}
          onChange={e => handleInputChange('kidsClub', 'hours', e.target.value)}
          size="sm"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Cost</FormLabel>
        <Input
          type="number"
          value={formData.cost}
          onChange={e => handleInputChange('kidsClub', 'cost', e.target.value)}
          size="sm"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Pre Bbooking Advised</FormLabel>
        <Input
          type="text"
          value={formData.preBbookingAdvised}
          onChange={e => handleInputChange('kidsClub', 'preBbookingAdvised', e.target.value)}
          size="sm"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Ages Accommodated</FormLabel>
        <Input
          type="text"
          value={formData.agesAccommodated}
          onChange={e => handleInputChange('kidsClub', 'agesAccommodated', e.target.value)}
          size="sm"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Activities</FormLabel>
        <Input
          type="text"
          value={formData.activities}
          onChange={e => handleInputChange('kidsClub', 'activities', e.target.value)}
          size="sm"
        />
      </FormControl>
    </>
  );
};

export default KidsClubForm;
