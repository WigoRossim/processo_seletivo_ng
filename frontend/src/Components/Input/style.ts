import styled from "styled-components";

export const BoxInput = styled.div`
  height: 90px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;

  label {
    font-family: var(--inter);
    font-weight: 400;
    font-size: 12px;
    line-height: 0px;
    margin-left: 0.3rem;
    color: var(--gray-1);

    @media (min-width: 880px) {
      font-size: 12px;
    }
  }

  input {
    padding: 0px 13px;
    width: 100%;
    height: 39px;
    background: var(--gray-0);
    border: 1px solid var(--gray-3);
    border-radius: 4px;
    transition: 0.3s;
    align-self: center;

    font-family: var(--inter);
    font-weight: 400;
    font-size: 14px;
    line-height: 0px;
    color: var(--gray-1);

    @media (min-width: 880px) {
      font-weight: 500;
      font-size: 16px;
    }

    &::placeholder {
      font-family: var(--inter);
      font-weight: 400;
      font-size: 12px;
      line-height: 21px;
      color: var(--gray-3);

      @media (min-width: 880px) {
        font-size: 14px;
        line-height: 26px;
      }
    }
    &:focus {
      border: 1px solid var(--gray-1);
      &::placeholder {
        color: var(--gray-1);
      }
    }
  }

  span {
    font-family: var(--inter);
    font-weight: 300;
    font-size: 10px;
    color: var(--error);

    @media (min-width: 880px) {
      font-size: 12px;
    }
  }
`;
