import React from 'react';
import { Box, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react';

const KidsClubOnTable = ({ kidsClub }) => {
  const { ratioofStafftoChildren, staffQualifications, languagesSpoken } = kidsClub;

  return (
    <Box>
      <Heading as="h3" size="md" mb={2}>
        Kids Club Information
      </Heading>
      <Text>Ratio of Staff to Children: {ratioofStafftoChildren}</Text>
      <Heading as="h4" size="sm" mt={4} mb={2}>
        Staff Qualifications
      </Heading>
      <UnorderedList>
        {staffQualifications.map((qualification, index) => (
          <ListItem key={index}>{qualification}</ListItem>
        ))}
      </UnorderedList>
      <Heading as="h4" size="sm" mt={4} mb={2}>
        Languages Spoken
      </Heading>
      <UnorderedList>
        {languagesSpoken.map((language, index) => (
          <ListItem key={index}>{language}</ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default KidsClubOnTable;
