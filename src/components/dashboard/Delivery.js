import React from 'react'
import CartIcon from '../icons/cart.svg'
import COURIER from '../icons/courier.svg'
import ECOM from '../icons/ecom.svg'
import FINANCE from '../icons/finance.svg'
import SendIcon from '../icons/send.svg'
import { DeliveryCard } from './DeliveryCard'

const Delivery = () => {
  return (
    <div className="row">
            <div className="col-2">
                <DeliveryCard bg={"#ad42db"} icon={CartIcon} title={"Out of delivery"} value={100}/>
            </div>
            <div className="col-2">
                <DeliveryCard bg={"#edb724"} icon={SendIcon} title={"Delivered"} value={140} />
            </div>
            <div className="col-2">
                <DeliveryCard bg={"#651d85"} icon={ECOM} title={"Returned"} value={40}/>
            </div>
            <div className="col-2">
                <DeliveryCard bg={"#d42895"} icon={ECOM} title={"Late orders"} value={58}/>
            </div>
            <div className="col-2">
                <DeliveryCard bg={"#1964e6"} icon={COURIER} title={"Undelivered"} value={28}/>
            </div>
            <div className="col-2">
                <DeliveryCard bg={"#e61956"} icon={FINANCE} title={"RTO"} value={0}/>
            </div>
            <div className="col-2">
                <DeliveryCard bg={"#ad42db"} icon={CartIcon} title={"Out of delivery"} value={90}/>
            </div>
            <div className="col-2">
                <DeliveryCard bg={"#edb724"} icon={SendIcon} title={"Delivered"} value={140}/>
            </div>
            <div className="col-2">
                <DeliveryCard bg={"#651d85"} icon={ECOM} title={"Returned"} value={27}/>
            </div>
            <div className="col-2">
                <DeliveryCard bg={"#d42895"} icon={ECOM} title={"Late orders"} value={58}/>
            </div>
            <div className="col-2">
                <DeliveryCard bg={"#1964e6"} icon={COURIER} title={"Undelivered"} value={28}/>
            </div>
            <div className="col-2">
                <DeliveryCard bg={"#e61956"} icon={FINANCE} title={"RTO"} value={0}/>
            </div>
        </div>
  )
}

export default Delivery