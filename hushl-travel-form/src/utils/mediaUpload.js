import axios from "axios";
import { removeSpaces } from "./removeSpace";

export const handleUploadMedia = async (currentPhoto,toast,id,contentType) => {
const api = process.env.REACT_APP_API;
  const name = removeSpaces(currentPhoto.name)
  
    if (currentPhoto) {
      try {
        // 1. Generate S3 upload link
        const uploadLinkResponse = await axios.post(
          `${api}/document/upload`,
          {
            fileName: name,
            contentType: contentType || currentPhoto.type,
            fileType: 'adminFile',
            fileTypeId: id || 123, 
          }
        );

        const uploadUrl = uploadLinkResponse.data.preSignedUrl;

        // 2. Convert the photo to base64
        // const base64Data = await getBase64(currentPhoto);


        // 3. Upload the photo to S3 using the generated link
        const uploaded = await uploadImage(uploadUrl, currentPhoto,contentType);
        console.log(uploaded);
        // 4. Update the state with the new photo URL
        const uploadLinkResponseFinal = await axios.post(
          `${api}/document/getviewmedialink`,
          {
            fileName: currentPhoto.name,
            contentType: contentType || currentPhoto.type,
            fileType: 'adminFile', // Replace with the correct fileType
            fileTypeId: id || 123, // Replace with the correct fileTypeId
          }
        );

        toast({
          title:  'Media upload',
          description: `media upload successfully`,
          status: 'success',
          duration: 2000,
          isClosable: true,
          position: "top"
      })
      // 
        return uploadLinkResponseFinal.data.url;
      } catch (error) {
        console.error('Error uploading photo:', error);
        toast({
          title: error.message || 'Media upload',
          description: `Some things went wrong`,
          status: 'error',
          duration: 2000,
          isClosable: true,
          position: "top"
      })
      }
    }
  };

  const uploadImage = async (uploadUrl, base64Data,contentType) => {
    // Use fetch with the correct headers and method
    return fetch(uploadUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': contentType || 'image/*',
      },
      body: base64Data,
    });
  };