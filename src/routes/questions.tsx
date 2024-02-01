import { useState } from "react";
import { Question, QuestionAnswer, questions as orderedQuestions } from "../data";
import { Link, createFileRoute } from "@tanstack/react-router";
import clsx from "clsx";

export const Route = createFileRoute('/questions')({
  component: Questionnaire,
})



function getResultFromAnswers(answers: QuestionAnswer[]): number {
	return Array.from(answers).reduce((sum, answer) => {
		if (!answer) return sum;
		return sum + (answer.weight * answer.value)
	}, 0)
}

function Questionnaire() {
	const [index, setIndex] = useState<number>(0);
	const [answers, setAnswers] = useState<QuestionAnswer[]>([]);
	const [questions] = useState<Question[]>(() => orderedQuestions.sort(() => Math.random() - 0.5));
	const currentQuestion = questions[index];
	const complete = answers.filter(answer => answer).length == questions.length
	const prevQuestion = () => setIndex(prev => prev > 0 ? prev - 1 : 0);
	const nextQuestion = () => setIndex(prev => prev < questions.length - 1 ? prev + 1 : 0);
	const setAnswer = (index: number, answer: QuestionAnswer) => {
		setAnswers(prev => {
			const answers = Array.from(prev)
			answers[index] = answer

			return answers;
		});
	};

	return (
		<div className="h-full flex flex-col gap-4">
			<h2 className="font-bold text-2xl my-auto">{currentQuestion.text}</h2>
			<small>{`Frage ${index + 1} / ${questions.length}`}</small>
			{currentQuestion.answers.map((answer) => {
				const selected = Array.from(answers).includes(answer)

				return <button
					key={`${index}-${answer.value}`}
					className={clsx( "h-1/6 rounded font-bold text-lg shadow", selected ? "bg-red" : "bg-slate-100")}
					onClick={() => setAnswer(index, answer)}
				>
					{answer.text}
				</button>
			}
			)}

			<nav className="w-full grid grid-cols-2 gap-2 py-10">
				<button className="p-4" onClick={prevQuestion}>‹ Zurück</button>
				{(() => {
					if (complete) return <Link to="/result" search={({ r: getResultFromAnswers(answers) })} className="p-4 font-bold text-center">zur Auswertung ›</Link>

					return <button className="p-4 text-center" onClick={nextQuestion}>Weiter ›</button>
				})()}
			</nav>
		</div>
	);
}
