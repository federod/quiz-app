import * as S from "./style";

const NextAndResultSection = (pageNumber, percentage, handleClick) => {
  return pageNumber >= 6 ? (
    <S.Result>Result {percentage()}%</S.Result>
  ) : (
    <S.NextButton onClick={handleClick}>Next</S.NextButton>
  );
};

export default NextAndResultSection;
