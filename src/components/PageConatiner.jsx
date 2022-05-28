import * as S from "./style";
import React, { useState, useEffect } from "react";
import QustionContainer from "./QuestionContainer";
import AnswerSection from "./AnswerSection";
import NextAndResultSection from "./NextResultButtonSection";
import { calculateResult } from "./utils";

const PageConatiner = (
  currentPageQuiz,
  pageNumber,
  handleSelect,
  handleClick,
  questionsQuiz,
  selectedAnswers,
  score
) => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange =()=> {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  const isMobile = width < 720;
  
  const percentage = () => {
    const result = calculateResult(selectedAnswers, score, questionsQuiz);
    let counter = 0;
    result.map((item) => {
      if (item.status === "pass") {
        counter++;
      }
      return counter;
    });
    return (100 * counter) / 5;
  };

  return (
    <S.MainContainer isMobile={isMobile}>
      <S.Section isMobile={isMobile}>
        {QustionContainer(currentPageQuiz, pageNumber, isMobile)}
        {AnswerSection(currentPageQuiz, pageNumber, handleSelect)}
      </S.Section>
      {NextAndResultSection(pageNumber, percentage, handleClick, isMobile)}
    </S.MainContainer>
  );
};
export default PageConatiner;
