+++
title = "Collapse Shortcode"
date = 2023-01-01T08:00:00-07:00
draft = false
type = "page"
+++

The **collapse shortcode** allows you to create expandable/collapsible sections in your content without JavaScript.  
It uses the HTML `<details>` and `<summary>` elements and can optionally start in the open state.

---

## Usage

{{< codeblock lang="go" >}}
{{</* collapse title="Click to expand" open="false" */>}}
This content will be hidden initially and displayed when the summary is clicked.
{{</* /collapse */>}}
{{< /codeblock >}}

---

## Parameters

{{< table headers="Parameter|Required|Default|Description" caption="Collapse Shortcode Parameters" >}}
title|No|Click to expand|Text displayed on the clickable summary  
open|No|false|Whether the collapse section is open by default (`true` or `false`)  
Inner content|Yes|-|The content inside the collapse block, supports Markdown  
{{< /table >}}

---

## Features

- No JavaScript required  
- Fully accessible using native `<details>` and `<summary>`  
- Supports Markdown inside the collapsed content  
- Can be initially open or closed  
- Auto-generated unique ID for linking or CSS  

---

## Examples

### Basic Collapse (Closed by Default)

{{<collapse title="Click to expand">}}
This content is hidden until you click the summary.
{{</collapse>}}

---

### Collapse Open by Default

{{<collapse title="Read me" open="true">}}
This content is visible by default.
{{</collapse>}}


---

### Using Markdown Inside Collapse

{{<collapse title="Markdown Example">}}
- Item 1  
- Item 2  
- **Bold text** and *italic text*  
```python
print("Hello inside collapse")
```
{{</collapse>}}

---

## Styling Details

{{< table headers="Element|Style|Description" caption="Collapse Styling Components" >}}
<details>|Default browser styling|Can be styled via `.collapse` class in CSS  
<summary>|Clickable header|Displays the title text  
.collapse-content|Padding and formatting|Content inside `<details>`, supports Markdown rendering  
{{< /table >}}

---

## Accessibility

- Uses semantic HTML elements `<details>` and `<summary>`  
- Fully keyboard accessible  
- No JavaScript required, works with screen readers  

---

## Best Practices

### Do:
- Keep titles short and descriptive  
- Use collapse sections for supplementary or optional content  
- Use Markdown formatting inside content for clarity  

### Don’t:
- Overuse collapsible sections (can hide important content)  
- Include block-level HTML elements that break `<details>` structure  

---

## Summary

The `collapse` shortcode is perfect for:

- FAQ sections  
- Step-by-step instructions  
- Optional notes or references  
- Hiding long code snippets or explanations  

Its **native HTML approach** ensures fast rendering, accessibility, and zero JavaScript dependency.
