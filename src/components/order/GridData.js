import React from 'react';
import DOTS from '../icons/dots.svg';
import SendIcon from '../icons/send.svg';

export const GridData = ({value}) => {
  return (
    <div style={{ 'border': '1px solid  rgba(0, 0, 0, 0.08)', 'marginTop':'10px', 'backgroundColor':'rgba(0, 0, 0, 0.03)'}} >
        <div className="row">
            <div className="col-6">
                <div className='d-flex flex-row mt-2 mb-2' style={{'marginLeft':'10px'}}>
                    <button type="submit" className="btn" 
                    style={{'color':'black', 'marginRight':'10px', 'backgroundColor':'lightgray'}} >
                        <img src={SendIcon} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                        {' '} Export To Exel
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
                    <th scope="col" className='d-flex flex-row justify-content-between' >
                        <h6>Order number</h6>
                        <div className='d-flex  align-items-center'>
                            <img  src={DOTS} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                        </div>
                    </th>
                    <th scope="col">
                        Customer name
                        <img src={DOTS} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                    </th>
                    <th scope="col">
                        Customer address
                        <img src={DOTS} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                    </th>
                    <th scope="col">
                        Contact no
                        <img src={DOTS} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                    </th>
                    <th scope="col">
                        Attempts
                        <img src={DOTS} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                    </th>
                    <th scope="col">
                        Quantity
                        <img src={DOTS} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                    </th>
                    <th scope="col">
                        Order value
                        <img src={DOTS} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                    </th>
                    <th scope="col">
                        Collection amount
                        <img src={DOTS} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                    </th>
                    <th scope="col">
                        Due amount
                        <img src={DOTS} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                    </th>
                    <th scope="col">
                        Status
                        <img src={DOTS} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                    </th>
                    <th scope="col">
                        Remark
                        <img src={DOTS} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                    </th>
                    <th scope="col">
                        Inward status
                        <img src={DOTS} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                    </th>
                </tr>
            </thead>
            <tbody style={{'maxHeight':'100px','overflowY':'scroll'}} className="scrollspy-example" tabindex="0">
                {value.map(data => {
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
