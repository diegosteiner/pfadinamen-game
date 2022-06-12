import { css } from '@emotion/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { names } from '../models/question'
import buttonStyle from '../styles/buttons'

function resolveName(param?: string | string[]): string | undefined {
	if (Array.isArray(param)) param = Array.from(param).at(-1)
	if (!param || !Object.keys(names).includes(param)) return 'Cosinus'

	return names[param]
}

const style = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
		
	h1 {
		font-size: 3em;
		word-break: break-all;
		animation: reveal 3s linear infinite alternate;
		text-align: center;
	}

	@keyframes reveal {
		100% {
			transform: scale(1.25) rotate(4deg)
		}
	}
`


export function Result() {
	const router = useRouter()
	const name = resolveName(router.query.r)

	return (
		<main css={style}>
			<p>Dein Name lautet:</p>
			<h1>{name}</h1>
			<Link href="/"><a css={buttonStyle} className="primary">Nochmals!</a></Link>
		</main>
	)
}

export default Result
