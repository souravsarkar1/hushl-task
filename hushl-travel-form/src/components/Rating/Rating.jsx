import React from 'react';
import { Box, Flex, Icon, useColorModeValue } from '@chakra-ui/react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Rating = ({ value, max = 5, onChange }) => {
  const starColor = useColorModeValue('teal.500', 'teal.300');
  // console.log(value);
  const handleClick = ratingValue => {
    if (onChange) {
      // console.log('clicked');
      // Toggle the rating if the clicked star is already filled
      const newValue = value === ratingValue ? ratingValue - 1 : ratingValue;
      onChange(newValue);
    }
  };

  return (
    <Flex align="center">
      {[...Array(max)].map((_, index) => {
        const ratingValue = index + 1;
        const isFilled = ratingValue <= value;

        return (
          <Box
            key={index}
            as="button"
            mx={1}
            p={1}
            onClick={() => handleClick(ratingValue)}
            _focus={{ outline: 'none' }}
            cursor="pointer"
          >
            <Icon as={isFilled ? AiFillStar : AiOutlineStar} boxSize={6} color={isFilled ? starColor : 'gray.300'} />
          </Box>
        );
      })}
    </Flex>
  );
};

export default Rating;
