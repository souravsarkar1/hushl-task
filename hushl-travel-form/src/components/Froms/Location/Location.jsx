import React from 'react';
import { Button, Center, FormControl, FormLabel, Input } from '@chakra-ui/react';

const LocationForm = ({ formData, handleInputChange }) => {
  return (
    <>
      <FormControl>
        <FormLabel>Latitude:</FormLabel>
        <Input
          type="text"
          value={formData.latitude}
          onChange={e => handleInputChange('location', 'latitude', e.target.value)}
          size="sm"
          borderRadius="md"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Longitude:</FormLabel>
        <Input
          type="text"
          value={formData.longitude}
          onChange={e => handleInputChange('location', 'longitude', e.target.value)}
          size="sm"
          borderRadius="md"
        />
      </FormControl>
      <FormControl>
        <FormLabel>City:</FormLabel>
        <Input
          type="text"
          value={formData.city}
          onChange={e => handleInputChange('location', 'city', e.target.value)}
          size="sm"
          borderRadius="md"
        />
      </FormControl>
      <Center m={5}>
        <Button colorScheme="teal">Check</Button>
      </Center>
      <FormControl>
        <FormLabel>Road and Number:</FormLabel>
        <Input
          type="text"
          value={formData.roadAndNumber}
          onChange={e => handleInputChange('location', 'roadAndNumber', e.target.value)}
          size="sm"
          borderRadius="md"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Suburb:</FormLabel>
        <Input
          type="text"
          value={formData.suburb}
          onChange={e => handleInputChange('location', 'suburb', e.target.value)}
          size="sm"
          borderRadius="md"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Post Code:</FormLabel>
        <Input
          type="text"
          value={formData.postCode}
          onChange={e => handleInputChange('location', 'postCode', e.target.value)}
          size="sm"
          borderRadius="md"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Country:</FormLabel>
        <Input
          type="text"
          value={formData.country}
          onChange={e => handleInputChange('location', 'country', e.target.value)}
          size="sm"
          borderRadius="md"
        />
      </FormControl>
      <FormControl>
        <FormLabel>State:</FormLabel>
        <Input
          type="text"
          value={formData.state}
          onChange={e => handleInputChange('location', 'state', e.target.value)}
          size="sm"
          borderRadius="md"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Atoll:</FormLabel>
        <Input
          type="text"
          value={formData.atoll}
          onChange={e => handleInputChange('location', 'atoll', e.target.value)}
          size="sm"
          borderRadius="md"
        />
      </FormControl>
    </>
  );
};

export default LocationForm;
