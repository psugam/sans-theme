+++
title = 'Hosting your site'
date = 2023-01-01T08:00:00-07:00
draft = false
type='page'
+++

# Hosting Your Site

This guide covers deploying your Hugo site built with the *sans* theme to popular hosting platforms. All configurations include Pagefind search indexing.

---

## GitHub Pages

GitHub Pages offers free hosting for static sites directly from your repository.

### Configuration Steps

1. **Create workflow file**: `.github/workflows/deploy.yml`
2. **Adjust baseURL**:
   - For `username.github.io`: Use `hugo.toml` (change workflow accordingly)
   - For `username.github.io/repo-name`: Set `baseURL = "https://username.github.io/repo-name"` in `hugo.github.toml`

### Workflow File

{{<codeblock lang="yaml" >}}
# .github/workflows/deploy.yml
name: Deploy Hugo site with Pagefind to Pages

on:
  push:
    branches: ["master"]  # or "main"
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

defaults:
  run:
    shell: bash

jobs:
  build:
    runs-on: ubuntu-latest
    env:
      HUGO_VERSION: 0.146.0
      NODE_VERSION: 20
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          submodules: recursive

      - name: Install Hugo CLI
        run: |
          wget -O ${{ runner.temp }}/hugo.deb https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.deb
          sudo dpkg -i ${{ runner.temp }}/hugo.deb

      - name: Install Dart Sass
        run: sudo snap install dart-sass

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}

      - name: Setup GitHub Pages
        id: pages
        uses: actions/configure-pages@v5

      - name: Install Pagefind
        run: npm install pagefind

      - name: Build site with Hugo
        env:
          HUGO_CACHEDIR: ${{ runner.temp }}/hugo_cache
          HUGO_ENVIRONMENT: production
        run: hugo --minify --config hugo.github.toml

      - name: Run Pagefind indexing
        run: npx pagefind --site public --output-path public/pagefind

      - name: Upload site artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
{{</codeblock >}}

### Enable GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Push your code to trigger deployment

---

## Vercel

Vercel provides fast deployments with automatic SSL and global CDN.

### Configuration

Create `vercel.json` in your project root:

{{<codeblock lang="json" >}}
{
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "public"
      }
    }
  ],
  "framework": null,
  "buildCommand": "npm run build",
  "outputDirectory": "public",
  "cleanUrls": true,
  "trailingSlash": false,
  "ignoreCommand": "git diff --quiet HEAD^ HEAD ./"
}
{{</codeblock >}}

### Deploy

1. **Via Vercel Dashboard**:
   - Import your Git repository
   - Vercel auto-detects configuration
   - Click **Deploy**

2. **Via CLI**:
   {{<codeblock lang="bash" >}}
   npm i -g vercel
   vercel
   {{</codeblock >}}

---

## Netlify

Netlify offers continuous deployment with built-in form handling and serverless functions.

### Configuration

Create `netlify.toml` in your project root:

{{<codeblock lang="toml" >}}
[build]
  publish = "public"
  command = "hugo --minify && npx pagefind --site public --output-path public/pagefind"

[build.environment]
  HUGO_VERSION = "0.146.0"
  NODE_VERSION = "20"

[[redirects]]
  from = "/pagefind/*"
  to = "/pagefind/:splat"
  status = 200
{{</codeblock >}}

### Deploy

1. **Via Netlify Dashboard**:
   - Connect your Git repository
   - Build settings are auto-detected from `netlify.toml`
   - Click **Deploy site**

2. **Via CLI**:
   {{<codeblock lang="bash" >}}
   npm i -g netlify-cli
   netlify deploy --prod
   {{</codeblock >}}

---

## Cloudflare Pages

Cloudflare Pages provides fast global deployment with integrated CDN and DDoS protection.

### Configuration

1. **Connect Repository**:
   - Go to Cloudflare Dashboard → **Pages**
   - Click **Create a project**
   - Connect your Git repository

2. **Build Settings**:
   - **Framework preset**: None
   - **Build command**: `npm run build`
   - **Build output directory**: `public`
   - **Environment variables**:
     - `HUGO_VERSION`: `0.146.0`
     - `NODE_VERSION`: `20`

### Deploy

- Push to your repository's main branch
- Cloudflare Pages automatically builds and deploys

---

## Important Notes

### Build Command

All platforms use the same build process:

{{<codeblock lang="bash" >}}
npm run build
{{</codeblock >}}

This runs:

{{<codeblock lang="bash" >}}
hugo && npx pagefind --site public --output-path public/pagefind
{{</codeblock >}}

### Output Directory

Always use `public` as the output directory (Hugo's default).

### Hugo Version

Ensure your Hugo version in build configs matches your local development version. Current configs use **Hugo 0.146.0 Extended**.

### Node.js Version

All configurations use **Node.js 20** for consistency.

---

## Troubleshooting

{{<table headers="Issue|Solution" caption="Common Deployment Issues" >}}
Build fails with "hugo not found"|Check Hugo version in config matches available versions
Search not working after deploy|Verify npx pagefind runs after hugo in build command
404 errors on deployment|Check baseURL in hugo.toml matches your deployment URL
CSS/JS not loading|Ensure Hugo extended version is installed (not standard)
Slow build times|Consider caching dependencies in CI/CD workflows
{{</table >}}

---

## Quick Comparison

{{<table headers="Platform|Build Time|Free Tier|Auto SSL|Custom Domain" caption="Hosting Platform Comparison" >}}
GitHub Pages|~2-3 min|✅ Unlimited|✅|✅
Vercel|~1-2 min|✅ Generous|✅|✅
Netlify|~1-2 min|✅ 300 min/month|✅|✅
Cloudflare Pages|~1-2 min|✅ Unlimited|✅|✅
{{</table >}}

Choose based on your needs — all platforms work excellently with Hugo and Pagefind.
