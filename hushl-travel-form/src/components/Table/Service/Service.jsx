import React from 'react';
import { Box, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react';
import Popup from '../../Modal/Popup';
import ServiceUpdate from '../../UpdateData/Service/Service';

const ServicesOnTable = ({ services,id }) => {
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
      <Popup modalTitle={"Edit"} colorofModal={"orange"} children={<ServiceUpdate services={services} id={id}/>} />
    </Box>
  );
};

export default ServicesOnTable;
