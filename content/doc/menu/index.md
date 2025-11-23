+++
title = 'Menu Configuration'
date = 2023-01-01T08:00:00-07:00
draft = false
type = "page"
+++

# Menu Configuration

The Sans theme features a customizable main navigation menu that provides site-wide navigation. This guide covers all aspects of menu configuration and customization.

---

## Menu System Overview

The theme implements a single main navigation menu that appears consistently across all pages. Menu configuration is managed through the `config/menus.toml` file, providing centralized control over navigation structure.

{{< table headers="Feature|Description|Benefit" caption="Menu System Characteristics" >}}
Single Menu|One main navigation menu|Simplified navigation structure
Centralized Config|All settings in menus.toml|Easy maintenance and updates
Weight-Based Ordering|Numeric priority system|Flexible menu item arrangement
Multiple Link Types|Pages, taxonomies, files, external URLs|Versatile navigation options
{{< /table >}}

---

## Basic Configuration

### Configuration File Location

Menu settings are stored in:
```
your-hugo-site/config/menus.toml
```

### Menu Entry Structure

Each menu item follows this basic structure:

{{<codeblock lang="toml">}}
[[main]]
  name = 'Display Name'
  pageRef = '/path'
  weight = 10
{{</codeblock>}}

### Core Parameters

{{< table headers="Parameter|Type|Required|Description" caption="Menu Entry Parameters" >}}
name|string|Yes|Display text shown in navigation
pageRef|string|No*|Internal page reference (Hugo pages)
url|string|No*|Direct URL (files, external links)
weight|integer|Yes|Display order (lower values appear first)
params|object|No|Additional parameters (e.g., target attribute)
{{< /table >}}

**Note**: Either `pageRef` or `url` must be specified, but not both.

---

## Menu Item Types

### 1. Homepage Link

Link to the site's root page:

{{<codeblock lang="toml">}}
[[main]]
  name = 'Home'
  pageRef = '/'
  weight = 10
{{</codeblock>}}

### 2. Taxonomy Pages

Link to automatically generated taxonomy list pages:

{{<codeblock lang="toml">}}
# Posts list page
[[main]]
  name = 'Posts'
  pageRef = '/posts'
  weight = 20

# Tags taxonomy
[[main]]
  name = 'Tags'
  pageRef = '/tags'
  weight = 30

# Categories taxonomy
[[main]]
  name = 'Categories'
  pageRef = '/categories'
  weight = 40
{{</codeblock>}}

{{< table headers="Taxonomy|pageRef Value|Displays" caption="Common Taxonomy Links" >}}
Posts|/posts|All blog posts
Tags|/tags|All tags and tagged content
Categories|/categories|All categories
Authors|/authors|All authors (if configured)
{{< /table >}}

### 3. Individual Pages

Link to specific content pages:

{{<codeblock lang="toml">}}
[[main]]
  name = 'About'
  pageRef = '/pages/about/'
  weight = 50

[[main]]
  name = 'Contact'
  pageRef = '/pages/contact/'
  weight = 55
{{</codeblock>}}

**Path Structure**: The `pageRef` should match your content directory structure:
- Content file: `content/pages/about.md`
- Menu reference: `pageRef = '/pages/about/'`

### 4. Direct File Links

Link directly to files (PDFs, images, downloads):

{{<codeblock lang="toml">}}
[[main]]
  name = 'Resume'
  url = '/files/resume.pdf'
  weight = 60
  params = {target = "_blank"}

[[main]]
  name = 'Portfolio'
  url = '/images/portfolio.jpg'
  weight = 65
  params = {target = "_blank"}
{{</codeblock>}}

**File Location**: Place files in the `static` directory:
- File path: `static/files/resume.pdf`
- Menu URL: `url = '/files/resume.pdf'`

### 5. External Links

Link to external websites or resources:

{{<codeblock lang="toml">}}
[[main]]
  name = 'Documentation'
  url = 'https://docs.example.com'
  weight = 70
  params = {target = "_blank"}

