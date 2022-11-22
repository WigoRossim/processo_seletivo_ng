import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 25px;
    font-weight: 700;
    color: var(--gray-0);

    @media (min-width: 880px) {
      font-size: 42px;
    }
  }
`;
