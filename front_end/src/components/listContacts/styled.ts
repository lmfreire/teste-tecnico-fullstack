import styled from "styled-components";

export const StyledContact = styled.div`
  display: flex;
  background-color: #2b3a55;

  .card-contact {
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 1rem;
    width: 100%;
  }

  .card {
    width: 20rem;
    padding: 1rem;
    border: 0.2rem black solid;
    border-radius: 0.5rem;
  }

  li {
    list-style-type: none;
  }

  button {
    padding: 0.3rem;
    width: 5rem;
    margin: 0 auto;
    border: none;
    font-weight: bold;
    border-radius: 0.5rem;
    cursor: pointer;
    color: black;
  }

  input {
    border: none;
    border-radius: 0.6rem;
    padding: 0.2rem;
    margin: 0.5rem;
  }
`;
