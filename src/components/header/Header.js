import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ApiArchive from '../icons/api.svg'
import COURIER from '../icons/courier.svg'
import ECOM from '../icons/ecom.svg'
import LIST from '../icons/list.svg'
import LOGOUT from '../icons/logout.svg'
import WMS from '../icons/wms.svg'

export default function Header() {
  return (
    <>
      <Container style={{'min-heigt':'300px',
         'padding':'20px 50px', 'max-width':'100%' }}>
        <Row>
          <Col className='text-success d-flex justify-content-start' lg={2}>
            <Button size="sm" variant='secondary' style={{'marginRight':'4px'}}>
              <img src={LIST} alt="list" style={{'width':'20px', 'height':'20px'}} />
            </Button>{' '}
            <Button size="sm" variant='warning'>
              <img src={ApiArchive} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
              {' '} API Status
            </Button>
          </Col>
          <Col className=' d-flex justify-content-center' lg={8}>
            <Link to="/dashboard" style={{'textDecoration':'none'}}>
              <Button size="sm" variant='secondary' style={{'marginRight':'5px', 'minWidth':'9rem'}}>
                <img src={ECOM} alt="ecom" style={{'width':'20px', 'height':'20px'}} />
                {' '} Dashboard Page
              </Button>
            </Link>
            <Link to="/inward" style={{'textDecoration':'none'}}>
              <Button size="sm" variant='info' style={{'marginRight':'5px', 'minWidth':'9rem'}}>
                <img src={COURIER} alt="courier" style={{'width':'20px', 'height':'20px'}} />
                {' '} Inward Page
              </Button>
            </Link>
            <Link to="/order" style={{'textDecoration':'none'}}>
              <Button size="sm" variant='success' style={{'marginRight':'5px', 'minWidth':'9rem'}}>
                <img src={WMS} alt="wms" style={{'width':'20px', 'height':'20px'}} />
                {' '} Order Page
              </Button>
            </Link>
          </Col>
          <Col className=' d-flex justify-content-end' lg={2}>
            <Button size="sm" variant='secondary'>
              <img src={LOGOUT} alt="logout" style={{'width':'20px', 'height':'20px'}} />
              {' '} Logout
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}
