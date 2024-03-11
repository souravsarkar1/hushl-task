import React, { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Center, Button, useToast, Box, Text, Flex } from '@chakra-ui/react';
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getAllProduct } from '../../redux/Products/action';
import Popup from '../../components/Modal/Popup';
import PropertyInformationOnTable from '../../components/Table/Property/Property';
import HealthSafetyOnTable from '../../components/Table/HealthSeafty/HealthSeafty';
import BeachOnTable from '../../components/Table/Beach/Beach';
import ReefOnTable from '../../components/Table/Reef/Reef';
import TransferOptionsOnTable from '../../components/Table/TransferOption/TransferOption';
import GymOnTable from '../../components/Table/Gym/Gym';
import KidsClubOnTable from '../../components/Table/KidsClub/KidisClub';
import FoodAndBeverageOnTable from '../../components/Table/Food/Food';
import ServicesOnTable from '../../components/Table/Service/Service';
import PoolOnTable from '../../components/Table/Pool/Pool';
import RoomsOnTable from '../../components/Table/Room/Room';
import MediaOnTable from '../../components/Table/Media/Media';
import { Link } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import PaginationAllPage from '../../components/Pagination/Pagination';
import AddressUpdate from '../../components/UpdateData/Address/Address';
import NameUpdate from '../../components/UpdateData/Name/Name';

const Dashboard = () => {
  const dispatch = useDispatch();

  const data = useSelector(st => st.productReducer.allProducts);
  const loader = useSelector(st => st.productReducer.getAllProductIsLoader);

  const [page, setPage] = useState(1);
  const toast = useToast();
  console.log({ data });
  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);
  const hanldeDelete = (id) => {
    dispatch(deleteProduct(id, toast)).then((res) => {
      dispatch(getAllProduct());
    })
  }
  if (loader) {
    return <Box h={"100vh"}>
      <Center mt={"25vh"}>
        <HashLoader size={300} color="#36d7b7" />
      </Center>
    </Box>
  }

  // Calculate start and end indices for current page
  const startIndex = (page - 1) * 4;
  const endIndex = startIndex + 4;

  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <Flex mb={10}>
        <Box cursor={"pointer"} pr={4}>
        <Link to={'/test'}><Button colorScheme='green'>Test</Button></Link>
        </Box>
        <Box cursor={"pointer"} pr={4}>
        <Link to={'/add'}><Button colorScheme='green'>Add New Hotel</Button></Link>
        </Box>
      </Flex>
      <TableContainer style={{ height: 'calc(100vh - 200px)', overflowY: 'auto' }}>
        <Table size={"lg"} variant="simple">
          <Thead>
            <Tr>
              <Th>Serial No</Th>
              <Th>Name</Th>
              <Th>Address</Th>
              <Th>Property Information</Th>
              <Th>Health & Safety</Th>
              <Th>Beach</Th>
              <Th>Reef</Th>
              <Th>Transfer Options</Th>
              <Th>Gym</Th>
              <Th>Kids Club</Th>
              <Th>Food & Beverage</Th>
              <Th>Services</Th>
              <Th>Pool</Th>
              <Th>Rooms</Th>
              <Th>Media</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Array.isArray(data) && data?.slice(startIndex, endIndex)?.map((property, index) => (
              <Tr key={property._id}>
                <Td>{startIndex + index + 1}</Td>
                <Td>
                  <Flex alignItems={"center"} flexDir={"column"} gap={5}>
                  <Box h={100} w={300} overflowX="auto" maxHeight={100}>
                  
                  <Text fontSize='xl'>
                    {property.hotelName.name.toUpperCase()}
                  </Text>
                  </Box>

                    <Popup modalTitle={"Edit"} colorofModal={"orange"}
                      children={<NameUpdate address={property.hotelName.address} name={property.hotelName.name} id={property._id} />}
                    />
                  </Flex>
                </Td>
                <Td>


                  <Flex alignItems={"center"} flexDir={"column"} gap={5}>

                    <Box h={100} w={300} overflowX="auto" maxHeight={100}>
                      <Text fontSize="md" lineHeight="tall">
                        {property.hotelName.address.toUpperCase()}
                      </Text>
                    </Box>
                    <Popup modalTitle={"Edit"} colorofModal={"orange"}
                      children={<AddressUpdate name={property.hotelName.name} address={property.hotelName.address} id={property._id} />}
                    />
                  </Flex>

                </Td>
                <Td><Popup modalTitle={"See Property Data"} colorofModal={"green"} children={<PropertyInformationOnTable propertyInformation={property.propertyInformation} id={property._id} />} /></Td>
                <Td><Popup modalTitle={"See Health & Safety Data"} colorofModal={"green"} children={<HealthSafetyOnTable healthSafety={property.healthSafety} id={property._id} />} /></Td>
                <Td><Popup modalTitle={"See Beach Data"} colorofModal={"green"} children={<BeachOnTable beach={property.beach} id={property._id} />} /></Td>
                <Td><Popup modalTitle={"See Reef Data"} colorofModal={"green"} children={<ReefOnTable reef={property.reef} id={property._id} />} /></Td>
                <Td><Popup modalTitle={"See Transfer Options Data"} colorofModal={"green"} children={<TransferOptionsOnTable transferOptions={property.transferOptions} id={property._id} />} /></Td>
                <Td><Popup modalTitle={"See Gym Data"} colorofModal={"green"} children={<GymOnTable gym={property.gym} id={property._id} />} /></Td>
                <Td><Popup modalTitle={"See Kids Club Data"} colorofModal={"green"} children={<KidsClubOnTable kidsClub={property.kidsClub} id={property._id} />} /></Td>
                <Td><Popup modalTitle={"See Food And Beverage Data"} colorofModal={"green"} children={<FoodAndBeverageOnTable foodAndBeverage={property.foodAndBeverage} id={property._id} />} /></Td>
                <Td><Popup modalTitle={"See Services Data"} colorofModal={"green"} children={<ServicesOnTable services={property.services} id={property._id} />} /></Td>
                <Td><Popup modalTitle={"See Pool Data"} colorofModal={"green"} children={<PoolOnTable pool={property.pool} id={property._id} />} /></Td>
                <Td><Popup modalTitle={"See Rooms Data"} colorofModal={"green"} children={<RoomsOnTable rooms={property.rooms} id={property._id} />} /></Td>
                <Td><Popup modalTitle={"See Media Data"} colorofModal={"green"} children={<MediaOnTable media={property.media} id={property._id} />} /></Td>
                <Td><Popup modalTitle={"Delete"} colorofModal={"red"} children={
                  <Box>
                    <Text color={"#8a0f1d"} >Are You Sure To Delete?</Text>
                    <Button mt={3} colorScheme='red' onClick={() => hanldeDelete(property._id)}>Delete</Button>
                  </Box>
                } /></Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <PaginationAllPage currentPage={page} handlePageChange={setPage} totalPages={Math.ceil(data.length / 4)} />
    </div>
  );
};

export default Dashboard;
