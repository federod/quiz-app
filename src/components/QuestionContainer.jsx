import * as S from "./style";
const QustionContainer = (currentPageQuiz, pageNumber, isMobile) => {
  return (
    <S.QuestionConatiner isMobile={isMobile}>
      {currentPageQuiz?.question && (
        <span>
          Question {pageNumber} / 5<S.H1>{currentPageQuiz?.question}</S.H1>
        </span>
      )}
    </S.QuestionConatiner>
  );
};

export default QustionContainer;
