// RoomsForm.js
import React from 'react';
import { Checkbox, CheckboxGroup, FormControl, FormLabel, Input, Radio, RadioGroup, Stack, Textarea, Wrap, WrapItem } from '@chakra-ui/react';

const RoomsForm = ({ formData, handleInputChange ,handleCheckboxChange}) => {
    const commonSafetyFeaturesOverwaterBungalow = [
        'Safety railing',
        'Life jackets',
        'Emergency exit plan',
        'Fire extinguisher',
        'First aid kit',
    ];
    const poolSafetyFeatures = [
        "Pool fence with self-closing gate",
        "Lifebuoy rings",
        "Swimming lessons for guests",
        "Clear and visible depth markers",
        "Safety signage with pool rules",
        "CPR-trained staff on-site",
        "Regular pool maintenance and cleaning",
        "Non-slip pool deck surface",
        "Emergency phone or intercom near the pool area",
        "Pool alarm system for detecting motion or unauthorized entry"
      ];
      const safetyFeatures = [
        "Sturdy railing",
        "Safety netting",
        "Non-slip flooring",
        "Warning signs",
        "Regular maintenance checks"
      ];
    return (
        <>
            <FormControl>
                <FormLabel>Max Occupancy Adult:</FormLabel>
                <Input
                    type="number"
                    value={formData.maxOccupancyAdult}
                    onChange={(e) => handleInputChange('rooms', 'maxOccupancyAdult', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
                <FormLabel>Max Occupancy Child:</FormLabel>
                <Input
                    type="number"
                    value={formData.maxOccupancyChild}
                    onChange={(e) => handleInputChange('rooms', 'maxOccupancyChild', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Need to Pre-Book Extra Bedding:</FormLabel>

                <RadioGroup onChange={(value) => handleInputChange('rooms', 'NeedtoPreBookExtraBedding', value)} value={formData.NeedtoPreBookExtraBedding.toString()}>
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
                    onChange={(values) => handleCheckboxChange('rooms', 'safetyFeaturesifOverwaterBungalow', values)}
                    value={formData.safetyFeaturesifOverwaterBungalow}
                >
                    <Wrap spacing={4} justify="flex-start">
                        {commonSafetyFeaturesOverwaterBungalow.map((feature) => (
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
                    onChange={(values) => handleCheckboxChange('rooms', 'safetyFeaturesForBalcony', values)}
                    value={formData.safetyFeaturesForBalcony}
                >
                    <Wrap spacing={4} justify="flex-start">
                        {safetyFeatures.map((feature) => (
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
                    onChange={(values) => handleCheckboxChange('rooms', 'safetyFeaturesForPool', values)}
                    value={formData.safetyFeaturesForPool}
                >
                    <Wrap spacing={4} justify="flex-start">
                        {poolSafetyFeatures.map((feature) => (
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
                    onChange={(e) => handleInputChange('rooms', 'interconnected', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Comments on how privacy is impacted:</FormLabel>
                <Textarea
                    type="text"
                    value={formData.commentsOnHowPrivacyIsImpacted}
                    onChange={(e) => handleInputChange('rooms', 'commentsOnHowPrivacyIsImpacted', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Noise at Night:</FormLabel>
                <RadioGroup onChange={(value) => handleInputChange('rooms', 'noiseAtNight', value)} value={formData.noiseAtNight.toString()}>
                    <Stack direction="row">
                        <Radio value="veryLow">Very Low</Radio>
                        <Radio value="low">Low</Radio>
                        <Radio value="none">None</Radio>
                    </Stack>
                </RadioGroup>
            </FormControl>
            <FormControl>
                <FormLabel>Privacy Levels Good Enough for Strict Muslim:</FormLabel>
                <RadioGroup onChange={(value) => handleInputChange('rooms', 'privacyLevelsGoodEnoughForStrictMuslim', value)} value={formData.privacyLevelsGoodEnoughForStrictMuslim.toString()}>
                    <Stack direction="row">
                        <Radio value="true">Yes</Radio>
                        <Radio value="false">No</Radio>
                    </Stack>
                </RadioGroup>
            </FormControl>
            <FormControl>
                <FormLabel>Movie Systems or DVDs:</FormLabel>
                <RadioGroup onChange={(value) => handleInputChange('rooms', 'movieSystemsOrDVDs', value)} value={formData.movieSystemsOrDVDs.toString()}>
                    <Stack direction="row">
                        <Radio value="true">Yes</Radio>
                        <Radio value="false">No</Radio>
                    </Stack>
                </RadioGroup>
            </FormControl>
        </>
    );
};

export default RoomsForm;
