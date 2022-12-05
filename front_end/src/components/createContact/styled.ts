import styled from "styled-components";

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;

  margin: 0 auto;

  & > button {
    width: 6rem;
    padding: 0.2rem;
    border-radius: 0.5rem;
    cursor: pointer;
  }

  & > form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 12rem;

    & > input {
      border: none;
      border-radius: 0.6rem;
      padding: 0.2rem;
    }

    & > label {
      font-weight: 500;
    }

    & > button {
      padding: 0.3rem;
      width: 8rem;
      margin: 0 auto;
      border: none;
      font-weight: bold;
      border-radius: 0.5rem;
      cursor: pointer;
    }
  }
`;
