import React from 'react';
import { FormControl, FormLabel, Textarea, Checkbox, CheckboxGroup, HStack, Input } from '@chakra-ui/react';

const PropertyInformation = ({ propertyData, onPropertyDataChange }) => {
  const handleStateOfRepairChange = e => {
    onPropertyDataChange({ ...propertyData, stateOfRepair: e.target.value });
  };

  const handleScopeChange = selectedScopes => {
    onPropertyDataChange({ ...propertyData, scopeOfRenovation: selectedScopes });
  };

  const handlePropertyTypeChange = e => {
    onPropertyDataChange({ ...propertyData, propertyType: e.target.value });
  };

  const handleChangeData = (field, e) => {
    onPropertyDataChange({ ...propertyData, [field]: e.target.value });
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
        <CheckboxGroup colorScheme="teal" onChange={handleScopeChange} value={propertyData.scopeOfRenovation}>
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

      <FormControl mb={4}>
        <FormLabel>Property Type</FormLabel>
        <Input
          placeholder="Enter property type"
          value={propertyData.propertyType}
          onChange={handlePropertyTypeChange}
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Rating</FormLabel>
        <Input
          type="number"
          placeholder="Enter rating"
          value={propertyData.rating}
          onChange={e => handleChangeData('rating', e)}
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Number Of Rooms</FormLabel>
        <Input
          type="number"
          placeholder="Enter number of rooms"
          value={propertyData.numberofRooms}
          onChange={e => handleChangeData('numberofRooms', e)}
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>LGBTQI Friendly</FormLabel>
        <Input
          placeholder="Enter LGBTQI friendly status"
          value={propertyData.LGBTQIFriendly}
          onChange={e => handleChangeData('LGBTQIFriendly', e)}
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Property Design</FormLabel>
        <Input
          placeholder="Enter property design"
          value={propertyData.Design}
          onChange={e => handleChangeData('Design', e)}
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Adult Only</FormLabel>
        <Input
          placeholder="Enter adult-only status"
          value={propertyData.isAdultOnly}
          onChange={e => handleChangeData('isAdultOnly', e)}
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Property Map</FormLabel>
        <Input
          placeholder="Enter property map URL"
          value={propertyData.propertymap}
          onChange={e => handleChangeData('propertymap', e)}
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Last Renovated</FormLabel>
        <Input
          type="date"
          placeholder="Enter last renovated date"
          value={propertyData.lastRenovated}
          onChange={e => handleChangeData('lastRenovated', e)}
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Third Party Reviews/Awards</FormLabel>
        <Input
          placeholder="Enter third-party reviews/awards"
          value={propertyData.thirdPartyReviewsaorAwards}
          onChange={e => handleChangeData('thirdPartyReviewsaorAwards', e)}
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Wi-Fi</FormLabel>
        <Input placeholder="Enter Wi-Fi status" value={propertyData.wifi} onChange={e => handleChangeData('wifi', e)} />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Unique Selling Points</FormLabel>
        <Input
          placeholder="Enter unique selling points"
          value={propertyData.uniqueSellingPoints}
          onChange={e => handleChangeData('uniqueSellingPoints', e)}
        />
      </FormControl>
    </div>
  );
};

export default PropertyInformation;
