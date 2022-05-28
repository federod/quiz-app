import * as S from "./style";

const AnswerSection = (currentPageQuiz, pageNumber, handleSelect) => {
  return (
    <S.ButtonSection>
      {currentPageQuiz?.answers?.map((ans, index) => {
        return (
          ans[1] !== null && (
            <S.Button
              key={index}
              id={index}
              disabled={ans["dis"]}
              onClick={() => handleSelect(ans[0], pageNumber, ans["dis"])}
            >
              {ans[1]}
            </S.Button>
          )
        );
      })}
    </S.ButtonSection>
  );
};

export default AnswerSection;
