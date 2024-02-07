import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Footer() {
  return (
    <div>
      <div className='mt-5 text-dark footer'>
        {/* <div classname="footer"> */}

        <Row md={4}>
          <Col className=' mx-auto'>

            <div className="">

              <img src='img/fiNAL-LOGO.png' className='footer-logo' />
              <p className="mt-2 text-left footer-p ">The best digital marketing agency in Pune with a proven track record of consistently delivering quality service.</p>
            </div>

            <div className=" ">
              <h2 className="text-left m-0 mt-4" >Address</h2>
              <img src='Osumare Logo-01 (2)3.png' className='nav-logo' />

              <p className="mt-2 text-left footer-p">Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi, Pune-14, Maharastra, India.</p>
            </div>

            <div className=" ">
              <h2 className="h2-footer m-0 mt-4">Contacts</h2>
              <p className=" text-left  footer-p mt-4"><span><img src='img/mail-fill.png' style={{ width: "30px" }} /></span>hello@osumare.in</p>
              <p style={{ fontSize: "20px", width: "300px", }} className="text-left footer-p mx-auto"><span><img src='img/phone-fill.png' style={{ width: "30px" }} /></span>+91 8459 8762 26</p>
            </div>
          </Col>

          <Col className=' mx-auto'>
            <div className="">
              <h2 className=" h2-footer">Menu</h2>
              <p style={{ fontSize: "20px", width: "100px", }} className="text-start p-para mx-auto">Home</p>
              <p style={{ fontSize: "20px", width: "100px", }} className="text-left p-para mx-auto">About</p>
              <p style={{ fontSize: "20px", width: "100px", }} className="text-left p-para mx-auto">Services</p>
              <p style={{ fontSize: "20px", width: "100px", }} className="text-left p-para mx-auto">Work</p>
              <p style={{ fontSize: "20px", width: "100px", }} className="text-left p-para mx-auto">Blog</p>
              <p style={{ fontSize: "20px", width: "100px", }} className="text-left p-para mx-auto">Career</p>
            </div>
          </Col>
          <Col className='ms-2'>
            <div className=" ms-2 icon-div">
              <h2 className=" ms-2 h2-footer ">Social</h2>
              <span><img src='img/pinterest-fill.png' className='icons' /></span>
              <span><img src='img/pinterest-fill (1).png' className='icons' /></span>
              <span><img src='img/pinterest-fill (2).png' className='icons' /></span>
              <span><img src='img/pinterest-fill (3).png' className='icons' /></span>
              <span><img src='img/whatsapp-fill.png' className='icons' /></span>
              <span><img src='img/whatsapp-fill (1).png' className='icons' /></span>
            </div>
          </Col>
        </Row>


        {/* </div> */}

      </div>
      <h4 className='text-center bg-light p-3 mb-2'>
        &copy; 2023 Osumare , All Rights Reserverd.
      </h4>
    </div>
  )
}

export default Footer
