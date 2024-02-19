// HealthAndSafetyForm.js
import React from 'react';
import { FormControl, FormLabel, Input, Textarea, RadioGroup, Radio, Stack } from '@chakra-ui/react';
import Rating from '../../Rating/Rating';
import HandleUploadMedicalEmergencyPolicyPdf from '../HandleUploadPdf/HandleUploadmedicalEmergencyPolicyDocs';
import HandleUploadPolicyForEvacuationPdf from '../HandleUploadPdf/HandleHandleUploadPolicyForEvacuationPdfUploadPdf';



const HealthAndSafetyForm = ({ formData, handleInputChange, handleCheckboxChange, handleMediaDataChange, setFormData, fullData }) => {
    return (
        <>
            <FormControl>
                <FormLabel>Last Review Date:</FormLabel>
                <Input
                    type="date"
                    value={formData.lastReviewDate}
                    onChange={(e) => handleInputChange('healthSafety', 'lastReviewDate', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Rating:</FormLabel>
                <Rating value={formData.rating} onChange={(newRating) => handleInputChange('healthSafety', 'rating', newRating)} />
            </FormControl>
            <FormControl>
                <FormLabel>Comments:</FormLabel>
                <Textarea
                    id="comments"
                    name="comments"
                    value={formData.comments}
                    onChange={(e) => handleInputChange('healthSafety', 'comments', e.target.value)}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Is There Any Doctor On Site:</FormLabel>
                <RadioGroup onChange={(value) => handleInputChange('healthSafety', 'doctorOnSite', value)} value={formData.doctorOnSite.toString()}>
                    <Stack direction="row">
                        <Radio value="true">Yes</Radio>
                        <Radio value="false">No</Radio>
                    </Stack>
                </RadioGroup>
            </FormControl>
            <FormControl>
                <FormLabel>Doctor Is Permanent Or Not:</FormLabel>
                <RadioGroup onChange={(value) => handleInputChange('healthSafety', 'doctorIsPermanent', value)} value={formData.doctorIsPermanent.toString()}>
                    <Stack direction="row">
                        <Radio value="true">Yes</Radio>
                        <Radio value="false">No</Radio>
                    </Stack>
                </RadioGroup>
            </FormControl>
            <FormControl>
                <FormLabel>Is There Any Nurse On Site:</FormLabel>
                <RadioGroup onChange={(value) => handleInputChange('healthSafety', 'nurseOnsite', value)} value={formData.nurseOnsite.toString()}>
                    <Stack direction="row">
                        <Radio value="true">Yes</Radio>
                        <Radio value="false">No</Radio>
                    </Stack>
                </RadioGroup>
            </FormControl>
            <FormControl>
                <FormLabel>Nurse Is Permanent Or Not:</FormLabel>
                <RadioGroup onChange={(value) => handleInputChange('healthSafety', 'nurseIsPermanent', value)} value={formData.nurseIsPermanent.toString()}>
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
                    value={formData.onPremiseQualifications}
                    onChange={(e) => handleInputChange('healthSafety', 'onPremiseQualifications', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Defibrillators on property:</FormLabel>
                <Input
                    type="text"
                    value={formData.defibrillatorsOnProperty}
                    onChange={(e) => handleInputChange('healthSafety', 'defibrillatorsOnProperty', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Defibrillators by pool:</FormLabel>
                <Input
                    type="text"
                    value={formData.defibrillatorsByPool}
                    onChange={(e) => handleInputChange('healthSafety', 'defibrillatorsByPool', e.target.value)}
                    size="sm"
                    borderRadius="md"
                />
            </FormControl>
            <FormControl>

                <HandleUploadMedicalEmergencyPolicyPdf formData={fullData} setFormData={setFormData} />
            </FormControl>
            <FormControl>

                <HandleUploadPolicyForEvacuationPdf formData={fullData} setFormData={setFormData} />
            </FormControl>
            {/* Add other health and safety form elements here */}


        </>
    );
};

export default HealthAndSafetyForm;
