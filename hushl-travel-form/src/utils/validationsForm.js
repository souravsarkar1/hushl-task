export const validateFormData = (formData, toast) => {
  // Validation for propertyInformation
  if (!formData.propertyInformation.scopeOfRenovation.length) {
    toast({
      title: "Scope of Renovation is required.",
      status: "error",
      duration: 2000,
      isClosable: true,
      position: "top"
    });
    return false;
  }
  if (!formData.propertyInformation.stateOfRepair.trim()) {
    toast({
      title: "State of Repair is required.",
      status: "error",
      duration: 2000,
      isClosable: true,
      position: "top"
    });
    return false;
  }

  // Validation for healthSafety
  if (!formData.healthSafety.lastReviewDate.trim()) {
    toast({
      title: "Last Review Date is required.",
      status: "error",
      duration: 2000,
      isClosable: true,
      position: "top"
    });
    return false;
  }
  if (formData.healthSafety.rating < 0 || formData.healthSafety.rating > 5) {
    toast({
      title: "Rating must be between 0 and 5.",
      status: "error",
      duration: 2000,
      isClosable: true,
      position: "top"
    });
    return false;
  }

  // Validation for beach
  if (!formData.beach.length) {
    toast({
      title: "Beach length is required.",
      status: "error",
      duration: 2000,
      isClosable: true,
      position: "top"
    });
    return false;
  }

  // Validation for transferOptions
  if (!formData.transferOptions.weatherlimited.trim()) {
    toast({
      title: "Weather Limited is required.",
      status: "error",
      duration: 2000,
      isClosable: true,
      position: "top"
    });
    return false;
  }

  // Validation for reef
  if (!formData.reef.entryPointSandLengthofSwim.trim()) {
    toast({
      title: "Entry Point Sand Length of Swim is required.",
      status: "error",
      duration: 2000,
      isClosable: true,
      position: "top"
    });
    return false;
  }
  if (formData.reef.travelTime <= 0) {
    toast({
      title: "Travel Time must be greater than 0.",
      status: "error",
      duration: 2000,
      isClosable: true,
      position: "top"
    });
    return false;
  }

  // Validation for gym
  if (!formData.gym.qualityOfEquipment.trim()) {
    toast({
      title: "Quality of Equipment is required.",
      status: "error",
      duration: 2000,
      isClosable: true,
      position: "top"
    });
    return false;
  }

  // Validation for kidsClub
  if (formData.kidsClub.ratioofStafftoChildren <= 0) {
    toast({
      title: "Ratio of Staff to Children must be greater than 0.",
      status: "error",
      duration: 2000,
      isClosable: true,
      position: "top"
    });
    return false;
  }

  // Validation for foodAndBeverage
  if (!formData.foodAndBeverage.InclusionsOrExclusionsforFullOrhalfBoard.trim()) {
    toast({
      title: "Inclusions or Exclusions for Full or Half Board is required.",
      status: "error",
      duration: 2000,
      isClosable: true,
      position: "top"
    });
    return false;
  }

  // Validation for services
  if (!formData.services.needToPreBook.trim()) {
    toast({
      title: "Need to Pre-Book is required.",
      status: "error",
      duration: 2000,
      isClosable: true,
      position: "top"
    });
    return false;
  }

  // Validation for pool
  if (formData.pool.length <= 0 || formData.pool.depth <= 0) {
    toast({
      title: "Pool Length and Depth must be greater than 0.",
      status: "error",
      duration: 2000,
      isClosable: true,
      position: "top"
    });
    return false;
  }

  // Validation for rooms
  if (!formData.rooms.maxOccupancyAdult && !formData.rooms.maxOccupancyChild) {
    toast({
      title: "Max Occupancy Adult and Occupancy Child are required.",
      status: "error",
      duration: 2000,
      isClosable: true,
      position: "top"
    });
    return false;
  }

  // Validation for media
  if (!formData.media.images.length) {
    toast({
      title: "At least one image is required.",
      status: "error",
      duration: 2000,
      isClosable: true,
      position: "top"
    });
    return false;
  }

  // If all validations pass, return true
  return true;
};
