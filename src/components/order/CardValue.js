import React from 'react';
import CartIcon from '../icons/cart.svg';

const CardValue = ({value}) => {

    let totalOrders = 0;
    let totalValue = 0;
    let avgValue= 0;
    (function(){
        value.map(item => {
            totalOrders = totalOrders + item.age;
            totalValue = totalValue + item.balance 
        })
        avgValue = Math.floor(totalValue/totalOrders)
    })()

  return (
    <div className='d-flex flex-row gap-4 mt-4'>
        <div className="card fw-bold text-white text-center bg-primary mb-3" style={{"min-width": "14rem","min-height": "5rem"}}>
            <div className="card-header">No. of Total Orders</div>
            <div className="card-body d-flex justify-content-between p-4 pt-2 pb-2">
                <img src={CartIcon} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                <h5>{totalOrders}</h5>
            </div>
        </div>
        <div className="card fw-bold text-white text-center bg-secondary mb-3" style={{"min-width": "14rem","min-height": "5rem"}}>
            <div className="card-header">Value of All Orders</div>
            <div className="card-body d-flex justify-content-between p-4 pt-2 pb-2">
                <img src={CartIcon} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                <h5>{totalValue}</h5>
            </div>
        </div>
        <div className="card fw-bold text-white text-center bg-success mb-3" style={{"min-width": "14rem","min-height": "5rem"}}>
            <div className="card-header">Average Ticket Value</div>
            <div className="card-body d-flex justify-content-between p-4 pt-2 pb-2">
                <img src={CartIcon} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                <h5>{avgValue}</h5>
            </div>
        </div>
    </div>
  )
}

export default CardValue