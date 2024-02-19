import { Checkbox, CheckboxGroup, FormControl, FormLabel, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'

const waterSportsArray = ["Wreck", "Coral", "Whale Sharks", "Turtles", "Manta rays"]

const WaterSports = ({formData,handleCheckboxChange}) => {
  return (
    <>
    <FormControl>
                <FormLabel>Sites:</FormLabel>
                <CheckboxGroup
                    colorScheme="teal"
                    onChange={(values) => handleCheckboxChange('rooms', 'safetyFeaturesifOverwaterBungalow', values)}
                    value={formData.safetyFeaturesifOverwaterBungalow}
                >
                    <Wrap spacing={4} justify="flex-start">
                        {waterSportsArray.map((feature) => (
                            <WrapItem key={feature}>
                                <Checkbox value={feature}>{feature}</Checkbox>
                            </WrapItem>
                        ))}
                    </Wrap>
                </CheckboxGroup>
            </FormControl>
    </>
  )
}

export default WaterSports