import React from 'react'
import Link from 'next/Link'
import Image from 'next/image'
import Header from './Header'
import Cards from './Cards'
function Landing() {
  return (
    <>
    <Header/>
    <div className='Banner'>
      <div className='Banner--data'>
        <div className='data'>
        <h1 className='bannerheading'>World's First One-Stop Unified Service And Execution Company</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className='Banner--Img'>
        <img src='/Stepping up.png' />
      </div>
    </div>


    <div className='titile'>
    <h1>Anything To Anyone From Anywhere</h1>    
    <h4>Get Inspired while bussiness with us</h4>
    </div>
      <Cards />


      <section className='Tollared--Sec'>
        <div className='Tollared--Box'>
          <div className='Tollared--left'>
            <h3>Search. Enormous. Easy. Recognize. Choose.</h3>
            <h5>Want to access precise products from tailored categories?</h5>
            <p>AI-driven categories award you exact products from massive collection.</p>
            <button className='Tollared--btn'>View all <br /> <img src="/vector.png" className='vector' alt="" /> </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Landing