[[main]]
  name = 'GitHub'
  url = 'https://github.com/username/repo'
  weight = 75
  params = {target = "_blank", rel = "noopener noreferrer"}
{{</codeblock>}}

### 6. Section Links

Link to content sections or subdirectories:

{{<codeblock lang="toml">}}
[[main]]
  name = 'Documentation'
  pageRef = '/docs/'
  weight = 80

[[main]]
  name = 'Tutorials'
  pageRef = '/tutorials/'
  weight = 85
{{</codeblock>}}

---

## Weight-Based Ordering

### Understanding Weight

The `weight` parameter determines menu item display order using ascending numeric values.

{{< table headers="Weight Value|Position|Best Practice" caption="Weight Ordering System" >}}
Lower numbers|Appear first (left)|Homepage, main sections
10, 20, 30...|Standard increment|Allows easy insertion of new items
Higher numbers|Appear last (right)|Secondary links, external resources
{{< /table >}}

### Weight Examples

{{<codeblock lang="toml">}}
[[main]]
  name = 'Home'
  pageRef = '/'
  weight = 10        # First position

[[main]]
  name = 'Blog'
  pageRef = '/posts'
  weight = 20        # Second position

[[main]]
  name = 'About'
  pageRef = '/about'
  weight = 30        # Third position

[[main]]
  name = 'Contact'
  pageRef = '/contact'
  weight = 40        # Fourth position
{{</codeblock>}}

**Result**: Menu renders as: Home | Blog | About | Contact

### Inserting New Items

Using increments of 10 allows easy insertion:

{{<codeblock lang="toml">}}
# Original menu
[[main]]
  name = 'Home'
  weight = 10

[[main]]
  name = 'Contact'
  weight = 20

# Insert new item between existing items
[[main]]
  name = 'About'
  weight = 15        # Appears between Home and Contact
{{</codeblock>}}

---

## Advanced Parameters

### Opening Links in New Tabs

Use the `params` object to add HTML attributes:

{{<codeblock lang="toml">}}
[[main]]
  name = 'External Site'
  url = 'https://example.com'
  weight = 50
  params = {target = "_blank"}
{{</codeblock>}}

### Security Attributes for External Links

For external links, add security attributes:

{{<codeblock lang="toml">}}
[[main]]
  name = 'Partner Site'
  url = 'https://partner.com'
  weight = 60
  params = {target = "_blank", rel = "noopener noreferrer"}
{{</codeblock>}}

{{< table headers="Attribute|Purpose|When to Use" caption="Link Security Attributes" >}}
target = "_blank"|Opens in new tab|External links, PDFs, downloads
rel = "noopener"|Prevents window.opener access|External sites (security)
rel = "noreferrer"|Removes referrer information|Privacy-sensitive external links
{{< /table >}}

### Custom CSS Classes

Add custom styling classes to menu items:

{{<codeblock lang="toml">}}
[[main]]
  name = 'Premium'
  pageRef = '/premium'
  weight = 70
  params = {class = "premium-link"}
{{</codeblock>}}

---

## Complete Configuration Example

### Full Menu Configuration

{{<codeblock lang="toml">}}
# config/menus.toml

# Homepage
[[main]]
  name = 'Home'
  pageRef = '/'
  weight = 10

# Content sections
[[main]]
  name = 'Blog'
  pageRef = '/posts'
  weight = 20

[[main]]
  name = 'Projects'
  pageRef = '/projects'
  weight = 30

# Taxonomy pages
[[main]]
  name = 'Tags'
  pageRef = '/tags'
  weight = 40

[[main]]
  name = 'Categories'
  pageRef = '/categories'
  weight = 50

# Static pages
[[main]]
  name = 'About'
  pageRef = '/pages/about/'
  weight = 60

[[main]]
  name = 'Contact'
  pageRef = '/pages/contact/'
  weight = 70

# External resources
[[main]]
  name = 'Documentation'
  url = '/docs/'
  weight = 80

