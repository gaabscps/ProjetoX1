export function idExtractor(input: string): string {
  const match = input.match(/id\s([a-f0-9]+)/)
  return match ? match[1] : ''
}
