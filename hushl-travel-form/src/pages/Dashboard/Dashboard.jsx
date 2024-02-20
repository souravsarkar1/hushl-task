import React, { useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from '../../redux/Products/action';
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

const Dashboard = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productReducer.allProducts);

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  return (
    <div>
      <TableContainer>
        <Table size='sm'>
          <Thead>
            <Tr>
              <Th>Property ID</Th>
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
              <Th>Updated</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((property,index) => (
              <Tr key={property._id}>
                <Td>{index+1}</Td>
                <Td><Popup modalTitle={"See Property Data"} colorofModal={"green"} children={<PropertyInformationOnTable propertyInformation={property.propertyInformation}/>}/></Td>
                <Td><Popup modalTitle={"See Health & Safety Data"} colorofModal={"green"} children={<HealthSafetyOnTable healthSafety={property.healthSafety}/>}/></Td>
                <Td><Popup modalTitle={"See Beach Data"} colorofModal={"green"} children={<BeachOnTable beach={property.beach}/>}/></Td>
                <Td><Popup modalTitle={"See Reef Data"} colorofModal={"green"} children={<ReefOnTable reef={property.reef}/>}/></Td>
                <Td><Popup modalTitle={"See Transfer Options Data"} colorofModal={"green"} children={<TransferOptionsOnTable transferOptions={property.transferOptions}/>}/></Td>
                <Td><Popup modalTitle={"See Gym Data"} colorofModal={"green"} children={<GymOnTable gym={property.gym}/>}/></Td>
                <Td><Popup modalTitle={"See Kids Club Data"} colorofModal={"green"} children={<KidsClubOnTable kidsClub={property.kidsClub}/>}/></Td>
                <Td><Popup modalTitle={"See Food And Beverage Data"} colorofModal={"green"} children={<FoodAndBeverageOnTable foodAndBeverage={property.foodAndBeverage}/>}/></Td>
                <Td><Popup modalTitle={"See Services Data"} colorofModal={"green"} children={<ServicesOnTable services={property.services}/>}/></Td>
                <Td><Popup modalTitle={"See Pool Data"} colorofModal={"green"} children={<PoolOnTable pool={property.pool}/>}/></Td>
                <Td><Popup modalTitle={"See Rooms Data"} colorofModal={"green"} children={<RoomsOnTable rooms={property.rooms}/>}/></Td>
                <Td><Popup modalTitle={"See Media Data"} colorofModal={"green"} children={<MediaOnTable media={property.media}/>}/></Td>
                <Td><Popup modalTitle ={"Delete"} colorofModal={"red"}/></Td>
                <Td><Popup modalTitle ={"Update"} colorofModal={"teal"} children={<Link to={'/'}><Button>Update The Hotel Data</Button></Link>}/></Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Dashboard;
