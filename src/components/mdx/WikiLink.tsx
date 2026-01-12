'use client';

import { useState } from 'react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

interface WikiLinkProps {
  /** The Wikipedia article term/title to link to */
  term: string;
  /** Optional display text (defaults to term) */
  children?: React.ReactNode;
}

interface WikiSummary {
  title: string;
  extract: string;
  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };
}

/**
 * WikiLink component for use in MDX files.
 * Shows a link to Wikipedia that reveals a preview on hover.
 *
 * Usage in MDX:
 * ```mdx
 * The concept of <WikiLink term="Bell's theorem">Bell's Theorem</WikiLink>
 * revolutionized quantum physics.
 *
 * Or simply: <WikiLink term="Quantum entanglement" />
 * ```
 */
export function WikiLink({ term, children }: WikiLinkProps) {
  const [preview, setPreview] = useState<WikiSummary | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const wikiUrl = `https://en.wikipedia.org/wiki/${encodeURIComponent(term.replace(/ /g, '_'))}`;

  const fetchPreview = async () => {
    if (preview || loading) return;

    setLoading(true);
    setError(false);

    try {
      const apiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(term.replace(/ /g, '_'))}`;
      const res = await fetch(apiUrl);

      if (!res.ok) {
        throw new Error('Failed to fetch');
      }

      const data = await res.json();
      setPreview({
        title: data.title,
        extract: data.extract,
        thumbnail: data.thumbnail,
      });
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <HoverCard openDelay={200} closeDelay={100}>
      <HoverCardTrigger asChild>
        <a
          href={wikiUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline decoration-dotted hover:decoration-solid"
          onMouseEnter={fetchPreview}
          onFocus={fetchPreview}
        >
          {children || term}
        </a>
      </HoverCardTrigger>
      <HoverCardContent className="w-96" side="top">
        <div className="space-y-3">
          {preview?.thumbnail && (
            <img
              src={preview.thumbnail.source}
              alt={preview.title}
              className="w-full h-32 object-cover rounded-md"
            />
          )}
          <div>
            <h4 className="font-semibold text-popover-foreground">
              {preview?.title || term}
            </h4>
            <p className="text-sm text-muted-foreground mt-1">
              {loading && 'Loading...'}
              {error && 'Could not load preview'}
              {preview?.extract &&
                (preview.extract.length > 200
                  ? `${preview.extract.slice(0, 200)}...`
                  : preview.extract)}
            </p>
          </div>
          <a
            href={wikiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-primary hover:underline inline-flex items-center gap-1"
          >
            Read on Wikipedia →
          </a>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export default WikiLink;
