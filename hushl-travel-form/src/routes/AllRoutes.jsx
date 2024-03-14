import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Home from '../pages/Home/Home'?
import Forms from '../pages/Froms/Forms';
import SuccessFormSubmission from '../pages/FromFinal/FromFinal';
import Dashboard from '../pages/Dashboard/Dashboard';
import NewsApi from '../pages/Extension/NewsApi/NewsApi';
import Extension from '../pages/Extension/Extension';
import YouTube from '../pages/Extension/YouTube/YouTube';

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
      </Routes>
    </div>
  );
};

export default AllRoutes;
