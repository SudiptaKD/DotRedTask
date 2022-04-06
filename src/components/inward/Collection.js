import React from 'react'
import DownloadIcon from '../icons/download.svg'
import SortIcon from '../icons/funnel.svg'

export const Collection = ({Data}) => {
  return (
    <div style={{ 'border': '1px solid  rgba(0, 0, 0, 0.08)', 'marginTop':'10px', 'backgroundColor':'rgba(0, 0, 0, 0.03)'}} >
        <div className="row">
            <div className="col-6">
                <div className='d-flex flex-row mt-2 mb-2' style={{'marginLeft':'10px'}}>
                    <button type="submit" className="btn" 
                    style={{'color':'black', 'marginRight':'10px', 'backgroundColor':'lightgray'}} >
                        <img src={DownloadIcon} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                        {' '} Download Collection Report
                    </button>
                    <button type="submit" className="btn" 
                    style={{'color':'black','backgroundColor':'lightgray'}} >
                        <img src={DownloadIcon} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                        {' '} Download Runsheet
                    </button>
                </div>
            </div>
            <div className="col-4"></div>
            <div className="col-2">
                <div style={{'marginRight':'10px'}}>
                    <input className="form-control me-2 mt-2 mb-2" type="search" placeholder="Search..." />
                </div>
            </div>
        </div>
        <table className="table table-striped table-bordered">
            <thead>
                <tr style={{'fontSize':'13px', 'fontWeight':"lighter"}}>
                    <th scope="col">
                        Order number
                        <img src={SortIcon} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                    </th>
                    <th scope="col">
                        Customer name
                        <img src={SortIcon} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                    </th>
                    <th scope="col">
                        Customer address
                        <img src={SortIcon} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                    </th>
                    <th scope="col">
                        Contact no
                        <img src={SortIcon} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                    </th>
                    <th scope="col">
                        Attempts
                        <img src={SortIcon} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                    </th>
                    <th scope="col">
                        Quantity
                        <img src={SortIcon} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                    </th>
                    <th scope="col">
                        Order value
                        <img src={SortIcon} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                    </th>
                    <th scope="col">
                        Collection amount
                        <img src={SortIcon} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                    </th>
                    <th scope="col">
                        Due amount
                        <img src={SortIcon} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                    </th>
                    <th scope="col">
                        Status
                        <img src={SortIcon} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                    </th>
                    <th scope="col">
                        Remark
                        <img src={SortIcon} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                    </th>
                    <th scope="col">
                        Inward status
                        <img src={SortIcon} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                    </th>
                </tr>
            </thead>
            <tbody style={{'maxHeight':'100px','overflowY':'scroll'}} className="scrollspy-example" tabindex="0">
                {Data.map(data => {
                    return  <tr key={data._id}>
                                <th scope="row">{data._id}</th>
                                <td>{data.name}</td>
                                <td>{data.address}</td>
                                <td>{data.company}</td>
                                <td>{data.age}</td>
                                <td>{data._id}</td>
                                <td>{data.balance}</td>
                                <td>{data.latitude}</td>
                                <td>{data.longitude}</td> 
                                <td>Out Of Delivery</td>
                                <td></td>
                                <td>True</td>
                            </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}
