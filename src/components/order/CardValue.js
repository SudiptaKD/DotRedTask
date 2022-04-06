import React from 'react';

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
    <div>
        <h1>{totalOrders}</h1>
        <h1>{totalValue}</h1>
        <h1>{avgValue}</h1>
    </div>
  )
}

export default CardValue