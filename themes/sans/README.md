# Sans Theme

A clean and minimal Hugo theme for bloggers and content creators.

## Features

- 🎨 Clean, minimalist design
- 🌙 Color scheme customization
- 📱 Fully responsive
- 🔍 Built-in search functionality
- 💬 Comments support
- 📑 Taxonomy support (tags, categories)
- ⚡ Fast and lightweight
- 🎯 SEO optimized
- 📝 Custom shortcodes
- 🎨 Customizable front matter

## Demo

Visit the [documentation site](https://www.sugam-pokharel.com.np/sans-theme/doc/) to see the theme in action.

## Installation

### Method 1: Git Submodule

Add the theme as a git submodule to your Hugo project:

```bash
git submodule add https://github.com/YOUR_USERNAME/sans-theme.git themes/sans-theme
```

### Method 2: Clone

Clone the theme directly into your themes directory:

```bash
cd themes
git clone https://github.com/YOUR_USERNAME/sans-theme.git
```

### Method 3: Hugo Modules

Initialize your Hugo site as a module and import the theme:

```bash
hugo mod init github.com/YOUR_USERNAME/YOUR_SITE
```

Then add to your `config.toml`:

```toml
[module]
  [[module.imports]]
    path = "github.com/YOUR_USERNAME/sans-theme"
```

### Activate the Theme

Update your site's configuration file (`config.toml`, `config.yaml`, or `hugo.toml`):

```toml
theme = "sans-theme"
```

## Quick Start

1. Install the theme using one of the methods above
2. Copy the example config from `themes/sans-theme/exampleSite/config.toml`
3. Customize the configuration to your needs
4. Run `hugo server -D` to start the development server
5. Visit `http://localhost:1313` to see your site

## Configuration

### Basic Configuration

```toml
baseURL = "https://example.com/"
languageCode = "en-us"
title = "My Site"
theme = "sans-theme"

[params]
  description = "A minimal blog"
  author = "Your Name"
```

### Menu Configuration

Define your site navigation in `config.toml`:

```toml
[[menu.main]]
  name = "Home"
  url = "/"
  weight = 1

[[menu.main]]
  name = "Blog"
  url = "/posts/"
  weight = 2

[[menu.main]]
  name = "About"
  url = "/about/"
  weight = 3
```

### Color Scheme

Customize the theme colors to match your brand. See the [Color Scheme documentation](https://www.sugam-pokharel.com.np/sans-theme/doc/color-scheme) for details.

## Content

### Creating Posts

Create a new post:

```bash
hugo new posts/my-first-post.md
```

### Front Matter

Available front matter options:

```yaml
---
title: "My Post Title"
date: 2024-01-01
draft: false
tags: ["tag1", "tag2"]
categories: ["category1"]
description: "Post description for SEO"
---
```

For more front matter options, see the [Front Matter documentation](https://www.sugam-pokharel.com.np/sans-theme/doc/front-matter).

### Taxonomies

The theme supports tags and categories out of the box. Configure additional taxonomies in your `config.toml`.

Learn more in the [Taxonomy documentation](https://www.sugam-pokharel.com.np/sans-theme/doc/taxonomy/).

## Features-List

### Search

Built-in search functionality to help users find content quickly. See the [Search documentation](https://www.sugam-pokharel.com.np/sans-theme/doc/search) for setup instructions.

### Comments

Add comments to your blog posts. The theme supports various comment systems. Check the [Comments documentation](https://www.sugam-pokharel.com.np/sans-theme/doc/comments) for configuration.

### Shortcodes

The theme includes several useful shortcodes for enhanced content formatting. See the [Shortcodes documentation](https://www.sugam-pokharel.com.np/sans-theme/doc/shortcodes) for available shortcodes.

## Customization

The theme is highly customizable through parameters. For detailed customization options, refer to the [Params and Customization documentation](https://www.sugam-pokharel.com.np/sans-theme/doc/params-and-customization).

## Deployment

### Build Your Site

```bash
hugo
```

This generates your static site in the `public/` directory.

### Hosting Options

The theme works with all popular hosting platforms:

- GitHub Pages
- Netlify
- Vercel
- GitLab Pages
- AWS S3

For detailed hosting instructions, see the [Hosting documentation](https://www.sugam-pokharel.com.np/sans-theme/doc/hosting-your-site).

## Documentation

Full documentation is available at: [https://www.sugam-pokharel.com.np/sans-theme/doc/](https://www.sugam-pokharel.com.np/sans-theme/doc/)

Topics covered:
- [Installation](https://www.sugam-pokharel.com.np/sans-theme/doc/installation)
- [Homepage Configuration](https://www.sugam-pokharel.com.np/sans-theme/doc/homepage)
- [Taxonomy](https://www.sugam-pokharel.com.np/sans-theme/doc/taxonomy/)
- [Menu](https://www.sugam-pokharel.com.np/sans-theme/doc/menu)
- [Color Scheme](https://www.sugam-pokharel.com.np/sans-theme/doc/color-scheme)
- [Front Matter](https://www.sugam-pokharel.com.np/sans-theme/doc/front-matter)
- [Params and Customization](https://www.sugam-pokharel.com.np/sans-theme/doc/params-and-customization)
- [Shortcodes](https://www.sugam-pokharel.com.np/sans-theme/doc/shortcodes)
- [Search](https://www.sugam-pokharel.com.np/sans-theme/doc/search)
- [Comments](https://www.sugam-pokharel.com.np/sans-theme/doc/comments)
- [Hosting](https://www.sugam-pokharel.com.np/sans-theme/doc/hosting-your-site)

## Support

If you encounter any issues or have questions:

- Check the [documentation](https://www.sugam-pokharel.com.np/sans-theme/doc/)
- Open an issue on [GitHub](https://github.com/YOUR_USERNAME/sans-theme/issues)

## License

This theme is released under the MIT License. See the [LICENSE](LICENSE) file for details.

## Credits

Created by [Your Name](https://www.sugam-pokharel.com.np/)

---

⭐ If you like this theme, please give it a star on GitHub!
