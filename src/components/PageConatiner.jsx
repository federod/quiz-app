import * as S from "./style";
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
  const percentage = () => {
    const result = calculateResult(selectedAnswers, score, questionsQuiz);
    let counter = 0;
    result.map((item) => {
      if (item.status === "pass") {
        counter++;
      }
    });
    return (100 * counter) / 5;
  };

  return (
    <S.MainContainer>
      <S.Section>
        {QustionContainer(currentPageQuiz, pageNumber)}
        {AnswerSection(currentPageQuiz, pageNumber, handleSelect)}
      </S.Section>
      {NextAndResultSection(pageNumber, percentage, handleClick)}
    </S.MainContainer>
  );
};
export default PageConatiner;
