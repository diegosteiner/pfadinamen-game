// import { useState } from 'react'
import css from './Home.module.css'

function Home() {
  // const [count, setCount] = useState(0)

  return (
      <main className={css.home}>
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
        <a href="/questionnaire" className="button primary">Pfadiname finden!</a>
      </main>
  )
}

export default Home
