export const initialFromValidations = (formData, toast) => {
  if (!formData.hotel.name) {
    toast({
      title: 'Please Enter the Hotel Name',
      status: 'error',
      duration: 2000,
      isClosable: true,
      position: 'top',
    });
    return false;
  } else if (!formData.hotel.address) {
    toast({
      title: 'Please Enter the Hotel Address',
      status: 'error',
      duration: 2000,
      isClosable: true,
      position: 'top',
    });
    return false;
  } else if (!formData.hotel.website) {
    toast({
      title: 'Please Enter the Hotel Website',
      status: 'error',
      duration: 2000,
      isClosable: true,
      position: 'top',
    });
    return false;
  }
  return true;
};
