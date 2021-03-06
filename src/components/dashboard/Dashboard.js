import React from 'react'
import SendIcon from '../icons/send.svg'
import Chart from './Chart'
import Delivery from './Delivery'
import DonutChart from './DonutChart'
import FilterBar from './FilterBar'
import { Table } from './Table'

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
          <div className='d-flex flex-row mt-2 mb-2' style={{'marginLeft':'10px'}}>
            <button type="submit" className="btn btn-primary" 
              style={{'color':'white', 'marginRight':'10px', 'height':'35px'}} >
              <img src={SendIcon} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
              {' '} Submit
            </button>
            <button type="submit" className="btn btn-warning" 
              style={{'color':'black', 'marginRight':'10px', 'height':'35px'}} >
                <img src={SendIcon} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                {' '} Download Report
            </button>
            <div>
              <input className="form-control"  type="search" placeholder="Search order details"
                  style={{'color':'white', 'height':'35px', 'backgroundColor':'lightgreen'}}  />
            </div>
        </div> 
      </div>
      <div className='mt-2'>
        <Delivery/>
      </div>
      <div className='mt-3'>
        <Chart value={data}/>
      </div>
      <div className='mt-3'>
        <div className='row'>
          <div className='col-6'>
            <header className='d-flex align-items-center' style={{'width':'100%', 'backgroundColor':'lightcoral',
                'height':'45px', 'borderRadius':'4px', 'color': 'white', 'paddingLeft':'20px'}}>
                <h5>Overall Task Status</h5>
            </header>
            <div style={{ 'border': '1px solid  rgba(0, 0, 0, 0.08)','backgroundColor':'rgba(0, 0, 0, 0.03)',
              'minHeight':'300px', 'minWidth':'300px', 'marginTop':'5px'}} >
                  <DonutChart value={data[0]} />
            </div>
          </div>
          <div className='col-6'>
            <header className='d-flex align-items-center' style={{'width':'100%', 'backgroundColor':'lightsalmon',
                'height':'45px', 'borderRadius':'4px', 'color': 'white', 'paddingLeft':'20px'}}>
                <h5>Performance Status</h5>
            </header>
            <div style={{ 'border': '1px solid  rgba(0, 0, 0, 0.08)','backgroundColor':'rgba(0, 0, 0, 0.03)',
              'minHeight':'300px', 'minWidth':'300px', 'marginTop':'5px'}} >
                <DonutChart value={data[1]} />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <Table value={data}/>
      </div>
    </div>  
  )
}
