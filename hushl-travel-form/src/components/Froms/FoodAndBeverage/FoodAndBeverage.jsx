import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const FoodAndBeveragesForm = ({ formData, handleInputChange }) => {
  return (
    <>
      <FormControl>
        <FormLabel>Inclusions/Exclusions for Full or Half Board:</FormLabel>
        <Input
          type="text"
          value={formData.InclusionsOrExclusionsforFullOrhalfBoard}
          onChange={e =>
            handleInputChange('foodAndBeverage', 'InclusionsOrExclusionsforFullOrhalfBoard', e.target.value)
          }
          size="sm"
          borderRadius="md"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Extra Cost for Room Service(MRF):</FormLabel>
        <Input
          type="text"
          value={formData.extraCostForRoomService}
          onChange={e => handleInputChange('foodAndBeverage', 'extraCostForRoomService', e.target.value)}
          size="sm"
          borderRadius="md"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Number Of Bars And Names:</FormLabel>
        <Input
          type="text"
          value={formData.numberOfBarsAndNames}
          onChange={e => handleInputChange('foodAndBeverage', 'numberOfBarsAndNames', e.target.value)}
          size="sm"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Hours Of Operation:</FormLabel>
        <Input
          type="text"
          value={formData.hoursOfOperation}
          onChange={e => handleInputChange('foodAndBeverage', 'hoursOfOperation', e.target.value)}
          size="sm"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Specialties:</FormLabel>
        <Input
          type="text"
          value={formData.specialties}
          onChange={e => handleInputChange('foodAndBeverage', 'specialties', e.target.value)}
          size="sm"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Reviews Sentiments:</FormLabel>
        <Input
          type="text"
          value={formData.reviewsSentiments}
          onChange={e => handleInputChange('foodAndBeverage', 'reviewsSentiments', e.target.value)}
          size="sm"
          borderRadius="md"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Number Of Restaurants And Name:</FormLabel>
        <Input
          type="text"
          value={formData.numberOfRestaurantsandNames}
          onChange={e => handleInputChange('foodAndBeverage', 'numberOfRestaurantsandNames', e.target.value)}
          size="sm"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Types Of Cuisine:</FormLabel>
        <Input
          type="text"
          value={formData.typesOfCuisine}
          onChange={e => handleInputChange('foodAndBeverage', 'typesOfCuisine', e.target.value)}
          size="sm"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Halaal Option:</FormLabel>
        <Input
          type="text"
          value={formData.halalOption}
          onChange={e => handleInputChange('foodAndBeverage', 'halalOption', e.target.value)}
          size="sm"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Kids Menu:</FormLabel>
        <Input
          type="text"
          value={formData.kidsMenu}
          onChange={e => handleInputChange('foodAndBeverage', 'kidsMenu', e.target.value)}
          size="sm"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Room Service</FormLabel>
        <Input
          type="text"
          value={formData.roomService}
          onChange={e => handleInputChange('foodAndBeverage', 'roomService', e.target.value)}
          size="sm"
        />
      </FormControl>
      <FormControl></FormControl>
    </>
  );
};

export default FoodAndBeveragesForm;
