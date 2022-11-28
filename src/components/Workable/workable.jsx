import React from "react";
import { Workablestyle } from "../Workable/workable.style";

import Display from "../../common/display/display";
import Screenone from "../../assets/img/app/app-screen-1.png"
import Screentwo from "../../assets/img/app/app-screen-2.png";
import Screenthree from "../../assets/img/app/app-screen-3.png";


const Workable = () => {
  return (
    <div>
      <Workablestyle>
        <section class="section-how">
          <div class="container">
            <span class="subheading">How it works</span>
            <h2 class="heading-secondary">
              Your daily dose of health in 3 simple steps
            </h2>
          </div>
          <div class="container grid grid--2-cols grid--center-v">
            <Display>
              <p class="step-number">01</p>
              <h3 class="heading-tertiary">
                Tell us what you like (and what not)
              </h3>
              <p class="step-description">
                Never again waste time thinking about what to eat! Omnifood AI
                will create a 100% personalized weekly meal plan just for you.
                It makes sure you get all the nutrients and vitamins you need,
                no matter what diet you follow!
              </p>
            </Display>
            <div class="step-img-box">
              <img
                src={Screenone}
                class="step-img"
                alt="iPhone app
            preferences selection screen"
              />
            </div>
            {/* <!-- STEP 02 --> */}
            <div class="step-img-box">
              <img
                src={Screentwo}
                class="step-img"
                alt="iPhone app
            meal approving plan screen"
              />
            </div>
            <Display>
              <p class="step-number">02</p>
              <h3 class="heading-tertiary">Approve your weekly meal plan</h3>
              <p class="step-description">
                Once per week, approve the meal plan generated for you by
                Omnifood AI. You can change ingredients, swap entire meals, or
                even add your{" "}
              </p>
            </Display>
            <Display>
              <p class="step-number">03</p>
              <h3 class="heading-tertiary">Receive meals at convenient time</h3>
              <p class="step-description">
                Best chefs in town will cook your selected meal every day, and
                we will deliver it to your door whenever works best for you. You
                can change delivery schedule and address daily!
              </p>
            </Display>
            <div class="step-img-box">
              <img
                src={Screenthree}
                class="step-img"
                alt="iPhone app
            delivery screen"
              />
            </div>
          </div>
        </section>
      </Workablestyle>
    </div>
  );
};

export default Workable;
