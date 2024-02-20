// BeachForm.js
import React from 'react';
import { FormControl, FormLabel, Input, Textarea, CheckboxGroup, Checkbox, Stack, WrapItem, Wrap, RadioGroup, Radio } from '@chakra-ui/react';

const BeachForm = ({ formData, handleInputChange, handleCheckboxChange }) => {
    return (
        <>
            <FormControl>
                <FormLabel>Beach Length(meter):</FormLabel>
                <Input
                    type="number"
                    value={formData.length}
                    onChange={(e) => handleInputChange('beach', 'length', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>

            <FormControl>
                <FormLabel>Beach Type:</FormLabel>
                <CheckboxGroup
                colorScheme="teal"
                onChange={(values) => handleCheckboxChange('beach', 'beachType', values)}
                value={formData.beachType}
            >
            <Wrap spacing={4} justify="flex-start">

            <WrapItem> <Checkbox value="White">White</Checkbox></WrapItem>
            <WrapItem><Checkbox value="Queaky sand fine grain,">Queaky sand fine grain,</Checkbox></WrapItem>
            <WrapItem><Checkbox value="Granular">Granular</Checkbox></WrapItem>
            <WrapItem> <Checkbox value="Brown">Brown</Checkbox></WrapItem>
            <WrapItem><Checkbox value="Black">Black</Checkbox></WrapItem>
            <WrapItem><Checkbox value="Volcanic">Volcanic</Checkbox></WrapItem>

            </Wrap>
            </CheckboxGroup>
            </FormControl>
            <FormControl>
                <FormLabel>Beach Features(e.g. a loop around the island):</FormLabel>
                <Textarea
                    type="text"
                    value={formData.features}
                    onChange={(e) => handleInputChange('beach', 'features', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Beach Instagram Spots:</FormLabel>
                <Input
                    type="text"
                    value={formData.instagramSpots}
                    onChange={(e) => handleInputChange('beach', 'instagramSpots', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Beach Tides/Rips:</FormLabel>
                <Input
                    type="text"
                    value={formData.tidesRips}
                    onChange={(e) => handleInputChange('beach', 'tidesRips', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Hours of lifeguard duty(Hours):</FormLabel>
                <Input
                    type="number"
                    value={formData.hoursofLifeguardDuty}
                    onChange={(e) => handleInputChange('beach', 'hoursofLifeguardDuty', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Are off beach patrolled by lifeguards:</FormLabel>
                <RadioGroup onChange={(value) => handleInputChange('beach','areoffBeachPatrolledbyLifeguards', value)} value={formData.areoffBeachPatrolledbyLifeguards.toString()}>
                    <Stack direction="row">
                        <Radio value={"true"}>Yes</Radio>
                        <Radio value={"false"}>No</Radio>
                    </Stack>
                </RadioGroup>
            </FormControl>
            

            <FormControl mb={4}>
                <FormLabel>Beach Life Guards Qualifications</FormLabel>
                <CheckboxGroup
                    colorScheme="teal"
                    onChange={(values) => handleCheckboxChange('beach', 'lifeguardQualifications', values)}
                    value={formData.lifeguardQualifications}
                >
                    <Stack align="start">
                        <Checkbox value="1">1</Checkbox>
                        <Checkbox value="2">2</Checkbox>
                        <Checkbox value="3">3</Checkbox>
                    </Stack>
                </CheckboxGroup>
            </FormControl>
            <FormControl>
            <FormLabel>Are some parts of the beach only for private use</FormLabel>
            <RadioGroup onChange={(value) => handleInputChange('beach','areSomePartsofTheBeachOnlyForPrivateUse', value)} value={formData.areSomePartsofTheBeachOnlyForPrivateUse.toString()}>
                    <Stack direction="row">
                        <Radio value={"true"}>Yes</Radio>
                        <Radio value={"false"}>No</Radio>
                    </Stack>
                </RadioGroup>
            </FormControl>

            <FormControl>
                <FormLabel>Will beach villas be disturbed?</FormLabel>
                <RadioGroup onChange={(value) => handleInputChange('beach','willBeachVillasbeDisturbed', value)} value={formData.willBeachVillasbeDisturbed.toString()}>
                    <Stack direction="row">
                        <Radio value={"true"}>Yes</Radio>
                        <Radio value={"false"}>No</Radio>
                    </Stack>
                </RadioGroup>
            </FormControl>
        </>
    );
};

export default BeachForm;
