import { names } from '../data'
import { createFileRoute } from '@tanstack/react-router'
// import buttonStyle from '../styles/buttons'

export const Route = createFileRoute('/result')({
  component: Result,
})

function resolveName(param?: string | string[]): string | undefined {
	if (Array.isArray(param)) param = Array.from(param).at(-1)
	if (!param || !Object.keys(names).includes(param)) return 'Haxxor'

	return names[param]
}

// const style = css`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
// 	padding: 1rem;
		
// 	h1 {
// 		font-size: 3em;
// 		word-break: break-word;
// 		animation: reveal 3s linear infinite alternate;
// 		text-align: center;
// 	}

// 	input {
// 		width: 100%;
// 		background-color: white;
// 		border: 1px solid gray;
// 		font-size: 1.5rem;
// 		border-radius: 0.25rem;
// 		padding: 0.5em;
// 		text-align: center;
// 		margin-bottom: 0.5rem;
// 	}

// 	p {
// 		line-height: 1.5em;
// 	}

// 	[disabled] {
// 		opacity: 0.5;
// 	}

// 	@keyframes reveal {
// 		100% {
// 			transform: scale(1.2) rotate(3deg)
// 		}
// 	}
// `

// const secondaryButtonStyle = css`
// 	font-weight: normal;
// `

export function Result() {
	const nameNr = "11"
	const name = resolveName(nameNr)

	return (
		<>
			<main>
				<p>Dein Name lautet:</p>
				<h1>{name}</h1>
				<p>🥳 Wir wünschen dir viele spannende Pfadiabenteuer.</p>
				<a href="/" className="transparent">Nochmals!</a>
			</main>
		</>
	)
}
