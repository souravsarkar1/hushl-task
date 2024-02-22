import { Box, Button, Center, useToast } from '@chakra-ui/react';
import React, { useState } from 'react'
import { FormControl, FormLabel, Input, RadioGroup, HStack, Radio, CheckboxGroup, Wrap, WrapItem, Checkbox } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductMedia, getAllProduct } from '../../../redux/Products/action';
import { FadeLoader } from 'react-spinners';
const PoolUpdate = ({ pool, id }) => {
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
    const { length, depth, lapPool, safetyFeatures, width } = pool;
    const [lengthData, setLengthData] = useState(length);
    const [depthData, setDepthData] = useState(depth);
    const [lapPoolData, setLapPoolData] = useState(lapPool);
    const [safetyFeaturesData, setSafetyFeaturesData] = useState([...safetyFeatures]);
    const [widthData, setWidthData] = useState(width);
    const loader = useSelector(st => st.productReducer.addProductMediaIsLoading);
    const toast = useToast();
    const dispath = useDispatch();
    const handleSubmit = () => {
        const data = {
            pool: {}
        }
        data.pool.length = +lengthData;
        data.pool.depth = +depthData;
        data.pool.lapPool = lapPoolData;
        data.pool.safetyFeatures = safetyFeaturesData;
        data.pool.width = +widthData;

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
                <FormLabel>Pool Length(meter):</FormLabel>

                <Input
                    type="number"
                    value={lengthData}
                    onChange={(e) => setLengthData(e.target.value)}
                    size="sm"
                    borderRadius="md"
                />

            </FormControl>
            <FormControl>
                <FormLabel>Pool Width(meter):</FormLabel>
                <Input
                    type="number"
                    value={widthData}
                    onChange={(e) => setWidthData(e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Pool Depth(meter):</FormLabel>
                <Input
                    type="number"
                    value={depthData}
                    onChange={(e) => setDepthData(e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Lap Pool:</FormLabel>
                <RadioGroup
                    onChange={setLapPoolData}
                    value={lapPoolData}
                >
                    <HStack spacing={4}>
                        <Radio value="yes">Yes</Radio>
                        <Radio value="no">No</Radio>
                    </HStack>
                </RadioGroup>
            </FormControl>
            <FormControl>
                <FormLabel>Safety Features:</FormLabel>
                <CheckboxGroup
                    colorScheme="teal"
                    onChange={setSafetyFeaturesData}
                    value={safetyFeaturesData}
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
            <Center mt={5}>
                <Button  onClick={handleSubmit} colorScheme='teal'>Update</Button>
            </Center>
        </Box>
    )
}

export default PoolUpdate