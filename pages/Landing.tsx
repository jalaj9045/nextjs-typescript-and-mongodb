import React from "react";
import Link from "next/Link";
import Image from "next/image";
import Header from "./Header";
import { FaArrowLeft, FaArrowRight, FaSistrix } from "react-icons/fa";
import { Dropdown, Card } from "react-bootstrap";
import Cards from "./Cards";
import Slide from "./Slide";
import Footer from "./Footer";
function Landing() {
  return (
    <>
      <Header />
      <div className="Banner">
        <div className="Banner--data">
          <div className="data">
            <h1 className="bannerheading">
              World's First One-Stop Unified Service And Execution Company
            </h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="Banner--Img">
          <img src="/Stepping up.png" />
        </div>
      </div>

      <div className="titile">
        <h1>Anything To Anyone From Anywhere</h1>
        <h4>Get Inspired while bussiness with us</h4>
      </div>
      <Cards />

      {/* <section className="Tollared--Sec">
        <div className="Tollared--Box">
          <div className="Tollared--left">
            <h3>Search. Enormous. Easy. Recognize. Choose.</h3>
            <h5>Want to access precise products from tailored categories?</h5>
            <p>
              AI-driven categories award you exact products from massive
              collection.
            </p>
            <button className="Tollared--btn">
              View all <br />{" "}
              <img src="/vector.png" className="vector" alt="" />{" "}
            </button>
            <div className="btns">
              <button className="arrow--btn">
                <FaArrowLeft />
              </button>
              <button className="arrow--btn">
                <FaArrowRight />
              </button>
            </div>
          </div>

          <div className="Tollared--right">
            <div className="Serch--item">
              <div className="input-group mb-3">
                <div className="input-group-prepend throwborder">
                  <select name="cars" id="cars" className="Serch--Drop">
                    <option value="volvo">CATEGORY</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
                <input
                  type="text"
                  className="search--input"
                  placeholder="SEARCH"
                />
                <button className="Search--Btn">
                  <FaSistrix />
                </button>
              </div>
            </div>

            <div className="slider">
              <Slide />
            </div>
          </div>
        </div>
      </section> */}

      <div className="titile">
        <h1>Research .Solution .Execution .Fulfillment</h1>
        <h4>
          We are doing with technologies and expertise: Deliver satisfied
          business.
        </h4>
        <p>
          In-house customization of the most recent technology delivered our
          service for developing your business, along with our expertise,
          knowledge, and direct field execution.
        </p>

        <div className="OneCard">
          <Card className="throw Mycard">
            <Card.Body>
              <Card.Title className="text-left">
                <Image src="/image 214.png" width={65} height={65} />
              </Card.Title>
              <Card.Text className="text-left">
                <Card.Title>Unified Analytics</Card.Title>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolor
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="throwmargin Mycard">
            <Card.Body>
              <Card.Title className="text-left">
                <Image src="/image 217.png" width={65} height={65} />
              </Card.Title>
              <Card.Text className="text-left">
                <Card.Title>executions</Card.Title>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolor
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className=" throwmargin2 Mycard">
            <Card.Body>
              <Card.Title className="text-left">
                <Image src="/image 215.png" width={65} height={65} />
              </Card.Title>
              <Card.Text className="text-left">
                <Card.Title>Delivery</Card.Title>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolor
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className=" throwmargin3 Mycard">
            <Card.Body>
              <Card.Title className="text-left">
                <Image src="/image 216.png" width={65} height={65} />
              </Card.Title>
              <Card.Text className="text-left">
                <Card.Title>Feedback and support</Card.Title>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolor
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* New section become start  */}
      <section className="Samart--RFQ">
        <div className="left--RFQ">
          <img src="/rfq.png" alt="" />
        </div>
        <div className="right--RFQ">
          <div>
            <h2>Smart RFQ</h2>
            <h5>Ready to think Smart about global procurement?.</h5>
            <p>
              We are innovative thinkers in global outsourcing. Our Smart
              Request for Quotation (RFQ) integrates blockchain technology and
              artificial intelligence to bring your requirement from anywhere.
            </p>
            <div>
              <button className="RFQ--BTN">Sign up</button>
              <a href="#" className="readMore">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="Samart--RFQ">
        <div className="right--RFQ">
          <div>
            <h2>Step ahead to the new era of contract technology</h2>
            <h5>Ready to think Smart about global procurement?.</h5>
            <h5>
              Forge ahead to the new era of the global contract with smart
              technologies.
            </h5>
            <p>
              Smart RFQ integrated our unified analytics and blockchain smart
              contract technology to make your RFQ more powerful and three layer
              smart logical functionality brings verified and authenticated
              proposal against your RFQ.. signup (readmore)
            </p>
            <div>
              <button className="RFQ--BTN">Read More</button>
            </div>
          </div>
        </div>
        <div className="left--RFQ">
          <img src="/woman.png" alt="" />
        </div>
      </section>

      <div className="grey--Box">
        <div className="grey--InnerBox">
          <h2>Ingenious Sign-up: Smart Technology: Transform business</h2>

          <section className="Samart--RFQ">
            <div className="right--RFQ">
              <div>
                <p>
                  The only worldwide unified business place to offer your
                  company's procurement and supply to the next level of success.
                </p>
                <p>
                  <img src="/ok.png" className="checksvg" /> AI- Diven digital
                  dashboard
                </p>
                <p>
                  <img src="/ok.png" className="checksvg" /> AI- Diven digital
                  dashboard
                </p>
                <p>
                  <img src="/ok.png" className="checksvg" /> AI- Diven digital
                  dashboard
                </p>
                <p>
                  <img src="/ok.png" className="checksvg" /> AI- Diven digital
                  dashboard
                </p>
                <div>
                  <button className="RFQ--BTN">Sign up</button>
                  <button className="RFQ--BTN2">Sign up</button>
                </div>
              </div>
            </div>
            <div className="left--RFQ">
              <img src="/Computerservice.png" alt="" />
            </div>
          </section>
        </div>
      </div>

      <div className="titile">
        <h1>Smart. Strategy. Sustainability. Support. Success.</h1>
        <p>
          Hefgro is the world's first and best business provider for technology,
          services, and solution, with field business execution to procurement,
          supply, and operations support.
        </p>
      </div>

      <div className="card-caontainer">
        <Card className="Mycard">
          <Card.Body>
            <Card.Title className="text-center">
              <Image src="/a.png" width={65} height={65} />
            </Card.Title>
            <Card.Text>
              <Card.Title>Risk Intelligence</Card.Title>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolor
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="Mycard">
          <Card.Body>
            <Card.Title className="text-center">
              <Image src="/b.png" width={65} height={65} />
            </Card.Title>
            <Card.Text>
              <Card.Title>Big data analytics</Card.Title>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolor
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="Mycard">
          <Card.Body>
            <Card.Title className="text-center">
              <Image src="/c.png" width={65} height={65} />
            </Card.Title>
            <Card.Text>
              <Card.Title>Sourcing Intelligence</Card.Title>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolor
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className="titile">
        <h4>More about our services</h4>
      </div>

      <section className="Samart--RFQ">
        <div className="right--RFQ">
          <div>
            <h2>Relationship. Interaction. Support. Profit. Growth</h2>
            <p>
              Get a fantastic match by partnering with your service. Our
              business ethics can help you sustain prosperity and help you
              accomplish your goals, and get great rewards by partnering with
              your service.
            </p>
            <div>
              <button className="RFQ--BTN">Join with us</button>
            </div>
          </div>
        </div>
        <div className="left--RFQ">
          <img src="/man&woman.png" alt="" />
        </div>
      </section>

      <section className="Blog">
        <div className="setpadforBlog">
          <h2>Blogs</h2>
          <p>Research. Intelligence. Reality. Transparency</p>
        </div>
        <div className="imgcards">
          <Card className="Blofcard">
            <Card.Img variant="top" src="/Rectangle.png" />
            <Card.Body>
              <Card.Title>Risk Intelligence</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolor
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="Blofcard">
            <Card.Img variant="top" src="/Rectangle.png" />
            <Card.Body>
              <Card.Title>Risk Intelligence</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolor
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="Blofcard">
            <Card.Img variant="top" src="/Rectangle.png" />
            <Card.Body>
              <Card.Title>Risk Intelligence</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolor
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </section>


      <section className="Landscape--CArds">
      <div className="Bordercards">
      <div className="card mb-3 Landcard1">
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src="/Rectangle.png" className="Landcard1-img" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="landbody">
        <h5 className="card-title">Risk Intelligence</h5>
        <p className="card-text1">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>

<div className="card mb-3 Landcard1">
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src="/Rectangle.png" className="Landcard1-img" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="landbody">
        <h5 className="card-title">Risk Intelligence</h5>
        <p className="card-text1">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a </p>
      </div>
    </div>
  </div>
</div>

<div className="card mb-3 Landcard1">
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src="/Rectangle.png" className="Landcard1-img" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="landbody">
        <h5 className="card-title">Risk Intelligence</h5>
        <p className="card-text1">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a </p>
      </div>
    </div>
  </div>
</div>
      </div>
      </section>

        
      <section className="Samart--RFQ subs">
        <div className="subs--data">
        <div className="right--RFQ">
          <div>
            <h2>Subscribe Newsletter</h2>
            <p>
            You need a teacher! I can show you the ways of the Force! The Force. Lieutenant, get back to your station! 
            </p>
            <input
                  type="text"
                  className="subscribe"
                  placeholder="EMAIL"
                />
              <button className="subbtn">connect</button>
            <div>
            </div>
          </div>
        </div>
        <div className="left--RFQ">
          <img src="/Letter.png"  alt="" />
        </div>
        </div>
      </section>


      <Footer />
    </>
  );
}

export default Landing;
