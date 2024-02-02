import React, { useState } from 'react';
import { Center, VStack, Heading, Button, Box, useToast, } from '@chakra-ui/react';
import PropertyInformation from '../../components/Froms/PropertyInformation/PropertyInformation';
import HealthAndSafetyForm from '../../components/Froms/HealthSafety/HealthSafety';
import BeachForm from '../../components/Froms/Beach/Beach';
import ReefForm from '../../components/Froms/Reef/Reef';
import GymForm from '../../components/Froms/Gym/Gym';
import KidsClubForm from '../../components/Froms/KidsClub/KidsClub';
import FoodAndBeveragesForm from '../../components/Froms/FoodAndBeverage/FoodAndBeverage';
import ServicesForm from '../../components/Froms/Service/Service';
import RoomsForm from '../../components/Froms/Rooms/Rooms';
import {useDispatch} from "react-redux"
import { addProduct } from '../../redux/Products/action';
import PoolForm from '../../components/Froms/Pool/Pool';


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
            accessiblebyBoat : "",
            costTravel : 0,
            travelTime: [],
            sites: "",
            outerReef : ""
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
            safetyFeatures: []
        },
        pool : {
            length: 0,
            depth: 0,
            lapPool: "",
        },
        rooms: {
            maxOccupancy: "",
            adultAndChildCombinations: "",
            NeedtoPreBookExtraBedding: "",
            safetyFeaturesifOverwaterBungalow: [],
            interconnected: "",
            noiseAtNight: "",
            privacyLevelsGoodEnoughForStrictMuslim: "",
            movieSystemsOrDVDs: ""
        }
    });
const dispatch = useDispatch();
const toast = useToast();



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
        console.log({ section, field, value });
        setFormData((prevData) => ({
            ...prevData,
            [section]: {
                ...prevData[section],
                [field]: value,
            },
        }));
    };
    const handleCheckboxChange = (section, field, checkboxValues) => {
        console.log({ section, field, checkboxValues });
        setFormData((prevData) => ({
            ...prevData,
            [section]: {
                ...prevData[section],
                [field]: checkboxValues,
            },
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted with data:', formData);
        dispatch(addProduct(formData,toast))

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
        <Center mt={20}>
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
                        <HealthAndSafetyForm
                            formData={formData.healthSafety}
                            handleInputChange={handleInputChange}
                            handleCheckboxChange={handleCheckboxChange}
                            handleMediaDataChange={handleMediaDataChange}
                        />
                    </Box>
                    <Box mt={"40vh"} id='beach'>
                        <Heading as="h5">Beach Details</Heading>
                        <BeachForm
                            formData={formData.beach}
                            handleInputChange={handleInputChange}
                            handleCheckboxChange={handleCheckboxChange}
                        />
                    </Box>
                    <Box mt={"40vh"} id='reef'>
                        <Heading as="h5">Reef Details</Heading>
                        <ReefForm
                            formData={formData.reef}
                            handleInputChange={handleInputChange}
                        />
                    </Box>
                    <Box mt={"40vh"} id='gym'>
                        <Heading as="h5">Gym Details</Heading>
                        <GymForm
                            formData={formData.gym}
                            handleInputChange={handleInputChange}
                        />
                    </Box>
                    <Box mt={"40vh"} id='kidsClub'>
                        <Heading as="h5">Kids Club Details</Heading>
                        <KidsClubForm
                            formData={formData.kidsClub}
                            handleInputChange={handleInputChange}
                            handleCheckboxChange={handleCheckboxChange}
                        />
                    </Box>
                    <Box mt={"40vh"} id='foodAndBeverage'>
                        <Heading as="h5">Food and Beverages Details</Heading>
                        <FoodAndBeveragesForm
                            formData={formData.foodAndBeverage}
                            handleInputChange={handleInputChange}
                        />
                    </Box>
                    <Box mt={"40vh"} id='services'>
                        <Heading as="h5">Pool Services Details</Heading>
                        <ServicesForm
                            formData={formData.services}
                            handleInputChange={handleInputChange}
                            handleCheckboxChange={handleCheckboxChange}
                        />
                    </Box>
                    <Box mt={"40vh"} id='pool'>
                        <Heading as="h5">Pool Details</Heading>
                        <PoolForm
                            formData={formData.pool}
                            handleInputChange={handleInputChange}
                            handleCheckboxChange={handleCheckboxChange}
                        />
                    </Box>
                    <Box mt={"40vh"} id='rooms'>
                        <Heading as="h5">Rooms Details</Heading>
                        <RoomsForm
                            formData={formData.rooms}
                            handleInputChange={handleInputChange}
                            handleCheckboxChange={handleCheckboxChange}
                        />
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
