import React from "react";

export default function AddQuizForm({ register, id, index }) {
  const addAnswers = () => {
    let answerNumber = 4;
    let answers = [];
    for (let i = 0; i < answerNumber; i++) {
      answers.push(
        <div className="answer-collection" key={i}>
          <input type="text" {...register(`contents[${index}].answers[${i}].answer`)} />
          <input type="text" {...register(`contents[${index}].answers[${i}].link`)} />
          <input type="text" {...register(`contents[${index}].answers[${i}].description`)} />
          <input type="radio" {...register(`contents[${index}].answers[${index}].is_correct`)} id={`contents[${index}].answers[${i}].is_correct`} value={"true"} />
        </div>
      );
    }
    return answers;
  };
  return (
    <div key={id}>
      <input type="text" {...register(`contents[${index}.question`)} />
      <input type="text" {...register(`contents[${index}.description`)} />
      <input type="text" {...register(`contents[${index}.link`)} />
      {addAnswers()}
    </div>
  );
}
