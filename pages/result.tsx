import Link from 'next/link'
import { useRouter } from 'next/router'
import { names } from '../models/question'
import buttonStyle from '../styles/buttons'

function resolveName(param?: string | string[]): string | undefined {
	if (Array.isArray(param)) param = Array.from(param).at(-1)
	if (!param || !Object.keys(names).includes(param)) return

	return names[param]
}


export function Result() {
	const router = useRouter()
	const name = resolveName(router.query.r)

	return (
		<main>
			<p>Dein Name lautet:</p>
			<h1>{name}</h1>
			<Link href="/questionnaire"><a css={buttonStyle} className="primary">Nochmals!</a></Link>
		</main>
	)
}

export default Result
