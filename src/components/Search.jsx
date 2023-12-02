import React from 'react'
import { Button, Form } from 'react-bootstrap'

function Search() {
  return (
    <>
        <div className='d-flex justify-content-center w-100' style={{marginTop:'35px'}}>
          <Form.Group className='w-25 shadow' controlId="validationCustom03">
            <Form.Control type="text" placeholder="Search" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid name.
            </Form.Control.Feedback>
          </Form.Group>
          <Button className='btn btn-light ms-3 shadow'> <i className='fa-solid fa-magnifying-glass'></i> </Button>
        </div>
    </>
  )
}

export default Search