import * as S from "./style";

const NextAndResultSection = (
  pageNumber,
  percentage,
  handleClick,
  isMobile,
  setRetake,
  retake
) => {
  const RetakehandleClick = () => {
    setRetake(!retake);
  };
  return pageNumber >= 6 ? (
    <>
      <S.Result isMobile={isMobile}>Result {percentage()}%</S.Result>
      <S.NextButton onClick={RetakehandleClick}>
        {percentage() < 80 ? "Retake" : "Take Again"}
      </S.NextButton>
    </>
  ) : (
    <S.NextButton onClick={handleClick}>Next</S.NextButton>
  );
};

export default NextAndResultSection;
