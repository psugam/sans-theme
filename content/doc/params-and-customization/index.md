+++
title = '6 Params And Customization'
date = 2023-01-01T08:00:00-07:00
draft = false
type="page"
+++

### Basic Features
As specified earlier, some features of the sans theme can be turned off. Of these, searching will be dealt separately in an upcoming part.
{{<codeblock lang="go">}}
[theme]
    showDarkModeToggle=true
    showSearchIcon=true
    showGoToTop=true
{{</codeblock>}}

### Fonts
To set the fonts for the whole site. 
{{<codeblock lang="go">}}
[fonts]
   siteFont='sans-serif, Monotype Corsiva'
{{</codeblock>}}
Single font should be separated by comma. 

### Table of Contents

To enable the table of contents, you need to configure it in your site’s hugo.toml. Add or modify the following section:

{{<codeblock lang="toml">}}
[toc]
numberingInTOC = false
numberingInPost = true
{{</codeblock>}}

numberingInTOC — When set to true, all headings in the table of contents will be automatically numbered according to their hierarchy (e.g., 1, 1.1, 1.1.1).

Thus, the toc will appear in the form: 
{{<codeblock>}}
Contents ▼

1. MANY COLUMNS
├── 1.1. FOOTNOTES
│   ├── 1.1.1. Abcd
│   │   └── 1.1.1.1. foot
│   └── 1.1.2. FOOTnotes 2
└── 1.2. HELLLO
    └── 1.2.1. Mian Footnotes
{{</codeblock>}}

numberingInPost — When set to true, the same numbering will appear directly within the post content itself.

If numberingInTOC is enabled, every heading inside the generated TOC will display its sequential number based on its position in the document structure. This helps readers visually understand the outline of the page.

By default, a toc will not appear in a post. To enable toc, include this in the frontmatter to your post:

```toc=true```

Which headers are included in the table of contents can be specified by the following configuration in hugo.toml: 

{{<codeblock lang="go">}}
[markup]
  [markup.tableOfContents]
    endLevel = 5
    ordered = false
    startLevel = 2
{{</codeblock>}}
If the startLevel is 2, h2 (## in markdown) is the highest hierarchy that appears in the table of contents. Similarly, if the endLevel is 5, h5 (##### in markdown) is the lowest hierarchy that appears in the table of contents.

If ordered is set to true, the table of contents is numbered but with restarted numbering. Thus the toc will appear in the form:

{{<codeblock>}}
Contents ▼

1. MANY COLUMNS
├── 2. FOOTNOTES
│   ├── 1. Abcd
│   │   └── 1. foot
│   └── 2. FOOTnotes 2
└── 3. HELLLO
    └── 1. Mian Footnotes

{{</codeblock>}}

These two params clash with each other, so only one must be set to true at a time. 