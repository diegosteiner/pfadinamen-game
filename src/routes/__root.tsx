import { Outlet, createRootRoute } from '@tanstack/react-router'
import css from '../App.module.css'

export const Route = createRootRoute({
  component: () => (
    <div className={css.app}>
      <Outlet />
      <footer>
        <a href="https://pfadinamen.ch/">Pfadinamen-Verzeichnis</a>
        <a href="https://pfadinamen.dahätsdi.ch/">AI Pfadinamen-Generator</a>
      </footer>
    </div>
  ),
})
