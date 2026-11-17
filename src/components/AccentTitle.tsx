/**
 * Splits a headline so its closing phrase can be set in the serif italic accent:
 * the last sentence when there are several, otherwise the clause after the last
 * comma, otherwise the final two words.
 */
export function splitAccent(title: string): [string, string] {
  const text = title.trim()
  const words = text.split(/\s+/)
  const tooLong = (phrase: string) => phrase.split(/\s+/).length > 5
  const sentences = text.match(/[^.!?]+[.!?]+(?:\s+|$)/g)
  if (sentences && sentences.length > 1 && sentences.join('').length === text.length) {
    const last = sentences[sentences.length - 1].trim()
    if (!tooLong(last)) return [text.slice(0, text.length - last.length), last]
  }

  const comma = Math.max(text.lastIndexOf(', '), text.lastIndexOf(': '))
  if (comma > 0) {
    const clause = text.slice(comma + 2)
    if (!tooLong(clause)) return [text.slice(0, comma + 2), clause]
  }

  if (words.length < 3) return [text, '']
  const tail = words.slice(-2).join(' ')
  return [text.slice(0, text.length - tail.length), tail]
}

export function AccentTitle({ children }: { children: string }) {
  const [lead, accent] = splitAccent(children)
  if (!accent) return <>{lead}</>
  return <>{lead}<em>{accent}</em></>
}
