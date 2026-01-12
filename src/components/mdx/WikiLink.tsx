import type { ReactNode } from 'react';

interface WikiLinkProps {
  /** The Wikipedia article term/title to link to */
  term: string;
  /** Optional display text (defaults to term) */
  children?: ReactNode;
  /** Optional preview length in characters (default: 400) */
  previewLength?: number;
}

/**
 * WikiLink component for use in MDX files.
 * Renders as a simple Wikipedia link that works without JavaScript.
 * On hover, shows a preview of the Wikipedia article (requires JS).
 *
 * Usage in MDX:
 * ```mdx
 * The concept of <WikiLink term="Bell's theorem">Bell's Theorem</WikiLink>
 * revolutionized quantum physics.
 *
 * Or simply: <WikiLink term="Quantum entanglement" />
 *
 * With custom preview length: <WikiLink term="Philosophy" previewLength={600} />
 * ```
 */
export function WikiLink({ term, children, previewLength }: WikiLinkProps) {
  const wikiUrl = `https://en.wikipedia.org/wiki/${encodeURIComponent(term.replace(/ /g, '_'))}`;

  return (
    <a
      href={wikiUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary underline decoration-dotted hover:decoration-solid"
      data-wiki-term={term}
      {...(previewLength && { 'data-wiki-preview-length': previewLength })}
    >
      {children || term}
    </a>
  );
}

export default WikiLink;
