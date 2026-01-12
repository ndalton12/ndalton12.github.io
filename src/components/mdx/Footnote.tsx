'use client';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

interface FootnoteProps {
  id: string | number;
  children: React.ReactNode;
}

/**
 * Footnote component for use in MDX files.
 * Shows a superscript number that reveals content on hover.
 *
 * Usage in MDX:
 * ```mdx
 * This is a claim that needs citation.<Footnote id="1">
 *   This is the footnote content with more details.
 * </Footnote>
 * ```
 */
export function Footnote({ id, children }: FootnoteProps) {
  return (
    <HoverCard openDelay={100} closeDelay={100}>
      <HoverCardTrigger asChild>
        <sup className="cursor-help text-primary hover:text-primary/80 font-medium">
          [{id}]
        </sup>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 text-sm" side="top">
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground font-medium">
            Footnote {id}
          </p>
          <div className="text-popover-foreground">{children}</div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export default Footnote;
