import React from 'react'
import Head from 'next/head';
import Link from 'next/Link'
import Image from 'next/image'
export default function Header() {
  return (
    <>
      <Head>
        <title>hefgrow</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"></link>
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
      </Head>


   
<nav className="navbar navbar-expand-lg navbar-light ">
  <a className="navbar-brand">HFGrow</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
    aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent-555">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
      <Link  href="/Banner">
        <a className="nav-link">Home
        </a>
        </Link>
      </li>
      <li className="nav-item">
      <Link  href="#">
        <a className="nav-link">Product</a>
        </Link>
      </li>
      <li className="nav-item">
      <Link  href="#">
        <a className="nav-link">Service</a>
        </Link>
      </li>
      <li className="nav-item">
      <Link  href="#">
        <a className="nav-link">Smart RFQ</a>
        </Link>
      </li>
      <li className="nav-item">
      <Link  href="#">
        <a className="nav-link">Smart Contract</a>
        </Link>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto nav-flex-icons">
      <li className="nav-item avatar">
        <Link  href="#">
        <a className="nav-link p-0">
        <Image src="/user.png" className='rounded-circle z-depth-0'
            alt="avatar image" width="32" height="32" />
        </a>
        </Link>
      </li>
    </ul>
  </div>
</nav>

    </>
  )
}

