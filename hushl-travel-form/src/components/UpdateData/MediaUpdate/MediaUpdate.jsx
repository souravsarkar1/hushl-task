import React, { useState } from 'react';
import { Box, Button, Center, FormControl, FormLabel, Image, Input, useToast } from '@chakra-ui/react';
import { handleUploadMedia } from '../../../utils/mediaUpload';
import Popup from '../../Modal/Popup';
import { ClipLoader, FadeLoader } from 'react-spinners';
import { addProductMedia, getAllProduct } from '../../../redux/Products/action';
import { useDispatch, useSelector } from 'react-redux';

const UpdateImage = ({ id, initialFormData }) => {
  const [formDataState, setFormDataState] = useState(initialFormData);
  const [loader, setLoader] = useState(false);
  const [loaderRemove, setLoaderRemove] = useState(Array(initialFormData.images?.length).fill(false));

  const toast = useToast();
  const loader2 = useSelector(st => st.productReducer.addProductMediaIsLoading);

  const dispath = useDispatch();
  const handleSubmit = () => {
    // console.log(formDataState);
    const data = {
      media: {},
    };
    data.media = formDataState;
    dispath(addProductMedia(id, data, toast)).then(res => {
      dispath(getAllProduct());
    });
  };
  if (loader2) {
    return (
      <Center>
        <FadeLoader color="#36d7b7" />
      </Center>
    );
  }
  const handleImgUrlChange = async (e, index) => {
    try {
      const newFormData = { ...formDataState };
      const formData = new FormData();
      formData.append('image', e.target.files[0]);

      const imageUrl = await handleUploadMedia(e.target.files[0], toast, id, e.target.files[0].type);

      newFormData.images[index] = { title: '', url: imageUrl };
      setFormDataState(newFormData);
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

      const newFormData = { ...formDataState };
      newFormData.images = formDataState.images.filter((_, i) => i !== index);
      setFormDataState(newFormData);
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
      const newFormData = { ...formDataState };
      newFormData.images.push({ title: '', url: '' });
      setFormDataState(newFormData);
      setLoader(false);
    }, 1000);
  };

  const handleChangeMediaTitle = (e, index) => {
    const { value } = e.target;

    const newFormData = { ...formDataState };
    newFormData.images[index].title = value;
    setFormDataState(newFormData);
  };

  const isAddButtonDisabled = formDataState.images?.some(img => img.url === '' || img.title === '');
  const isRemoveButtonDisabled = formDataState.images?.length === 1;

  return (
    <div>
      <FormControl id="images">
        <FormLabel>Image URLs</FormLabel>
        {formDataState.images?.map((imgUrl, index) => (
          <Box p={2} key={index} gap={3} display="flex" alignItems="center">
            {formDataState?.images[index]?.url ? (
              <Popup
                children={<Image h={200} w={200} src={formDataState?.images[index]?.url} />}
                modalTitle={<Image h={10} w={10} src={formDataState?.images[index]?.url} />}
              />
            ) : null}
            <FormControl id="title">
              <FormLabel>Image *</FormLabel>
              <Input
                type="file"
                accept="image/*"
                name="imgUrl"
                onChange={e => handleImgUrlChange(e, index)}
                style={{ marginRight: '8px' }}
                placeholder="Select Image"
              />
            </FormControl>
            <FormControl id="title">
              <FormLabel>Image Title *</FormLabel>
              <Input
                type="text"
                placeholder={`Image ${index + 1} Title`}
                value={imgUrl.title}
                onChange={e => handleChangeMediaTitle(e, index)}
                required
              />
            </FormControl>
            <Button
              w={300}
              colorScheme="red"
              disabled={isRemoveButtonDisabled}
              onClick={() => handleRemoveImgUrl(index)}
            >
              {loaderRemove[index] ? <ClipLoader /> : ' Remove'}
            </Button>
          </Box>
        ))}
        <Button colorScheme="teal" onClick={handleAddImgUrl} disabled={isAddButtonDisabled}>
          {loader ? <ClipLoader /> : ' Add More'}
        </Button>
      </FormControl>
      <Center>
        <Button onClick={handleSubmit} colorScheme="teal">
          Update
        </Button>
      </Center>
    </div>
  );
};

export default UpdateImage;
