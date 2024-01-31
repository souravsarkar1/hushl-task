import React from 'react';
import { FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
import HandleMediaUpload from '../../MediaUploading/MediaUploading';
import Rating from '../../../pages/Froms/FromsComponent/Rating';

const HealthSafety = ({ healthSafetyData, onHealthSafetyDataChange }) => {
  const handleLastReviewDateChange = (e) => {
    onHealthSafetyDataChange({ ...healthSafetyData, lastReviewDate: new Date(e.target.value) });
  };

  const handleCommentsChange = (e) => {
    onHealthSafetyDataChange({ ...healthSafetyData, comments: e.target.value });
  };

  const handleRatingChange = (value) => {
    //console.log(value);
    //console.log(healthSafetyData);
    onHealthSafetyDataChange((prevData) => ({
      ...prevData,  
      rating: value,
    }));
  };
  
  return (
    <div>
      <FormControl mb={4}>
        <FormLabel>Last Review Date:</FormLabel>
        <Input
          type="date"
          id="lastReviewDate"
          name="lastReviewDate"
          value={healthSafetyData.lastReviewDate.toISOString().split('T')[0]}
          onChange={handleLastReviewDateChange}
          size="sm"
          borderRadius="md"
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Rating:</FormLabel>
        <Rating value={healthSafetyData.rating} onChange={handleRatingChange} />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Comments:</FormLabel>
        <Textarea
          id="comments"
          name="comments"
          value={healthSafetyData.comments}
          onChange={handleCommentsChange}
          size="sm"
          borderRadius="md"
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Policy for Evacuation (File Upload):</FormLabel>
        <HandleMediaUpload
          mediaType="policyForEvacuation"
          mediaData={healthSafetyData.policyForEvacuation}
          onMediaDataChange={(newMediaData) =>
            onHealthSafetyDataChange({ ...healthSafetyData, policyForEvacuation: newMediaData })
          }
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Medical Emergency Policy (File Upload):</FormLabel>
        <HandleMediaUpload
          mediaType="medicalEmergencyPolicy"
          mediaData={healthSafetyData.medicalEmergencyPolicy}
          onMediaDataChange={(newMediaData) =>
            onHealthSafetyDataChange({ ...healthSafetyData, medicalEmergencyPolicy: newMediaData })
          }
        />
      </FormControl>
    </div>
  );
};

export default HealthSafety;
