+++
title = "Highlight Shortcode"
date = 2023-01-01T08:00:00-07:00
draft = false
type = "page"
+++

The **highlight shortcode** is used to emphasize text in a visually distinct, centered style.  
It displays text in a larger font, with controlled width and spacing, making it ideal for quotes, headings, or important notices.

---

## Usage

{{< codeblock lang="go" >}}
{{</* highlight */>}}
This text will be highlighted in the center of the page with larger font size.
{{</* /highlight */>}}
{{< /codeblock >}}

---

## Parameters

{{< table headers="Parameter|Required|Default|Description" caption="Highlight Shortcode Parameters" >}}
Inner content|Yes|-|The text or Markdown content to be highlighted  
{{< /table >}}

> **Note:** The shortcode does not take extra parameters. Styling is controlled via CSS inside the shortcode.

---

## Features

- Centered text horizontally using flexbox  
- Large font size for emphasis  
- Responsive width (75% of container)  
- Supports Markdown formatting inside  
- Minimal spacing for clean visual separation  

---

## Examples

### Basic Highlight

{{<highlight>}}
Important announcement: All students must submit their assignments by Friday.
{{</highlight>}}

---

### Highlight with Markdown


{{<highlight>}}
**Note:** This is a critical update.  
*Please check your emails for details.*
{{</highlight >}}


---

### Multiple Highlights in a Page
{{<highlight>}}
First highlighted message
{{</highlight>}}

Some normal content in between.

{{<highlight>}}
Second highlighted message
{{</highlight>}}

---

## Styling Details

{{< table headers="Element|CSS Class|Description" caption="Highlight Styling Components" >}}
Wrapper|.highlight|Flex container, centers text horizontally, full width, large font, line-height 1.75rem  
Text container|.highlight-text|Width set to 75% of container, allows multiline content  
Font|N/A|Lucida Sans family, x-large size, weight 400  
Spacing|N/A|Top and bottom margin 1.25rem, clean separation from other content  
{{< /table >}}

---

## Accessibility & Responsiveness

- Text is selectable and readable on all devices  
- Flexbox ensures proper horizontal centering  
- Large font size improves readability for visually impaired users  

---

## Best Practices

### Do:
- Use for important notices or emphasis  
- Keep text concise for visual impact  
- Use Markdown formatting for bold or italic emphasis  

### Don’t:
- Overuse on a single page (loses emphasis)  
- Insert extremely long paragraphs (may look awkward in the center)  
- Expect co
