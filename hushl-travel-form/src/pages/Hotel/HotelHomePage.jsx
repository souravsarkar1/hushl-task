import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleData as getSingleDataFunction } from '../../redux/Products/action';
import Sidebar from '../../components/Hotel/SideBar';

const HotelHomePage = () => {
  const hotelData = useSelector(st => st.authReducer.hotelData);
  const getSingleData = useSelector(st => st.productReducer.getSingleData);
  console.log(getSingleData);
  const { hotelId } = hotelData.hotelUser;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleDataFunction(hotelId));
  }, [dispatch, hotelId]);
  return (
    <div>
      <Sidebar hotelData={getSingleData} />
    </div>
  );
};

export default HotelHomePage;
