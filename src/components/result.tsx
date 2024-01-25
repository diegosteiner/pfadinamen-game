import { css } from '@emotion/react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormEvent, useRef, useState } from 'react'
import { names } from '../data'
import buttonStyle from '../styles/buttons'

enum SubmitState {
	Invalid,
	Valid,
	Submitting,
	Submitted
}

function resolveName(param?: string | string[]): string | undefined {
	if (Array.isArray(param)) param = Array.from(param).at(-1)
	if (!param || !Object.keys(names).includes(param)) return 'Haxxor'

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
		margin-bottom: 0.5rem;
	}

	p {
		line-height: 1.5em;
	}

	[disabled] {
		opacity: 0.5;
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
	const firstnameRef = useRef<HTMLInputElement>(null)
	const lastnameRef = useRef<HTMLInputElement>(null)
	const [submitState, setSubmitState] = useState<SubmitState>(SubmitState.Invalid)
	const validate = () =>
		setSubmitState((firstnameRef.current?.value?.length ?? 0) > 1 && (lastnameRef.current?.value?.length ?? 0) > 1 ? SubmitState.Valid : SubmitState.Invalid)
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (submitState != SubmitState.Valid) return

		const firstname = firstnameRef.current?.value
		const lastname = lastnameRef.current?.value

		setSubmitState(SubmitState.Submitting)

		fetch("https://n8n.cloud.heimv.ch/webhook/74ab4ad1-7510-43c6-ba33-c53adb9a5d76", {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ firstname, lastname, nameNr, name })
		}).then(() => setSubmitState(SubmitState.Submitted)).catch(() => setSubmitState(SubmitState.Invalid))
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
				<p>🥳 Wir wünschen dir viele spannende Pfadiabenteuer.</p>
				<Link href="/" css={[buttonStyle, secondaryButtonStyle]} className="transparent">Nochmals!</Link>
			</main>
		</>
	)
}

export default Result
