import { Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <div className="container mx-auto max-w-md p-4 leading-relaxed h-screen flex flex-col">
      <main className='flex-grow'>
        <Outlet />
      </main>
      <footer className='text-xs flex gap-2 justify-center'>
        <a href="https://pfadinamen.ch/">Pfadinamen-Verzeichnis</a>
        <a href="https://pfadinamen.dahätsdi.ch/">AI Pfadinamen-Generator</a>
      </footer>
    </div>
  ),
})
