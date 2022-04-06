import React, { useState } from 'react';

const FilterBar = ({orderTypes, handleFilter}) => {
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('')
    const [location, setLocation] = useState('');
    const [orderType, setOrderType] = useState('')

    const handleSubmit = () => {
        handleFilter(start,end, location, orderType);
        console.log(start,end, location, orderType)
    }
 
  return (
    <div className="row mt-3">
        <div className="col-2">
          <label htmlFor="startDate"><strong>Start date :</strong></label>
          <input
            type="date"
            className="form-control"
            id="startDate"
            onChange={(e)=> setStart(e.target.value)}
          />
        </div>
        <div className="col-2">
          <label htmlFor="endDate"><strong>End date :</strong></label>
          <input
            type="date"
            className="form-control"
            id="endDate"
            onChange={(e)=> setEnd(e.target.value)}
        />
        </div>
        <div className="col-4">
            <label htmlFor="location">Name</label>
            <input
            type="text"
            className="form-control"
            id="location"
            // value={filters.location}
            onChange={(e)=> setLocation(e.target.value)}
            />
        </div>
        <div className="col-2">
          <label htmlFor="ordertype"><strong>Order type :</strong></label>
          <select
            className="form-control"
            id="ordertype"
            onChange={(e)=> setOrderType(e.target.value)}
          >
            <option value="">Select</option>
            {orderTypes.map((ordertype) => (
              <option value={ordertype} key={ordertype}>
                {ordertype}
              </option>
            ))}
          </select>
        </div>
        <div className="col-2">
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}

export default FilterBar