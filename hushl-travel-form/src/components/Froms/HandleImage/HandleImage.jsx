import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, useToast } from '@chakra-ui/react';
import { ClipLoader } from 'react-spinners';
import { handleUploadMedia } from '../../../utils/mediaUpload';

const HandleImage = ({ setFormData, formData, id, field }) => {
  console.log(formData);
  const [loader, setLoader] = useState(false);
  const [loaderRemove, setLoaderRemove] = useState(Array(formData[field].images?.length).fill(false));
  const toast = useToast();

  const handleImgUrlChange = async (e, index) => {
    try {
      const formData = new FormData();
      formData.append('images', e.target.files[0]);

      const pdfUrl = await handleUploadMedia(e.target.files[0], toast, id, e.target.files[0].type);

      setFormData(prevData => ({
        ...prevData,
        [field]: {
          ...prevData[field],
          images: [
            ...prevData[field].images.slice(0, index),
            { title: '', url: pdfUrl },
            ...prevData[field].images.slice(index + 1),
          ],
        },
      }));
    } catch (error) {
      console.error('Error uploading photo:', error);
    }
  };

  const handleRemoveImgUrl = async index => {
    setLoaderRemove(prevLoaderRemove => {
      const updatedLoaderRemove = [...prevLoaderRemove];
      updatedLoaderRemove[index] = true;
      return updatedLoaderRemove;
    });

    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating asynchronous removal process

      setFormData(prevData => ({
        ...prevData,
        [field]: {
          ...prevData[field],
          images: prevData[field].images.filter((_, i) => i !== index),
        },
      }));
    } catch (error) {
      console.error('Error removing photo:', error);
    } finally {
      setLoaderRemove(prevLoaderRemove => {
        const updatedLoaderRemove = [...prevLoaderRemove];
        updatedLoaderRemove[index] = false;
        return updatedLoaderRemove;
      });
    }
  };

  const handleAddImgUrl = () => {
    setLoader(true);
    setTimeout(() => {
      setFormData(prevData => ({
        ...prevData,
        [field]: {
          ...prevData[field],
          images: [...prevData[field].images, { title: '', url: '' }],
        },
      }));
      setLoader(false);
    }, 1000);
  };

  const handleChangeMediaTitle = (e, mediaType, index) => {
    const { value } = e.target;

    setFormData(prevData => {
      const updatedMedia = [...prevData[field][mediaType]];
      updatedMedia[index] = { ...updatedMedia[index], title: value };

      return {
        ...prevData,
        [field]: {
          ...prevData[field],
          [mediaType]: updatedMedia,
        },
      };
    });
  };

  const isAddButtonDisabled = formData[field].images?.some(images => images.url === '' || images.title === '');

  const isRemoveButtonDisabled = formData[field].images?.length === 1;

  return (
    <div>
      <FormControl id="images">
        <FormLabel>Policy For Evacuation File</FormLabel>
        {formData[field].images?.map((imgUrl, index) => (
          <Box p={2} key={index} gap={3} display="flex" alignItems="center">
            <FormControl id="title">
              <FormLabel>Document *</FormLabel>
              <Input
                type="file"
                accept="image/*"
                name="imgUrl"
                onChange={e => handleImgUrlChange(e, index)}
                style={{ marginRight: '8px' }}
                placeholder="Select Document"
              />
            </FormControl>

            <FormControl id="title">
              <FormLabel>Document Title *</FormLabel>
              <Input
                type="text"
                placeholder={`Document ${index + 1} Title`}
                value={imgUrl.title}
                onChange={e => handleChangeMediaTitle(e, 'images', index)}
                isRequired={true}
              />
            </FormControl>

            <Button
              mt={8}
              w={300}
              colorScheme="red"
              isDisabled={isRemoveButtonDisabled}
              onClick={() => handleRemoveImgUrl(index)}
            >
              {loaderRemove[index] ? <ClipLoader /> : 'Remove'}
            </Button>
          </Box>
        ))}
        <Button colorScheme="teal" onClick={handleAddImgUrl} isDisabled={isAddButtonDisabled}>
          {loader ? <ClipLoader h={40} w={40} /> : 'Add More'}
        </Button>
      </FormControl>
    </div>
  );
};

export default HandleImage;
