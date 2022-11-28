import styled from "styled-components";

export const Formstyles = styled.div`
  .section-cta {
    /* top / right / bottom / left */
    /* padding: 9.6rem 0 12.8rem 0; */

    /* top / horizontal / left */
    padding: 4.8rem 0 12.8rem;
  }

  .cta {
    display: grid;
    grid-template-columns: 1fr;
    /* background-color: #e67e22; */
    box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.15);
    border-radius: 11px;

    background-image: linear-gradient(to right bottom, #eb984e, #e67e22);
    overflow: hidden;
  }

  .cta-text-box {
    padding: 4.8rem 6.4rem 6.4rem 6.4rem;
    color: #45260a;
  }

  .cta .heading-secondary {
    /* color: #45260a; */
    color: inherit;
    margin-bottom: 3.2rem;
  }

  .cta-text {
    font-size: 1.8rem;
    line-height: 1.8;
    margin-bottom: 4.8rem;
  }

  .cta-img-box {
    background-image: linear-gradient(
        to right bottom,
        rgba(235, 151, 78, 0.35),
        rgba(230, 125, 34, 0.35)
      ),
      url("../img/eating.jpg");
    background-size: cover;
    background-position: center;
  }

  .cta-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 3.2rem;
    row-gap: 2.4rem;
  }

  .cta-form label {
    display: block;
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 1.2rem;
  }

  .cta-form input,
  .cta-form select {
    width: 100%;
    padding: 1.2rem;
    font-size: 1.8rem;
    font-family: inherit;
    color: inherit;
    border: none;
    background-color: #fdf2e9;
    border-radius: 9px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  .cta-form input::placeholder {
    color: #aaa;
  }

  .cta *:focus {
    outline: none;
    box-shadow: 0 0 0 0.8rem rgba(253, 242, 233, 0.5);
  }
`;