import dayjs from 'dayjs'
import React, { useState } from 'react'
import CardValue from './CardValue'
import FilterBar from './FilterBar'

const OrderPage = ({data}) => {
  const [filteredData, setFilteredData] = useState([])

  const generateOrderTypeForDropdown = () => {
    return [...new Set(data.map(item => item.orderType))]
  }

  const isSameOrAfter = require('dayjs/plugin/isSameOrAfter')
  const isSameOrBefore = require('dayjs/plugin/isSameOrBefore')
  dayjs.extend(isSameOrBefore)
  dayjs.extend(isSameOrAfter)

  const handleFilter = (start,end, location, orderType) => {
    if (start === '' && end === '' && location ==='' && orderType ==='' ) return
    const filterData = data.filter((item) => {
      if ((start ? dayjs(item.registered).isSameOrAfter(dayjs(start)): true) &&
        (end ? dayjs(item.registered).isSameOrBefore(dayjs(end)): true ) &&
        (orderType ? (item.orderType === orderType) : true) &&
        (location ? (item.location.toLowerCase().includes(location.toLowerCase())) : true)) {
        return item;
      }
    });
    setFilteredData(filterData);
  }

  return (
    <div className='container' style={{'max-width':'93%'}}>
      <header className='d-flex align-items-center' style={{'width':'100%', 'backgroundColor':'#0d6efd',
       'height':'45px', 'borderRadius':'4px', 'color': 'white', 'paddingLeft':'20px'}}>
         <h5>List of Website Orders</h5>
      </header>
      <FilterBar 
        orderTypes={generateOrderTypeForDropdown()} 
        handleFilter={handleFilter}
        />
      <CardValue value={filteredData} />
      {filteredData.map(data =>{
        return <h1>{data.name}</h1>
      })}
    </div>  
  )
}

export default OrderPage