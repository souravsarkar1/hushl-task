import React, { useState } from 'react';
import { Box, Flex, Icon, useColorModeValue } from '@chakra-ui/react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const NewRating = ({ value, max = 5, onChange }) => {
  const starColor = useColorModeValue('teal.500', 'teal.300');
  const [rating, setRating] = useState(value);

  const handleClick = ratingValue => {
    if (onChange) {
      // Toggle the rating if the clicked star is already filled
      const newValue = rating === ratingValue ? ratingValue - 1 : ratingValue;
      setRating(newValue);
      onChange(newValue);
    }
  };

  return (
    <Flex align="center">
      {[...Array(max)].map((_, index) => {
        const ratingValue = index + 1;
        const isFilled = ratingValue <= rating;

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

export default NewRating;
