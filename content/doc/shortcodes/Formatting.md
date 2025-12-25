+++
title = 'Some Text Formatting'
date = 2025-12-24T08:00:00-07:00
draft = false
showFrontMatter=false
toc=true
[build]
  list="never"
+++

## Text Font

The `text-font` shortcode allows you to customize the font family and size of your text content.

### Parameters

- `family` - Font family to apply (optional)
- `size` - Font size to apply (optional)

### Example

{{<codeblock lang="html">}}

{{</* text-font family="Georgia, serif" size="1.2em" */>}}
This text will be displayed in Georgia font at 1.2em size.
{{</* /text-font */>}}
{{</codeblock>}}

## Centered

The `centered` shortcode centers text content horizontally.

### Example

{{<codeblock lang="html">}}
{{</* centered */>}}
This text will be centered on the page.
{{</* /centered */>}}
{{</codeblock>}}

## Right

The `right` shortcode aligns text content to the right.

### Example

{{<codeblock lang="html">}}
{{</* right */>}}
This text will be aligned to the right.
{{</* /right */>}}
{{</codeblock>}}

## Poem

The `poem` shortcode preserves line breaks and sets appropriate line height for poetry or verse content.

### Example

{{<codeblock lang="html">}}
{{</* poem */>}}
Two roads diverged in a yellow wood,
And sorry I could not travel both
And be one traveler, long I stood
And looked down one as far as I could
To where it bent in the undergrowth;
{{</* /poem */>}}
{{</codeblock>}}

---

