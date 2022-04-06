import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '../dashboard/Dashboard'
import { data } from '../data/inward'
import Header from '../header/Header'
import { Inward } from '../inward/Inward'
import OrderPage from '../order/OrderPage'

export const Layout = () => {
  return (
    <div>
        <Header/>
        <Routes>
            <Route index path="/" element={<Dashboard/>} />
            <Route path="/inward" element={<Inward data={data} />} />
            <Route path="/order" element={<OrderPage data={data} />} />
        </Routes>
    </div>
  )
}
