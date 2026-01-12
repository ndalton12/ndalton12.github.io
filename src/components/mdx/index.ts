// Export all MDX components for easy importing
export { Footnote } from './Footnote';
export { WikiLink } from './WikiLink';

// Re-export as a components object for MDX
import { Footnote } from './Footnote';
import { WikiLink } from './WikiLink';

export const mdxComponents = {
  Footnote,
  WikiLink,
};
