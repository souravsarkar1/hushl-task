import React from 'react';
import { Box, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react';

const MediaOnTable = ({ media }) => {
  const { images } = media;

  return (
    <Box>
      <Heading as="h3" size="md" mb={2}>
        Media Information
      </Heading>
      <Heading as="h4" size="sm" mb={2}>
        Images
      </Heading>
      <UnorderedList>
        {images.map((image, index) => (
          <ListItem key={index}>
            <img src={image.url} alt={image.title} />
            <Text>{image.title}</Text>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default MediaOnTable;
