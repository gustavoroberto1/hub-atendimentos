export function getDate(iso: string): string {
  const d = new Date(iso);
  if (isNaN(d.getTime())) throw new Error("Data ISO inválida");
  return new Intl.DateTimeFormat("pt-BR", {
    timeZone: "UTC",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(d);
}

export function getTime(iso: string): string {
  const d = new Date(iso);
  if (isNaN(d.getTime())) throw new Error("Data ISO inválida");
  return new Intl.DateTimeFormat("pt-BR", {
    timeZone: "UTC",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(d);
}