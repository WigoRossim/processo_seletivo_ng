import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  width: 85%;
  max-width: 380px;
  height: 60vh;

  background-color: var(--gray-0);
  border-radius: 8px;

  @media (min-width: 880px) {
    justify-content: flex-start;
    margin-top: 1rem;
  }

  button.button_close {
    align-self: flex-end;
    margin-right: 0.8rem;
    margin-top: 0.8rem;
    border-radius: 50%;
    padding: 3px;
    text-align: center;
    border: 1px solid var(--gray-1);
    background-color: var(--gray-0);
    -webkit-box-shadow: 0px 10px 13px -7px #000000,
      5px 5px 15px 5px rgba(0, 0, 0, 0);
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
    @media (min-width: 880px) {
      margin-top: 1rem;
    }
  }

  form {
    height: 40vh;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    @media (min-width: 880px) {
      height: 40vh;

      button {
        align-self: center;
        max-width: 300px;
      }
    }
  }

  p {
    font-size: 13px;
    position: absolute;
    bottom: 42px;

    @media (min-width: 880px) {
      bottom: 35px;
    }

    span {
      cursor: pointer;
      font-size: 15px;
      font-style: italic;
      color: var(--error);
    }
  }
`;
