import React from "react";
import Navbaritem from "./Navbaritem";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import Footer from "./Footer";
import Testemonial from "./Testemonial";
// import Footer from "./Footer";

function Home() {
  return (
    <div className="bg-light wrapper-main ">
      <Navbaritem />
      {/* <div className="background-img">
      <img src="img/background-complete 1.png " className="background-img"/>

      </div> */}
      <div className="div-1 mt-5 pt-5 container">
      {/* <img src="img/background-complete 1.png " className="background-img"/> */}

        <div className="row">
          <div className="col-sm-1">

          </div>
          <div className="col-lg me-5 first-block">

            <h1 className="mt-5">
              Elevate <span className="span">Real Estate Success</span> with
              Osumare's Digital Expertise
            </h1>
            <p className="p-head">
              Tailored Solutions for Thrining in the Digital Real Estate Landscape
            </p>
            <Button variant="primary" className="m-5 mx-auto get-started ">
              Get Started
            </Button>
            <img src="img/Header image.png" className="m-5 mx-auto img-responsive header-img" />

            <div className="col-sm-1">

            </div>
          </div>
        </div>
      </div>

      <div className=" w-100 p-2">
        <h2 className="text-center mx-auto">Real Estate-Focused Digital Mastery</h2>

        <div className="mx-auto row  flex-container ">
          <div className="col col-lg-6 col-left">
            <img src="img/cuate.png" className="m-5 mx-auto img-responsive cuate-img" />
          </div>

          <div className="col text-left container flex-column col-lg-8 col-right">
            <h2 className="mx-auto mt-5 h2-div" >
              Unlock the Potential of Digital Real Estate Excellence
            </h2>
            <p className="mt-5 text-left p-para mx-auto">
              At Osumare, we understand that the real estate landscape demands a
              digital presence that aligns with the intricacies of property
              marketing. Our range of specialized services is meticulously
              designed to catapult your brand's success in the ever-evolving
              digital property market.
            </p>
            <Button variant="primary" className="mx-auto m-5 get-started-2 ">
              Get Started
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="mt-5 mb-5 bg-seccondary">
          <div className=" mt-5 ">
            <h2 className="pt-5 mt-5 mx-auto text-center">Our Service Offerings</h2>
            <p className="mx-auto p-head">  Strategies that Drive Property Market Excellence</p>
            {/* </div> */}
            <Row xs={1} md={4} className="m-2">
              <Col className="mt-2 text-center ">
                <Card
                  className=" border-none cart"

                >
                  <Card.Img variant="top" src="img/group/Group 117.png" className="mt-2 grp-img mx-auto" />
                  <Card.Body>
                    <Card.Title>Automotive SEO</Card.Title>
                    <Card.Text style={{ marginLeft: "40px", fontSize: "15px" }}>
                      Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col className="mt-2 text-center">
                <Card
                  className="border-none cart "

                >
                  <Card.Img variant="top" src="img/group/Group 117 (1).png" className="mt-2 grp-img mx-auto" />
                  <Card.Body>
                    <Card.Title>PPC Precision</Card.Title>
                    <Card.Text style={{ marginLeft: "40px", fontSize: "15px" }}>
                      Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col className="mt-2 text-center">
                <Card
                  className=" border-none cart mx-auto cart-width"

                >
                  <Card.Img variant="top" src="img/group/Group 117 (2).png" className="mt-2 grp-img mx-auto" />
                  <Card.Body>
                    <Card.Title>Social Acceleration</Card.Title>
                    <Card.Text style={{ marginLeft: "40px", fontSize: "15px" }}>
                      Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col className="mt-2 text-center">
                <Card
                  className=" border-none cart mx-auto cart-width "

                >
                  <Card.Img variant="top" src="img/group/Group 117 (3).png" className="mt-2 grp-img mx-auto" />
                  <Card.Body>
                    <Card.Title>Content Excellence</Card.Title>
                    <Card.Text style={{ marginLeft: "40px", fontSize: "15px" }}>
                      Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

            </Row>

            <Row xs={1} md={4} className="m-2" >


              <Col className="mt-2 text-center">
                <Card
                  className=" border-none cart mx-auto cart-width "

                >
                  <Card.Img variant="top" src="img/group/Group 117 (4).png" className="mt-2 grp-img mx-auto" />
                  <Card.Body>
                    <Card.Title>Web Design</Card.Title>
                    <Card.Text style={{ marginLeft: "40px", fontSize: "15px" }}>
                      Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col className="mt-2 text-center">
                {" "}
                <Card
                  className=" border-none cart mx-auto cart-width"

                >
                  <Card.Img variant="top" src="img/group/Group 117 (5).png" className="mt-2 grp-img mx-auto" />
                  <Card.Body>
                    <Card.Title>Data Driven insights</Card.Title>
                    <Card.Text style={{ marginLeft: "40px", fontSize: "15px" }}>
                      Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col className="mt-2 text-center">
                {" "}
                <Card
                  className=" border-none cart mx-auto cart-width"

                >
                  <Card.Img variant="top" src="img/group/Group 117 (6).png" className="mt-2 grp-img mx-auto" />
                  <Card.Body>
                    <Card.Title>End-to-End Solutions</Card.Title>
                    <Card.Text style={{ marginLeft: "40px", fontSize: "15px" }}>
                      From initial awareness to post-purchase loyalty, we offer full-funnel solutions that guide customers through every step of their journey.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col className="mx-auto mt-2 text-center">
                <Card
                  className=" border-none cart mx-auto cart-width"

                >
                  <Card.Img variant="top" src="img/group/Group 117 (7).png" className="mt-2 grp-img mx-auto" />
                  <Card.Body>
                    <Card.Title>Video marketing</Card.Title>
                    <Card.Text style={{ marginLeft: "40px", fontSize: "15px" }}>
                      Unleash the Power of Video Marketing: Captivate, Engage, and Elevate Your Brand with Compelling Visual Stories. Compelling Visual Stories.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

          </div>

        </div>
        <Button variant="primary" className="mx-auto m-5 get-started-2 ">
          Get Started
        </Button>
      </div>


      <div className=" w-100 p-2">
        <h2 className="text-center mx-auto h2-navigate">
          Navigating Real Estate's Digital Landscape
        </h2>
        <p className="mx-auto">Insight for Real Estate marketing Advantages</p>

        <div className=" row m-5">

          <div className="m-5 col text-left container flex-column col-lg-5">

            <div className="mx-auto row m-3 flex-container bg-white frame-main">
              <div className="col-2 m-2 flex-column frame-div-img" >
                <img src="img/bard-fill.png" className="d-block m-2 card-img-top img-responsive frame-5 frame-img" alt="not found" />
              </div>

              <div className="col text-left flex-column col ">
                <h2 className="mx-auto " style={{ fontSize: "14px", fontWeight: "bold" }}>Market Tread Analysis</h2>
                <p className="mx-auto  frame-div-p " style={{ fontSize: "12px" }}>Predictive insights to guide real estate strategies.</p>
              </div>
            </div>


            <div className=" mx-auto row m-3 flex-container bg-white frame-main">
              <div className="col-2 m-2 flex-column frame-div-img" >
                <img src="img/bard-fill.png" className="d-block m-2 card-img-top img-responsive frame-5 frame-img" alt="not found" />
              </div>

              <div className="col text-left flex-column col ">
                <h2 className="mx-auto " style={{ fontSize: "14px", fontWeight: "bold" }}>Market Tread Analysis</h2>
                <p className="mx-auto  frame-div-p" style={{ fontSize: "12px" }}>Predictive insights to guide real estate strategies.</p>
              </div>
            </div>

            <div className="mx-auto row m-3 flex-container bg-white frame-main">
              <div className="col-2 m-2 flex-column frame-div-img" >
                <img src="img/bard-fill.png" className="d-block m-2 card-img-top img-responsive frame-5 frame-img" alt="not found" />
              </div>

              <div className="col text-left flex-column col ">
                <h2 className="mx-auto " style={{ fontSize: "14px", fontWeight: "bold" }}>Market Tread Analysis</h2>
                <p className="mx-auto  frame-div-p" style={{ fontSize: "12px" }}>Predictive insights to guide real estate strategies.</p>
              </div>
            </div>

            <div className="mx-auto row m-3 flex-container bg-white frame-main">
              <div className="col-2 m-2 flex-column frame-div-img" >
                <img src="img/bard-fill.png" className="d-block m-2 card-img-top img-responsive frame-5 frame-img" alt="not found" />
              </div>

              <div className="col text-left flex-column col ">
                <h2 className="mx-auto " style={{ fontSize: "14px", fontWeight: "bold" }}>Market Tread Analysis</h2>
                <p className="mx-auto  frame-div-p" style={{ fontSize: "12px" }}>Predictive insights to guide real estate strategies.</p>
              </div>
            </div>

          </div>

          <div className="p-2  col col-lg-6 ">
            <img src="img/rafiki.png" className=" img-responsive mx-auto frame-892" />

          </div>
        </div>
      </div>

      <div className="mb-5 pt-5 mx-auto row m-3 flex-container">

        <h2 className="text-center mx-auto">Driving Property Inquiries to Conversions</h2>
        <p className="mx-auto p-head">Streamlined Strategies for Real Estate Success</p>

        <div className="mx-auto row m-3 flex-container">
          <div className="col col-lg-5 col-left">
            <img src="img/house-searching/bro.png" className="img-responsive house " />
          </div>

          <div className="col text-left container flex-column col-lg-8 col-right">
            <h2 className="mt-5 h2-div mx-auto">
              Optimized Path to Property Purchase
            </h2>
            <p className="mt-5 text-left p-para mx-auto">
              In the dynamic realm of real estate, the journey from a property inquiry to a successful conversion demands a well- crafted approach. At Osumare, we specialize in guiding potential buyers through this journey seamlessly, maximizing inquiries-turned-conversions with expert strategies.
            </p>
            <Button variant="primary" className="mx-auto m-5 get-started-2 ">
              Get Started
            </Button>
          </div>
        </div>

      </div>


      <div className="mb-5 mx-auto w-100 pt-5">
        <h2 className="text-center mx-auto">Driving Property Inquiries to Conversions</h2>
        <div className="mx-auto row ms-5 flex-container">

          <div className="m-5 col col-lg-8  col-left ">
            <img src="img/icon.png" className="img-responsive icon" />
            <h3 className="text-center mx-auto mt-5 h2-div">Call-to-Action Optimization</h3>
            <p className="mt-5 text-left p-para mx-auto text-center">Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates.</p>
          </div>

          <div className="m-5 col col-lg-8 col-left">
            <img src="img/icon 2.png" className="img-responsive icon" />
            <h3 className="mx-auto text-center mt-5 h2-div">Landing Page Efficiency</h3>
            <p className="mx-auto mt-5 text-left p-para text-center">Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission</p>
          </div>
        </div>
          
        <div className="mx-auto row ms-5 flex-container">

          <div className="m-5 col col-lg-8  col-left">
            <img src="img/icon 3.png" className="img-responsive icon" />
            <h3 className="mx-auto text-center mt-5 h2-div">Social Proof Utilization</h3>
            <p className="mx-auto mt-5 text-left p-para text-center">Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action</p>
          </div>

          <div className=" mt-5 col col-lg-8 col-left ">
            <img src="img/icon 4.png" className=" img-responsive icon" />
            <h3 className="mx-auto text-center mt-5 h2-div">Mobile-Friendly Experience</h3>
            <p className="mx-auto mt-5 text-left p-para text-center">Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission</p>
          </div>
        </div>

      </div>

      <div className="mt-5 mx-auto w-100 pt-5">
        <h2 className="text-center mx-auto mt-5 h2-div">Our Expertise in Action</h2>
        <div className="mx-auto row ms-5 flex-container">

          <div className="m-5 col col-lg-8  col-left ">
            <img src="img/icon (1).png" className="img-responsive icon" />
            <h3 className="text-center mx-auto mt-5 h2-div">Effective CTAS</h3>
            <p className="mt-5  p-para mx-auto text-center">See how our strategic CTAs drove a significant increase in property inquiries and accelerated sales for a real estate agency.</p>
          </div>

          <div className="m-5 col col-lg-8 col-left">
            <img src="img/icon (2).png" className="img-responsive icon" />
            <h3 className="text-center mx-auto mt-5 h2-div">Conversion-Optimized Landing Pages</h3>
            <p className="mt-5  p-para mx-auto text-center">Explore a case study where our landing page optimization increased property lead conversion rates by 30%</p>
          </div>
        </div>

        <div className="mx-auto row ms-5 flex-container">

          <div className="m-5 col col-lg-8 col-left">

            <img src="img/icon (3).png" className="img-responsive icon" />
            <h3 className="text-center mx-auto mt-5 h2-div">Trust Building with Social Proof</h3>
            <p className="mt-5  p-para mx-auto text-center">Discover how leveraging client testimonials boosted buyer confidence, leading to higher conversion rates for a property development project</p>
          </div>

          <div className="fm-5 col col-lg-8 col-left">

            <img src="img/icon (4).png" className="img-responsive icon" />
            <h3 className="text-center mx-auto mt-5 h2-div">Mobile-First Success:</h3>
            <p className="mt-5 p-para mx-auto text-center">Learn how our mobile-responsive design approach resulted in a 25% increase in inquiries from mobile users for a real estate agency.</p>
          </div>
        </div>
      </div>

      <div className="mx-auto w-100 p-2">
        <h2 className="text-center mx-auto mt-5 h2-div">Your Peace of Mind</h2>
        <p className="mt-3 text-left p-para mx-auto text-center" style={{ fontSize: "20px", width: "650px" }}>Through our conversion-focused strategies, we ensure that property seekers are not just visitors, but engaged prospects ready to make their next move in the real estate market</p>
        <Button variant="primary" className="mx-auto m-5 get-started-2 ">
              Get Started
            </Button>


      </div>


      <Testemonial />

      <div className="scroll-arrow">

        <img src="img/scroll buttion.png" className="img-responsive scroll-btn" />
        <img src="img/scroll buttion (1).png" className="img-responsive scroll-btn" />

      </div>

      <div className="text-center m-5">
        <h2 className="mx-auto mt-5 h2-div">Frequently Asked Questions</h2>
        <p className="mt-3 text-left p-para mx-auto text-center" style={{ fontSize: "20px", width: "650px" }}>Pinpoint your audience with precision, ensuring your marketing efforts reach those most likely to engage with your brand.</p>

        <div className="col-5 mx-auto m-5">
          <Form.Group className="mb-3 border-none">

          </Form.Group>
          <Form.Group className="mb-3 border-none">
            <Form.Select >
              <option>1. How does Osumare measure campaign success?</option>

            </Form.Select>
            <Form.Select >
              <option>2. How does Osumare measure campaign success?</option>
            </Form.Select>
            <Form.Select >
              <option >3. How does Osumare measure campaign success?</option>
            </Form.Select>
          </Form.Group>

        </div>
      </div>

      <div className="mx-auto text-center m-5 pb-5 ">
        <h2 className="mx-auto mt-5 pt-5 h2-div">Connect with Our Digital Marketing Experts</h2>
        <p className="mt-3 text-left p-para mx-auto text-center" style={{ fontSize: "20px", width: "650px" }}>Reach Out for Tailored Strategies and Results-Driven Solutions. Let's Elevate Your Online Presence Together</p>

        <div className="form mx-auto container m-5 p-5" >
          <Container>
            <Row>
              <Col>
                <Form className="text-start fw-bold">
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name" />
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Number" />
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Your Email" />
                  </Form.Group>
                </Form>
              </Col>

              <Col>
                <Form className="text-start fw-bold">
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label >Message</Form.Label>
                    <Form.Control as="textarea" rows={7} placeholder="Enter Your Message" />
                  </Form.Group>
                </Form>

              </Col>

            </Row>
            <Row>
              <Col>
                <Button variant="primary" className="contact-btn get-started "> Get Started
                </Button>

              </Col>
            </Row>

          </Container>
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default Home;
