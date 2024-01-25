import css from "./App.module.css"
import Home from "./Home"

function App() {
  return (
    <div className={css.app}>
      <header></header>
      <Home />
      <footer>
        <a href="https://pfadinamen.ch/">Pfadinamen-Verzeichnis</a>
        <a href="https://pfadinamen.dahätsdi.ch/">AI Pfadinamen-Generator</a>
      </footer>
    </div>)
}

export default App
