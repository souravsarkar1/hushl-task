import {  Box, Button, Center, FormControl, FormLabel, Input, useToast } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FadeLoader } from 'react-spinners';
import { addProductMedia, getAllProduct } from '../../../redux/Products/action';


const TransferOptionsUpdate = ({ transferOptions, id }) => {
    const {
        weatherlimited,
        timeLimitedbyTransferType,
        hotelFacilitatesTransferBooking,
        qualityofBoats
    } = transferOptions;
    const [weatherlimitedData, setWeatherlimitedData] = useState(weatherlimited);
    const [timeLimitedbyTransferTypeData, setTimeLimitedbyTransferTypeData] = useState(timeLimitedbyTransferType);
    const [hotelFacilitatesTransferBookingData, setHotelFacilitatesTransferBookingData] = useState(hotelFacilitatesTransferBooking);
    const [qualityofBoatsData, setQualityofBoatsData] = useState(qualityofBoats);
    const loader = useSelector(st => st.productReducer.addProductMediaIsLoading);
    const toast = useToast();
    const dispath = useDispatch();
    const handleSubmit = () => {
        const data = {
            transferOptions: {}
        }
        data.transferOptions.weatherlimited = weatherlimitedData;
        data.transferOptions.timeLimitedbyTransferType = timeLimitedbyTransferTypeData;
        data.transferOptions.hotelFacilitatesTransferBooking = hotelFacilitatesTransferBookingData;
        data.transferOptions.qualityofBoats = qualityofBoatsData;
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
                <FormLabel>Transfer Options weather limited:</FormLabel>
                <Input
                    type="text"
                    value={weatherlimitedData}
                    onChange={(e) => setWeatherlimitedData(e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Time limited by transfer type(e.g. SeaPlanes can only fly in the daylight):</FormLabel>
                <Input
                    type="text"
                    value={timeLimitedbyTransferTypeData}
                    onChange={(e) => setTimeLimitedbyTransferTypeData(e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Hotel facilitates transfer booking:</FormLabel>
                <Input
                    type="text"
                    value={hotelFacilitatesTransferBookingData}
                    onChange={(e) => setHotelFacilitatesTransferBookingData(e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Quality of boats:</FormLabel>
                <Input
                    type="text"
                    value={qualityofBoatsData}
                    onChange={(e) => setQualityofBoatsData(e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <Center mt={4}>
            <Button colorScheme='teal' onClick={handleSubmit}>Update</Button>
            </Center>
        </Box>
    )
}

export default TransferOptionsUpdate;