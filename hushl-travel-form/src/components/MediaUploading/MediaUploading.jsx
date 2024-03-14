import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { ClipLoader } from 'react-spinners';

const HandleMediaUpload = ({ mediaData, onMediaDataChange }) => {
  const [loaderRemove, setLoaderRemove] = useState(Array(mediaData?.length).fill(false));

  const handleMediaChange = async (e, index) => {
    try {
      const formData = new FormData();
      formData.append('file', e.target.files[0]);

      // Simulating asynchronous upload process
      setLoaderRemove(prevLoaderRemove => {
        const updatedLoaderRemove = [...prevLoaderRemove];
        updatedLoaderRemove[index] = true;
        return updatedLoaderRemove;
      });

      await new Promise(resolve => setTimeout(resolve, 1000));

      const mediaUrl = 'https://example.com'; // Replace with the actual URL from your upload process

      onMediaDataChange(prevMediaData => [
        ...prevMediaData.slice(0, index),
        { title: '', url: mediaUrl },
        ...prevMediaData.slice(index + 1),
      ]);
    } catch (error) {
      console.error('Error uploading media:', error);
    } finally {
      setLoaderRemove(prevLoaderRemove => {
        const updatedLoaderRemove = [...prevLoaderRemove];
        updatedLoaderRemove[index] = false;
        return updatedLoaderRemove;
      });
    }
  };

  const handleRemoveMedia = async index => {
    setLoaderRemove(prevLoaderRemove => {
      const updatedLoaderRemove = [...prevLoaderRemove];
      updatedLoaderRemove[index] = true;
      return updatedLoaderRemove;
    });

    try {
      // Simulating asynchronous removal process
      await new Promise(resolve => setTimeout(resolve, 1000));

      onMediaDataChange(prevMediaData => [...prevMediaData.slice(0, index), null, ...prevMediaData.slice(index + 1)]);
    } catch (error) {
      console.error('Error removing media:', error);
    } finally {
      setLoaderRemove(prevLoaderRemove => {
        const updatedLoaderRemove = [...prevLoaderRemove];
        updatedLoaderRemove[index] = false;
        return updatedLoaderRemove;
      });
    }
  };

  const handleAddMedia = () => {
    onMediaDataChange([...mediaData, { title: '', url: '' }]);
  };

  const handleChangeMediaTitle = (e, index) => {
    const { value } = e.target;

    onMediaDataChange(prevMediaData => [
      ...prevMediaData.slice(0, index),
      { ...prevMediaData[index], title: value },
      ...prevMediaData.slice(index + 1),
    ]);
  };

  const isRemoveButtonDisabled = mediaData?.length === 1;

  return (
    <div>
      <FormControl>
        {Array.isArray(mediaData) &&
          mediaData.map((media, index) => (
            <Box key={index} p={2} gap={3} display="flex" alignItems="center">
              <FormControl>
                <FormLabel>File *</FormLabel>
                <Input
                  type="file"
                  accept=".doc, .docx, .xml, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  onChange={e => handleMediaChange(e, index)}
                  style={{ marginRight: '8px' }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Title *</FormLabel>
                <Input
                  type="text"
                  placeholder={`File ${index + 1} Title`}
                  value={media.title}
                  onChange={e => handleChangeMediaTitle(e, index)}
                />
              </FormControl>
              <Button
                w={300}
                colorScheme="red"
                isDisabled={isRemoveButtonDisabled}
                onClick={() => handleRemoveMedia(index)}
              >
                {loaderRemove[index] ? <ClipLoader color="#36d7b7" /> : ' Remove'}
              </Button>
            </Box>
          ))}
        <Button colorScheme="teal" onClick={handleAddMedia}>
          Add More
        </Button>
      </FormControl>
    </div>
  );
};

export default HandleMediaUpload;
