import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Home from '../pages/Home/Home'?
import Forms from '../pages/Froms/Forms'
import SuccessFormSubmission from '../pages/FromFinal/FromFinal'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                {/*<Route path='/' element={<Home />} /> */}
                <Route path='/' element={<Forms />} />
                <Route path='/thankyou' element={<SuccessFormSubmission/>}/>
            </Routes>
        </div>
    )
}

export default AllRoutes