import { Button, Center, Input, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductMedia, getAllProduct } from '../../../redux/Products/action';
import { FadeLoader } from 'react-spinners';

const NameUpdate = ({ name, id, address, website }) => {
  const [nameData, setNameData] = useState(name);
  const loader = useSelector(st => st.productReducer.addProductMediaIsLoading);
  const toast = useToast();
  const dispath = useDispatch();

  const handleSubmit = () => {
    const data = {
      hotel: {},
    };
    data.hotel.name = nameData;
    data.hotel.address = address;
    data.hotel.website = website;
    dispath(addProductMedia(id, data, toast)).then(res => {
      dispath(getAllProduct());
    });
  };
  if (loader) {
    return (
      <Center>
        <FadeLoader color="#36d7b7" />
      </Center>
    );
  }
  return (
    <div>
      <Input value={nameData} onChange={e => setNameData(e.target.value)} />
      <Button mt={5} onClick={handleSubmit} colorScheme="teal">
        Update
      </Button>
    </div>
  );
};

export default NameUpdate;
