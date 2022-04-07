import dayjs from 'dayjs';
import React from 'react';
import ApiIcon from '../icons/api.svg';
import DOTS from '../icons/dots.svg';
import LIST from '../icons/list.svg';
import SendIcon from '../icons/send.svg';

export const GridData = ({value}) => {
    const formatDate = (d) => {
        return dayjs(d).format('MMMM D, YYYY')
    } 
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
        <table className="table table-striped table-bordered fs-6 fw-lighter lh-2">
            <thead>
                <tr >
                <th scope="col" >
                        <div className='d-flex justify-content-between' >
                            <h6 style={{fontSize:'14px'}}>Order Date</h6>
                            <div className='d-flex  align-items-center'>
                                <img  src={DOTS} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                            </div>
                        </div> 
                    </th>
                    <th scope="col" >
                        <div className='d-flex justify-content-between' >
                            <h6 style={{fontSize:'14px'}}>Order number</h6>
                            <div className='d-flex  align-items-center'>
                                <img  src={DOTS} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                            </div>
                        </div> 
                    </th>
                    <th scope="col" >
                        <div className='d-flex justify-content-between' >
                            <h6 style={{fontSize:'14px'}}>Status</h6>
                            <div className='d-flex  align-items-center'>
                                <img  src={DOTS} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                            </div>
                        </div> 
                    </th>
                    <th scope="col" >
                        <div className='d-flex justify-content-between' >
                            <h6 style={{fontSize:'14px'}}>Customer Name</h6>
                            <div className='d-flex  align-items-center'>
                                <img  src={DOTS} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                            </div>
                        </div> 
                    </th>
                    <th scope="col" >
                        <div className='d-flex justify-content-between' >
                            <h6 style={{fontSize:'14px'}}>Contact number</h6>
                            <div className='d-flex  align-items-center'>
                                <img  src={DOTS} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                            </div>
                        </div> 
                    </th>
                    <th scope="col" >
                        <div className='d-flex justify-content-between' >
                            <h6 style={{fontSize:'14px'}}>Delivery Address</h6>
                            <div className='d-flex  align-items-center'>
                                <img  src={DOTS} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                            </div>
                        </div> 
                    </th>
                    <th scope="col" >
                        <div className='d-flex justify-content-between' >
                            <h6 style={{fontSize:'14px'}}>Order Content</h6>
                            <div className='d-flex  align-items-center'>
                                <img  src={DOTS} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                            </div>
                        </div> 
                    </th>
                    <th scope="col" >
                        <div className='d-flex justify-content-between' >
                            <h6 style={{fontSize:'14px'}}>Delivery Date</h6>
                            <div className='d-flex  align-items-center'>
                                <img  src={DOTS} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                            </div>
                        </div> 
                    </th>
                    <th scope="col" >
                        <div className='d-flex justify-content-between' >
                            <h6 style={{fontSize:'14px'}}>Location</h6>
                            <div className='d-flex  align-items-center'>
                                <img  src={DOTS} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                            </div>
                        </div> 
                    </th>
                    <th scope="col" >
                        <div className='d-flex justify-content-between' >
                            <h6 style={{fontSize:'14px'}}>Quantity</h6>
                            <div className='d-flex  align-items-center'>
                                <img  src={DOTS} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                            </div>
                        </div> 
                    </th>
                    <th scope="col" >
                        <div className='d-flex justify-content-between' >
                            <h6 style={{fontSize:'14px'}}>COD Total</h6>
                            <div className='d-flex  align-items-center'>
                                <img  src={DOTS} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                            </div>
                        </div> 
                    </th>
                    <th scope="col" >
                        <div className='d-flex justify-content-between' >
                            <h6 style={{fontSize:'14px'}}>Options</h6>
                            <div className='d-flex  align-items-center'>
                                <img  src={DOTS} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
                            </div>
                        </div> 
                    </th>
                </tr>
            </thead>
            <tbody style={{'maxHeight':'100px','overflowY':'scroll'}} className="scrollspy-example" tabindex="0">
                {value.map(data => {
                    return  <tr key={data._id}>
                                <th scope="row">{formatDate(data.registered)}</th>
                                <td>{data._id}</td>
                                <td>{data.status}</td>
                                <td>{data.name}</td>
                                <td>{data.phone}</td>
                                <td>{data.address}</td>
                                <td>{data.tags.map(i=>{
                                    return `${i}`+' '
                                })}</td>
                                <td>{formatDate(data.registered)}</td>
                                <td>{data.location}</td> 
                                <td>{data.age}</td>
                                <td>{data.age*data.balance}</td>
                                <td>
                                <div className='d-flex flex-row mt-2 mb-2' style={{'marginLeft':'10px'}}>
                                    <button type="submit" className="btn p-1 pt-0 pb-0"
                                    style={{'marginRight':'5px', 'backgroundColor':'lightgray'}}  >
                                        <img src={SendIcon} alt="apiArchive" style={{'width':'18px', 'height':'18px'}} />
                                    </button>
                                    <button type="submit" className="btn p-1 pt-0 pb-0"
                                    style={{'marginRight':'5px', 'backgroundColor':'lightgray'}}  >
                                        <img src={LIST} alt="apiArchive" style={{'width':'18px', 'height':'18px'}} />
                                    </button>
                                    <button type="submit" className="btn p-1 pt-0 pb-0"
                                    style={{'marginRight':'5px', 'backgroundColor':'lightgray'}}  >
                                        <img src={ApiIcon} alt="apiArchive" style={{'width':'18px', 'height':'18px'}} />
                                    </button>
                                </div>
                                </td>
                            </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}
