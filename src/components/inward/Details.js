import dayjs from 'dayjs';
import React from 'react';

export const Details = ({Data}) => {
    const formatDate = (d) => {
        return dayjs(d).format('MMMM D, YYYY')
    } 
  return (
    <div>
        <header className='d-flex align-items-center mt-2' style={{'width':'100%', 'backgroundColor':'grey',
            'height':'45px', 'borderRadius':'4px', 'color': 'white', 'paddingLeft':'20px'}}>
            <h5>Run Sheet Details</h5>
        </header>
        <div className="row p-1 mt-1" style={{'marginLeft':'10px'}}>
            <div className="col d-flex flex-column gap-1">
                <p><strong>Run Sheet Number :</strong>{' '}{Data._id}</p>
                <p><strong>Driver Name :</strong> {' '}{Data.name}</p>
                <p><strong>Number of Order :</strong> {' '}{Data.age}</p>
                <p><strong>Total Ammount :</strong> {' '}{Data.balance}</p>
            </div>
            <div className="col d-flex flex-column gap-1">
                <p><strong>Run Sheet Date :</strong>{' '}{formatDate(Data.registered)}</p>
                <p><strong>Location :</strong> {' '}{Data.company}</p>
                <p><strong>Sheet Status :</strong> {' '}Out of Delivery</p>
                <p><strong>Undelivered Order Amount :</strong> {' '}{Data.index}</p>
            </div>
            <div className="col d-flex flex-column gap-1">
                <p><strong>Delivered Orders :</strong>{' '}{Data.latitude}</p>
                <p><strong>Collected Amount :</strong> {' '}{Data.longitude}</p>
                <p><strong>Due Amount :</strong> {' '}{Data.index}</p>
                <p><strong>Undelivered Orders :</strong> {' '}{Data.age}</p>
            </div>
        </div>
    </div>
  )
}
