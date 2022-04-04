import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '../dashboard/Dashboard'
import Header from '../header/Header'
import { Inward } from '../inward/Inward'


export const Layout = () => {
  return (
    <div>
        <Header/>
        <Routes>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/inward" element={<Inward/>} />
        </Routes>
    </div>
  )
}
