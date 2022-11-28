import styled from "styled-components";

export const Mealpropstyle = styled.div`
  .meal {
    box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);
    border-radius: 11px;
    overflow: hidden;
    transition: all 0.4s;
  }

  .meal:hover {
    transform: translateY(-1.2rem);
    box-shadow: 0 3.2rem 6.4rem rgba(0, 0, 0, 0.06);
  }

  .meal-content {
    padding: 3.2rem 4.8rem 4.8rem 4.8rem;
  }
`;