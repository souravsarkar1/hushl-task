import React, { useState } from 'react';
import { FormControl, FormLabel, RadioGroup, Stack, Radio, Button, Box, useToast, Center, Textarea, Input } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
// import { getAllProduct, updateHealthSafetyData } from '../../../redux/Products/action'; // Import the correct action for updating health safety data
import { FadeLoader } from 'react-spinners';
import Rating from '../../Rating/Rating';
import { addProductMedia, getAllProduct } from '../../../redux/Products/action';
// import HandleUploadMedicalEmergencyPolicyPdf from '../../Froms/HandleUploadPdf/HandleUploadmedicalEmergencyPolicyDocs';
import HandleUpdateMedicalEmergencyPolicyPdf from '../HandlePdfUpload/HandleUpdateMedicalEmergencyPolicyPdf';
import HandleUpdatePolicyForEvacuationPdf from '../HandlePdfUpload/HandleUpdatePolicyForEvacuationPdf';
// import HandleUploadPolicyForEvacuationPdf from '../../Froms/HandleUploadPdf/HandleHandleUploadPolicyForEvacuationPdfUploadPdf';

const HealthSafetyUpdate = ({ healthSafety, id }) => {
    const { lastReviewDate, rating, comments, policyForEvacuation, medicalEmergencyPolicy, doctorOnSite, doctorIsPermanent, nurseOnsite, nurseIsPermanent, onPremiseQualifications, defibrillatorsOnProperty, defibrillatorsByPool } = healthSafety;
    const dateString = lastReviewDate;
    const dateObject = new Date(dateString);

    // Extracting only the date part
    const dateOnly = dateObject.toISOString().split('T')[0];



    const [lastReviewDateData, setLastReviewDateData] = useState(dateOnly);
    const [ratingData, setRatingData] = useState(rating);
    const [commentsData, setCommentsData] = useState(comments);
    const [policyForEvacuationData, setPolicyForEvacuationData] = useState([...policyForEvacuation]);
    const [medicalEmergencyPolicyData, setMedicalEmergencyPolicyData] = useState([...medicalEmergencyPolicy]);
    const [doctorOnSiteData, setDoctorOnSiteData] = useState(doctorOnSite);
    const [doctorIsPermanentData, setDoctorIsPermanentData] = useState(doctorIsPermanent);
    const [nurseOnsiteData, setNurseOnsiteData] = useState(nurseOnsite);
    const [nurseIsPermanentData, setNurseIsPermanentData] = useState(nurseIsPermanent);
    const [onPremiseQualificationsData, setOnPremiseQualificationsData] = useState(onPremiseQualifications);
    const [defibrillatorsOnPropertyData, setDefibrillatorsOnPropertyData] = useState(defibrillatorsOnProperty);
    const [defibrillatorsByPoolData, setDefibrillatorsByPoolData] = useState(defibrillatorsByPool);

    const dispatch = useDispatch();
    const loader = useSelector(st => st.productReducer.addProductMediaIsLoading);
    const toast = useToast();




    const handleSubmit = () => {
        const updatedData = {
            lastReviewDate: lastReviewDateData,
            rating: ratingData,
            comments: commentsData,
            policyForEvacuation: policyForEvacuationData,
            medicalEmergencyPolicy: medicalEmergencyPolicyData,
            doctorOnSite: doctorOnSiteData,
            doctorIsPermanent: doctorIsPermanentData,
            nurseOnsite: nurseOnsiteData,
            nurseIsPermanent: nurseIsPermanentData,
            onPremiseQualifications: onPremiseQualificationsData,
            defibrillatorsOnProperty: defibrillatorsOnPropertyData,
            defibrillatorsByPool: defibrillatorsByPoolData
        };
        const data = {
            healthSafety: {}
        };
        data.healthSafety = updatedData;
        dispatch(addProductMedia(id, data, toast)).then(() => {
            // Optional: You may want to fetch updated data after successful update
            dispatch(getAllProduct());
        });
    };

    if (loader) {
        return <Center><FadeLoader color="#36d7b7" /></Center>
    }

    return (
        <Box w={"auto"}>
            <FormControl>
                <FormLabel>Last Review Date:</FormLabel>
                <Input
                    type="date"
                    value={lastReviewDateData}
                    onChange={(e) => setLastReviewDateData(e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Rating:</FormLabel>
                <Rating value={ratingData} onChange={setRatingData} />
            </FormControl>
            <FormControl>
                <FormLabel>Comments:</FormLabel>
                <Textarea
                    id="comments"
                    name="comments"
                    value={commentsData}
                    onChange={(e) => setCommentsData(e.target.value)}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Is There Any Doctor On Site:</FormLabel>
                <RadioGroup onChange={setDoctorOnSiteData} value={doctorOnSiteData}>
                    <Stack direction="row">
                        <Radio value="true">Yes</Radio>
                        <Radio value="false">No</Radio>
                    </Stack>
                </RadioGroup>
            </FormControl>
            <FormControl>
                <FormLabel>Doctor Is Permanent Or Not:</FormLabel>
                <RadioGroup onChange={setDoctorIsPermanentData} value={doctorIsPermanentData}>
                    <Stack direction="row">
                        <Radio value="true">Yes</Radio>
                        <Radio value="false">No</Radio>
                    </Stack>
                </RadioGroup>
            </FormControl>
            <FormControl>
                <FormLabel>Is There Any Nurse On Site:</FormLabel>
                <RadioGroup onChange={setNurseOnsiteData} value={nurseOnsiteData}>
                    <Stack direction="row">
                        <Radio value="true">Yes</Radio>
                        <Radio value="false">No</Radio>
                    </Stack>
                </RadioGroup>
            </FormControl>
            <FormControl>
                <FormLabel>Nurse Is Permanent Or Not:</FormLabel>
                <RadioGroup onChange={setNurseIsPermanentData} value={nurseIsPermanentData}>
                    <Stack direction="row">
                        <Radio value="true">Yes</Radio>
                        <Radio value="false">No</Radio>
                    </Stack>
                </RadioGroup>
            </FormControl>
            <FormControl>
                <FormLabel>On premise qualifications:</FormLabel>
                <Input
                    type="text"
                    value={onPremiseQualificationsData}
                    onChange={(e) => setOnPremiseQualificationsData(e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Defibrillators on property:</FormLabel>
                <Input
                    type="text"
                    value={defibrillatorsOnPropertyData}
                    onChange={(e) => setDefibrillatorsOnPropertyData(e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Defibrillators by pool:</FormLabel>
                <Input
                    type="text"
                    value={defibrillatorsByPoolData}
                    onChange={(e) => setDefibrillatorsByPoolData(e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>

                <HandleUpdateMedicalEmergencyPolicyPdf formData={medicalEmergencyPolicyData} setFormData={setMedicalEmergencyPolicyData} id={id} />
            </FormControl>
            <FormControl>

                <HandleUpdatePolicyForEvacuationPdf formData={policyForEvacuationData} setFormData={setPolicyForEvacuationData} />
            </FormControl>


            <Button onClick={handleSubmit}>Update Data</Button>
        </Box>
    );
};

export default HealthSafetyUpdate;
