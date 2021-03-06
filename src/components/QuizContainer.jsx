import React, { useEffect, useState } from "react";
import PageContainer from "./PageContainer";
import { getData } from "./utils";

const QuizContainer = () => {
  // manage different state
  const [questionsQuiz, setQuestions] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [currentPageQuiz, setCurrentQuiz] = useState({});
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score] = useState([]);
  const [retake, setRetake] = useState(false);

  // for api call

  useEffect(() => {
    fetch(
      "https://quizapi.io/api/v1/questions?apiKey=bVkmih9nBlAAa1wfUB27rzqgIQKnaEWQiojQfPmv&limit=5&multiple_correct_answers=true&difficulty=easy"
    )
      .then((response) => response.json())
      .then((data) =>
        getData(data, setQuestions, setCurrentQuiz, setPageNumber)
      );
  }, [retake]);

  // handeler for next question button
  const handleClick = () => {
    pageNumber <= 5 && setPageNumber(pageNumber + 1);
    if (pageNumber > 0 && pageNumber <= 5) {
      const quiz = questionsQuiz.find((quiz) => quiz.pageNumber === pageNumber);
      setCurrentQuiz(quiz);
    }
  };

  // handler for choosing answers
  const handleSelect = (value, pgNum, dis) => {
    const updatedAnswer = currentPageQuiz?.answers.map((item) => {
      let updatedItem;
      item[0] === value
        ? (updatedItem = { ...item, dis: true })
        : (updatedItem = { ...item });

      return updatedItem;
    });
    const updatedQuiz = { ...currentPageQuiz, answers: updatedAnswer };
    setCurrentQuiz(updatedQuiz);
    const ans = { pageNum: pgNum, answer: value };
    const selctedAns = [...selectedAnswers, ans];
    setSelectedAnswers(selctedAns);
  };

  return (
    <>
      {PageContainer(
        currentPageQuiz,
        pageNumber,
        handleSelect,
        handleClick,
        questionsQuiz,
        selectedAnswers,
        score,
        setRetake,
        retake
      )}
    </>
  );
};
export default QuizContainer;
