import { css } from '@emotion/react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { names } from '../data'
import buttonStyle from '../styles/buttons'

function resolveName(param?: string | string[]): string | undefined {
	if (Array.isArray(param)) param = Array.from(param).at(-1)
	if (!param || !Object.keys(names).includes(param)) return 'vermutlich Cosinus'

	return names[param]
}

const style = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
	padding: 1rem;
		
	h1 {
		font-size: 3em;
		word-break: break-word;
		animation: reveal 3s linear infinite alternate;
		text-align: center;
	}

	.links {
		font-size: 0.8rem;
	}

	@keyframes reveal {
		100% {
			transform: scale(1.2) rotate(3deg)
		}
	}
`


export function Result() {
	const router = useRouter()
	const name = resolveName(router.query.r)

	return (
		<>
			<Head>
				<title>Pfadinamen Generator</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<main css={style}>
				<p>Dein Name lautet:</p>
				<h1>{name}</h1>
				<div>
					<Link href="/"><a css={buttonStyle} className="primary">Taufurkunde abholen!</a></Link>
					<Link href="/"><a css={buttonStyle} className="transparent">Nochmals!</a></Link>
				</div>
				<div className='links'>
					<ul>
						<li><a href="https://www.mova.ch/">mova Hauptseite</a></li>
						<li><a href="https://pfadinamen.ch/">Pfadinamen-Verzeichnis</a></li>
						<li><a href="https://pfadinamen.dahätsdi.ch/">AI Pfadinamen-Generator</a></li>
					</ul>
				</div>
			</main>
		</>
	)
}

export default Result
