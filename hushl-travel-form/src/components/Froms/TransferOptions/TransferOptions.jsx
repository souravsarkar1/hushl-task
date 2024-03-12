// GymForm.js
import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const TransferOptions = ({ formData, handleInputChange }) => {
  return (
    <>
      <FormControl>
        <FormLabel>Transfer Options weather limited:</FormLabel>
        <Input
          type="text"
          value={formData.weatherlimited}
          onChange={e => handleInputChange('transferOptions', 'weatherlimited', e.target.value)}
          size="sm"
          borderRadius="md"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Time limited by transfer type(e.g. SeaPlanes can only fly in the daylight):</FormLabel>
        <Input
          type="text"
          value={formData.timeLimitedbyTransferType}
          onChange={e => handleInputChange('transferOptions', 'timeLimitedbyTransferType', e.target.value)}
          size="sm"
          borderRadius="md"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Hotel facilitates transfer booking:</FormLabel>
        <Input
          type="text"
          value={formData.hotelFacilitatesTransferBooking}
          onChange={e => handleInputChange('transferOptions', 'hotelFacilitatesTransferBooking', e.target.value)}
          size="sm"
          borderRadius="md"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Quality of boats:</FormLabel>
        <Input
          type="text"
          value={formData.qualityofBoats}
          onChange={e => handleInputChange('transferOptions', 'qualityofBoats', e.target.value)}
          size="sm"
          borderRadius="md"
        />
      </FormControl>

      <FormControl>
        <FormLabel>transferOption</FormLabel>
        <Input
          type="text"
          value={formData.transferOption}
          onChange={e => handleInputChange('transferOptions', 'transferOption', e.target.value)}
          size="sm"
        />
      </FormControl>

      <FormControl>
        <FormLabel>Boat Schedules</FormLabel>
        <Input
          type="text"
          value={formData.boatSchedules}
          onChange={e => handleInputChange('transferOptions', 'boatSchedules', e.target.value)}
          size="sm"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Seaplane Schedules</FormLabel>
        <Input
          type="text"
          value={formData.seaplaneSchedules}
          onChange={e => handleInputChange('transferOptions', 'seaplaneSchedules', e.target.value)}
          size="sm"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Seaplane Provider</FormLabel>
        <Input
          type="text"
          value={formData.seaplaneProvider}
          onChange={e => handleInputChange('transferOptions', 'seaplaneProvider', e.target.value)}
          size="sm"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Domestic Airline Schedules</FormLabel>
        <Input
          type="text"
          value={formData.domesticAirlineSchedules}
          onChange={e => handleInputChange('transferOptions', 'domesticAirlineSchedules', e.target.value)}
          size="sm"
        />
      </FormControl>

      <FormControl>
        <FormLabel>Like Lihood of Delays</FormLabel>
        <Input
          type="text"
          value={formData.likeLihoodOfDelays}
          onChange={e => handleInputChange('transferOptions', 'likeLihoodOfDelays', e.target.value)}
          size="sm"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Meet And Greet At Airport</FormLabel>
        <Input
          type="text"
          value={formData.meetAndGreetAtAirport}
          onChange={e => handleInputChange('transferOptions', 'meetAndGreetAtAirport', e.target.value)}
          size="sm"
        />
      </FormControl>
    </>
  );
};

export default TransferOptions;
