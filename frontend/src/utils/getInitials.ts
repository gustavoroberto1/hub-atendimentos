export function getInitials(s: string | undefined) {
  if(!s) return "";
  return (s || "")
    .trim()
    .split(/\s+/)
    .filter((w) => !/^(de|da|do|das|dos|e)$/i.test(w))
    .slice(0, 2)
    .map((w) => (w.match(/\p{L}/u)?.[0] || "").toUpperCase())
    .join("");
}
