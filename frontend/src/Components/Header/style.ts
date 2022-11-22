import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--gray-0);
  width: 100%;
  height: 100px;
  border: 8px solid var(--gray-1);
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  @media (min-width: 880px) {
    padding-left: 150px;
    padding-right: 150px;
  }
  @media (min-width: 1100px) {
    padding-left: 300px;
    padding-right: 300px;
  }
  div.box_logo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1 {
      font-style: italic;
      font-weight: 800;
    }

    p {
      span {
        color: var(--purple);
        font-style: italic;
        font-weight: 600;
      }
    }
  }

  div.box_buttons {
    width: 90px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    gap: 20px;

    button {
      border: none;
      background-color: var(--gray-0);
    }
  }
`;
