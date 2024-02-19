import { FormControl, FormLabel, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import React from 'react'

const Spa = ({formData,handleInputChange}) => {
  return (
    <>
    <FormControl>
    
    <FormLabel>Are off beach patrolled by lifeguards:</FormLabel>
    <RadioGroup onChange={(value) => handleInputChange('spa','preBookingAdvised', value)} value={formData.preBookingAdvised.toString()}>
        <Stack direction="row">
            <Radio value={"true"}>Yes</Radio>
            <Radio value={"false"}>No</Radio>
        </Stack>
    </RadioGroup>
    </FormControl>
    </>
  )
}

export default Spa