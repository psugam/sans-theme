+++
date = '2025-10-30T17:48:48+05:45'
draft = false
title = 'Installation Guide'
tags = ['installation','documentation']
authors = ['John']
categories=['category-1', 'category-2']
type="page"
+++

# Installation Guide

This guide will walk you through installing the Sugo theme for your Hugo site.

---

## Prerequisites

Before installing the Sugo theme, ensure your development environment meets the following requirements:

{{<table headers="Requirement|Minimum Version|Purpose" caption="System Requirements" >}}
Hugo Extended|0.146.0+|Static site generator
Git|2.0+|Version control and theme installation
Node.js|18.0+|Package management and build tools
npm|9.0+|JavaScript package manager
{{</table >}}

### Verify Hugo Installation

Confirm that Hugo is properly installed and meets the minimum version requirement:

{{<codeblock lang="bash">}}
hugo version
{{</codeblock>}}

Expected output:

{{<codeblock lang="bash">}}
hugo v0.146.0+extended darwin/amd64 BuildDate=...
{{</codeblock>}}

**Important**: Ensure you have the **Extended** version of Hugo installed, as the theme requires Hugo Extended features for SCSS/Sass processing.

### Verify Git Installation

{{<codeblock lang="bash">}}
git --version
{{</codeblock>}}

### Verify Node.js and npm

{{<codeblock lang="bash">}}
node --version
npm --version
{{</codeblock>}}

---

## Installation Methods

### Option A: Git Submodule (Recommended)

Using Git submodules is the recommended approach as it allows easy theme updates and maintains a clean separation between your content and the theme.

#### Step 1: Initialize Git Repository

If your site isn't already a Git repository:

{{<codeblock lang="bash">}}
cd your-hugo-site
git init
{{</codeblock>}}

#### Step 2: Add Theme as Submodule

{{<codeblock lang="bash">}}
git submodule add https://github.com/psugam/sugo-theme themes/sugo
{{</codeblock>}}

This creates a `themes/sugo` directory containing the theme.

#### Step 3: Copy Required Files

Copy the following directories from the theme to your site root:

{{<codeblock lang="bash">}}
cp -r themes/sugo/exampleSite/content ./
cp -r themes/sugo/exampleSite/assets ./
cp -r themes/sugo/exampleSite/config ./
{{</codeblock>}}

#### Step 4: Configure Theme

Move `hugo.toml` from the config folder to your site root:

{{<codeblock lang="bash">}}
mv config/hugo.toml ./hugo.toml
{{</codeblock>}}

Open `hugo.toml` and verify the theme name is set correctly:

{{<codeblock lang="toml">}}
theme = "sugo"
{{</codeblock>}}

#### Step 5: Install Dependencies

{{<codeblock lang="bash">}}
npm install
{{</codeblock>}}

#### Step 6: Test Installation

{{<codeblock lang="bash">}}
hugo server
{{</codeblock>}}

Visit `http://localhost:1313` to see your site.

---

### Option B: Manual Download

If you prefer not to use Git submodules, you can manually download the theme.

#### Step 1: Download Theme

1. Visit the [Sugo theme repository](https://github.com/psugam/sugo-theme)
2. Click **Code** → **Download ZIP**
3. Extract the ZIP file

#### Step 2: Move Theme to Hugo Site

{{<codeblock lang="bash">}}
# Assuming extracted folder is named 'sugo-theme-main'
mv sugo-theme-main your-hugo-site/themes/sugo
{{</codeblock>}}

**Important**: Ensure the theme folder is named exactly `sugo` (not `sugo-theme-main` or any other variation).

#### Step 3: Copy Required Files

Follow the same steps as Option A (Steps 3-6):

1. Copy `content`, `assets`, and `config` directories
2. Move `hugo.toml` to site root
3. Verify `theme = "sugo"` in configuration
4. Run `npm install`
5. Test with `hugo server`

---

## Post-Installation Configuration

### Directory Structure

After installation, your site structure should look like this:

{{<codeblock lang="text">}}
your-hugo-site/
├── assets/
├── config/
├── content/
├── themes/
│   └── sugo/
├── hugo.toml
├── package.json
└── node_modules/
{{</codeblock>}}

### Update Theme Configuration

Edit `hugo.toml` or configuration files in the `config/` directory to customize:

- Site title and description
- Author information
- Theme colors and appearance
- Social media links
- Menu structure
- Search functionality

Refer to the [Configuration Guide](/docs/configuration) for detailed options.

---

## Updating the Theme

### For Git Submodule Installation

{{<codeblock lang="bash">}}
cd your-hugo-site
git submodule update --remote --merge
{{</codeblock>}}

### For Manual Installation

1. Download the latest version from GitHub
2. Replace the `themes/sugo` directory with the new version
3. Review the [changelog](https://github.com/psugam/sugo-theme/releases) for breaking changes

---

## Troubleshooting

{{< table headers="Issue|Solution" caption="Common Installation Issues" >}}
"theme not found" error|Verify the theme folder is named exactly 'sugo' in the themes directory
SCSS/Sass errors|Ensure you have Hugo Extended installed, not the standard version
Module not found errors|Run npm install in your site root directory
Port already in use|Use hugo server -p 1314 to run on a different port
Submodule empty after clone|Run git submodule update --init --recursive
{{< /table >}}

---

## Next Steps

Now that you've installed the Sugo theme, you can:

1. **[Configure Your Site](/docs/configuration)** - Customize theme settings
2. **[Create Content](/docs/content-creation)** - Start writing posts and pages
3. **[Enable Search](/docs/search)** - Set up Pagefind search functionality
4. **[Deploy Your Site](/docs/deployment)** - Publish to hosting platforms

---


## Additional Resources

{{< table headers="Resource|Description|Link" caption="Helpful Links" >}}
Hugo Documentation|Official Hugo documentation|https://gohugo.io/documentation/
Git Submodules Guide|Learn about Git submodules|https://git-scm.com/book/en/v2/Git-Tools-Submodules
Node.js Documentation|Node.js and npm guides|https://nodejs.org/docs/
Theme Repository|Sugo theme source code|https://github.com/psugam/sugo-theme
{{< /table >}}