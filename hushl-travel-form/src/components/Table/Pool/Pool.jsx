import React from 'react';
import { Box, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react';
import Popup from '../../Modal/Popup';
import PoolUpdate from '../../UpdateData/Pool/Pool';

const PoolOnTable = ({ pool , id}) => {
  const { length, depth, lapPool, safetyFeatures, width } = pool;

  return (
    <Box>
      <Heading as="h3" size="md" mb={2}>
        Pool Information
      </Heading>
      <Text>Length: {length}</Text>
      <Text>Depth: {depth}</Text>
      <Text>Width: {width}</Text>
      <Text>Lap Pool: {lapPool}</Text>
      <Heading as="h4" size="sm" mt={4} mb={2}>
        Safety Features
      </Heading>
      <UnorderedList>
        {safetyFeatures.map((feature, index) => (
          <ListItem key={index}>{feature}</ListItem>
        ))}
      </UnorderedList>
      <Popup modalTitle={"Edit"} colorofModal={"orange"} children={<PoolUpdate pool={pool} id={id}/>}/>
    </Box>
  );
};

export default PoolOnTable;
