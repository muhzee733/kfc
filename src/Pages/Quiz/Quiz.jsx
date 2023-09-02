import React, { useState } from "react";
import Questions from "../../QK.json";

let checkAnswer = (question, option, select) => {
  let found = select.find(
    (item) =>
      item.new_Question_Complete.id === question.id &&
      item.new_Question_Complete.answerIndex === option
  );
  if (found) {
    return "list-group-item active";
  } else {
    return "list-group-item";
  }
};

export default function Quiz() {
  let [select, setSelect] = useState([]);

  const handleSelected = (option, question) => {
    let addQuestions = {
      new_Question_Complete: question,
      selectedQuestion: option,
    };
    setSelect([...select, addQuestions]);
  };
  console.log(select);

  return (
    <div className="container pt-5">
      <h1>Questions</h1>
      {Questions.map((question, index) => {
        return (
          <div key={index}>
            <h3>{question.statement}</h3>
            <ul className="list-group">
              {question.options.map((option, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => handleSelected(option, question)}
                    className={checkAnswer(question.id, option, select)}
                  >
                    {index + 1}. {option}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
