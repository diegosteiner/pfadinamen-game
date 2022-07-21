import { css } from '@emotion/react'
import '../styles/globals.css'

const appStyle = css`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ffeb00;
  overflow: hidden;

  &>main {
    flex: 1 1;
    align-self: center;
    width: 100%;
    max-width: 480px;
  }

  &>header {
    min-height: 2rem;
  }

  &>footer {
    min-height: 2rem;
    font-size: 0.5rem;
    display: flex;
    justify-content: center;

    &>* {
      padding: 0.25rem;
    }
  }
}
`

function App({ Component, pageProps }) {
  return (
    <div css={appStyle}>
      <header></header>
      <Component {...pageProps} />
      <footer>
        <a href="https://pfadinamen.ch/">Pfadinamen-Verzeichnis</a>
        <a href="https://pfadinamen.dahätsdi.ch/">AI Pfadinamen-Generator</a>
      </footer>
    </div>)
}

export default App
