import React, { useState } from 'react';
import { Button, Box, Input, Center, Table, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import axios from "axios";
import { BeatLoader } from 'react-spinners';

const fields = [
    // { label: "Title", key: "title" },
    // { label: "Video", key: "video" },
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

const YouTube = () => {
    const [query_params, setQuery_params] = useState("");
    const [showdata, setShowData] = useState({});
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // axios.post('http://13.234.116.79/you/', { query_params: query_params })
        axios.post('http://127.0.0.1:8000/you/', { query_params: query_params })
            .then((res) => {
                console.log(res.data);
                setShowData(res.data);
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false);
            });
    };

    // const handleStore = () => {
    //     const summaries1 = [];
    //     showdata.forEach(item => {
    //         console.log("item.summaries:", item.summaries);
    //         summaries1.push({
    //             // hotel: item.title,
    //             // video_id: item.video_id,
    //             summary: item.summaries.summary,
    //             reefQuality: item.summaries.reefQuality,
    //             kidsFriendly: item.summaries.kidsFriendly,
    //             familyFriendly: item.summaries.familyFriendly,
    //             languagesSpoken: item.summaries.languagesSpoken,
    //             reviewsAwards: item.summaries.reviewsAwards,
    //             uniqueSellingPoints: item.summaries.uniqueSellingPoints,
    //             hospitalSpecialties: item.summaries.hospitalSpecialties,
    //             transferOptions: item.summaries.transferOptions,
    //             distanceFromMale: item.summaries.distanceFromMale,
    //             availabilityOfSubmarineTours: item.summaries.availabilityOfSubmarineTours,
    //             amenities: item.summaries.amenities,
    //             healthSafetyMeasures: item.summaries.healthSafetyMeasures,
    //             numberBarsRestaurants: item.summaries.numberBarsRestaurants,
    //             accommodationDietaryNeedsAllergies: item.summaries.accommodationDietaryNeedsAllergies,
    //             nannyServices: item.summaries.nannyServices,
    //             roomLayoutMap: item.summaries.roomLayoutMap,
    //             poolDimensions: item.summaries.poolDimensions,
    //             availabilityOfBabyBathDuringTransfers: item.summaries.availabilityOfBabyBathDuringTransfers,
    //             LGBTQIFriendliness: item.summaries.LGBTQIFriendliness,
    //             exclusivityForAdults: item.summaries.exclusivityForAdults,
    //             lastRenovationDate: item.summaries.lastRenovationDate,
    //             reviewSentiments: item.summaries.reviewSentiments,
    //             onsiteMarineBiologist: item.summaries.onsiteMarineBiologist,
    //             affiliatedActivities: item.summaries.affiliatedActivities,
    //             stingrayFishFeeding: item.summaries.stingrayFishFeeding,
    //             flotationDevices: item.summaries.flotationDevices,
    //             nearbySurfSites: item.summaries.nearbySurfSites,
    //             specialistMachines: item.summaries.specialistMachines,
    //             propertyDesign: item.summaries.propertyDesign,
    //             breakfastInclusion: item.summaries.breakfastInclusion,
    //             beachDistance: item.summaries.beachDistance,
    //             maximumOccupancy: item.summaries.maximumOccupancy,
    //             kidsEatFreePolicy: item.summaries.kidsEatFreePolicy,
    //             fishSharkAbundance: item.summaries.fishSharkAbundance,
    //             trainerAvailability: item.summaries.trainerAvailability,
    //             totalRooms: item.summaries.totalRooms,
    //             staffLanguages: item.summaries.staffLanguages,
    //             preBookingAdvisability: item.summaries.preBookingAdvisability,
    //             specialtyNights: item.summaries.specialtyNights,
    //             childAgeCategories: item.summaries.childAgeCategories,
    //             cotAvailabilityCosts: item.summaries.cotAvailabilityCosts,
    //             livingRoomLayout: item.summaries.livingRoomLayout,
    //             childrensToys: item.summaries.childrensToys,
    //             halaalDining: item.summaries.halaalDining,
    //             kidsMenu: item.summaries.kidsMenu,
    //             childFriendlyAmenities: item.summaries.childFriendlyAmenities,
    //             cleanlinessStandards: item.summaries.cleanlinessStandards,
    //             averageRoomSize: item.summaries.averageRoomSize,
    //             rollawayBedPolicyCosts: item.summaries.rollawayBedPolicyCosts,
    //             kitchenFacilities: item.summaries.kitchenFacilities,
    //             childrensCutleryAvailability: item.summaries.childrensCutleryAvailability,
    //         });
    //     });

    //     const you_tube_data = {
    //         isStore: true,
    //         summaries: summaries1,
    //     };
    //    console.log(summaries1)
    //     axios.post('http://127.0.0.1:8000/store', {you_tube_data})
    //         .then((res) => {
    //             console.log(res.data);
    //             alert("data stored!!")
    //         })
    //         .catch((err) => console.log(err))
    // }

    return (
        <Box>
            <Center>
                <h1 style={{ fontSize: "60px", color: "teal" }}>YOU TUBE TRANSCRIPTER</h1>
            </Center>
            <Center>
                <Box style={{ margin: "30px" }}>
                    <Input
                        placeholder='Enter keyword here'
                        value={query_params}
                        onChange={(e) => setQuery_params(e.target.value)}
                        style={{ width: "400px", border: "1px solid teal", color: "teal" }}
                    />
                    <Center>
                        <Button
                            style={{ margin: "20px", width: "200px", backgroundColor: "teal", color: "white" }}
                            onClick={handleSubmit}
                        >
                            Get Data
                        </Button>
                    </Center>
                </Box>
            </Center>
            <br />
            {/* <Center>
                <Flex>
                    <Text style={{ margin: "20px", fontSize: "30px", color: "teal" }}>Do you want to store summary?</Text>
                    <Button
                        style={{ margin: "20px", width: "200px", backgroundColor: "teal", color: "white" }}
                        onClick={handleStore}
                    >
                        store
                    </Button>
                </Flex>
            </Center> */}
            <br /><br />

            <Box style={{ border: "1px solid teal", margin: "20px" }}>
                <Center>
                    {loading && <Center><BeatLoader color="#36d7b7" /></Center>}
                    {!loading && showdata.length > 0 && (
                        <Table variant="striped">
                            <Tbody>
                                {fields.map((field, index) => (
                                    <Tr key={index}>
                                        <Th>{field.label}</Th>
                                        {showdata.map((item, idx) => (
                                            // <Td key={idx}>{item.summaries[field.key]}</Td>
                                            <Td key={idx}>{item ?  item.summaries[field.key] : item[field.key] }</Td>

                                        ))}
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    )}
                    {!loading && (Object.keys(showdata).length === 0 || showdata === null || Object.keys(showdata) === null) && <Center style={{ fontSize: "30px", color: "teal" }}>Data Not found 😔</Center>}
                </Center>
            </Box>


{/* 
<Box style={{ border: "1px solid teal", margin: "20px" }}>
    <Center>
        {loading && <Center><BeatLoader color="#36d7b7" /></Center>}
        {!loading && showdata.length > 0 && (
            <Table variant="striped">
                <Tbody>
                    {showdata.map((item, idx) => (
                        <React.Fragment key={idx}>
                            <Tr>
                                <Th>Video</Th>
                                <Td>{item.video}</Td>
                            </Tr>
                            <Tr>
                                <Th>Title</Th>
                                <Td>{item.title}</Td>
                            </Tr>
                            {fields.map((field, index) => (
                                <Tr key={index}>
                                    <Th>{field.label}</Th>
                                    <Td>{item.summaries[field.key]}</Td>
                                </Tr>
                            ))}
                        </React.Fragment>
                    ))}
                </Tbody>
            </Table>
        )}
        {!loading && (Object.keys(showdata).length === 0 || showdata === null || Object.keys(showdata) === null) && <Center style={{ fontSize: "30px", color: "teal" }}>Data Not found 😔</Center>}
    </Center>
</Box> */}



        </Box >
    )
}


export default YouTube

