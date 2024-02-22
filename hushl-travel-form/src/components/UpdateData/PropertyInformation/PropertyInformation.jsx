import React, { useEffect, useState } from 'react';
import { FormControl, FormLabel, Textarea, Checkbox, CheckboxGroup, Button, Box, Wrap, WrapItem, useToast, Center } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductMedia, getAllProduct, getSingleData } from '../../../redux/Products/action';
import { FadeLoader } from 'react-spinners';

const PropertyInformationUpdate = ({ scopeOfRenovation, stateOfRepair, id }) => {
    const [stateOfRepairData, setStateOfRepairData] = useState(stateOfRepair);
    const [scopeOfRenovationData, setScopeOfRenovationData] = useState([...scopeOfRenovation]);
    const dispath = useDispatch();
    const singleData = useSelector(st => st.productReducer.getSingleData);
    const loader = useSelector(st => st.productReducer.addProductMediaIsLoading);
    const toast = useToast()
    console.log({ singleData })
    const handleStateOfRepairChange = (e) => {
        setStateOfRepairData(e.target.value);
    };

    const handleScopeOfRenovationChange = (selectedScopes) => {
        setScopeOfRenovationData(selectedScopes);
    };
    useEffect(() => {
        dispath(getSingleData(id))
    }, [dispath, id])
    const hanldeSubmit = () => {
        singleData.propertyInformation.scopeOfRenovation = scopeOfRenovationData;
        singleData.propertyInformation.stateOfRepair = stateOfRepairData;
        console.log(stateOfRepairData);

        dispath(addProductMedia(id, singleData, toast)).then((res)=>{
            dispath(getAllProduct());
        })
        // console.log(scopeOfRenovationData);
    }
if(loader){
    return <Center><FadeLoader color="#36d7b7" /></Center>
}
    return (
        <Box w={"auto"}>
            <FormControl mb={4}>
                <FormLabel>State of Repair</FormLabel>
                <Textarea
                    placeholder="Enter state of repair"
                    value={stateOfRepairData}
                    onChange={handleStateOfRepairChange}
                />
            </FormControl>

            <FormControl mb={4}>
                <FormLabel>Scope of Renovation</FormLabel>
                <CheckboxGroup
                    colorScheme="teal"
                    value={scopeOfRenovationData}
                    onChange={handleScopeOfRenovationChange}
                >
                    <Wrap align="start">
                        <WrapItem><Checkbox value="Soft">Soft</Checkbox></WrapItem>
                        <WrapItem> <Checkbox value="Full">Full</Checkbox></WrapItem>
                        <WrapItem> <Checkbox value="Rooms">Rooms</Checkbox></WrapItem>
                        <WrapItem> <Checkbox value="Bathrooms">Bathrooms</Checkbox></WrapItem>
                        <WrapItem> <Checkbox value="Amenities">Amenities</Checkbox></WrapItem>
                        <WrapItem> <Checkbox value="CommonAreas">Common Areas</Checkbox></WrapItem>
                    </Wrap>
                </CheckboxGroup>
            </FormControl>
            <Button onClick={hanldeSubmit}>Update Data</Button>
        </Box>
    );
};

export default PropertyInformationUpdate;
