import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';


function Navbaritem() {
  return (
    <div >
      <Navbar data-bs-theme="dark" className=' mb-5 navbar sticky-top'>

        <img src='img/fiNAL-LOGO.png' className='nav-logo' />
        <Nav className="" >
          <Button variant="outline-dark" className='contact-btn btn'>Contact Us</Button>
        </Nav>

      </Navbar>
    </div>
  )
}

export default Navbaritem

