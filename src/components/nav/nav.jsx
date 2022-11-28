import React from "react";
import Link from "react-dom";
import { NavStyle } from "./nav.style";
import omnifood from '../../assets/img/omnifood-logo.png'

function Navbar() {
    return (
      <NavStyle>      
    <header class="header">
      <a href="#">
        <img class="logo" alt="Omnifood logo" src={omnifood} />
      </a>
      <nav class="main-nav">
        <ul class="main-nav-list">
          <li>
            <a class="main-nav-link" href="#">
              How it works
            </a>
          </li>
          <li>
            <a class="main-nav-link" href="#">
              Meals
            </a>
          </li>
          <li>
                <a class="main-nav-link" href="testimonials">  
              Testimonials
            </a>
          </li>
          <li>
            <a class="main-nav-link" href="#">
              Pricing
            </a>
          </li>
          <li>
            <a class="main-nav-link nav-cta" href="#">
              Try for free
            </a>
          </li>
        </ul>
      </nav>
    </header>
      </NavStyle>
  );
}

export default Navbar