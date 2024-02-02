// PropertyInformation.js
import React from 'react';
import { FormControl, FormLabel, Textarea, Checkbox, CheckboxGroup, HStack } from '@chakra-ui/react';

const PropertyInformation = ({ propertyData, onPropertyDataChange }) => {
  const handleStateOfRepairChange = (e) => {
    onPropertyDataChange({ ...propertyData, stateOfRepair: e.target.value });
  };

  const handleScopeChange = (selectedScopes) => {
    onPropertyDataChange({ ...propertyData, scopeOfRenovation: selectedScopes });
  };

  return (
    <div>
      <FormControl mb={4}>
        <FormLabel>State of Repair</FormLabel>
        <Textarea
          placeholder="Enter state of repair"
          value={propertyData.stateOfRepair}
          onChange={handleStateOfRepairChange}
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Scope of Renovation</FormLabel>
        <CheckboxGroup
          colorScheme="teal"
          onChange={handleScopeChange}
          value={propertyData.scopeOfRenovation}
        >
          <HStack align="start">
            <Checkbox value="Soft">Soft</Checkbox>
            <Checkbox value="Full">Full</Checkbox>
            <Checkbox value="Rooms">Rooms</Checkbox>
            <Checkbox value="Bathrooms">Bathrooms</Checkbox>
            <Checkbox value="Amenities">Amenities</Checkbox>
            <Checkbox value="CommonAreas">Common Areas</Checkbox>
          </HStack>
        </CheckboxGroup>
      </FormControl>
    </div>
  );
};

export default PropertyInformation;
