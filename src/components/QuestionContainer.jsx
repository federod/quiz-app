import * as S from "./style";
const QustionContainer = (currentPageQuiz, pageNumber) => {
  return (
    <S.QuestionConatiner>
      {currentPageQuiz?.question && (
        <span>
          Question {pageNumber} / 5<S.H1>{currentPageQuiz?.question}</S.H1>
        </span>
      )}
    </S.QuestionConatiner>
  );
};

export default QustionContainer;
