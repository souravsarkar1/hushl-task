import React, { useState } from 'react';
import { Center, VStack, Heading, Button, Box, FormControl, FormLabel, Input, Textarea, RadioGroup, Radio } from '@chakra-ui/react';
import PropertyInformation from '../../components/Froms/PropertyInformation/PropertyInformation';
import Rating from './FromsComponent/Rating';
import HandleMediaUpload from '../../components/MediaUploading/MediaUploading';

// ... (import statements)

const Forms = () => {
    const [formData, setFormData] = useState({
        propertyInformation: {
            scopeOfRenovation: [],
            stateOfRepair: ''
        },
        healthSafety: {
            lastReviewDate: '',
            rating: 0,
            comments: '',
            policyForEvacuation: [
                {
                    title: '',
                    url: ''
                }
            ],
            medicalEmergencyPolicy: [
                {
                    title: '',
                    url: ''
                }
            ],
            doctorOnSite: '',
            doctorIsPermanent: '',
            nurseOnsite: '',
            nurseIsPermanent: '',
            onPremiseQualifications: '',
            defibrillatorsOnProperty: '',
            defibrillatorsByPool: ''
        },

        beach: {
            length: 0,
            features: "",
            instagramSpots: "",
            tidesRips: "",
            hoursofLifeguardDuty: 0,
            areoffBeachPatrolledbyLifeguards: "",
            lifeguardQualifications: [],
            outerReef: ""

        },
        transferOptions: {
            weatherlimited: "",
            timeLimitedbyTransferType: '',
        },
        reef: {
            entryPointSandLengthofSwim: "",
            accessibleFromBeach: [],
            houseReefAccessiblebyBoat: "",
            houseReefAccessibleCost: 0,
            accessiblebyBoatCostTravelTime: [],
            sites: ""
        },
        gym: {
            qualityOfEquipment: "",
            rangeofEquipment: "",
        },
        kidsClub: {
            ratioofStafftoChildren: 0,
            staffQualifications: [],
            languagesSpoken: []
        },
        foodAndBeverage: {
            InclusionsOrExclusionsforFullOrhalfBoard: "",
            extraCostForRoomService: ""
        },
        services: {
            trainingOrQualifications: [],
            needToPreBook: "",
            //(limited number available:
            length: 0,
            depth: 0,
            lapPool: "",
            safetyFeatures: ""
        },
        rooms: {
            maxOccupancy: "",
            adultAndChildCombinations: "",
            NeedtoPreBookExtraBedding: "",

            // (limited availability)
            safetyFeaturesForPool: "",
            safetyFeaturesifOverwaterBungalow: "",
            interconnected: "",
            noiseAtNight: "",
            privacyLevelsGoodEnoughForStrictMuslim: "",
            movieSystemsOrDVDs: ""
        }
    });

    const handlePropertyDataChange = (newPropertyData) => {
        setFormData((prevData) => ({
            ...prevData,
            propertyInformation: {
                ...prevData.propertyInformation,
                ...newPropertyData,
            },
        }));
    };

    const handleInputChange = (section, field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [section]: {
                ...prevData[section],
                [field]: value,
            },
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted with data:', formData);
    };
    const handleMediaDataChange = (section, index, updatedMedia) => {
        console.log({ updatedMedia });
        setFormData((prevData) => ({
            ...prevData,
            [section]: {
                ...prevData[section],
                [index]: updatedMedia,
            },
        }));
    };
    return (
        <Center>
            <VStack mt={10} align="start" w="90%" spacing={4} p={4} boxShadow="lg" borderRadius="md" bgColor="white">
                <Heading as="h2" size="lg">
                    Form To Collect Data
                </Heading>
                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <Heading as="h5">Property Data</Heading>
                    <Box id='propertyInformation'>
                        <PropertyInformation propertyData={formData.propertyInformation} onPropertyDataChange={handlePropertyDataChange} />

                    </Box>
                    <a href='#healthSafety'> <Button colorScheme='blue'>Complete This Step</Button></a>

                    <Box id='healthSafety' style={{ marginTop: "40vh" }}>
                        <Heading as="h5">Health And Security</Heading>
                        <FormControl>
                            <FormLabel>Last Review Date:</FormLabel>
                            <Input
                                type="date"
                                value={formData.healthSafety.lastReviewDate}
                                onChange={(e) => handleInputChange('healthSafety', 'lastReviewDate', e.target.value)}
                                size="sm"
                                borderRadius="md"
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Rating:</FormLabel>
                            <Rating value={formData.healthSafety.rating} onChange={(newRating) => handleInputChange('healthSafety', 'rating', newRating)} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Comments:</FormLabel>
                            <Textarea
                                id="comments"
                                name="comments"
                                value={formData.healthSafety.comments}
                                onChange={(e) => handleInputChange('healthSafety', 'comments', e.target.value)}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Is There Any Doctor On Site:</FormLabel>
                            <RadioGroup onChange={(value) => handleInputChange('healthSafety', 'doctorOnSite', value)} value={formData.healthSafety.doctorOnSite.toString()}>
                                <VStack align="start" spacing={2}>
                                    <Radio value="true">Yes</Radio>
                                    <Radio value="false">No</Radio>
                                </VStack>
                            </RadioGroup>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Is The Nurse Permanent:</FormLabel>
                            <RadioGroup onChange={(value) => handleInputChange('healthSafety', 'doctorIsPermanent', value)} value={formData.healthSafety.doctorIsPermanent.toString()}>
                                <VStack align="start" spacing={2}>
                                    <Radio value="true">Yes</Radio>
                                    <Radio value="false">No</Radio>
                                </VStack>
                            </RadioGroup>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Is The Doctor Permanent:</FormLabel>
                            <RadioGroup onChange={(value) => handleInputChange('healthSafety', 'nurseOnsite', value)} value={formData.healthSafety.nurseOnsite.toString()}>
                                <VStack align="start" spacing={2}>
                                    <Radio value="true">Yes</Radio>
                                    <Radio value="false">No</Radio>
                                </VStack>
                            </RadioGroup>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Is The Nurse Permanent:</FormLabel>
                            <RadioGroup onChange={(value) => handleInputChange('healthSafety', 'nurseIsPermanent', value)} value={formData.healthSafety.nurseIsPermanent.toString()}>
                                <VStack align="start" spacing={2}>
                                    <Radio value="true">Yes</Radio>
                                    <Radio value="false">No</Radio>
                                </VStack>
                            </RadioGroup>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Defibrillators on Property:</FormLabel>
                            <Textarea
                                id="defibrillatorsOnProperty"
                                name="defibrillatorsOnProperty"
                                value={formData.healthSafety.defibrillatorsOnProperty}
                                onChange={(e) => handleInputChange('healthSafety', 'defibrillatorsOnProperty', e.target.value)}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Defibrillators by Pool:</FormLabel>
                            <Textarea
                                id="defibrillatorsByPool"
                                name="defibrillatorsByPool"
                                value={formData.healthSafety.defibrillatorsByPool}
                                onChange={(e) => handleInputChange('healthSafety', 'defibrillatorsByPool', e.target.value)}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Defibrillators by Pool:</FormLabel>
                            <HandleMediaUpload
                                mediaData={formData.healthSafety.policyForEvacuation}
                                onMediaDataChange={(index, updatedMedia) => handleMediaDataChange('healthSafety', index, updatedMedia)}
                                mediaType="policyForEvacuation"
                            />
                        </FormControl>


                        {/* Add other health and security form elements here */}
                    </Box>
                    <Box mt={"40vh"} id='beach'>
                    <Heading as="h5">Health And Security</Heading>
                        <FormControl>
                            <FormLabel>Defibrillators by Pool:</FormLabel>
                            <HandleMediaUpload
                                mediaData={formData.healthSafety.policyForEvacuation}
                                onMediaDataChange={(index, updatedMedia) => handleMediaDataChange('healthSafety', index, updatedMedia)}
                                mediaType="policyForEvacuation"
                            />
                        </FormControl>
                    </Box>
                    <Button type="submit" mt={4} colorScheme="teal" size="sm">
                        Submit
                    </Button>
                </form>
            </VStack>
        </Center>
    );
};

export default Forms;
