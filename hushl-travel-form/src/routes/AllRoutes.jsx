import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Home from '../pages/Home/Home'?
import Forms from '../pages/Froms/Forms';
import SuccessFormSubmission from '../pages/FromFinal/FromFinal';
import Dashboard from '../pages/Dashboard/Dashboard';
import NewsApi from '../pages/Extension/NewsApi/NewsApi';
import Extension from '../pages/Extension/Extension';
import YouTube from '../pages/Extension/YouTube/YouTube';
import Login from '../pages/Authentication/Login';
import HotelHomePage from '../pages/Hotel/HotelHomePage';
import { PrivateRoute } from './PrivateRoute';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<Forms />} />
        <Route path="/thankyou" element={<SuccessFormSubmission />} />
        <Route path="/test" element={<Extension />} />
        <Route path="/newsapi" element={<NewsApi />} />
        <Route path="/you-tube" element={<YouTube />} />
        <Route path="/hotel-login" element={<Login />} />
        <Route
          path="/hotel-home"
          element={
            <PrivateRoute>
              <HotelHomePage />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;
