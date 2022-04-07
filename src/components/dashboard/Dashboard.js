import React from 'react'
import SendIcon from '../icons/send.svg'
import FilterBar from './FilterBar'

export const Dashboard = ({data}) => {

  const generateDriverForDropdown = () => {
    return [...new Set(data.map(item => item.name))]
  }
  const generateLocationForDropdown = () => {
    return [...new Set(data.map(item => item.location))]
  }
  const generateStatusForDropdown = () => {
    return [...new Set(data.map(item => item.status))]
  }
  return (
    <div className='container' style={{'max-width':'93%'}}>
      <header className='d-flex align-items-center' style={{'width':'100%', 'backgroundColor':'lightcoral',
       'height':'45px', 'borderRadius':'4px', 'color': 'white', 'paddingLeft':'20px'}}>
         <h5>Courier Dashboard</h5>
      </header>
      <FilterBar 
      drivers={generateDriverForDropdown()}
      statuses={generateStatusForDropdown()}
      locations={generateLocationForDropdown()}
      />
      <div className='row'>
        <div className="col-6">
          <div className='d-flex flex-row mt-2 mb-2' style={{'marginLeft':'10px'}}>
            <button type="submit" className="btn btn-primary" 
              style={{'color':'white', 'marginRight':'10px', 'height':'40px'}} >
              <img src={SendIcon} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
              {' '} Submit
            </button>
            <button type="submit" className="btn btn-warning" 
              style={{'color':'black', 'marginRight':'10px', 'height':'40px'}} >
                <img src={SendIcon} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                {' '} Download Report
            </button>
            <div>
              <input className="form-control"  type="search" placeholder="Search order details"
                  style={{'color':'white', 'height':'40px', 'backgroundColor':'lightgreen'}}  />
            </div>
          </div>
        </div> 
      </div>
    </div>  
  )
}
