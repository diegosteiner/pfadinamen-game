import { css } from '@emotion/react';
import Head from 'next/head'
import Link from 'next/link';
import buttonStyle from '../styles/buttons';


const style = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
	padding: 1rem;

  a {
    font-size: 2em;
    padding: 1em;
  }

  p {
    line-height: 1.65em;
  }

`

export default function Home() {

  return (
    <>
      <Head>
        <title>Pfadinamen Generator</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main css={style}>
        <h1>Pfadinamen</h1>
        <p>
          In der Schweiz gibt es die Tradition der Pfadinamen. Zumindest in der Deutschschweiz sind
          Pfadinamen eine wichtige und bedeutungsvolle Besonderheit der Pfadibewegung.
          Trotzdem wissen wir nicht genau, woher diese Tradition ursprünglich stammt. Der
          Pfadiname soll positive Eigenschaften und Fähigkeiten hervorheben.
        </p>
        <p>
          Du hast noch keinen Pfadinamen? Möchtest du für heute einen? Wir stellen dir sieben
          Fragen, weil wir dich ja noch nicht kennen. Mit den Antworten gibst du uns deine
          Vorlieben und Eigenschaften bekannt. Zum Beispiel die Frage: Schlangenbrot oder
          Schoggibanane? Sie zeigt uns, ob du lieber Salziges oder Süsses isst. So finden wir
          gemeinsam den passenden Pfadinamen für dich heraus!
        </p>
        <Link href="/questionnaire" css={buttonStyle} className="primary">Pfadiname finden!</Link>
      </main>
    </>
  )
}
