import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Heading,
  Button,
  Checkbox,
  Radio,
  RadioGroup,
  VStack,
  Center,
  Textarea,
} from '@chakra-ui/react';
import Rating from './FromsComponent/Rating';
// import Rating from './Rating'; // Adjust the path based on your project structure

const dummyData = [
  { id: 1, label: 'Option 1' },
  { id: 2, label: 'Option 2' },
  { id: 3, label: 'Option 3' },
  // Add more dummy data as needed
];

const radioOptions = [
  { id: 'male', label: 'Male' },
  { id: 'female', label: 'Female' },
  // Add more radio options as needed
];

const Forms = () => {
  const [formData, setFormData] = useState({
    name: '',
    selectedOptions: [],
    selectedGender: '',
    additionalInfo: '',
    selectedDate: new Date(),
    selectedRating: 0,
    // Add more form fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (id) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedOptions: prevData.selectedOptions.includes(id)
        ? prevData.selectedOptions.filter((item) => item !== id)
        : [...prevData.selectedOptions, id],
    }));
  };

  const handleGenderChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedGender: value,
    }));
  };

  const handleRatingChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedRating: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedDate: date,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted with data:', formData);
  };

  return (
    <Center>
      <VStack align="start" spacing={4} p={4} boxShadow="lg" borderRadius="md" bgColor="white" maxW="md">
        <Heading as="h2" size="lg">
          Form To Collect Data
        </Heading>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <FormControl>
            <FormLabel htmlFor="name">Name:</FormLabel>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              size="sm"
              borderRadius="md"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Options:</FormLabel>
            <VStack align="start" spacing={2}>
              {dummyData.map((option) => (
                <Checkbox
                  key={option.id}
                  isChecked={formData.selectedOptions.includes(option.id)}
                  onChange={() => handleCheckboxChange(option.id)}
                >
                  {option.label}
                </Checkbox>
              ))}
            </VStack>
          </FormControl>

          <FormControl>
            <FormLabel>Gender:</FormLabel>
            <RadioGroup onChange={(value) => handleGenderChange(value)} value={formData.selectedGender}>
              <VStack align="start" spacing={2}>
                {radioOptions.map((radioOption) => (
                  <Radio key={radioOption.id} value={radioOption.id}>
                    {radioOption.label}
                  </Radio>
                ))}
              </VStack>
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Date:</FormLabel>
            <Input
              type="date"
              id="date"
              name="date"
              value={formData.selectedDate.toISOString().split('T')[0]}
              onChange={(e) => handleDateChange(new Date(e.target.value))}
              size="sm"
              borderRadius="md"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Rating:</FormLabel>
            <Rating value={formData.selectedRating} onChange={handleRatingChange} />
          </FormControl>

          <FormControl>
            <FormLabel>Additional Information:</FormLabel>
            <Textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              size="sm"
              borderRadius="md"
            />
          </FormControl>

          <Button type="submit" mt={4} colorScheme="teal" size="sm">
            Submit
          </Button>
        </form>
      </VStack>
    </Center>
  );
};

export default Forms;
