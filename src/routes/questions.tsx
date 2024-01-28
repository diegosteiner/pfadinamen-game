import { useState } from "react";
import { Question, QuestionAnswer, questions as orderedQuestions } from "../data";
import styles from './questions.module.css'
import appStyles from '../App.module.css'
import { createFileRoute } from "@tanstack/react-router";
import { clsx } from 'clsx';

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
		<main className={styles.conainer}>
			<h2>{currentQuestion.text}</h2>
			<small>{`Frage ${index + 1} / ${questions.length}`}</small>
			{currentQuestion.answers.map((answer) => {
				// const selected = Array.from(answers).includes(answer)

				return <button
					key={`${index}-${answer.value}`}
					className={styles.activeAnswer}
					onClick={() => setAnswer(index, answer)}
				>
					{answer.text}
				</button>
			}
			)}
			<nav className={styles.nav}>
				<button className={clsx([appStyles.button, "transparent"])} onClick={prevQuestion}>‹ Zurück</button>
				{(() => {
					if (complete) return <a href={`/result?r=${getResultFromAnswers(answers)}`} className={clsx(appStyles.button, "transparent")}>zur Auswertung ›</a>

					return <button className={clsx(appStyles.button, { transparent: true })} onClick={nextQuestion}>Weiter ›</button>
				})()}
			</nav>
		</main >
	);
}
