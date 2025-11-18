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


### Posts

For the posts in the site, some metadata is shown in the front. The params in `[posts]` can be used to configure whether or not the metadata show before the post. 
{{<codeblock lang="go">}}
[posts]
  readingSpeed=212
  showDate=true
  showWordCount=true
  showAuthors=true
  showTags=true
  showCategories=true
  showReadingTime=true
  dateFormat="2 Jan 2006"
  showTagCloud=false
  showCategoryCloud=false
  showAuthorCloud=false
{{</codeblock>}}

*readingSpeed* is used to calculate the expected reading time. 212 is the default value.

*showDate*, *showWordCount*, *showAuthors*, *showTags*, *showCategories* and *showReadingTime* do what their name implies.

*dateFormat* specifies the format of the date that is rendered in the posts page. This is different from the dateformat of the homepage. 

In large screens, you can enable clouds of taxonomies (tags, categories, authors or custom) with the params *showTagCloud*, *showCategoryCloud* and *showAuthorCloud*.

### Sections

This covers much the same ground as the posts params but for sections i.e for list pages. 
{{<codeblock lang="go">}}
[sections]
  showDate=true
  showTags=false
  showCategories=false
  showAuthors=false
  showCoverImage=false
  showSummary=true
  showReadMore=false
  summaryLength=500
  dateFormat="2006-01-02"
{{</codeblock>}}

The *summaryLength* value takes number of characters and not the number of words.

### About Page
Whether or not social media links are displayed on the about page can be handled by the following parameters.
{{<codeblock lang="go">}}
[about]
  showSocialLinksPage=true
{{</codeblock>}}

### RSS
When the RSS option is turned on, a small RSS icon appears at the bottom of the page which leads to the xml of the site. 
{{<codeblock lang="go">}}
[rss]
    showRSS=false
{{</codeblock>}}

### Code Highlight
{{<codeblock lang="go">}}
[markup]
  [markup.tableOfContents]
    endLevel = 5
    ordered = true
    startLevel = 2

  [markup.goldmark]
    [markup.goldmark.extensions]
      [markup.goldmark.extensions.passthrough]
        enable = true
        [markup.goldmark.extensions.passthrough.delimiters]
          block = [['\[', '\]'], ['$$', '$$']]
          inline = [['\(', '\)']]

  [markup.highlight]
    style = "monokai"
    lineNos = true
    lineNumbersInTable = true
{{</codeblock>}}


### Pagination
Pagination controls how many posts are displayed in a single page in any list page (like posts) or in the blog type homepage. The minimum value of the pagination must be 1. The path params controls what the address of the various pages become.  In hugo.toml change: 
{{<codeblock lang="go">}}
[pagination]
  disableAliases = false
  pagerSize = 4
  path = 'page'
{{</codeblock>}}