import { css } from "@emotion/react"

const buttonStyle = css`
	font-weight: bold;
	border: none;
	border-radius: 0.25rem;
	line-height: 2.5rem;
	padding: 0.75rem;
	text-align: center;
	font-size: 0.9rem;
	font-family: "Droid Sans", sans-serif;
	width: 100%;
  display: block;
	cursor: pointer;

	&.primary {
		background-color: #e6500f;
	}
`

export default buttonStyle;
