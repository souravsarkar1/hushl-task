import React from 'react';
import { FormControl, FormLabel, Input, Radio, RadioGroup, Stack, Textarea } from '@chakra-ui/react';

const ReefForm = ({ formData, handleInputChange }) => {
  return (
    <>
      <FormControl>
        <FormLabel>Entry Points and Length of Swim(meter):</FormLabel>
        <Textarea
          type="text"
          value={formData.entryPointSandLengthofSwim}
          onChange={e => handleInputChange('reef', 'entryPointSandLengthofSwim', e.target.value)}
          size="sm"
          borderRadius="md"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Reef Accessible from Beach:</FormLabel>
        <RadioGroup
          onChange={value => handleInputChange('reef', 'accessibleFromBeach', value)}
          value={formData.accessibleFromBeach.toString()}
        >
          <Stack direction="row">
            <Radio value="true">Yes</Radio>
            <Radio value="false">No</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>House Reef Accessible by Boat:</FormLabel>
        <RadioGroup
          onChange={value => handleInputChange('reef', 'houseReefAccessiblebyBoat', value)}
          value={formData.houseReefAccessiblebyBoat.toString()}
        >
          <Stack direction="row">
            <Radio value="true">Yes</Radio>
            <Radio value="false">No</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>House Reef Accessible Cost(MRF):</FormLabel>
        <Input
          type="number"
          value={formData.houseReefAccessibleCost}
          onChange={e => handleInputChange('reef', 'houseReefAccessibleCost', e.target.value)}
          size="sm"
          borderRadius="md"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Reef Accessible by Boat Or Not:</FormLabel>
        <RadioGroup
          onChange={value => handleInputChange('reef', 'accessiblebyBoat', value)}
          value={formData.accessiblebyBoat.toString()}
        >
          <Stack direction="row">
            <Radio value="true">Yes</Radio>
            <Radio value="false">No</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Reef Travel Coast(MRF):</FormLabel>
        <Input
          type="number"
          value={formData.costTravel}
          onChange={e => handleInputChange('reef', 'costTravel', e.target.value)}
          size="sm"
          borderRadius="md"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Reef Travel Time(Hours):</FormLabel>
        <Input
          type="number"
          value={formData.travelTime}
          onChange={e => handleInputChange('reef', 'travelTime', e.target.value)}
          size="sm"
          borderRadius="md"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Reef Sites:</FormLabel>
        <Textarea
          type="text"
          value={formData.sites}
          onChange={e => handleInputChange('reef', 'sites', e.target.value)}
          size="sm"
          borderRadius="md"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Outer Reef:</FormLabel>
        <RadioGroup
          onChange={value => handleInputChange('reef', 'outerReef', value)}
          value={formData.outerReef.toString()}
        >
          <Stack direction="row">
            <Radio value="true">Yes</Radio>
            <Radio value="false">No</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Quality Of Coral</FormLabel>
        <Input
          type="text"
          value={formData.qualityOfCoral}
          onChange={e => handleInputChange('reef', 'qualityOfCoral', e.target.value)}
          size="sm"
          borderRadius="md"
        />
      </FormControl>
      <FormControl>
        <FormLabel>House Reef</FormLabel>
        <Input
          type="text"
          value={formData.houseReef}
          onChange={e => handleInputChange('reef', 'houseReef', e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Distance From Beach(meter)</FormLabel>
        <Input
          type="number"
          value={formData.distanceFromBeach}
          onChange={e => handleInputChange('reef', 'distanceFromBeach', e.target.value)}
          size="sm"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Quality Of Fish</FormLabel>
        <Input
          type="text"
          value={formData.qualityOfFish}
          onChange={e => handleInputChange('reef', 'qualityOfFish', e.target.value)}
          size="sm"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Nearest Other Reef For Good Coral</FormLabel>
        <Input
          type="text"
          value={formData.nearestOtherReefForGoodCoral}
          onChange={e => handleInputChange('reef', 'nearestOtherReefForGoodCoral', e.target.value)}
          size="sm"
        />
      </FormControl>
      <FormControl>
        <FormLabel>On Site Marine Biologist</FormLabel>
        <Input
          type="text"
          value={formData.onsiteMarineBiologist}
          onChange={e => handleInputChange('reef', 'onsiteMarineBiologist', e.target.value)}
          size="sm"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Entry Points And Length Of Swim</FormLabel>
        <Input
          type="text"
          value={formData.entryPointSandLengthofSwim}
          onChange={e => handleInputChange('reef', 'entryPointSandLengthofSwim', e.target.value)}
          size="sm"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Abundance Of Reef Sharks</FormLabel>
        <Input
          type="text"
          value={formData.abundanceOfReefSharks}
          onChange={e => handleInputChange('reef', 'abundanceOfReefSharks', e.target.value)}
          size="sm"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Reviews Sentiments</FormLabel>
        <Input
          type="text"
          value={formData.reviewsSentiments}
          onChange={e => handleInputChange('reef', 'reviewsSentiments', e.target.value)}
          size="sm"
        />
      </FormControl>
    </>
  );
};

export default ReefForm;
