// RoomsForm.js
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
  Textarea,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

const RoomsForm = ({ formData, handleInputChange, handleCheckboxChange }) => {
  const commonSafetyFeaturesOverwaterBungalow = [
    'Safety railing',
    'Life jackets',
    'Emergency exit plan',
    'Fire extinguisher',
    'First aid kit',
  ];
  const poolSafetyFeatures = [
    'Pool fence with self-closing gate',
    'Lifebuoy rings',
    'Swimming lessons for guests',
    'Clear and visible depth markers',
    'Safety signage with pool rules',
    'CPR-trained staff on-site',
    'Regular pool maintenance and cleaning',
    'Non-slip pool deck surface',
    'Emergency phone or intercom near the pool area',
    'Pool alarm system for detecting motion or unauthorized entry',
  ];
  const safetyFeatures = [
    'Sturdy railing',
    'Safety netting',
    'Non-slip flooring',
    'Warning signs',
    'Regular maintenance checks',
  ];
  return (
    <div>
      <FormControl>
        <FormLabel>Max Occupancy Adult:</FormLabel>
        <Input
          type="number"
          value={formData.maxOccupancyAdult}
          onChange={e => handleInputChange('rooms', 'maxOccupancyAdult', e.target.value)}
          size="sm"
          borderRadius="md"
        />
        <FormLabel>Max Occupancy Child:</FormLabel>
        <Input
          type="number"
          value={formData.maxOccupancyChild}
          onChange={e => handleInputChange('rooms', 'maxOccupancyChild', e.target.value)}
          size="sm"
          borderRadius="md"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Need to Pre-Book Extra Bedding:</FormLabel>

        <RadioGroup
          onChange={value => handleInputChange('rooms', 'NeedtoPreBookExtraBedding', value)}
          value={formData.NeedtoPreBookExtraBedding.toString()}
        >
          <Stack direction="row">
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Safety Features if Overwater Bungalow:</FormLabel>
        <CheckboxGroup
          colorScheme="teal"
          onChange={values => handleCheckboxChange('rooms', 'safetyFeaturesifOverwaterBungalow', values)}
          value={formData.safetyFeaturesifOverwaterBungalow}
        >
          <Wrap spacing={4} justify="flex-start">
            {commonSafetyFeaturesOverwaterBungalow.map(feature => (
              <WrapItem key={feature}>
                <Checkbox value={feature}>{feature}</Checkbox>
              </WrapItem>
            ))}
          </Wrap>
        </CheckboxGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Safety Features of Balcony:</FormLabel>
        <CheckboxGroup
          colorScheme="teal"
          onChange={values => handleCheckboxChange('rooms', 'safetyFeaturesForBalcony', values)}
          value={formData.safetyFeaturesForBalcony}
        >
          <Wrap spacing={4} justify="flex-start">
            {safetyFeatures.map(feature => (
              <WrapItem key={feature}>
                <Checkbox value={feature}>{feature}</Checkbox>
              </WrapItem>
            ))}
          </Wrap>
        </CheckboxGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Safety Features For Poool:</FormLabel>
        <CheckboxGroup
          colorScheme="teal"
          onChange={values => handleCheckboxChange('rooms', 'safetyFeaturesForPool', values)}
          value={formData.safetyFeaturesForPool}
        >
          <Wrap spacing={4} justify="flex-start">
            {poolSafetyFeatures.map(feature => (
              <WrapItem key={feature}>
                <Checkbox value={feature}>{feature}</Checkbox>
              </WrapItem>
            ))}
          </Wrap>
        </CheckboxGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Interconnected:</FormLabel>
        <Input
          type="text"
          value={formData.interconnected}
          onChange={e => handleInputChange('rooms', 'interconnected', e.target.value)}
          size="sm"
          borderRadius="md"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Comments on how privacy is impacted:</FormLabel>
        <Textarea
          type="text"
          value={formData.commentsOnHowPrivacyIsImpacted}
          onChange={e => handleInputChange('rooms', 'commentsOnHowPrivacyIsImpacted', e.target.value)}
          size="sm"
          borderRadius="md"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Noise at Night:</FormLabel>
        <RadioGroup
          onChange={value => handleInputChange('rooms', 'noiseAtNight', value)}
          value={formData.noiseAtNight.toString()}
        >
          <Stack direction="row">
            <Radio value="veryLow">Very Low</Radio>
            <Radio value="low">Low</Radio>
            <Radio value="none">None</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Privacy Levels Good Enough for Strict Muslim:</FormLabel>
        <RadioGroup
          onChange={value => handleInputChange('rooms', 'privacyLevelsGoodEnoughForStrictMuslim', value)}
          value={formData.privacyLevelsGoodEnoughForStrictMuslim.toString()}
        >
          <Stack direction="row">
            <Radio value="true">Yes</Radio>
            <Radio value="false">No</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Movie Systems or DVDs:</FormLabel>
        <RadioGroup
          onChange={value => handleInputChange('rooms', 'movieSystemsOrDVDs', value)}
          value={formData.movieSystemsOrDVDs.toString()}
        >
          <Stack direction="row">
            <Radio value="true">Yes</Radio>
            <Radio value="false">No</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Room Name:</FormLabel>
        <Input
          type="text"
          value={formData.roomName}
          onChange={e => handleInputChange('rooms', 'roomName', e.target.value)}
          size="sm"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Room Description:</FormLabel>
        <Input
          type="text"
          value={formData.roomDescription}
          onChange={e => handleInputChange('rooms', 'roomDescription', e.target.value)}
          size="sm"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Reviews Sentiments:</FormLabel>
        <Input
          type="text"
          value={formData.reviewsSentiments}
          onChange={e => handleInputChange('rooms', 'reviewsSentiments', e.target.value)}
          size="sm"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Room Size:</FormLabel>
        <Input
          type="text"
          value={formData.roomSize}
          onChange={e => handleInputChange('rooms', 'roomSize', e.target.value)}
          size="sm"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Child Age Category:</FormLabel>
        <Input
          type="text"
          value={formData.childAgeCategory}
          onChange={e => handleInputChange('rooms', 'childAgeCategory', e.target.value)}
          size="sm"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Cot Allowed and Cost:</FormLabel>
        <Input
          type="text"
          value={formData.cotAllowedAndcost}
          onChange={e => handleInputChange('rooms', 'cotAllowedAndcost', e.target.value)}
          size="sm"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Rollaway Bed Allowed and Cost:</FormLabel>
        <Input
          type="text"
          value={formData.rollawayBedAllowedAndCost}
          onChange={e => handleInputChange('rooms', 'rollawayBedAllowedAndCost', e.target.value)}
          size="sm"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Room Layout Map:</FormLabel>
        <Input
          type="text"
          value={formData.roomLayoutMap}
          onChange={e => handleInputChange('rooms', 'roomLayoutMap', e.target.value)}
          size="sm"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Separate Toilet:</FormLabel>
        <RadioGroup
          onChange={value => handleInputChange('rooms', 'separateToilet', value)}
          value={formData.separateToilet.toString()}
        >
          <Stack direction="row">
            <Radio value="true">Yes</Radio>
            <Radio value="false">No</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Separate Living Room Without Door:</FormLabel>
        <RadioGroup
          onChange={value => handleInputChange('rooms', 'separateLivinRoomwoutDoor', value)}
          value={formData.separateLivinRoomwoutDoor.toString()}
        >
          <Stack direction="row">
            <Radio value="true">Yes</Radio>
            <Radio value="false">No</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Need to Pre-Book Extra Bedding (Limited Availability):</FormLabel>
        <RadioGroup
          onChange={value => handleInputChange('rooms', 'needToPreBookExtrabedding', value)}
          value={formData.needToPreBookExtrabedding.toString()}
        >
          <Stack direction="row">
            <Radio value="true">Yes</Radio>
            <Radio value="false">No</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Number of Bathrooms:</FormLabel>
        <Input
          type="number"
          value={formData.numberOfBathrooms}
          onChange={e => handleInputChange('rooms', 'numberOfBathrooms', e.target.value)}
          size="sm"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Bath:</FormLabel>
        <Checkbox isChecked={formData.bath} onChange={e => handleInputChange('rooms', 'bath', e.target.checked)}>
          Bath
        </Checkbox>
      </FormControl>
      <FormControl>
        <FormLabel>Free WiFi:</FormLabel>
        <Checkbox
          isChecked={formData.freeWifi}
          onChange={e => handleInputChange('rooms', 'freeWifi', e.target.checked)}
        >
          Free WiFi
        </Checkbox>
      </FormControl>
      <FormControl>
        <FormLabel>Balcony or Patio:</FormLabel>
        <Checkbox
          isChecked={formData.balconyPatio}
          onChange={e => handleInputChange('rooms', 'balconyPatio', e.target.checked)}
        >
          Balcony or Patio
        </Checkbox>
      </FormControl>
      <FormControl>
        <FormLabel>Private Pool:</FormLabel>
        <Checkbox
          isChecked={formData.privatePool}
          onChange={e => handleInputChange('rooms', 'privatePool', e.target.checked)}
        >
          Private Pool
        </Checkbox>
      </FormControl>
      <FormControl>
        <FormLabel>Dimensions of Pool:</FormLabel>
        <Input
          type="text"
          value={formData.dimensionsOfPool}
          onChange={e => handleInputChange('rooms', 'dimensionsOfPool', e.target.value)}
          size="sm"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Pool Heated:</FormLabel>
        <RadioGroup
          onChange={value => handleInputChange('rooms', 'poolHeated', value)}
          value={formData.poolHeated.toString()}
        >
          <Stack direction="row">
            <Radio value="true">Yes</Radio>
            <Radio value="false">No</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Overwater:</FormLabel>
        <RadioGroup
          onChange={value => handleInputChange('rooms', 'overwater', value)}
          value={formData.overwater.toString()}
        >
          <Stack direction="row">
            <Radio value="true">Yes</Radio>
            <Radio value="false">No</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Beach Access:</FormLabel>
        <Checkbox
          isChecked={formData.beachAccess}
          onChange={e => handleInputChange('rooms', 'beachAccess', e.target.checked)}
        >
          Beach Access
        </Checkbox>
      </FormControl>
      <FormControl>
        <FormLabel>TV:</FormLabel>
        <Checkbox isChecked={formData.isTV} onChange={e => handleInputChange('rooms', 'isTV', e.target.checked)}>
          TV
        </Checkbox>
      </FormControl>
      <FormControl>
        <FormLabel>Iron & Ironing Board:</FormLabel>
        <Checkbox
          isChecked={formData.ironIroningBoard}
          onChange={e => handleInputChange('rooms', 'ironIroningBoard', e.target.checked)}
        >
          Iron & Ironing Board
        </Checkbox>
      </FormControl>
      <FormControl>
        <FormLabel>Tea or Coffee Maker or Kettle:</FormLabel>
        <Checkbox
          isChecked={formData.teaOrCoffeeOrKettle}
          onChange={e => handleInputChange('rooms', 'teaOrCoffeeOrKettle', e.target.checked)}
        >
          Tea or Coffee Maker or Kettle
        </Checkbox>
      </FormControl>
      <FormControl>
        <FormLabel>Microwave:</FormLabel>
        <Checkbox
          isChecked={formData.isMicrowave}
          onChange={e => handleInputChange('rooms', 'isMicrowave', e.target.checked)}
        >
          Microwave
        </Checkbox>
      </FormControl>
      <FormControl>
        <FormLabel>Music System:</FormLabel>
        <Input
          type="text"
          value={formData.musicSystem}
          onChange={e => handleInputChange('rooms', 'musicSystem', e.target.value)}
          size="sm"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Laundry Service:</FormLabel>
        <Checkbox
          isChecked={formData.laundryService}
          onChange={e => handleInputChange('rooms', 'laundryService', e.target.checked)}
        >
          Laundry Service
        </Checkbox>
      </FormControl>
      <FormControl>
        <FormLabel>Kitchen Facilities and What Facilities:</FormLabel>
        <Input
          type="text"
          value={formData.kitchenFacilitiesAndWhatFacilities}
          onChange={e => handleInputChange('rooms', 'kitchenFacilitiesAndWhatFacilities', e.target.value)}
          size="sm"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Safe:</FormLabel>
        <Checkbox isChecked={formData.safe} onChange={e => handleInputChange('rooms', 'safe', e.target.checked)}>
          Safe
        </Checkbox>
      </FormControl>
      <FormControl>
        <FormLabel>Pillow Menu:</FormLabel>
        <Checkbox
          isChecked={formData.pillowMenu}
          onChange={e => handleInputChange('rooms', 'pillowMenu', e.target.checked)}
        >
          Pillow Menu
        </Checkbox>
      </FormControl>
    </div>
  );
};

export default RoomsForm;
