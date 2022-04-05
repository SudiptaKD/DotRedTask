import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import ApiArchive from '../icons/api.svg'
import COURIER from '../icons/courier.svg'
import ECOM from '../icons/ecom.svg'
import FINANCE from '../icons/finance.svg'
import LIST from '../icons/list.svg'
import LOGOUT from '../icons/logout.svg'
import WMS from '../icons/wms.svg'

export default function Header() {
  return (
    <>
      <Container style={{'min-heigt':'300px',
         'padding':'20px 50px', 'max-width':'100%' }}>
        <Row>
          <Col className='text-success d-flex justify-content-start' lg={3}>
            <Button size="sm" variant='secondary' style={{'marginRight':'4px'}}>
              <img src={LIST} alt="list" style={{'width':'20px', 'height':'20px'}} />
            </Button>{' '}
            <Button size="sm" variant='warning'>
              <img src={ApiArchive} alt="apiArchive" style={{'width':'20px', 'height':'20px'}} />
              {' '} API Status
            </Button>
          </Col>
          <Col className=' d-flex justify-content-center' lg={6}>
            <Button size="sm" variant='secondary' style={{'marginRight':'2px'}}>
              <img src={ECOM} alt="ecom" style={{'width':'20px', 'height':'20px'}} />
              {' '} ECOM
            </Button>
            <Button size="sm" variant='secondary' style={{'marginRight':'2px'}}>
              <img src={COURIER} alt="courier" style={{'width':'20px', 'height':'20px'}} />
              {' '} COURIER
            </Button>
            <Button size="sm" variant='secondary' style={{'marginRight':'2px'}}>
              <img src={WMS} alt="wms" style={{'width':'20px', 'height':'20px'}} />
              {' '} WMS
            </Button>
            <Button size="sm" variant='secondary' style={{'marginRight':'2px'}}>
              <img src={FINANCE} alt="finance" style={{'width':'20px', 'height':'20px'}} />
              {' '} FINANCE
            </Button>
          </Col>
          <Col className=' d-flex justify-content-end' lg={3}>
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
