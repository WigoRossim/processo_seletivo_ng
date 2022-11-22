import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  margin: 0 auto;
  background-color: var(--gray-1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  @media (min-width: 880px) {
    width: 60%;
    align-items: center;
  }
  button.return_login {
    align-self: flex-end;
    margin-top: 1rem;
    margin-right: 1rem;
    border: 2px solid transparent;
    background-color: var(--gray-1);
    color: var(--gray-0);
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      border-bottom: 2px solid var(--gray-0);
      transition: 0.5s;
    }
  }
  h1 {
    color: var(--gray-0);
    font-size: 2.5rem;
    font-style: italic;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    @media (min-width: 880px) {
      font-size: 4rem;
      margin-bottom: 1rem;
    }
    &::after {
      content: "";
      width: 50%;
      height: 3px;
      align-self: flex-end;
      margin-top: 0.3rem;
      background-color: var(--gray-0);
      margin-right: -30px;
      @media (min-width: 880px) {
        margin-right: -60px;
      }
    }
  }
  form {
    width: 90%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    h2 {
      color: var(--gray-0);
      font-size: 1.5rem;
      padding-bottom: 0.5rem;
    }
    label {
      color: var(--gray-0);
    }
    input {
      background-color: var(--gray-1);
      border: 1px solid var(--gray-0);
      color: var(--gray-0);
      &:focus {
        background-color: var(--gray-0);
        color: var(--gray-1);

        &::placeholder {
          color: var(--gray-1);
        }
      }
    }
    button {
      margin-bottom: 2rem;
      @media (min-width: 880px) {
        max-width: 300px;
      }
    }
  }
`;
