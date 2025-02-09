import { Link, createFileRoute } from "@tanstack/react-router";
import { names } from "../data";
// import buttonStyle from '../styles/buttons'

export const Route = createFileRoute("/result")({
  validateSearch: (search: Record<string, unknown>): { r: number } => ({
    r: Number(search?.r),
  }),
  component: Result,
});

export function Result() {
  const { r: nameIndex } = Route.useSearch();
  const name = names[nameIndex] || "Häcker!";

  return (
    <div className="flex flex-col h-full justify-around">
      <p>Dein Name lautet:</p>
      <h1 className="text-center animate-result text-5xl font-bold p-10">{name}</h1>
      <p className="text-center py-4">🥳 Wir wünschen dir viele spannende Pfadiabenteuer.</p>
      <Link to="/" className="bg-secondary font-lg rounded-sm shadow-sm p-4 text-center">
        Nochmals!
      </Link>
    </div>
  );
}
