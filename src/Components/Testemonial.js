import React from 'react'
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Testemonial() {
  return (
    <div className='container'>
      <div className=" w-100 p-2">
        <h2 className="text-center mx-auto">What Our Pharma Partners Say</h2>
        <p className="mt-3 mb-5 text-center p-para mx-auto" style={{ fontSize: "20px" }}>Driving Transformations, One Brand at a Time</p>
        <div>
          <div className="mx-auto testemonial">

            <div className="mx-auto m-5 d-flex flex-container ">

              <div className="col-2 d-flex-column  mx-auto flex-child m-2 " >
                <div className='container'>
                  <img src="img/Tabish formal photo1.png" className="img-responsive formalimg" />

                </div>
                <div className='play-circle-fill'>
                  <img src="img/play-circle-fill.png" alt="image not found" className="img-responsive play-circle-fill " />

                </div>

              </div>
              <div className="col-4 d-flex-column mx-auto flex-child mt-5 mb-5 " style={{ width: "auto", marginTop: "30px", marginLeft: "30px" }}>
                <div className='mx-auto container'>
                  <div className='mx-auto row pt-5 ps-5 pe-5'>
                    <div className="col-2 mx-auto"> <img src="img/Tabish formal photo1.png" className="m-0 img-responsive profile-img mx-auto" /></div>
                    <div className="col-5 ms-0 mx-auto"><h6 style={{ fontWeight: "bold", fontSize: "20px", marginTop: "25px", width: "300px" }}>Tabish Khan </h6></div>
                    <div className="mx-auto col-3"><span style={{ marginLeft: "1px" }} ><img src="img/Symbol.png" className="mx-auto img-responsive  span-symbol " /></span></div>
                  </div>

                </div>
                <div className='mx-auto container ps-5 pe-5 '>
                  <p className="ms-5 mb-5  col-3 text-start p-testemonial mx-auto">Osumare's expertise in pharma marketing is unparalleled. Their strategies helped us navigate complex regulations while driving remarkable growth.</p>

                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Testemonial
