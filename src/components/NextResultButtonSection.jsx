import * as S from "./style";

const NextAndResultSection = (
  pageNumber,
  percentage,
  handleClick,
  isMobile
) => {
  return pageNumber >= 6 ? (
    <S.Result isMobile={isMobile}>Result {percentage()}%</S.Result>
  ) : (
    <S.NextButton onClick={handleClick}>Next</S.NextButton>
  );
};

export default NextAndResultSection;
