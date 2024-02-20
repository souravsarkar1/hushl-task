import React from 'react';
import { Box, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react';

const PoolOnTable = ({ pool }) => {
  const { length, depth, lapPool, safetyFeatures } = pool;

  return (
    <Box>
      <Heading as="h3" size="md" mb={2}>
        Pool Information
      </Heading>
      <Text>Length: {length}</Text>
      <Text>Depth: {depth}</Text>
      <Text>Lap Pool: {lapPool}</Text>
      <Heading as="h4" size="sm" mt={4} mb={2}>
        Safety Features
      </Heading>
      <UnorderedList>
        {safetyFeatures.map((feature, index) => (
          <ListItem key={index}>{feature}</ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default PoolOnTable;
