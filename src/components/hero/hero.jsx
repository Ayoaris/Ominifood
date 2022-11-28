import React from "react";
import { Herostyle } from "./hero.styles";
import hero from "../../assets/img/hero.png";
import customerOne from "../../assets/img/customers/customerOne.jpg";
import customer2 from "../../assets/img/customers/customer2.jpg";
import customer3 from "../../assets/img/customers/customer3.jpg";
import customer4 from "../../assets/img/customers/customer-4.jpg";
import customer5 from "../../assets/img/customers/customer-5.jpg";
import customer6 from "../../assets/img/customers/customer-6.jpg";
import techcrunch from "../../assets/img/logos/techcrunch.png";
import Business from "../../assets/img/logos/business-insider.png";
import forbes from "../../assets/img/logos/forbes.png";
import Newyork from "../../assets/img/logos/the-new-york-times.png";
import usa from "../../assets/img/logos/usa-today.png";

function Hero() {
  return (
    <>
      <Herostyle>
        <section class="section-hero">
          <div class="hero">
            <div class="hero-text-box">
              <h1 class="heading-primary">
                A healthy meal delivered to your door, every single day
              </h1>
              <p class="hero-description">
                The smart 365-days-per-year food subscription that will make you
                eat healthy again. Tailored to your personal tastes and
                nutritional needs.
              </p>
              <a href="#" class="btn btn--full margin-right-sm">
                Start eating well
              </a>
              <a href="#" class="btn btn--outline">
                Learn more &darr;
              </a>
              <div class="delivered-meals">
                <div class="delivered-imgs">
                  <img src={customerOne} alt="Customer 1" />
                  <img src={customer2} alt="Customer 2" />
                  <img src={customer3} alt="Customer 3" />
                  <img src={customer4} alt="Customer 4" />
                  <img src={customer5} alt="Customer 5" />
                  <img src={customer6} alt="Customer 6" />
                </div>
                <p class="delivered-text">
                  <span>250,000+</span> meals delivered last year!
                </p>
              </div>
            </div>
            <div class="hero-img-box">
              <img
                src={hero}
                class="hero-img"
                alt="Woman enjoying food, meals in storage container, and food bowls on a table"
              />
            </div>
          </div>
        </section>
        <section class="section-featured">
          <div class="container">
            <h2 class="heading-featured-in">As featured in</h2>
            <div class="logos">
              <img src={techcrunch} alt="Techcrunch logo" />
              <img src={Business} alt="Business Insider logo" />
              <img src={Newyork} alt="The New York Times logo" />
              <img src={forbes} alt="Forbes logo" />
              <img src={usa} alt="USA Today logo" />
            </div>
          </div>
        </section>
      </Herostyle>
    </>
  );
}

export default Hero;
