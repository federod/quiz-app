import styled from "styled-components";

export const Button = styled.section`
  pointer-event: ${(props) => (props.disabled ? "none" : "auto")};
  border-radius: 3px;
  padding: 0.5rem 0;
  width: 18rem;
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
  flex-direction: ${(props) => (props.isMobile ? "column" : "row")};
  justify-content: space-evenly;
`;

export const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: space-evenly;
  align-items: center;
`;

export const H1 = styled.h1`

`;

export const QuestionConatiner = styled.div`
  max-width: ${(props) => (props.isMobile ? "100%" : "40%")};
`;

export const MainContainer = styled.div`
  margin: ${(props) => (props.isMobile ? "1rem 0rem" : "3rem")};
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
  font-size: ${(props) => (props.isMobile ? "5rem" : "10rem")};
  margin-top: -15rem;
`;
