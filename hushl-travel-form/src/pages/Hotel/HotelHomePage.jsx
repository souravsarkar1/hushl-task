import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { getSingleData as getSingleDataFunction } from '../../redux/Products/action';
import Sidebar from '../../components/Hotel/SideBar';
import Lottie from 'lottie-react';
import hotelAnimation from '../../utils/animations/hotelloading.json';
import { getSingleData as getSingleDataFunction } from '../../redux/Products/action';
const HotelHomePage = () => {
  const hotelData = useSelector(st => st.authReducer.hotelData);
  const getSingleData = useSelector(st => st.productReducer.getSingleData);
  const [animationsFlag, setAnimations] = useState(true);
  const dispatch = useDispatch();
  // console.log(getSingleData);
  useEffect(() => {
    dispatch(getSingleDataFunction(hotelData));
  }, [dispatch, hotelData]);
  useEffect(() => {
    setTimeout(() => {
      setAnimations(false);
    }, 3000);
  }, []);
  return (
    <div>
      {animationsFlag && <Lottie animationData={hotelAnimation} loop={true} />}
      {!animationsFlag && <Sidebar hotelData={getSingleData} />}
    </div>
  );
};

export default HotelHomePage;
