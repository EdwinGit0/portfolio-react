import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Loading() {
  return (
    <div className='first'>
         <div className='second'>
            <Spinner animation="border" variant="primary" />
         </div>
    </div>
  )
}
