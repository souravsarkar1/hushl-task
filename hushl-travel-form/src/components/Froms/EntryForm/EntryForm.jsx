// GymForm.js
import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const EntryFrom = ({ formData, handleInputChange }) => {
  return (
    <>
      <FormControl>
        <FormLabel>Hotel Name</FormLabel>
        <Input
          type="text"
          value={formData.name}
          onChange={e => handleInputChange('hotel', 'name', e.target.value)}
          size="sm"
          borderRadius="md"
          placeholder="Enter the Hotel Name"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Address:</FormLabel>
        <Input
          type="text"
          value={formData.address}
          onChange={e => handleInputChange('hotel', 'address', e.target.value)}
          size="sm"
          borderRadius="md"
          placeholder="Enter the Address"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Hotel Website:</FormLabel>
        <Input
          type="text"
          value={formData.website}
          onChange={e => handleInputChange('hotel', 'website', e.target.value)}
          size="sm"
          borderRadius="md"
          placeholder="Enter the Address"
        />
      </FormControl>
    </>
  );
};

export default EntryFrom;
