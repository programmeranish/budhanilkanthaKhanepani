import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import AddQuizForm from "./AddQuizForm";

export default function QuizCollection() {
  const { control, register, handleSubmit } = useForm({
    defaultValues: {
      contents: [
        {
          question: "",
          description: "",
          link: "",
          answers: [
            {
              answer: "",
              description: "",
              link: "",
              is_correct: false,
            },
            {
              answer: "",
              description: "",
              link: "",
              is_correct: false,
            },
            {
              answer: "",
              description: "",
              link: "",
              is_correct: false,
            },
            {
              answer: "",
              description: "",
              link: "",
              is_correct: false,
            },
          ],
        },
      ],
    },
  });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control,
    name: "contents",
  });

  const renderQuestions = () => {
    return fields.map((question, index) => {
      return <AddQuizForm key={question.id} id={question.id} register={register} index={index} />;
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(console.log)}>
        {renderQuestions()}
        <button
          onClick={() =>
            append({
              question: "",
              description: "",
              link: "",
              answers: [
                {
                  answer: "",
                  description: "",
                  link: "",
                  is_correct: false,
                },
                {
                  answer: "",
                  description: "",
                  link: "",
                  is_correct: false,
                },
                {
                  answer: "",
                  description: "",
                  link: "",
                  is_correct: false,
                },
                {
                  answer: "",
                  description: "",
                  link: "",
                  is_correct: false,
                },
              ],
            })
          }
        >
          add new question
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
