import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Redirectedurl from './Redirectedurl'
import Dashboard from './Dashboard'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/:shorturl' element={<Redirectedurl />}/>
            <Route path='/' element={<Dashboard />} />
        </Routes>
    </div>
  )
}

export default AllRoutes