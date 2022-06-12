import { css } from '@emotion/react';
import Head from 'next/head'
import Link from 'next/link';
import buttonStyle from '../styles/buttons';


const style = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export default function Home() {

  return (
    <>
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main css={style}>
        <Link href="/questionnaire"><a css={buttonStyle} className="primary">Pfadiname finden!</a></Link>
      </main>
    </>
  )
}
