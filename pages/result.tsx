import { css } from '@emotion/react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormEvent, useRef, useState } from 'react'
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

	input {
		width: 100%;
		background-color: white;
		border: 1px solid gray;
		font-size: 1.5rem;
		border-radius: 0.25rem;
		padding: 0.5em;
		text-align: center;
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}

	@keyframes reveal {
		100% {
			transform: scale(1.2) rotate(3deg)
		}
	}
`

const secondaryButtonStyle = css`
	font-weight: normal;
`

export function Result() {
	const router = useRouter()
	const nameNr = router.query.r
	const name = resolveName(nameNr)
	const nameRef = useRef<HTMLInputElement>(null)
	const [maySubmit, setMaySubmit] = useState<boolean>(!!nameNr && !!name)
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const realname = nameRef.current?.value

		if (!realname || !maySubmit) return

		fetch("https://n8n.cloud.heimv.ch/webhook/74ab4ad1-7510-43c6-ba33-c53adb9a5d76", {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ realname, name, nameNr })
		}).then(() => setMaySubmit(false))
	}

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
				<form onSubmit={handleSubmit}>
					<p>Du kannst deine Taufurkunde im <strong>Kaleidoskop</strong> auf dem BuLavard abholen.
						{maySubmit && <span>Bitte nenne uns dafür: </span>}
					</p>
					{maySubmit && <>
						<input name="realname" ref={nameRef} placeholder="Dein Vor- und Nachname" />
						<button type='submit' css={buttonStyle} className="primary">Taufurkunde abholen!</button>
					</>}
					<Link href="/"><a css={[buttonStyle, secondaryButtonStyle]} className="transparent">Nochmals!</a></Link>
				</form>
			</main>
		</>
	)
}

export default Result
