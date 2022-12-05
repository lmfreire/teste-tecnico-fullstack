import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 80%;

  .Welcome-and-edit {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    & > div {
      margin: 0 auto;
    }
  }

  .Contacts {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background-color: gray;
    color: black;
    cursor: pointer;

    button {
      color: black;
      border-radius: 0.5rem;
    }

    li {
      list-style-type: none;
    }

    @media (max-width: 700px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .Infos-Emails,
  .Infos-Phones {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .MuiButtonBase-root {
    display: flex;

    margin: 0 auto;
  }
`;

export const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
