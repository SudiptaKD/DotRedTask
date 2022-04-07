import React from 'react'
import DownloadIcon from '../icons/download.svg'

export const DeliveryCard = ({bg, icon, title, value}) => {
  return (
    <div className="card fw-bold text-white text-center  mb-2" 
        style={{"min-width": "12rem","min-height": "5rem", 'backgroundColor':`${bg}`}}>
        <div className="card-header">{title}</div>
        <div className="card-body d-flex justify-content-between p-4 pt-1 pb-1">
            <img src={icon} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
            <h5>{value}</h5>
        </div>
        <button type="submit" className="btn btn-info pt-0" 
              style={{'color':'black', 'height':'25px'}} >
                <img src={DownloadIcon} alt="apiArchive" style={{'width':'13px', 'height':'13px'}} />
                {' '} Download Excel
        </button>
    </div>
  )
}
