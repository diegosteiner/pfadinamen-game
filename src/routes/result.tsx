import { names } from '../data'
import { Link, createFileRoute } from '@tanstack/react-router'
// import buttonStyle from '../styles/buttons'

export const Route = createFileRoute('/result')({
	validateSearch: (search: Record<string, unknown>): { r: number } => ({ r: Number(search?.r)}),
  component: Result,
})

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
	const { r: nameIndex } = Route.useSearch() 
	const name = names[nameIndex] || 'Häcker!'

	return (
			<div className='flex flex-col h-full justify-around'>
				<p>Dein Name lautet:</p>
				<h1 className='text-center animate-pulse text-5xl font-bold p-10'>{name}</h1>
				<p className='text-center py-4'>🥳 Wir wünschen dir viele spannende Pfadiabenteuer.</p>
				<Link to="/questions" className="bg-red font-lg rounded shadow p-4 text-center">Nochmals!</Link>
			</div>
	)
}
