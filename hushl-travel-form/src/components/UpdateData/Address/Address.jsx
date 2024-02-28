import { Button, Center, Input, useToast } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProductMedia, getAllProduct } from '../../../redux/Products/action';
import { FadeLoader } from 'react-spinners';

const AddressUpdate = ({address,id,name}) => {
    const [addressData, setAddressData] = useState(address);
    const loader = useSelector(st => st.productReducer.addProductMediaIsLoading);
    const toast = useToast();
    const dispath = useDispatch();

    const handleSubmit = () => {
        const data = {
            hotelName: {}
        }
        data.hotelName.address = addressData;
        data.hotelName.name = name;
        dispath(addProductMedia(id, data, toast)).then((res) => {
            dispath(getAllProduct());
        })
    }
if(loader){
    return <Center><FadeLoader color="#36d7b7" /></Center>
}
  return (
    <div>
    <Input value={addressData} onChange={(e)=>setAddressData(e.target.value)}/>
    <Button mt={5} onClick={handleSubmit} colorScheme='teal'>Update</Button>
    </div>
  )
}

export default AddressUpdate;