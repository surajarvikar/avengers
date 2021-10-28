import React, { useState } from 'react'
import  { NavLink } from "react-router-dom"

const Navbar = () => {
    const [show , setShow] = useState(false);
    return (
<>
<section className="navbar-bg">
<nav className="navbar navbar-expand-lg  d-flex ">
  <div className="container navbar-1">
    <img src="./Images/images.jpg" alt="avenges" />

    <button 
    className="navbar-toggler" 
    type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" 
    aria-expanded="false" 
    aria-label="Toggle navigation"
    onClick={() => setShow(!show)}>

      <span className="navbar-toggler-icon"> == </span>
    </button >

    <div className={`collapse navbar-collapse ${show ? "show" : ""} ` }>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/character">Characters</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
</section>
</>
)
}

export default Navbar ;
