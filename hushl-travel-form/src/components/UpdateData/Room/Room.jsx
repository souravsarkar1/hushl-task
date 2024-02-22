import { Box, Button, Center, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Checkbox, CheckboxGroup, FormControl, FormLabel, Input, Radio, RadioGroup, Stack, Textarea, Wrap, WrapItem } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductMedia, getAllProduct } from '../../../redux/Products/action';
import { FadeLoader } from 'react-spinners';
const commonSafetyFeaturesOverwaterBungalow = [
    'Safety railing',
    'Life jackets',
    'Emergency exit plan',
    'Fire extinguisher',
    'First aid kit',
];
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
const safetyFeatures = [
    "Sturdy railing",
    "Safety netting",
    "Non-slip flooring",
    "Warning signs",
    "Regular maintenance checks"
];
const RoomUpdate = ({ rooms, id }) => {
    const {
        maxOccupancyAdult,
        maxOccupancyChild,
        NeedtoPreBookExtraBedding,
        safetyFeaturesifOverwaterBungalow,
        safetyFeaturesForBalcony,
        safetyFeaturesForPool,
        commentsOnHowPrivacyIsImpacted,
        interconnected,
        noiseAtNight,
        privacyLevelsGoodEnoughForStrictMuslim,
        movieSystemsOrDVDs
    } = rooms;
    const [maxOccupancyAdultData, setMaxOccupancyAdultData] = useState(maxOccupancyAdult);
    const [maxOccupancyChildData, setMaxOccupancyChildData] = useState(maxOccupancyChild);
    const [NeedtoPreBookExtraBeddingData, setNeedtoPreBookExtraBeddingData] = useState(NeedtoPreBookExtraBedding);
    const [safetyFeaturesifOverwaterBungalowData, setSafetyFeaturesifOverwaterBungalowData] = useState(safetyFeaturesifOverwaterBungalow);
    const [safetyFeaturesForBalconyData, setSafetyFeaturesForBalconyData] = useState(safetyFeaturesForBalcony);
    const [safetyFeaturesForPoolData, setSafetyFeaturesForPoolData] = useState(safetyFeaturesForPool);
    const [commentsOnHowPrivacyIsImpactedData, setCommentsOnHowPrivacyIsImpactedData] = useState(commentsOnHowPrivacyIsImpacted);
    const [interconnectedData, setInterconnectedData] = useState(interconnected);
    const [noiseAtNightData, setNoiseAtNightData] = useState(noiseAtNight);
    const [privacyLevelsGoodEnoughForStrictMuslimData, setPrivacyLevelsGoodEnoughForStrictMuslimData] = useState(privacyLevelsGoodEnoughForStrictMuslim);
    const [movieSystemsOrDVDsData, setMovieSystemsOrDVDsData] = useState(movieSystemsOrDVDs);
    const loader = useSelector(st => st.productReducer.addProductMediaIsLoading);
    const toast = useToast();
    const dispath = useDispatch();
    const handleSubmit = () => {
        const data = {
            rooms: {}
        }
        data.rooms.maxOccupancyAdult = maxOccupancyAdultData;
        data.rooms.maxOccupancyChild = maxOccupancyChildData;
        data.rooms.NeedtoPreBookExtraBedding = NeedtoPreBookExtraBeddingData;
        data.rooms.safetyFeaturesifOverwaterBungalow = safetyFeaturesifOverwaterBungalowData;
        data.rooms.safetyFeaturesForBalcony = safetyFeaturesForBalconyData;
        data.rooms.safetyFeaturesForPool = safetyFeaturesForPoolData;
        data.rooms.commentsOnHowPrivacyIsImpacted = commentsOnHowPrivacyIsImpactedData;
        data.rooms.interconnected = interconnectedData;
        data.rooms.noiseAtNight = noiseAtNightData;
        data.rooms.privacyLevelsGoodEnoughForStrictMuslim = privacyLevelsGoodEnoughForStrictMuslimData;
        data.rooms.movieSystemsOrDVDs = movieSystemsOrDVDsData;


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
                <FormLabel>Max Occupancy Adult:</FormLabel>
                <Input
                    type="number"
                    value={maxOccupancyAdultData}
                    onChange={(e) => setMaxOccupancyAdultData(e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
                <FormLabel>Max Occupancy Child:</FormLabel>
                <Input
                    type="number"
                    value={maxOccupancyChildData}
                    onChange={(e) => setMaxOccupancyChildData(e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Need to Pre-Book Extra Bedding:</FormLabel>

                <RadioGroup onChange={setNeedtoPreBookExtraBeddingData} value={NeedtoPreBookExtraBeddingData}>
                    <Stack direction="row">
                        <Radio value="yes">Yes</Radio>
                        <Radio value="no">No</Radio>
                    </Stack>
                </RadioGroup>
            </FormControl>
            <FormControl>
                <FormLabel>Safety Features if Overwater Bungalow:</FormLabel>
                <CheckboxGroup
                    colorScheme="teal"
                    onChange={setSafetyFeaturesifOverwaterBungalowData}
                    value={safetyFeaturesifOverwaterBungalowData}
                >
                    <Wrap spacing={4} justify="flex-start">
                        {commonSafetyFeaturesOverwaterBungalow.map((feature) => (
                            <WrapItem key={feature}>
                                <Checkbox value={feature}>{feature}</Checkbox>
                            </WrapItem>
                        ))}
                    </Wrap>
                </CheckboxGroup>
            </FormControl>
            <FormControl>
                <FormLabel>Safety Features of Balcony:</FormLabel>
                <CheckboxGroup
                    colorScheme="teal"
                    onChange={setSafetyFeaturesForBalconyData}
                    value={safetyFeaturesForBalconyData}
                >
                    <Wrap spacing={4} justify="flex-start">
                        {safetyFeatures.map((feature) => (
                            <WrapItem key={feature}>
                                <Checkbox value={feature}>{feature}</Checkbox>
                            </WrapItem>
                        ))}
                    </Wrap>
                </CheckboxGroup>
            </FormControl>
            <FormControl>
                <FormLabel>Safety Features For Poool:</FormLabel>
                <CheckboxGroup
                    colorScheme="teal"
                    onChange={setSafetyFeaturesForPoolData}
                    value={safetyFeaturesForPoolData}
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
            <FormControl>
                <FormLabel>Interconnected:</FormLabel>
                <Input
                    type="text"
                    value={interconnectedData}
                    onChange={(e) => setInterconnectedData(e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Comments on how privacy is impacted:</FormLabel>
                <Textarea
                    type="text"
                    value={commentsOnHowPrivacyIsImpactedData}
                    onChange={(e) => setCommentsOnHowPrivacyIsImpactedData(e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Noise at Night:</FormLabel>
                <RadioGroup onChange={setNoiseAtNightData} value={noiseAtNightData}>
                    <Stack direction="row">
                        <Radio value="veryLow">Very Low</Radio>
                        <Radio value="low">Low</Radio>
                        <Radio value="none">None</Radio>
                    </Stack>
                </RadioGroup>
            </FormControl>
            <FormControl>
                <FormLabel>Privacy Levels Good Enough for Strict Muslim:</FormLabel>
                <RadioGroup onChange={setPrivacyLevelsGoodEnoughForStrictMuslimData} value={privacyLevelsGoodEnoughForStrictMuslimData}>
                    <Stack direction="row">
                        <Radio value="true">Yes</Radio>
                        <Radio value="false">No</Radio>
                    </Stack>
                </RadioGroup>
            </FormControl>
            <FormControl>
                <FormLabel>Movie Systems or DVDs:</FormLabel>
                <RadioGroup onChange={setMovieSystemsOrDVDsData} value={movieSystemsOrDVDsData}>
                    <Stack direction="row">
                        <Radio value="true">Yes</Radio>
                        <Radio value="false">No</Radio>
                    </Stack>
                </RadioGroup>
            </FormControl>
            <Center>

                <Button onClick={handleSubmit} colorScheme="teal" size="lg" mt={5}>Update</Button>
            </Center>
        </Box>
    )
}

export default RoomUpdate;