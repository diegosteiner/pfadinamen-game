import { useRouter } from 'next/router'
import { names } from '../models/question'

const Result = () => {
	const router = useRouter()
	const { r } = router.query
	const name = names[parseInt(r as string) + 1]

	return (
		<main>
			<p>Dein Name lautet:</p>
			<h1>{name}</h1>
		</main>
	)
}

export default Result
