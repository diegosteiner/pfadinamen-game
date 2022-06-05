import { css } from '@emotion/react'
import '../styles/globals.css'

const appStyle = css`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ffeb00;

  &>main {
    flex: 1 1;
    align-self: center;
    width: 100%;
  }

  &>header {
  }
}
`

function App({ Component, pageProps }) {
  return (
    <div css={appStyle}>
      <header></header>
      <Component {...pageProps} />
      <footer></footer>
    </div>)
}

export default App
