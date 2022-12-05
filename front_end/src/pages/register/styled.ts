import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  width: 16rem;
  padding: 1rem;
  border-radius: 1rem;
  background-color: gray;
  color: black;

  & > button {
    padding: 0.3rem;
    width: 8rem;
    margin: 0 auto;
    border: none;
    font-weight: bold;
    border-radius: 0.5rem;
    cursor: pointer;
  }

  & > p,
  h1 {
    margin: 0 auto;
  }
`;
