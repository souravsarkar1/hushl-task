import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Home from '../pages/Home/Home'?
import Forms from '../pages/Froms/Forms'
import SuccessFormSubmission from '../pages/FromFinal/FromFinal'
import Dashboard from '../pages/Dashboard/Dashboard'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
            <Route path='/' element={<Dashboard />}/> 
                <Route path='/add' element={<Forms />} />
                <Route path='/thankyou' element={<SuccessFormSubmission/>}/>
            </Routes>
        </div>
    )
}

export default AllRoutes