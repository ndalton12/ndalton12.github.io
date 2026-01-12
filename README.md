# Niall Dalton - Personal Website

A modern personal portfolio and blog built with **Astro**, **React**, **Tailwind CSS**, and **shadcn/ui**.

## ✨ Features

- ⚡ **Blazing fast** - Zero JavaScript by default, only ships JS where needed
- 📝 **MDX support** - Write blog posts in Markdown with embedded React components
- 🎨 **shadcn/ui components** - Beautiful, accessible UI components
- 📖 **Wikipedia previews** - Hover over `<WikiLink>` to see Wikipedia article previews
- 📌 **Footnotes on hover** - Use `<Footnote>` for inline citations with hover reveal
- 🔍 **SEO optimized** - Built-in sitemap and meta tags
- 📱 **Responsive** - Mobile-first design

## 🚀 Quick Start

### Install a Fast Package Manager (Recommended)

This project works with npm, but **pnpm** or **bun** are significantly faster:

```bash
# Option 1: Install pnpm (recommended - fast & stable)
npm install -g pnpm

# Option 2: Install bun (fastest - also a JS runtime)
curl -fsSL https://bun.sh/install | bash
```

### Development

```bash
# Install dependencies
pnpm install        # or: bun install / npm install

# Start development server
pnpm dev            # or: bun dev / npm run dev

# Build for production
pnpm build          # or: bun run build / npm run build

# Preview production build
pnpm preview        # or: bun preview / npm run preview
```

The dev server runs at `http://localhost:4321`

## 📁 Project Structure

```
├── public/                 # Static assets (images, resume, favicon)
│   ├── icon.png
│   ├── me3_compressed.jpeg
│   ├── resume.pdf
│   └── tucker.jpg
│
├── src/
│   ├── components/         # Reusable components
│   │   ├── mdx/           # MDX-specific components
│   │   │   ├── Footnote.tsx    # Hover footnote component
│   │   │   ├── WikiLink.tsx    # Wikipedia preview link
│   │   │   └── index.ts
│   │   ├── ui/            # shadcn/ui components
│   │   │   ├── hover-card.tsx
│   │   │   └── tooltip.tsx
│   │   ├── AboutContent.astro
│   │   ├── Header.astro
│   │   ├── Section.astro
│   │   └── SummaryItem.astro
│   │
│   ├── content/           # Content collections (blog posts)
│   │   ├── blog/          # Blog posts in Markdown/MDX
│   │   │   ├── llm-arithmetic/
│   │   │   │   ├── index.md
│   │   │   │   └── images/
│   │   │   └── ...
│   │   └── config.ts      # Content collection schema
│   │
│   ├── layouts/           # Page layouts
│   │   ├── BaseLayout.astro
│   │   └── BlogPostLayout.astro
│   │
│   ├── lib/               # Utility functions
│   │   └── utils.ts
│   │
│   ├── pages/             # File-based routing
│   │   ├── index.astro        # Homepage
│   │   ├── 404.astro          # 404 page
│   │   └── blog/
│   │       ├── index.astro    # Blog listing
│   │       └── [...slug].astro # Individual blog posts
│   │
│   ├── styles/            # Global styles
│   │   └── globals.css
│   │
│   └── config.ts          # Site configuration (name, bio, projects, etc.)
│
├── astro.config.mjs       # Astro configuration
├── tailwind.config.mjs    # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── components.json        # shadcn/ui configuration
└── package.json
```

## 📝 Writing Blog Posts

### Creating a New Post

1. Create a new folder in `src/content/blog/`:
   ```
   src/content/blog/my-new-post/
   ├── index.md    # or index.mdx for MDX features
   └── images/     # Optional: post-specific images
   ```

2. Add frontmatter at the top:
   ```md
   ---
   title: "My New Post Title"
   date: "2026-01-12"
   description: "A brief description for SEO and previews"
   draft: false  # Set to true to hide from production
   ---
   
   Your content here...
   ```

### Using MDX Components

For interactive features, rename your file to `.mdx` and use the built-in components:

#### Footnotes
```mdx
This is a claim that needs citation.<Footnote id="1">
  This is additional context that appears on hover.
  You can include **markdown** here too.
</Footnote>
```

#### Wikipedia Links
```mdx
The concept of <WikiLink term="Bell's theorem">Bell's Theorem</WikiLink> 
revolutionized physics.

<!-- Or let it use the term as display text -->
<WikiLink term="Quantum entanglement" />
```

### Images in Posts

Reference images relative to your post folder:
```md
![Description](./images/my-image.png)
```

## ⚙️ Configuration

### Site Metadata

Edit `src/config.ts` to update:
- Name and bio
- Social links (GitHub, LinkedIn)
- Projects list
- Experience/work history
- Skills

### Styling

- Global styles: `src/styles/globals.css`
- Tailwind config: `tailwind.config.mjs`
- shadcn/ui theming uses CSS variables in `globals.css`

### Adding shadcn/ui Components

```bash
pnpm dlx shadcn@latest add button  # Example: add button component
# or: bunx shadcn@latest add button
# or: npx shadcn@latest add button
```

Components are added to `src/components/ui/`.

## 🚢 Deployment

### GitHub Pages

The site is configured for GitHub Pages deployment:

```bash
# Build the site
pnpm build   # or: bun run build / npm run build

# Deploy (using gh-pages or GitHub Actions)
```

For GitHub Actions, create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      # Option 1: Use pnpm (recommended)
      - uses: pnpm/action-setup@v4
        with:
          version: 9
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm build
      
      # Option 2: Use bun (fastest)
      # - uses: oven-sh/setup-bun@v2
      # - run: bun install
      # - run: bun run build
      
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

## 📚 Tech Stack

- [Astro](https://astro.build/) - Static site generator
- [React](https://react.dev/) - For interactive components
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [MDX](https://mdxjs.com/) - Markdown with JSX
- [pnpm](https://pnpm.io/) - Fast, disk-efficient package manager

## 📄 License

MIT
