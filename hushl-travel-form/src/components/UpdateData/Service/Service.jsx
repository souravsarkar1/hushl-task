import React, { useState } from 'react'
import { FormControl, FormLabel, Input, Radio, RadioGroup, Stack, CheckboxGroup, Checkbox, Wrap, WrapItem, useToast, Center, Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductMedia, getAllProduct } from '../../../redux/Products/action';
import { FadeLoader } from 'react-spinners';

const ServiceUpdate = ({ services, id }) => {
    const commonSafetyFeatures = [
        'Lifeguards on duty',
        'First aid kit available',
        'Emergency phone',
        'Pool depth markers',
        'Non-slip surfaces',
    ];
    const { trainingOrQualifications, needToPreBook, safetyFeatures, isNannyavAilable } = services;
    const [trainingOrQualificationsData, setTrainingOrQualifications] = useState(trainingOrQualifications);
    const [needToPreBookData, setNeedToPreBook] = useState(needToPreBook);
    const [safetyFeaturesData, setSafetyFeatures] = useState([...safetyFeatures]);
    const [isNannyavAilableData, setIsNannyavAilable] = useState(isNannyavAilable);
    const loader = useSelector(st => st.productReducer.addProductMediaIsLoading);
    const toast = useToast();
    const dispath = useDispatch();
    const handleSubmit = () => {
        const data = {
            services: {}
        }
        data.services.trainingOrQualifications = trainingOrQualificationsData;
        data.services.needToPreBook = needToPreBookData;
        data.services.safetyFeatures = safetyFeaturesData;
        data.services.isNannyavAilable = isNannyavAilableData;


        dispath(addProductMedia(id, data, toast)).then((res) => {
            dispath(getAllProduct());
        })

    }
    if (loader) {
        return <Center><FadeLoader color="#36d7b7" /></Center>
    }
    return (
        <div>
            <FormControl>
                <FormLabel>Nanny Available or Not:</FormLabel>
                <RadioGroup onChange={setIsNannyavAilable} value={isNannyavAilableData}>
                    <Stack direction="row">
                        <Radio value="true">Yes</Radio>
                        <Radio value="false">No</Radio>
                    </Stack>
                </RadioGroup>
            </FormControl>
            <FormControl>
                <FormLabel>{`Nanny's Training or Qualifications:`}</FormLabel>
                <Input
                    type="text"
                    value={trainingOrQualificationsData}
                    onChange={(e) => setTrainingOrQualifications(e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Need to Pre-Book:</FormLabel>
                <RadioGroup value={needToPreBookData} onChange={setNeedToPreBook}>
                    <Stack direction="row">
                        <Radio value="true">Yes</Radio>
                        <Radio value="false">No</Radio>
                    </Stack>
                </RadioGroup>
            </FormControl>
            <FormControl>
                <FormLabel>Safety Features:</FormLabel>
                <CheckboxGroup
                    colorScheme="teal"
                    onChange={setSafetyFeatures}
                    value={safetyFeaturesData}
                >
                    <Wrap spacing={4} justify="flex-start">
                        {commonSafetyFeatures.map((feature) => (
                            <WrapItem key={feature}>
                                <Checkbox value={feature}>{feature}</Checkbox>
                            </WrapItem>
                        ))}
                    </Wrap>
                </CheckboxGroup>
            </FormControl>
            <Center>
                <Button onClick={handleSubmit} colorScheme='teal'>Update</Button>
            </Center>
        </div>
    )
}

export default ServiceUpdate;