import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 15px;
  overflow-y: scroll;
  max-height: 600px;
  li {
    border: 2px solid var(--gray-1);
    border-radius: 5px;
    width: 90%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 60px;
    padding: 8px;
    p {
      font-style: italic;
      font-size: 16px;
      span {
        font-weight: 700;
        font-style: normal;
        font-size: 18px;
      }
    }
  }
`;

export const Titulo = styled.h2`
  text-align: center;
  margin: 18px;
`;

export const BoxButtonFilter = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  margin: 18px;
  button {
    border: none;
    background-color: var(--gray-0);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }
`;
