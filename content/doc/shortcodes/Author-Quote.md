+++
title = 'Author Quote'
date = 2023-01-01T08:00:00-07:00
draft = false
showFrontMatter=false
+++

The author-quote shortcode creates beautifully formatted blockquotes with attribution. It displays quotes with decorative quotation marks, optional author names, and source citations.

## Usage

{{< codeblock lang="go" >}}
{{</* author-quote author="Author Name" source="Source Title" */>}}
Your quote text here
{{</* /author-quote */>}}
{{< /codeblock >}}

## Parameters

{{< table headers="Parameter|Required|Default|Description" caption="Author Quote Parameters" >}}
author|No|-|The name of the person being quoted
source|No|-|The source of the quote (book, article, speech, etc.)
Inner content|Yes|-|The quote text (supports Markdown)
{{< /table >}}

## Features

- **Decorative Quotation Marks**: Large opening and closing quotes
- **Red Left Border**: 2px solid red accent border
- **Markdown Support**: Full markdown rendering in quote text
- **Optional Attribution**: Include author, source, or both
- **Responsive Styling**: Clean, readable layout on all devices

## Examples

### Basic Quote (No Attribution)


{{<author-quote>}}
To be or not to be, that is the question.
{{</author-quote>}}

### Quote with Author Only

{{<author-quote author="Albert Einstein">}}
Imagination is more important than knowledge.
{{</author-quote>}}

### Quote with Author and Source

{{<author-quote author="Maya Angelou" source="I Know Why the Caged Bird Sings">}}
There is no greater agony than bearing an untold story inside you.
{{</author-quote>}}

### Quote with Markdown Formatting

{{<author-quote author="Steve Jobs" source="Stanford Commencement Address">}}
Your time is **limited**, so don't waste it living *someone else's life*.
{{</author-quote>}}


### Multi-paragraph Quote

{{<author-quote author="Nelson Mandela" source="Long Walk to Freedom">}}
I learned that courage was not the absence of fear, but the triumph over it.

The brave man is not he who does not feel afraid, but he who conquers that fear.
{{</author-quote>}}


## Styling Details

{{< table headers="Element|Style|Description" caption="Quote Styling Components" >}}
Container|Left border + padding|2px red border, 2rem left padding
Quote Marks|Extra large|Decorative opening " and closing "
Quote Body|Inline|Main quote text with markdown support
Attribution|Bottom margin|1rem top margin, bold author, italic source
{{< /table >}}

## Attribution Format

{{< table headers="Parameters|Output Format|Example" caption="Attribution Display Formats" >}}
No author, no source|No attribution line|Quote only
Author only|— **Author Name**|— **Maya Angelou**
Author + Source|— **Author Name**, *Source*|— **Maya Angelou**, *I Know Why the Caged Bird Sings*
{{< /table >}}

## Use Cases

{{< table headers="Use Case|Description|Example" caption="Common Quote Use Cases" >}}
Testimonials|Customer or user testimonials|Product reviews, case studies
Literary Quotes|Book or poem excerpts|Blog posts, reviews
Inspirational Quotes|Motivational content|About pages, presentations
Expert Opinions|Industry expert statements|Articles, whitepapers
Historical Quotes|Famous speeches or writings|Educational content
{{< /table >}}

## Visual Structure

The quote is structured as follows:

{{< codeblock lang="go" >}}
┌─────────────────────────────────┐
│ "                               │ ← Opening quote mark
│   Quote text goes here with     │ ← Quote body (inline)
│   markdown support.         "   │ ← Closing quote mark
│                                 │
│ — Author Name, Source Title     │ ← Attribution line (optional)
└─────────────────────────────────┘
   ↑
   Red left border (2px)
{{< /codeblock >}}

## Typography Details

{{< table headers="Element|Font Size|Style|Display" caption="Typography Specifications" >}}
Quote marks|x-large|Italic decoration|Inline
Quote body|Default|Normal|Inline
Author name|Default|Bold|Inline
Source title|Default|Italic (cite tag)|Inline
{{< /table >}}

## Best Practices

### Do:
- Use for actual quotes from real people or sources
- Keep quotes concise and impactful
- Always attribute quotes when possible
- Use proper punctuation within the quote

### Don't:
- Use for your own statements (use regular text)
- Include the quotation marks in your content (they're added automatically)
- Make quotes too long (consider summarizing)
- Forget to verify quote accuracy

## Example Combinations

### Blog Post Introduction

{{<author-quote author="Henry Ford">}}
Whether you think you can, or you think you can't – you're right.
{{</author-quote>}}

This quote perfectly captures the essence of today's topic...

### Academic Writing

{{<author-quote author="Carl Sagan" source="Cosmos">}}
The cosmos is within us. We are made of **star-stuff**. We are a way for the universe to know itself.
{{</author-quote>}}

### Product Testimonial


{{<author-quote author="Jane Doe" source="CEO, Tech Company">}}
This product transformed our workflow and increased productivity by 40%.
{{</author-quote>}}

## Accessibility

- Uses semantic HTML (`<blockquote>` and `<cite>` tags)
- Clear visual hierarchy with bold and italic text
- Proper contrast with red accent border
- Screen readers will properly identify quotes

## Customization Tips

To modify the accent color, change the border-left color in the CSS:

{{< codeblock lang="css" >}}
.custom-quote {
  border-left: 2px solid rgb(255, 0, 0); /* Red - change to your theme color */
}
{{< /codeblock >}}

## Markdown Support

You can use these markdown features within quotes:

{{< table headers="Markdown|Example|Result" caption="Supported Markdown in Quotes" >}}
Bold|**important**|important
Italic|*emphasis*|emphasis
Code|`code`|code
Links|[link](url)|clickable link
{{< /table >}}