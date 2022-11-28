import styled from "styled-components";

export const Herostyle = styled.div`
  .section-hero {
    background-color: #fdf2e9;
    padding: 4.8rem 0 9.6rem 0;
  }

  .hero {
    max-width: 130rem;
    margin: 0 auto;
    padding: 0 3.2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 9.6rem;
    align-items: center;
  }

  .hero-description {
    font-size: 2rem;
    line-height: 1.6;
    margin-bottom: 4.8rem;
  }

  .hero-img {
    width: 100%;
  }

  .delivered-meals {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    margin-top: 8rem;
  }

  .delivered-imgs {
    display: flex;
  }

  .delivered-imgs img {
    height: 4.8rem;
    width: 4.8rem;
    border-radius: 50%;
    margin-right: -1.6rem;
    border: 3px solid #fdf2e9;
  }

  .delivered-imgs img:last-child {
    margin: 0;
  }

  .delivered-text {
    font-size: 1.8rem;
    font-weight: 600;
  }

  .delivered-text span {
    color: #cf711f;
    font-weight: 700;
  }
  /**************************/
  /* FEATURED IN SECTION */
  /**************************/

  .section-featured {
    padding: 4.8rem 0 3.2rem 0;
  }

  .heading-featured-in {
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 0.75px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 2.4rem;
    color: #888;
  }

  .logos {
    display: flex;
    justify-content: space-around;
  }

  .logos img {
    height: 3.2rem;
    filter: brightness(0);
    opacity: 50%;
  }
`;