import { Box, Button, Center, FormControl, FormLabel, Input, useToast } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProductMedia, getAllProduct } from '../../../redux/Products/action';
import { FadeLoader } from 'react-spinners';


const FoodAndBeverageUpdate = ({foodAndBeverage, id}) => {
    const { InclusionsOrExclusionsforFullOrhalfBoard, extraCostForRoomService } = foodAndBeverage;
    const [InclusionsOrExclusionsforFullOrhalfBoardData, setInclusionsOrExclusionsforFullOrhalfBoardData] = useState(InclusionsOrExclusionsforFullOrhalfBoard);
    const [extraCostForRoomServiceData, setextraCostForRoomServiceData] = useState(extraCostForRoomService);
    const loader = useSelector(st => st.productReducer.addProductMediaIsLoading);
    const toast = useToast();
    const dispath = useDispatch();
    const handleSubmit = () => {
        const data = {
            foodAndBeverage: {}
        }
        data.foodAndBeverage.InclusionsOrExclusionsforFullOrhalfBoard = InclusionsOrExclusionsforFullOrhalfBoardData
        data.foodAndBeverage.extraCostForRoomService = extraCostForRoomServiceData;
        dispath(addProductMedia(id, data, toast)).then((res) => {
            dispath(getAllProduct());
        })

    }
    if (loader) {
        return <Center><FadeLoader color="#36d7b7" /></Center>
    }
  return (
    <Box>
    <FormControl>
                <FormLabel>Inclusions/Exclusions for Full or Half Board:</FormLabel>
                <Input
                    type="text"
                    value={InclusionsOrExclusionsforFullOrhalfBoardData}
                    onChange={(e) => setInclusionsOrExclusionsforFullOrhalfBoardData(e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Extra Cost for Room Service(MRF):</FormLabel>
                <Input
                    type="text"
                    value={extraCostForRoomServiceData}
                    onChange={(e) => setextraCostForRoomServiceData(e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <Center mt={4}>
                <Button onClick={handleSubmit} colorScheme='teal'>Update</Button>
            </Center>
    </Box>
  )
}

export default FoodAndBeverageUpdate