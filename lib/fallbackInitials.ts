export function fallbackInitials(fullName: string) {
  const name = fullName.split(" ")
  const initials = `${name[0].charAt(0)}${name[1].charAt(0)}`
  return initials.toUpperCase()
}
