import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  div.box_accounts {
    margin: 20px;
    height: 70px;
    h2 {
      color: var(--gray-0);
      margin-bottom: 5px;
    }
    span.hashed {
      color: var(--gray-0);
      font-size: 3.8rem;
      font-weight: 700;
      line-height: 0.5px;
    }
    span.account {
      color: var(--gray-0);
    }
  }

  div.box_sessions {
    background-color: var(--gray-0);
    border: 8px solid var(--gray-1);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    div.box_buttons_nav {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
      padding: 12px;
      button {
        border: none;
        background-color: var(--gray-0);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3px;
        cursor: pointer;
      }
    }
    form {
      align-self: center;
    }
  }
`;
