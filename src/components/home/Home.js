import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='d-flex flex-row gap-4 justify-content-center mt-4'>
        <Link to="/inward">
          <div className="card fw-bold text-white text-center bg-success mb-3" style={{"min-width": "14rem","min-height": "5rem"}}>
              <div className="card-header">Inward Page</div>
          </div>
        </Link>
        <Link to="/order">
          <div className="card fw-bold text-white text-center bg-primary mb-3" style={{"min-width": "14rem","min-height": "5rem"}}>
              <div className="card-header">E-Commerce Order Page</div>
          </div>
        </Link>
        <Link to="/dashboard">
          <div className="card fw-bold text-white text-center bg-warning mb-3" style={{"min-width": "14rem","min-height": "5rem"}}>
              <div className="card-header" style={{'textDecoration':'none'}}>Dashboard Page</div>
          </div>
        </Link>
    </div>
  )
}