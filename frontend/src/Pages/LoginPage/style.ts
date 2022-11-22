import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: var(--gray-1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  @media (min-width: 880px) {
    width: 60%;
    flex-direction: column-reverse;
    align-items: center;
    button {
      align-self: flex-end;
    }
  }
  div.box_logo {
    width: 90%;
    height: 300px;
    display: flex;
    flex-direction: column;
    @media (min-width: 880px) {
      width: 80%;
      align-items: flex-start;
    }
    h1 {
      color: var(--gray-0);
      max-width: 300px;
      font-size: 3rem;
      font-style: italic;
      padding-bottom: 1rem;
      display: flex;
      flex-direction: column;
      @media (min-width: 880px) {
        max-width: 500px;
        font-size: 5rem;
        margin-right: -60px;
      }
      &::after {
        content: "";
        width: 50%;
        height: 3px;
        align-self: flex-end;
        margin-top: 0.3rem;
        background-color: var(--gray-0);
        @media (min-width: 880px) {
          margin-right: -60px;
        }
      }
    }
    p {
      color: var(--gray-0);
      font-size: 1.1rem;
      text-align: center;
      margin-top: 1.5rem;
      @media (min-width: 880px) {
        align-self: flex-end;
        margin-right: 3.5rem;
      }
    }
  }
`;
