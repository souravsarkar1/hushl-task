import { Checkbox, CheckboxGroup, FormControl, FormLabel, Input, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';

const waterSportsArray = ['Wreck', 'Coral', 'Whale Sharks', 'Turtles', 'Manta rays'];

const WaterSports = ({ formData, handleCheckboxChange, handleInputChange }) => {
  return (
    <>
      <FormControl>
        <FormLabel>Sites:</FormLabel>
        <CheckboxGroup
          colorScheme="teal"
          onChange={values => handleCheckboxChange('waterSports', 'safetyFeaturesifOverwaterBungalow', values)}
          value={formData.safetyFeaturesifOverwaterBungalow}
        >
          <Wrap spacing={4} justify="flex-start">
            {waterSportsArray.map(feature => (
              <WrapItem key={feature}>
                <Checkbox value={feature}>{feature}</Checkbox>
              </WrapItem>
            ))}
          </Wrap>
        </CheckboxGroup>
      </FormControl>

      <FormControl>
        <FormLabel>Diving</FormLabel>
        <Input
          onChange={e => handleInputChange('waterSports', 'diving', e.target.value)}
          value={formData.diving}
          size="sm"
          borderRadius="md"
          placeholder="Enter the Diving"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Affiliation</FormLabel>
        <Input
          onChange={e => handleInputChange('waterSports', 'affiliation', e.target.value)}
          value={formData.affiliation}
          size="sm"
          borderRadius="md"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Sites</FormLabel>
        <Input
          onChange={e => handleInputChange('waterSports', 'sites', e.target.value)}
          value={formData.sites}
          size="sm"
          borderRadius="md"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Languages Spoken</FormLabel>
        <Input
          onChange={e => handleInputChange('waterSports', 'languagesSpoken', e.target.value)}
          value={formData.languagesSpoken}
          size="sm"
          borderRadius="md"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Submarine Tour</FormLabel>
        <Input
          onChange={e => handleInputChange('waterSports', 'submarineTour', e.target.value)}
          value={formData.submarineTour}
          size="sm"
          borderRadius="md"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Costs</FormLabel>
        <Input
          onChange={e => handleInputChange('waterSports', 'costs', e.target.value)}
          value={formData.costs}
          size="sm"
          borderRadius="md"
          type="number"
        />
      </FormControl>
      <FormControl>
        <FormLabel>maximumOccupancy</FormLabel>
        <Input
          onChange={e => handleInputChange('waterSports', 'maximumOccupancy', e.target.value)}
          value={formData.maximumOccupancy}
          size="sm"
          borderRadius="md"
          type="number"
        />
      </FormControl>
      <FormControl>
        <FormLabel>What Flotation Devices Provided</FormLabel>
        <Input
          onChange={e => handleInputChange('waterSports', 'whatFlotationDevicesProvided', e.target.value)}
          value={formData.whatFlotationDevicesProvided}
          size="sm"
          borderRadius="md"
        />
      </FormControl>
      <FormControl>
        <FormLabel>MinimumAge</FormLabel>
        <Input
          onChange={e => handleInputChange('waterSports', 'minimumAge', e.target.value)}
          value={formData.minimumAge}
          size="sm"
          borderRadius="md"
          type="number"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Equipment Provided</FormLabel>
        <Input
          onChange={e => handleInputChange('waterSports', 'equipmentProvided', e.target.value)}
          value={formData.equipmentProvided}
          size="sm"
          borderRadius="md"
        />
      </FormControl>
      <FormControl>
        <FormLabel>otherServices</FormLabel>
        <Input
          onChange={e => handleInputChange('waterSports', 'otherServices', e.target.value)}
          value={formData.otherServices}
          size="sm"
          borderRadius="md"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Name Of Surf Site</FormLabel>
        <Input
          onChange={e => handleInputChange('waterSports', 'nameOfSurfSite', e.target.value)}
          value={formData.nameOfSurfSite}
          size="sm"
          borderRadius="md"
        />
      </FormControl>
      <FormControl>
        <FormLabel>reviewsSentiments</FormLabel>
        <Input
          onChange={e => handleInputChange('waterSports', 'reviewsSentiments', e.target.value)}
          value={formData.reviewsSentiments}
          size="sm"
          borderRadius="md"
        />
      </FormControl>
    </>
  );
};

export default WaterSports;
