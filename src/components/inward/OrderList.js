import React from 'react'
import DownloadIcon from '../icons/download.svg'
import { Collection } from './Collection'

export const OrderList = ({Data}) => {
  return (
    <div>
        <header className='d-flex align-items-center mt-2' style={{'width':'100%', 'backgroundColor':'grey',
       'height':'45px', 'borderRadius':'4px', 'color': 'white', 'paddingLeft':'20px'}}>
         <h5>Order Lists</h5>
      </header>
      <div className='d-flex flex-column justify-content center mt-3' style={{'width':'25%'}}>
        <h6>Scan Undelivered orders</h6>
        <form className="input-group mb-2">
          <input type="text" className="form-control" placeholder='Scan Undelivered orders' />
        </form>
        <button type="submit" className="btn btn-success" 
          style={{'color':'white'}} >
            Scan
        </button>
      </div>
      <Collection Data={Data}/>
      <div className='mt-2 mb-2' style={{'marginLeft':'10px'}}>
        <button type="submit" className="btn" 
           style={{'color':'black', 'marginRight':'10px', 'backgroundColor':'lightgray'}} >
             <img src={DownloadIcon} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
              {' '} Save
         </button>
      </div>
    </div>
  )
}
