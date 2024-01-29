import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Forms from '../pages/Froms/Forms'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/form' element={<Forms />} />
            </Routes>
        </div>
    )
}

export default AllRoutes