[[main]]
  name = 'GitHub'
  url = 'https://github.com/username/repo'
  weight = 90
  params = {target = "_blank", rel = "noopener noreferrer"}

# Downloadable files
[[main]]
  name = 'Resume'
  url = '/files/resume.pdf'
  weight = 100
  params = {target = "_blank"}
{{</codeblock>}}

---

## Best Practices

### Menu Design Principles

{{< table headers="Principle|Recommendation|Rationale" caption="Menu Design Guidelines" >}}
Item Count|5-7 items maximum|Prevents cognitive overload
Naming|Clear, concise labels|Improves usability and accessibility
Hierarchy|Most important items first|Guides user navigation
Consistency|Maintain across all pages|Builds user familiarity
Mobile|Test on small screens|Ensures responsive behavior
{{< /table >}}

### Weight Organization Strategy

1. **Homepage**: Weight 10
2. **Primary content sections**: Weights 20-50 (increments of 10)
3. **Secondary pages**: Weights 60-80
4. **External links**: Weights 90+
5. **Reserve gaps**: Allow for future insertions

### Link Type Selection

{{< table headers="Link Type|Use pageRef|Use url|Example" caption="Choosing Between pageRef and url" >}}
Hugo pages|✓||/about, /posts
Taxonomy lists|✓||/tags, /categories
Static files||✓|/files/doc.pdf
External sites||✓|https://example.com
Section indexes|✓||/docs/, /blog/
{{< /table >}}

### Accessibility Considerations

1. **Descriptive names**: Use clear, meaningful labels
2. **Logical order**: Arrange items by importance and relationship
3. **External link indication**: Consider adding visual indicators
4. **Keyboard navigation**: Ensure menu is keyboard-accessible
5. **Screen readers**: Use semantic HTML and ARIA labels

---

## Responsive Behavior

### Mobile Menu

The theme automatically adapts the menu for mobile devices:

- Desktop: Horizontal navigation bar
- Mobile: Hamburger menu or collapsed navigation
- Touch-friendly: Appropriate tap target sizes

### Testing Checklist

{{< table headers="Viewport|Test Item|Expected Behavior" caption="Responsive Menu Testing" >}}
Desktop (>1024px)|Full menu display|All items visible horizontally
Tablet (768-1024px)|Condensed menu|May stack or use dropdown
Mobile (<768px)|Mobile menu|Hamburger icon or vertical stack
Touch devices|Tap targets|Minimum 44x44px touch areas
{{< /table >}}

---

## Troubleshooting

{{< table headers="Issue|Possible Cause|Solution" caption="Common Menu Configuration Issues" >}}
Menu items not appearing|Syntax error in menus.toml|Validate TOML syntax, check for typos
Wrong display order|Incorrect weight values|Verify weight assignments, use ascending order
Links not working|Invalid pageRef or url|Check paths match content structure
External links open in same tab|Missing target parameter|Add params = {target = "_blank"}
Duplicate menu items|Multiple entries with same name|Consolidate or rename duplicate entries
Menu styling broken|Theme cache issue|Clear Hugo cache and rebuild site
{{< /table >}}

---

## Migration and Updates

### Updating Menu Structure

When restructuring your menu:

1. **Plan new structure**: Document desired menu organization
2. **Update menus.toml**: Make configuration changes
3. **Test locally**: Verify all links work correctly
4. **Check mobile view**: Ensure responsive behavior
5. **Deploy changes**: Push updates to production

### Version Control

Keep `menus.toml` in version control to:
- Track menu changes over time
- Enable rollback if needed
- Collaborate with team members
- Document menu evolution

---

## Additional Resources

{{< table headers="Resource|Description|Link" caption="Hugo Menu Documentation" >}}
Hugo Menus|Official menu documentation|https://gohugo.io/content-management/menus/
Menu Templates|Menu template reference|https://gohugo.io/templates/menu-templates/
Front Matter|Content-based menu entries|https://gohugo.io/content-management/front-matter/
{{< /table >}}