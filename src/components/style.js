import styled from "styled-components";

export const Button = styled.section`
  pointer-event: ${(props) => (props.disabled ? "none" : "auto")};
  border-radius: 3px;
  padding: 0.5rem 0;
  min-width: 18rem;
  min-height: 2rem;
  text-align: center;
  background: ${(props) => (props.disabled ? "palevioletred" : "white")};
  color: ${(props) => (props.disabled ? "white" : "palevioletred")};
  border: 2px solid palevioletred;
  font-size: 1em;
  margin: 1em;
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
`;

export const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: space-evenly;
  width: 40%;
  max-width: 40%;
  align-items: center;
`;

export const H1 = styled.h1`
  width: 90%;
`;

export const QuestionConatiner = styled.div`
  max-width: 40%;
`;

export const MainContainer = styled.div`
  width: 92%;
  margin: 3rem;
  color: palevioletred;
`;

export const NextButton = styled.button`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background: transparent;
  width: 7rem;
  height: 2rem;
  margin-top: 5rem;
}
`;

export const Result = styled.h1`
  height: 200px;
  font-size: 10rem;
  margin-top: -15rem;
`;
