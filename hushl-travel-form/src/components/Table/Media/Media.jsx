
import { Box, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react';
import Popup from '../../Modal/Popup';
import UpdateImage from '../../UpdateData/MediaUpdate/MediaUpdate';

const MediaOnTable = ({ media, id }) => {
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
      <Popup modalTitle={"Edit"} colorofModal={"orange"} children={<UpdateImage initialFormData={media} id={id}/>}/>
    </Box>
  );
};

export default MediaOnTable;
