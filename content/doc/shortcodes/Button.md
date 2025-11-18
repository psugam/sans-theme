+++
title = 'Button'
date = 2023-01-01T08:00:00-07:00
draft = false
type = 'page'
+++

The **button** shortcode creates a customizable clickable button using theme colors.  
It adapts automatically to both **light mode** and **dark mode**, using dynamically injected CSS variables from your theme parameters.

It supports custom links, target attributes, and inner content (text, icons, emojis, etc.).

---

## Usage

{{< codeblock lang="go" >}}
{{</* button href="/contact" target="_blank" */>}}
Contact Me
{{</* /button */>}}
{{< /codeblock >}}

---

## Parameters

{{< table headers="Parameter|Required|Default|Description" caption="Button Shortcode Parameters" >}}
href|No|#|URL the button links to  
target|No|_self|Where the link opens (`_blank`, `_self`, etc.)  
Inner content|Yes|-|Button label (supports text, emojis, inline HTML)  
{{< /table >}}

---

## Features

- **Fully Theme-Aware** using site parameters from `params.theme`
- **Dark/Light Mode Auto-Switching**
- **Smooth Rounded Styling**
- **Clickable Button with `href` and `target`**
- **Inline Element** (use anywhere inside paragraphs or blocks)
- **Customizable Text Content**

---

## Examples

### 1. Basic Button

{{< button href="/services" >}}
View Services
{{< /button >}}

### 2. Open in New Tab

{{< button href="https://example.com" target="_blank" >}}
Visit Website 🌐
{{< /button >}}

### 3. Emoji Button

{{< button href="/login" >}}
🔐 Login
{{< /button >}}

### 4. Inside Paragraph

You can also embed the button inside text:

{{< button href="/signup" >}}Sign Up{{< /button >}}  
to join our community today!

---

## Underlying HTML/CSS Structure

{{< codeblock lang="go" >}}
<a id="button-shortcode" href="..." target="_self">
    Button Text
</a>
{{< /codeblock >}}

### Dynamic Theme Colors

{{< codeblock lang="css" >}}
:root {
  --light-color: var(... from theme params ...);
  --dark-color: var(... from theme params ...);
  --light-link-color: var(...);
  --dark-link-color: var(...);
}

#button-shortcode {
  background-color: var(--dark-color);
  color: var(--dark-link-color);
}
body.dark-mode #button-shortcode {
  background-color: var(--light-color);
  color: var(--light-link-color);
}
{{< /codeblock >}}

---

## Styling Details

{{< table headers="Element|Style|Description" caption="Button Styling Breakdown" >}}
Container|Inline-block|Allows placing inside text lines  
Padding|0.5rem × 1rem|Comfortable click area  
Border Radius|4px|Subtle rounded shape  
Background Color|Theme variable|Dark/light versions  
Text Color|Theme variable|Dark/light versions  
Cursor|Pointer|Indicates clickability  
{{< /table >}}

---

## Accessibility

- Uses standard `<a>` tags for compatibility with screen readers
- High contrast via theme variables
- Supports keyboard navigation
- Clear hover/click affordances

---

## Best Practices

### Do:
- Use for important navigational actions  
- Keep button text short and clear  
- Use `_blank` only for external links  
- Place buttons near relevant content  

### Don't:
- Overuse too many buttons in one page  
- Insert long sentences inside the button  
- Use invalid targets  
- Wrap block-level elements inside the shortcode  

---


## Use Cases

{{< table headers="Use Case|Description|Example" caption="Common Button Use Cases" >}}
Navigation|Navigate to another page|“Learn More”  
External links|Open external resources|“View Docs”  
Calls to Action|Trigger user action|“Sign Up”, “Download”  
Inline emphasis|Highlight key link|“Try Demo”  
Marketing|Conversion-focused buttons|Landing pages  
{{< /table >}}

---

If you'd like next, I can create documentation pages for **all your shortcodes** and build a full shortcode documentation section for your Hugo theme.
