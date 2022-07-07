import React from 'react'

function Footer() {
  return (
    <>
<footer className="text-center text-lg-start footerback text-white text-left">

  <section
    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
  >


    <div>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-google"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-github"></i>
      </a>
    </div>

  </section>

  <section className="">
    <div className="container text-center text-md-start mt-5">
     
      <div className="row mt-3">

        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

          <h2 className="text-uppercase fw-bold mb-4 text-white">
            <i className="fas fa-gem me-3"></i> Logo
          </h2>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>



        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">Angular</a>
          </p>
          <p>
            <a href="#!" className="text-reset">React</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Vue</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Laravel</a>
          </p>
        </div>



        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div>
 


        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
 
          <h6 className="text-uppercase fw-bold mb-4">
            Subscribe
          </h6>
          <p className='subinput'>  <input
                  type="text"
                  className="footerinput"
                  placeholder="EMAIL"
                />
              <button className="sendbtn"> <img src="/Primary fill.png" alt="" /> </button></p>
        </div>



      </div>
 
    </div>
  </section>

</footer>
    </>
  )
}

export default Footer