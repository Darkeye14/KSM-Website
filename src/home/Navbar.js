import React from 'react'
import kodava from '../assets/kodava.jpeg'
//import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" style={{justifyContent:'space-between'}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
        <img src={kodava} alt="..." class="d-inline-block align-text-top mx-2" width={35} height={35}/>
            Kodava Samaja(R) Mysuru</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{padding:'0 10rem', alignContent:'space-around'}}>
        <li className="nav-item">
          <a class="nav-link active" href='/'>Home</a>
        </li> <br/><br/>
        <li className="nav-item">
          <a class="nav-link active" href='/'>About us</a>
        </li>
        <li className="nav-item">
          <a class="nav-link active" href='/placeholder'>Events</a>
        </li>
        <li className="nav-item">
          <a class="nav-link active" href='/placeholder'>Contact us</a>
        </li>
        <li className="nav-item">
          <a class="nav-link active" href='/placeholder'>Past presidents</a>
        </li>
        <li className="nav-item">
          <a class="nav-link active" href='/placeholder'>Photo gallery</a>
        </li>
        <li className="nav-item">
          <a class="nav-link active" href='/placeholder'>Donate</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
