import React from 'react'
import DownloadIcon from '../icons/download.svg'

export const DeliveryCard = ({bg, icon, title, value}) => {
  return (
    <div className="card fw-bold text-white text-center  mb-2" 
        style={{"min-width": "7rem","min-height": "5rem", 'backgroundColor':`${bg}`}}>
        <div className="card-header" style={{'fontSize':'1rem'}}>{title}</div>
        <div className="card-body d-flex justify-content-between p-4 pt-1 pb-1">
            <img src={icon} alt="apiArchive" style={{'width':'1.3rem', 'height':'1.3rem'}} />
            <h5>{value}</h5>
        </div>
        <button type="submit" className="btn btn-info pt-0" 
              style={{'color':'black', 'height':'25px', 'fontSize':'1rem'}} >
                <img src={DownloadIcon} alt="apiArchive" style={{'width':'1.1rem', 'height':'1.1rem'}} />
                {' '} Download Excel
        </button>
    </div>
  )
}
