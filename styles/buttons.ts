import { css } from "@emotion/react"

const buttonStyle = css`
	font-weight: bold;
	border: none;
	border-radius: 0.25rem;
	line-height: 2.5rem;
	padding: 0.75rem;
	text-align: center;
	font-size: 1.2rem;
	font-family: "Droid Sans", sans-serif;
	width: 100%;
  display: block;
	cursor: pointer;
	background-color: rgb(233, 233, 237);

	&:hover {
		opacity: 0.9;
	}

	&.primary {
		background-color: #e6500f;
	}

	&.transparent {
		background-color: transparent;
	}
`

export default buttonStyle;
