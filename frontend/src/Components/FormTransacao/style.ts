import styled from "styled-components";

export const Container = styled.form`
  height: 40vh;
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 20px;
  margin-top: 20px;

  label {
    font-weight: 600;
  }

  button {
    width: 90%;
    max-width: 380px;
  }
`;
