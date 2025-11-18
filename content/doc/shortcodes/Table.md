+++
title = "Table Shortcode"
date = 2023-01-01T08:00:00-07:00
draft = false
type = "page"
+++

The **table shortcode** allows you to create styled HTML tables within your Hugo content.  
It supports custom headers, optional captions, and automatic styling for light/dark modes.

---

## Usage

### Basic Table

{{< codeblock lang="go" >}}
{{</* table headers="Name|Age|City" caption="My Table" */>}}
John|25|New York
Jane|30|Los Angeles
Bob|28|Chicago
{{</* /table */>}}
{{< /codeblock >}}

### Table Without Caption

{{< codeblock lang="go" >}}
{{</* table headers="Product|Price|Stock" */>}}
Laptop|1200|10
Monitor|300|15
Keyboard|50|50
{{</* /table */>}}
{{< /codeblock >}}

---

## Parameters

{{< table headers="Parameter|Required|Default|Description" caption="Table Shortcode Parameters" >}}
headers|No|-|Pipe-separated list of column headers (e.g., "Name।Age।City")  
caption|No|-|Optional caption displayed below the table  
Inner content|Yes|-|Rows of table data separated by newlines, cells separated by `।`  
{{< /table >}}

> **Note:** Using `id` generated from the caption can conflict if multiple tables share the same caption in a single page.  

---

## Features

- Styled HTML tables compatible with light and dark mode  
- Automatic header row generation from `headers` parameter  
- Responsive table layout  
- Hover effects for table rows  
- Caption support displayed prominently above or below the table  
- Flexible number of rows and columns  

---

## Examples

### Table With Mixed Content

{{< table headers="Name|Occupation|Country" caption="Team Members" >}}
Alice|Engineer|USA
Bob|Designer|Canada
Charlie|Manager|UK
{{< /table >}}

---

### Table With Empty Cells

{{< table headers="Item|Price|Stock" caption="Inventory" >}}
Laptop|1200|10
Monitor|* |15
Keyboard|50| * 
{{< /table >}}

---

## Styling Details

{{< table headers="Element|CSS Class|Description" caption="Table Styling Components" >}}
Wrapper|.custom-table|Main table wrapper, applies borders, spacing, and light/dark mode styles  
Header Cells|th|Bold text, semi-transparent background for contrast  
Body Cells|td|Standard text, padding applied, alternating row backgrounds  
Hover Effect|tbody tr:hover|Light overlay color on hover for emphasis  
Caption|.table-caption|Optional table caption, displayed prominently  
{{< /table >}}

---

## Accessibility & Best Practices

- Use proper header labels for screen readers  
- Keep content concise for readability  
- Avoid duplicate captions to prevent `id` conflicts  
- Use pipe `|` consistently to separate cells  
- Ensure enough color contrast for accessibility in light and dark modes  

---

## Summary

The `table` shortcode is ideal for:

- Structured data in posts and documentation  
- Comparisons, pricing tables, or team listings  
- Any tabular content requiring consistent, styled layout  

It is flexible, visually consistent, and adapts automatically to light and dark themes.

