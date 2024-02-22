import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, useToast } from '@chakra-ui/react';
import { ClipLoader } from 'react-spinners';
import { handleUploadMedia } from '../../../utils/mediaUpload';

const HandleUpdatePolicyForEvacuationPdf = ({ setFormData, formData, id }) => {
  const [loader, setLoader] = useState(false);
  const [loaderRemove, setLoaderRemove] = useState(Array.isArray(formData) ? Array(formData.length).fill(false) : []);

  const toast = useToast();

  const handleImgUrlChange = async (e, index) => {
    try {
      const formData = new FormData();
      formData.append('medicalEmergencyPolicy', e.target.files[0]);

      const pdfUrl = await handleUploadMedia(e.target.files[0], toast, id, e.target.files[0].type);

      setFormData((prevData) => {
        const updatedMedicalEmergencyPolicy = [...prevData];
        updatedMedicalEmergencyPolicy[index] = { ...updatedMedicalEmergencyPolicy[index], url: pdfUrl };
        return updatedMedicalEmergencyPolicy;
      });
    } catch (error) {
      console.error('Error uploading photo:', error);
    }
  };

  const handleRemoveImgUrl = async (index) => {
    setLoaderRemove((prevLoaderRemove) => {
      const updatedLoaderRemove = [...prevLoaderRemove];
      updatedLoaderRemove[index] = true;
      return updatedLoaderRemove;
    });

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setFormData((prevData) => prevData.filter((_, i) => i !== index));
    } catch (error) {
      console.error('Error removing photo:', error);
    } finally {
      setLoaderRemove((prevLoaderRemove) => {
        const updatedLoaderRemove = [...prevLoaderRemove];
        updatedLoaderRemove[index] = false;
        return updatedLoaderRemove;
      });
    }
  };

  const handleAddImgUrl = () => {
    setLoader(true);
    setTimeout(() => {
      setFormData((prevData) => [...prevData, { title: '', url: '' }]);
      setLoader(false);
    }, 1000);
  };

  const handleChangeMediaTitle = (e, index) => {
    const { value } = e.target;

    setFormData((prevData) => {
      const updatedMedicalEmergencyPolicy = [...prevData];
      updatedMedicalEmergencyPolicy[index] = { ...updatedMedicalEmergencyPolicy[index], title: value };
      return updatedMedicalEmergencyPolicy;
    });
  };

  const isAddButtonDisabled = !Array.isArray(formData) || formData?.some((item) => item.url === '' || item.title === '');

  const isRemoveButtonDisabled = !Array.isArray(formData) || formData.length === 1;

  return (
    <div>
      <FormControl id="medicalEmergencyPolicy">
        <FormLabel>Medical Emergency Policy File</FormLabel>
        {(Array.isArray(formData) ? formData : []).map((imgUrl, index) => (
          <Box p={2} key={index} gap={3} display="flex" alignItems="center">
            <FormControl id={`title-${index}`}>
              <FormLabel>Document *</FormLabel>
              <Input
                type="file"
                accept="application/pdf,.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                name={`imgUrl-${index}`}
                onChange={(e) => handleImgUrlChange(e, index)}
                style={{ marginRight: '8px' }}
                placeholder="Select Document"
              />
            </FormControl>

            <FormControl id={`title-${index}`}>
              <FormLabel>Document Title *</FormLabel>
              <Input
                type="text"
                placeholder={`Document ${index + 1} Title`}
                value={imgUrl.title}
                onChange={(e) => handleChangeMediaTitle(e, index)}
                isRequired={true}
              />
            </FormControl>

            <Button mt={8} w={300} colorScheme="red" isDisabled={isRemoveButtonDisabled} onClick={() => handleRemoveImgUrl(index)}>
              {loaderRemove[index] ? <ClipLoader /> : 'Remove'}
            </Button>
          </Box>
        ))}
        <Button colorScheme="teal" onClick={handleAddImgUrl} isDisabled={isAddButtonDisabled}>
          {loader ? <ClipLoader /> : 'Add More'}
        </Button>
      </FormControl>
    </div>
  );
};

export default HandleUpdatePolicyForEvacuationPdf;
