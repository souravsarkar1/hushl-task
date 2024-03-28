const validatePassword = password => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
  return passwordRegex.test(password);
};

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
  } else if (!formData.hotel.website || !formData.hotel.website.includes('.')) {
    toast({
      title: 'Please Enter the Hotel Website',
      description: 'Not a Website',
      status: 'error',
      duration: 2000,
      isClosable: true,
      position: 'top',
    });
    return false;
  } else if (!formData.hotel.userName || formData.hotel.userName.length < 8 || !formData.hotel.userName.includes('@')) {
    toast({
      title: 'Please Enter a Valid Username',
      description: 'Username must be at least 8 characters and contain @',
      status: 'error',
      duration: 2000,
      isClosable: true,
      position: 'top',
    });
    return false;
  } else if (
    !formData.hotel.password ||
    formData.hotel.password.length < 8 ||
    !validatePassword(formData.hotel.password)
  ) {
    toast({
      title: 'Please Enter a Valid Password',
      description: 'Password must be at least 8 characters and contain only alphanumeric characters',
      status: 'error',
      duration: 2000,
      isClosable: true,
      position: 'top',
    });
    return false;
  }
  return true;
};
