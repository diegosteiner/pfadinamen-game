import Head from 'next/head'
import Link from 'next/link';


export default function Home() {

  return (
    <>
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main>
        <Link href='/questionnaire'>Start</Link>
      </main>
    </>
  )
}
