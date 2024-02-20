import React, { useState } from 'react';
import { VStack, Heading, Button, Box, useToast, } from '@chakra-ui/react';
import PropertyInformation from '../../components/Froms/PropertyInformation/PropertyInformation';
import HealthAndSafetyForm from '../../components/Froms/HealthSafety/HealthSafety';
import BeachForm from '../../components/Froms/Beach/Beach';
import ReefForm from '../../components/Froms/Reef/Reef';
import GymForm from '../../components/Froms/Gym/Gym';
import KidsClubForm from '../../components/Froms/KidsClub/KidsClub';
import FoodAndBeveragesForm from '../../components/Froms/FoodAndBeverage/FoodAndBeverage';
import ServicesForm from '../../components/Froms/Service/Service';
import RoomsForm from '../../components/Froms/Rooms/Rooms';
import { useDispatch, useSelector } from "react-redux"
import { addProduct, addProductMedia } from '../../redux/Products/action';
import PoolForm from '../../components/Froms/Pool/Pool';
import { validateFormData } from '../../utils/validationsForm';
import NavBar from '../../components/Navbar/Navbar';
import { Link } from 'react-scroll';
import EntryFrom from '../../components/Froms/EntryForm/EntryForm';
import HandleImageUpload from '../../components/Froms/HandleImageUplaod/HandleImageUpload';
import { initialFromValidations } from '../../utils/validationsInitialFrom';
import TransferOptions from '../../components/Froms/TransferOptions/TransferOptions';
import WaterSports from '../../components/Froms/WaterSports/WaterSports';
const Forms = () => {
    const [formData, setFormData] = useState({
        hotelName: {
            name: "",
            address: "",
        },
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
            length: "",
            features: "",
            beachType: [],
            areSomePartsofTheBeachOnlyForPrivateUse: "",
            willBeachVillasbeDisturbed: "",
            instagramSpots: "",
            tidesRips: "",
            hoursofLifeguardDuty: "",
            areoffBeachPatrolledbyLifeguards: "",
            lifeguardQualifications: [],
            // outerReef: ""

        },
        transferOptions: {
            weatherlimited: "",
            // TimeLimitedbyTransferType: "",
            timeLimitedbyTransferType: '',
            hotelFacilitatesTransferBooking: "",
            qualityofBoats: ""
        },
        waterSports: {
            sites: ""
        },

        reef: {
            entryPointSandLengthofSwim: "",
            accessibleFromBeach: [],
            houseReefAccessiblebyBoat: "",
            houseReefAccessibleCost: "",
            accessiblebyBoat: "",
            costTravel: "",
            travelTime: "",
            sites: "",
            outerReef: ""
        },
        gym: {
            qualityOfEquipment: "",
            rangeofEquipment: [],
            spaPreBookingAdvised: ""

        },
        kidsClub: {
            ratioofStafftoChildren: "",
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
            safetyFeatures: [],
            isNannyavAilable:""
        },
        pool: {
            length: "",
            depth: "",
            lapPool: "",
            safetyFeatures : []
        },
        rooms: {
            maxOccupancyAdult : "",
            maxOccupancyChild : "",
            //adultAndChildCombinations: "",
            NeedtoPreBookExtraBedding: "",
            safetyFeaturesifOverwaterBungalow: [],
            safetyFeaturesForBalcony: [],
            safetyFeaturesForPool: [],
            commentsOnHowPrivacyIsImpacted :"",
            interconnected: "",
            noiseAtNight: "",
            privacyLevelsGoodEnoughForStrictMuslim: "",
            movieSystemsOrDVDs: ""
        },
        media: {
            images: [
                {
                    title: "",
                    url: ""
                }
            ]
        }
    });



    const dispatch = useDispatch();
    const toast = useToast();
    const id = useSelector(st => st.productReducer.updateProductId);
    //console.log(id);
    const firstStep = useSelector(st => st.productReducer.addProductFirstStep);
    //   const secondStep = useSelector(st => st.productReducer.addProductSecondStep);
    //   console.log({ firstStep });
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
        const flag = initialFromValidations(formData, toast)
        if (flag) {

            dispatch(addProduct(formData, toast)).then(() => {
                // setFlagFirstStep(true);
            })
        }

    };

    const uploadMedia = () => {
        const flag = validateFormData(formData, toast);
        console.log(formData)
        if (flag) {
            dispatch(addProductMedia(id, formData, toast)).then((res) => {
                window.location.href = "/thankyou"
            })
        }
    }
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

        <VStack>

            {firstStep && <NavBar />}




            {!firstStep &&
                <VStack className='animation' mt={10} align="start" w="90%" spacing={4} p={4} boxShadow="lg" borderRadius="md" bgColor="white">
                    <Box id='initialData' style={{ width: '100%' }}>
                        <Heading as="h2" size="lg" textAlign="center"> Hotel From </Heading>
                        <Heading as="h5">Hotel Name & Address</Heading>
                        <EntryFrom formData={formData.hotelName} handleInputChange={handleInputChange} />
                        <Button onClick={handleSubmit} mt={10} colorScheme='green'>Next Step</Button>
                    </Box>
                </VStack>
            }





            {firstStep &&
                <VStack className='animation' mt={10} align="start" w="90%" spacing={4} p={4} boxShadow="lg" borderRadius="md" bgColor="white">
                    <Box style={{ width: '100%' }}>
                        <Box>
                            <Heading as="h2" size="lg" textAlign="center" color={"teal"} mb={10}>Upload All The Data </Heading>
                            <Box id='propertyInformation'>
                                <Heading as="h5">Property Data</Heading>
                                <PropertyInformation propertyData={formData.propertyInformation} onPropertyDataChange={handlePropertyDataChange} />

                            </Box>
                            <Link
                                to={"healthSafety"}
                                smooth={true}
                                offset={-70}
                                duration={400}
                            > <Button mt={5} colorScheme='blue'>Complete This Step</Button></Link>

                            <Box id='healthSafety' style={{ marginTop: "40vh" }}>
                                <Heading as="h5">Health And Safety</Heading>
                                <HealthAndSafetyForm
                                    formData={formData.healthSafety}
                                    handleInputChange={handleInputChange}
                                    handleCheckboxChange={handleCheckboxChange}
                                    handleMediaDataChange={handleMediaDataChange}
                                    setFormData={setFormData}
                                    fullData={formData}
                                />
                            </Box>
                            <Link
                                to={"beach"}
                                smooth={true}
                                offset={-70}
                                duration={400}
                            > <Button mt={5} colorScheme='blue'>Complete This Step</Button></Link>
                            <Box mt={"40vh"} id='beach'>
                                <Heading as="h5">Beach Details</Heading>
                                <BeachForm
                                    formData={formData.beach}
                                    handleInputChange={handleInputChange}
                                    handleCheckboxChange={handleCheckboxChange}
                                />
                            </Box>
                            <Link
                                to={"waterSports"}
                                smooth={true}
                                offset={-70}
                                duration={400}
                            > <Button mt={5} colorScheme='blue'>Complete This Step</Button></Link>
                            <Box mt={"40vh"} id='waterSports'>
                                <Heading as="h5">Water Sports</Heading>
                                <WaterSports
                                    formData={formData.waterSports}
                                    handleInputChange={handleInputChange}
                                    handleCheckboxChange={handleCheckboxChange}
                                />
                            </Box>
                            <Link
                                to={"transferOptions"}
                                smooth={true}
                                offset={-70}
                                duration={400}
                            > <Button mt={5} colorScheme='blue'>Complete This Step</Button></Link>
                            <Box mt={"40vh"} id='transferOptions'>
                                <Heading as="h5">Transfer Options</Heading>
                                <TransferOptions
                                    formData={formData.transferOptions}
                                    handleInputChange={handleInputChange}
                                    handleCheckboxChange={handleCheckboxChange}
                                />
                            </Box>
                            <Link
                                to={"reef"}
                                smooth={true}
                                offset={-70}
                                duration={400}
                            > <Button mt={5} colorScheme='blue'>Complete This Step</Button></Link>
                            <Box mt={"40vh"} id='reef'>
                                <Heading as="h5">Reef Details</Heading>
                                <ReefForm
                                    formData={formData.reef}
                                    handleInputChange={handleInputChange}
                                />
                            </Box>
                            <Link
                                to={"gym"}
                                smooth={true}
                                offset={-70}
                                duration={400}
                            > <Button mt={5} colorScheme='blue'>Complete This Step</Button></Link>
                            <Box mt={"40vh"} id='gym'>
                                <Heading as="h5">Gym Details</Heading>
                                <GymForm
                                    formData={formData.gym}
                                    handleInputChange={handleInputChange}
                                    handleCheckboxChange={handleCheckboxChange}
                                />
                            </Box>
                            <Link
                                to={"kidsClub"}
                                smooth={true}
                                offset={-70}
                                duration={400}
                            > <Button mt={5} colorScheme='blue'>Complete This Step</Button></Link>
                            <Box mt={"40vh"} id='kidsClub'>
                                <Heading as="h5">Kids Club Details</Heading>
                                <KidsClubForm
                                    formData={formData.kidsClub}
                                    handleInputChange={handleInputChange}
                                    handleCheckboxChange={handleCheckboxChange}
                                />
                            </Box>
                            <Link
                                to={"foodAndBeverage"}
                                smooth={true}
                                offset={-70}
                                duration={400}
                            > <Button mt={5} colorScheme='blue'>Complete This Step</Button></Link>
                            <Box mt={"40vh"} id='foodAndBeverage'>
                                <Heading as="h5">Food and Beverages Details</Heading>
                                <FoodAndBeveragesForm
                                    formData={formData.foodAndBeverage}
                                    handleInputChange={handleInputChange}
                                />
                            </Box>
                            <Link
                                to={"services"}
                                smooth={true}
                                offset={-70}
                                duration={400}
                            > <Button mt={5} colorScheme='blue'>Complete This Step</Button></Link>
                            <Box mt={"40vh"} id='services'>
                                <Heading as="h5">Services Details</Heading>
                                <ServicesForm
                                    formData={formData.services}
                                    handleInputChange={handleInputChange}
                                    handleCheckboxChange={handleCheckboxChange}
                                />
                            </Box>
                            <Link
                                to={"pool"}
                                smooth={true}
                                offset={-70}
                                duration={400}
                            > <Button mt={5} colorScheme='blue'>Complete This Step</Button></Link>
                            <Box mt={"40vh"} id='pool'>
                                <Heading as="h5">Pool Details</Heading>
                                <PoolForm
                                    formData={formData.pool}
                                    handleInputChange={handleInputChange}
                                    handleCheckboxChange={handleCheckboxChange}
                                />
                            </Box>
                            <Link
                                to={"rooms"}
                                smooth={true}
                                offset={-70}
                                duration={400}
                            > <Button mt={5} colorScheme='blue'>Complete This Step</Button></Link>
                            <Box mt={"40vh"} id='rooms'>
                                <Heading as="h5">Rooms Details</Heading>
                                <RoomsForm
                                    formData={formData.rooms}
                                    handleInputChange={handleInputChange}
                                    handleCheckboxChange={handleCheckboxChange}
                                />
                            </Box>
                            <Box mt={"40vh"} id='media'>
                                <Heading as="h5">Hotel Images</Heading>
                                <HandleImageUpload formData={formData} setFormData={setFormData} id={"12345gfdgd"} />
                            </Box>

                            <Button mt={20} onClick={uploadMedia} colorScheme='green'>Complete And Upload Data</Button>
                        </Box>
                    </Box>
                </VStack>
            }



        </VStack>
    );
};

export default Forms;
