+++
title = 'Search'
date = 2023-01-01T08:00:00-07:00
draft = false
showFrontMatter=false
+++

# Search Feature Documentation

This theme includes built-in search functionality powered by [Pagefind](https://pagefind.app/), a fast static search library that indexes your site content.

## Enabling/Disabling Search

Control the search icon visibility in your `params.toml`

{{<codeblock lang="toml">}}
[theme]
  showSearchIcon = true   # Enable search
  showSearchIcon = false  # Disable search
{{</codeblock>}}

---

## Setup & Commands

### When Search is Disabled (`showSearchIcon = false`)

You can use standard Hugo commands without any additional setup:

{{<codeblock lang="bash">}}
# Local development
hugo server

# Build for production
hugo
{{</codeblock>}}

No additional dependencies or configuration required.

---

### When Search is Enabled (`showSearchIcon = true`)

Search requires Pagefind to index your site content. Follow these steps:

#### 1. Install Dependencies

First, ensure you have Node.js installed, then install the required packages:

{{<codeblock lang="bash">}}
npm install
{{</codeblock>}}

This installs Hugo (extended) and Pagefind as dev dependencies.

#### 2. Install Pagefind Globally (Recommended)

{{<codeblock lang="bash">}}
npm install -g pagefind
{{</codeblock>}}

#### 3. Use npm Scripts

Include the following in the scripts section of the `package.json` file:
{{<codeblock lang="json">}}
 "scripts": {
  "serve": "hugo server --disableFastRender",
  "build": "npx hugo && npx pagefind --site public --output-path public/pagefind",
  "dev": "npx hugo --destination public && npx pagefind --site public --output-path public/pagefind && hugo server --disableFastRender --buildDrafts --noHTTPCache"
}
{{</codeblock>}}

**For Local Development:**

{{<codeblock lang="bash">}}
npm run dev
{{</codeblock>}}

This command:
- Builds Hugo to the `public` folder
- Runs Pagefind to index content
- Starts Hugo server with drafts enabled

**For Production Build:**
{{<codeblock lang="bash">}}
npm run build
{{</codeblock>}}


This command:
- Builds Hugo to the `public` folder
- Runs Pagefind to index content
- Output is ready for deployment

**Simple Server (without rebuilding index):**

{{<codeblock lang="bash">}}
npm run serve
{{</codeblock>}}

Use this when you've already built the Pagefind index and just want to preview.

---

## Important Notes

### Always Use the `public` Folder

Pagefind is configured to:
- Read from: `public` (Hugo's build output)
- Write to: `public/pagefind` (search index location)

**Do not change the output directory** — the theme expects the search index at `/pagefind/`.

### How It Works

1. Hugo builds your site to `public/`
2. Pagefind scans `public/` and creates a search index
3. The search index is saved to `public/pagefind/`
4. When deployed, the search UI loads this index automatically

### Deployment

When deploying to platforms like Netlify, Vercel, or GitHub Pages, use the build command:

{{<codeblock lang="bash">}}
npm run build
{{</codeblock>}}

Or configure your platform's build command to:

{{<codeblock lang="bash">}}
npx hugo && npx pagefind --site public --output-path public/pagefind
{{</codeblock>}}

---

## Troubleshooting

{{< table headers="Issue|Solution" caption="Common Search Issues" >}}
Search not working locally|Run npm run dev instead of hugo server
No search results|Ensure npm run build or npm run dev completed without errors
Search icon not showing|Check showSearchIcon = true in config
"pagefind not found" error|Run npm install or npm install -g pagefind
{{< /table >}}

---

## Quick Reference

{{< table headers="Search Status|Local Development|Production Build" caption="Command Reference" >}}
Enabled|npm run dev|npm run build
Disabled|hugo server|hugo
{{< /table >}}