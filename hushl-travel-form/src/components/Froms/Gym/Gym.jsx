// GymForm.js
import React from 'react';
import {
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
const gymeEquipmentRange = [
  'Free weights',
  'Machines',
  'Running',
  'Cycling',
  'Rowing',
  'Elliptical machines',
  'Swimming pool',
  'Resistance bands',
  'Stability balls',
  'Treadmills',
  'Stationary bikes',
  'Jump ropes',
];

const GymForm = ({ formData, handleInputChange, handleCheckboxChange }) => {
  return (
    <>
      <FormControl>
        <FormLabel>Gym Quality of Equipment:</FormLabel>
        <Input
          type="text"
          value={formData.qualityOfEquipment}
          onChange={e => handleInputChange('gym', 'qualityOfEquipment', e.target.value)}
          size="sm"
          borderRadius="md"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Gym Range of Equipment:</FormLabel>
        <CheckboxGroup
          colorScheme="teal"
          onChange={values => handleCheckboxChange('gym', 'rangeofEquipment', values)}
          value={formData.rangeofEquipment}
        >
          <Wrap spacing={4} justify="flex-start">
            {gymeEquipmentRange.map(feature => (
              <WrapItem key={feature}>
                <Checkbox value={feature}>{feature}</Checkbox>
              </WrapItem>
            ))}
          </Wrap>
        </CheckboxGroup>
      </FormControl>
      <FormControl>
        <FormLabel> SPA Pre Booking Advised:</FormLabel>
        <RadioGroup
          onChange={value => handleInputChange('gym', 'spaPreBookingAdvised', value)}
          value={formData.spaPreBookingAdvised.toString()}
        >
          <Stack direction="row">
            <Radio value={'true'}>Yes</Radio>
            <Radio value={'false'}>No</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Classes:</FormLabel>
        <Input
          type="text"
          value={formData.classes}
          onChange={e => handleInputChange('gym', 'classes', e.target.value)}
          size="sm"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Specialist Machines</FormLabel>
        <Input
          type="text"
          value={formData.specialistMachines}
          onChange={e => handleInputChange('gym', 'specialistMachines', e.target.value)}
          size="sm"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Trainer On Site</FormLabel>
        <Input
          type="text"
          value={formData.trainerOnSite}
          onChange={e => handleInputChange('gym', 'trainerOnSite', e.target.value)}
          size="sm"
        />
      </FormControl>
      <FormLabel>cost</FormLabel>
      <Input
        type="number"
        value={formData.cost}
        onChange={e => handleInputChange('gym', 'cost', e.target.value)}
        size="sm"
      />
      <FormControl>
        <FormLabel>openingTimes</FormLabel>
        <Input
          type="time"
          value={formData.openingTimes}
          onChange={e => handleInputChange('gym', 'openingTimes', e.target.value)}
          size="sm"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Reviews Sentiments</FormLabel>
        <Input
          type="text"
          value={formData.reviewsSentiments}
          onChange={e => handleInputChange('gym', 'reviewsSentiments', e.target.value)}
          size="sm"
        />
      </FormControl>
      <FormControl></FormControl>
    </>
  );
};

export default GymForm;
