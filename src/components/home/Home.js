import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <div className='d-flex flex-row gap-4 justify-content-center mt-4'>
          <Link to="/dashboard" style={{'textDecoration':'none'}}>
            <div className="card fw-bold text-white text-center bg-warning mb-3" style={{"min-width": "14rem","min-height": "5rem"}}>
                <div className="card-header" >Dashboard Page</div>
            </div>
          </Link>
          <Link to="/inward" style={{'textDecoration':'none'}}>
            <div className="card fw-bold text-white text-center bg-success mb-3" style={{"min-width": "14rem","min-height": "5rem"}}>
                <div className="card-header">Inward Page</div>
            </div>
          </Link>
          <Link to="/order" style={{'textDecoration':'none'}}>
            <div className="card fw-bold text-white text-center bg-primary mb-3" style={{"min-width": "14rem","min-height": "5rem"}}>
                <div className="card-header">E-Commerce Order Page</div>
            </div>
          </Link>
      </div>
      <div className='d-flex flex-row gap-4 justify-content-center mt-4'>
        <div style={{ 'border': '1px solid  rgba(0, 0, 0, 0.08)','backgroundColor':'rgba(0, 0, 0, 0.03)',
            'minHeight':'300px', 'minWidth':'300px', 'marginTop':'5px', 'padding':'10px'}} >
              <h5>Please watch above 1280px width</h5>
              <p>Didn't make it quite responsive</p>
              <p>Please pardon my design knowledge lackings</p>
        </div>
        <div style={{ 'border': '1px solid  rgba(0, 0, 0, 0.08)','backgroundColor':'rgba(0, 0, 0, 0.03)',
            'minHeight':'300px', 'minWidth':'300px', 'marginTop':'5px', 'padding':'10px'}} >
              <h5 className='mt-2'>Run Sheet Numbers are </h5>
              <h5>11, 22, 33, 44, 55, 66</h5>
              <h5 className='mt-5'>Locations for Filter are </h5>
              <h5>www.aaa.com - www.fff.com</h5>
        </div>
      </div>
    </>
  )
}