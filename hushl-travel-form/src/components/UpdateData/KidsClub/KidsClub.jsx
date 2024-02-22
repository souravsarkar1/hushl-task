import { Box, Button, Center, Checkbox, CheckboxGroup, FormControl, FormLabel, Input, Wrap, WrapItem, useToast } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FadeLoader } from 'react-spinners';
import { addProductMedia, getAllProduct } from '../../../redux/Products/action';
const languagesList = [
    'English', 'Mandarin', 'Hindi', 'Spanish', 'French',
    'Arabic', 'Bengali', 'Russian', 'Portuguese', 'Urdu'
];
const KidsClubUpdate = ({ kidsClub, id }) => {
    const { ratioofStafftoChildren, staffQualifications, languagesSpoken } = kidsClub;
    const [ratioofStafftoChildrenData, setRatioofStafftoChildren] = useState(ratioofStafftoChildren);
    const [staffQualificationsData, setStaffQualifications] = useState([...staffQualifications]);
    const [languagesSpokenData, setLanguagesSpoken] = useState([...languagesSpoken]);
    const loader = useSelector(st => st.productReducer.addProductMediaIsLoading);
    const toast = useToast();
    const dispath = useDispatch();
    const handleSubmit = () => {
        const data = {
            kidsClub: {}
        }
        data.kidsClub.ratioofStafftoChildren = ratioofStafftoChildrenData;
        data.kidsClub.staffQualifications = staffQualificationsData;
        data.kidsClub.languagesSpoken = languagesSpokenData;
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
                <FormLabel>Ratio of Staff to Children:</FormLabel>
                <Input
                    type="number"
                    value={ratioofStafftoChildrenData}
                    onChange={(e) => setRatioofStafftoChildren(e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Staff Qualifications</FormLabel>
                <CheckboxGroup
                    colorScheme="teal"
                    onChange={setStaffQualifications}
                    value={staffQualificationsData}
                >
                    <Wrap spacing={4} justify="flex-start">
                        <WrapItem><Checkbox value="FirstAid">First Aid</Checkbox></WrapItem>
                        <WrapItem><Checkbox value="ChildCareCertification">Child Care Certification</Checkbox></WrapItem>
                        <WrapItem><Checkbox value="CPR">CPR</Checkbox></WrapItem>
                        <WrapItem><Checkbox value="Other">Other</Checkbox></WrapItem>
                    </Wrap>
                </CheckboxGroup>
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Languages Spoken:</FormLabel>
                <CheckboxGroup
                    colorScheme="teal"
                    onChange={setLanguagesSpoken}
                    value={languagesSpokenData}
                >
                    <Wrap spacing={4} justify="flex-start">
                        {languagesList.map((language) => (
                            <WrapItem key={language}>
                                <Checkbox value={language}>{language}</Checkbox>
                            </WrapItem>
                        ))}
                    </Wrap>
                </CheckboxGroup>
            </FormControl>
            <Center>
                <Button onClick={handleSubmit} colorScheme='teal'>Update</Button>
            </Center>
        </Box>
    )
}

export default KidsClubUpdate;