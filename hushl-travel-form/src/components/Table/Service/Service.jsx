import React from 'react';
import { Box, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react';

const ServicesOnTable = ({ services }) => {
  const { trainingOrQualifications, needToPreBook, safetyFeatures, isNannyavAilable } = services;

  return (
    <Box>
      <Heading as="h3" size="md" mb={2}>
        Services Information
      </Heading>
      <Heading as="h4" size="sm" mb={2}>
        Training or Qualifications
      </Heading>
      <UnorderedList>
        {trainingOrQualifications.map((qualification, index) => (
          <ListItem key={index}>{qualification}</ListItem>
        ))}
      </UnorderedList>
      <Text>Need to Pre-book: {needToPreBook}</Text>
      <Heading as="h4" size="sm" mt={4} mb={2}>
        Safety Features
      </Heading>
      <UnorderedList>
        {safetyFeatures.map((feature, index) => (
          <ListItem key={index}>{feature}</ListItem>
        ))}
      </UnorderedList>
      <Text>Is Nanny Available: {isNannyavAilable}</Text>
    </Box>
  );
};

export default ServicesOnTable;
