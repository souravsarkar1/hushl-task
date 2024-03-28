import React, { useState } from 'react';
import { FormControl, FormLabel, Input, IconButton, InputRightElement, InputGroup } from '@chakra-ui/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const EntryFrom = ({ formData, handleInputChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <FormControl>
        <FormLabel>Hotel Name</FormLabel>
        <Input
          type="text"
          value={formData.name}
          onChange={e => handleInputChange('hotel', 'name', e.target.value)}
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
          borderRadius="md"
          placeholder="Enter the Website"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Hotel UserName:</FormLabel>
        <Input
          type="text"
          value={formData.userName}
          onChange={e => handleInputChange('hotel', 'userName', e.target.value)}
          borderRadius="md"
          placeholder="Example: hotel@username"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Hotel Password:</FormLabel>
        <InputGroup>
          <Input
            pr="4.5rem"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={e => handleInputChange('hotel', 'password', e.target.value)}
            borderRadius="md"
            placeholder="Example: Hotel@pass123"
          />
          <InputRightElement width="4.5rem">
            <IconButton
              icon={showPassword ? <FaEyeSlash /> : <FaEye />}
              onClick={togglePasswordVisibility}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              variant="ghost"
            />
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </>
  );
};

export default EntryFrom;
