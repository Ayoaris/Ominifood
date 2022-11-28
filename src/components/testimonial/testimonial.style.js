import styled from "styled-components";

export const TestimonialStyle = styled.div`
  .section-testimonials {
    background-color: #fdf2e9;
    display: grid;
    /* grid-template-columns: repeat(2, 1fr); */
  
    /* grid-template-columns: 55fr 45fr; */
    align-items: center;
  }

  .testimonials-container {
    padding: 9.6rem;
  }

  .testimonials {
    display: flex;
    justify-content: space-between;
    gap: 8rem;
    /* grid-template-columns: 1fr 1fr; */
    /* row-gap: 4.8rem;
    column-gap: 8rem; */
  }

  .testimonial-img {
    width: 6.4rem;
    border-radius: 50%;
    margin-bottom: 1.2rem;
  }

  .testimonial-text {
    font-size: 1.8rem;
    line-height: 1.8;
    margin-bottom: 1.6rem;
  }

  .testimonial-name {
    font-size: 1.6rem;
    color: #6f6f6f;
  }

  .gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.6rem;
    padding: 1.6rem;
  }

  .gallery-item {
    overflow: hidden;
  }

  .gallery-item img {
    display: block;
    width: 100%;
    transition: all 0.4s;
  }

  .gallery-item img:hover {
    transform: scale(1.1);
  }
`;