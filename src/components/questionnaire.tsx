import Head from "next/head";
import { useState } from "react";
import { Question, QuestionAnswer, questions as orderedQuestions } from "../data";
import { css } from '@emotion/react'
import buttonStyle from "../styles/buttons";
import Link from "next/link";

const navStyle = css`
	display: grid;
	width: 100%;
	grid-template-columns: 1fr 1fr;
	grid-gap: 0.5rem;
	padding: 0.5rem;

	button {
		font-size: 0.9rem;
		font-weight: normal;
		background-color: transparent;
	}
`

const activeAnswerStyle = css`
	background-color: #e6500f;
`

const containerStyle = css`
	display: grid;
	grid-template-rows: 4fr auto 1fr 1fr auto;
	flex: 1 1;
	padding: 1rem;
	grid-gap: 1rem;
	max-width: 480px;

	h2 {
		align-self: center;
		line-height: 1.5em;
		font-size: 1.8em;
	}
`


function getResultFromAnswers(answers: QuestionAnswer[]): number {
	return Array.from(answers).reduce((sum, answer) => {
		if (!answer) return sum;
		return sum + (answer.weight * answer.value)
	}, 0)
}

export default function Questionnaire() {
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
		<main css={containerStyle}>
			<Head>
				<title>Pfadinamen Generator</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>

			<h2>{currentQuestion.text}</h2>
			<small>{`Frage ${index + 1} / ${questions.length}`}</small>
			{currentQuestion.answers.map((answer) => {
				const selected = Array.from(answers).includes(answer)

				return <button
					key={`${index}-${answer.value}`}
					css={[buttonStyle, selected && activeAnswerStyle]}
					onClick={() => setAnswer(index, answer)}
				>
					{answer.text}
				</button>
			}
			)}
			<nav css={navStyle}>
				<button css={buttonStyle} className="transparent" onClick={prevQuestion}>‹ Zurück</button>
				{(() => {
					if (complete) return <Link href={`/result?r=${getResultFromAnswers(answers)}`} className="transparent" css={buttonStyle}>zur Auswertung ›</Link>

					return <button css={buttonStyle} className="transparent" onClick={nextQuestion}>Weiter ›</button>
				})()}
			</nav>
		</main >
	);
}
