export const getUniqueListBy = (arr, key) => {
  return [...new Map(arr.map((item) => [item[key], item])).values()];
};

// calculate multiple choice result here
export const calculateResult = (selectedAnswers, score, questionsQuiz) => {
  let scoreWithPage;
  let abc;
  let selectedAns = [...selectedAnswers];
  let scores = [...score];

  for (let j = 0; j < questionsQuiz?.length; j++) {
    for (let i = 0; i < selectedAns?.length; i++) {
      if (selectedAns[i]?.pageNum - 1 === questionsQuiz[j]?.pageNumber) {
        if (selectedAns[i]?.answer === questionsQuiz[j]?.correctAnswer) {
          abc = { pageNum: questionsQuiz[j]?.pageNumber, status: "pass" };
          scoreWithPage = [...scores, abc];
          scores = scoreWithPage;
        } else {
          abc = { pageNum: questionsQuiz[j]?.pageNumber, status: "fail" };
          scoreWithPage = [...scores, abc];
          scores = scoreWithPage;
        }
      } else {
        let updateSelectedAns = selectedAns?.filter(
          (item) => item.pageNum !== questionsQuiz[j]?.pageNumber + 1
        );
        selectedAns = [...updateSelectedAns];

        break;
      }
    }
  }

  const unique = getUniqueListBy(scores, "pageNum");

  return unique;
};

// transform api data into usable form
export const getData = (
  questions,
  setQuestions,
  setCurrentQuiz,
  setPageNumber
) => {
  const quiz = questions?.map((item, index) => {
    const question = item.question;
    const answers = Object.entries(item.answers);
    const abc = answers.map((val) => ({ ...val, dis: false }));
    const correctAnswer = item.correct_answer;
    const correctAnswers = item.correct_answers;
    const pageNumber = index;
    return {
      question,
      answers: abc,
      correctAnswer,
      correctAnswers,
      pageNumber,
    };
  });
  setQuestions(quiz);
  setCurrentQuiz(quiz[0]);
  setPageNumber(1);
};
