import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Details } from './Details';
import { OrderList } from './OrderList';

export const Inward = ({data}) => {

  const [text, setText] = useState('');
  const [filterData, setFilterData] = useState([])
  const [ifFound, setIfFound] = useState(true)

  const onClick = (q) => {
    const Data = data;
    q.preventDefault();
    handleFilter(text,Data); 
    setText('');
  }

  const handleFilter = (text, Data) => {
    const found = Data.find(element => element._id === text);
    if (found) {
      setIfFound(true)
      setFilterData(found)
    }
    else {
      setIfFound(false)
    }
  };

  useEffect(()=> {
    setFilterData(filterData)
    console.log(filterData)
  },[filterData, ifFound])

  return (
    <Container style={{'max-width':'93%'}}>
      <header className='d-flex align-items-center' style={{'width':'100%', 'backgroundColor':'#0d6efd',
       'height':'45px', 'borderRadius':'4px', 'color': 'white', 'paddingLeft':'20px'}}>
         <h5>Record Inward Orders</h5>
      </header>

      <div className='d-flex flex-column justify-content-center mt-3' style={{'width':'25%'}}>
        <h6>Scan/Enter Run Sheet Number</h6>
        <form className="input-group mb-2">
          <input type="text" className="form-control" value={text}
             aria-label="S-number" onChange={(e)=>setText(e.target.value)} />
        </form>
        <button type="submit" className="btn btn-info" 
          style={{'color':'white'}} onClick={onClick} >
            Scan
        </button>
      </div>
      {ifFound && filterData._id && (
        <>
          <Details Data={filterData} />
          <OrderList Data={data} />
        </>
      )}
      {!ifFound && 
          <header className='d-flex align-items-center justify-content-center' style={{'width':'70%', 'backgroundColor':'#e84307',
            'minHeight':'45px', 'borderRadius':'4px', 'color': 'white', 'padding':'auto', 'margin':'80px auto '}}>
            <h5>This Sheet Number doesn't exists in Databases</h5>
          </header>
      }
    </Container>
  )
}
