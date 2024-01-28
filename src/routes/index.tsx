import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className='flex flex-col h-full'>
      <div>
        <h1 className='my-20 text-4xl font-bold'>Pfadinamen</h1>
        <p className='mb-10'>
          In der Schweiz gibt es die Tradition der Pfadinamen. Zumindest in der Deutschschweiz sind
          Pfadinamen eine wichtige und bedeutungsvolle Besonderheit der Pfadibewegung.
          Trotzdem wissen wir nicht genau, woher diese Tradition ursprünglich stammt. Der
          Pfadiname soll positive Eigenschaften und Fähigkeiten hervorheben.
        </p>
        <p className='mb-10'>
          Du hast noch keinen Pfadinamen? Möchtest du für heute einen? Wir stellen dir sieben
          Fragen, weil wir dich ja noch nicht kennen. Mit den Antworten gibst du uns deine
          Vorlieben und Eigenschaften bekannt. Zum Beispiel die Frage: Schlangenbrot oder
          Schoggibanane? Sie zeigt uns, ob du lieber Salziges oder Süsses isst. So finden wir
          gemeinsam den passenden Pfadinamen für dich heraus!
        </p>
      </div>
      <div className='flex flex-col flex-grow justify-center'>
        <a className="bg-red block text-center p-8 text-3xl font-bold rounded" href="/questions">Pfadiname finden!</a>
      </div>
    </div>
  )
}
