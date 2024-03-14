import React, { useState } from 'react';
import { Button, Box, Input, Center, Table, Tbody, Tr, Th, Td, } from '@chakra-ui/react';
import axios from "axios";
import { BeatLoader } from 'react-spinners';

const fields = [
    { label: "Summary", key: "summary" },
    { label: "ReefQuality", key: "reefQuality" },
    { label: "KidsFriendly", key: "kidsFriendly" },
    { label: "FamilyFriendly", key: "familyFriendly" },
    { label: "Languages Spoken", key: "languagesSpoken" },
    { label: "Reviews & Awards", key: "reviewsAwards" },
    { label: "Unique Selling Points", key: "uniqueSellingPoints" },
    { label: "Hospital Specialties", key: "hospitalSpecialties" },
    { label: "Transfer Options", key: "transferOptions" },
    { label: "Distance From Male", key: "distanceFromMale" },
    { label: "Availability of Submarine Tours", key: "availabilityOfSubmarineTours" },
    { label: "Amenities", key: "amenities" },
    { label: "Health & Safety Measures", key: "healthSafetyMeasures" },
    { label: "Number of Bars & Restaurants", key: "numberBarsRestaurants" },
    { label: "Accommodation Dietary Needs & Allergies", key: "accommodationDietaryNeedsAllergies" },
    { label: "Nanny Services", key: "nannyServices" },
    { label: "Room Layout Map", key: "roomLayoutMap" },
    { label: "Pool Dimensions", key: "poolDimensions" },
    { label: "Availability of Baby Bath During Transfers", key: "availabilityOfBabyBathDuringTransfers" },
    { label: "LGBTQI+ Friendliness", key: "LGBTQIFriendliness" },
    { label: "Exclusivity for Adults", key: "exclusivityForAdults" },
    { label: "Last Renovation Date", key: "lastRenovationDate" },
    { label: "Review Sentiments", key: "reviewSentiments" },
    { label: "On-site Marine Biologist", key: "onsiteMarineBiologist" },
    { label: "Affiliated Activities", key: "affiliatedActivities" },
    { label: "Stingray & Fish Feeding", key: "stingrayFishFeeding" },
    { label: "Flotation Devices", key: "flotationDevices" },
    { label: "Nearby Surf Sites", key: "nearbySurfSites" },
    { label: "Specialist Machines", key: "specialistMachines" },
    { label: "Property Design", key: "propertyDesign" },
    { label: "Breakfast Inclusion", key: "breakfastInclusion" },
    { label: "Beach Distance", key: "beachDistance" },
    { label: "Maximum Occupancy", key: "maximumOccupancy" },
    { label: "Kids Eat Free Policy", key: "kidsEatFreePolicy" },
    { label: "Fish & Shark Abundance", key: "fishSharkAbundance" },
    { label: "Trainer Availability", key: "trainerAvailability" },
    { label: "Total Rooms", key: "totalRooms" },
    { label: "Staff Languages", key: "staffLanguages" },
    { label: "Pre-booking Advisability", key: "preBookingAdvisability" },
    { label: "Specialty Nights", key: "specialtyNights" },
    { label: "Child Age Categories", key: "childAgeCategories" },
    { label: "Cot Availability & Costs", key: "cotAvailabilityCosts" },
    { label: "Living Room Layout", key: "livingRoomLayout" },
    { label: "Children's Toys", key: "childrensToys" },
    { label: "Halaal Dining", key: "halaalDining" },
    { label: "Kids Menu", key: "kidsMenu" },
    { label: "Child-friendly Amenities", key: "childFriendlyAmenities" },
    { label: "Cleanliness Standards", key: "cleanlinessStandards" },
    { label: "Average Room Size", key: "averageRoomSize" },
    { label: "Rollaway Bed Policy & Costs", key: "rollawayBedPolicyCosts" },
    { label: "Kitchen Facilities", key: "kitchenFacilities" },
    { label: "Children's Cutlery Availability", key: "childrensCutleryAvailability" }
];

const NewsApi = () => {
    const [query_params, setQuery_params] = useState("");
    const [showdata, setShowData] = useState({});
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        axios.post('http://127.0.0.1:8000/news/', { query_params: query_params })
            .then((res) => {
                if (res && res.data) {
                    console.log(res.data);
                    setShowData(res.data);
                } else {
                    console.error('Invalid response format:', res);
                    // Handle invalid response format
                }
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false);
            });
    };


    // console.log(Object.keys(showdata))
    return (
        <Box>
            <Center>
                <h1 style={{fontSize:"60px",color:"teal"}}>News Api</h1>
            </Center>
            <Center>
            <Box style={{ margin: "30px" }}>
                <Input
                    placeholder='Enter keyword here'
                    value={query_params}
                    onChange={(e) => setQuery_params(e.target.value)}
                    style={{ width:"400px", border:"1px solid teal", color:"teal"}}
                />
                <Center>
                    <Button
                        style={{ margin: "20px", width:"200px", backgroundColor:"teal", color:"white"}}
                        onClick={handleSubmit}
                    >
                        Get Data
                    </Button>
                </Center>
            </Box>
            </Center>
            <br/>
            {/* <Center>
            <Flex>
                    <Text style={{margin: "20px", fontSize:"30px",color:"teal"}}>Do you want to store summary?</Text>
                    <Button
                        style={{ margin: "20px", width:"200px", backgroundColor:"teal", color:"white"}}
                        onClick={handleSubmit}
                    >
                        store
                    </Button>
                </Flex>
            </Center> */}
            <br /><br />
            <Box style={{ border: "1px solid teal", margin: "20px" }}>
                <Center>
                    {loading && <Center><BeatLoader color="#36d7b7" /></Center>}
                    {!loading && Object.keys(showdata).length > 0 && (
                        <Table variant="striped" >
                            <Tbody>
                                <Tr>
                                    <Th>Hotel</Th>
                                    {Object.keys(showdata).map((hotel, index) => (
                                        <Td key={index}>{hotel}</Td>
                                    ))}
                                </Tr>
                                {fields.map((field, fieldIndex) => (
                                    <Tr key={fieldIndex}>
                                        <Th>{field.label}</Th>
                                        {Object.keys(showdata).map((hotel, index) => (
                                            <Td key={index}>
                                                {showdata[hotel][field.key]}
                                            </Td>
                                        ))}
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    )}
                    {!loading && (Object.keys(showdata).length === 0 || showdata === null || Object.keys(showdata) === null) && <Center style={{fontSize:"30px", color:"teal"}}>Data Not found 😔</Center>}
                </Center>
            </Box>
        </Box>
    )
}


export default NewsApi
