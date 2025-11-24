+++
title = "Tabs Shortcode"
date = 2023-01-01T08:00:00-07:00
draft = false
showFrontMatter=false
+++

The **tabs shortcode** allows you to create tabbed content sections in your Hugo posts or pages.  
It supports multiple tabs with titles and content, automatically handling tab switching with a small script.

---

## Usage

### Basic Tabs

{{< codeblock lang="go" >}}
{{</* tabs */>}}
title: Tab 1
content: Content for the first tab.

<!--tab-->
title: Tab 2
content: Content for the second tab.

<!--tab-->
title: Tab 3
content: Content for the third tab.
{{</* /tabs */>}}
{{< /codeblock >}}

### Tabs With Markdown Inside

{{< codeblock lang="go" >}}
{{</* tabs */>}}
title: Introduction
content: |
  This tab contains **Markdown** content.  
  You can use lists:
  - Item 1
  - Item 2
  - Item 3

<!--tab-->
title: Details
content: |
  More detailed content can go here.  
  Include links: [Hugo](https://gohugo.io)

<!--tab-->
title: Summary
content: Summary text for this section.
{{</* /tabs */>}}
{{< /codeblock >}}

---

## Parameters

{{< table headers="Parameter|Required|Default|Description" caption="Tabs Shortcode Parameters" >}}
title|Yes|-|Title of the tab, displayed on the tab button  
content|Yes|-|Content inside the tab (supports Markdown)  
Inner content|Yes|-|All tabs separated by `<!--tab-->` comments  
{{< /table >}}

> **Note:** Tabs are rendered dynamically with a small JS snippet. The first tab is active by default.

---

## Features

- Multiple tabs with dynamic switching  
- Markdown content supported inside tabs  
- Fully responsive layout  
- Light and dark mode styling based on your theme  
- First tab is selected by default  
- Optional custom styling through CSS variables  

---

## Examples

### Simple Tab Example

{{< tabs >}}
title: Features
content: Our product has several amazing features.

<!--tab-->
title: Pricing
content: Choose a plan that fits your needs.

<!--tab-->
title: FAQ
content: Frequently asked questions.
{{< /tabs >}}


### Tab With Lists and Links

{{<tabs>}}
title: Overview
content: |
  - Fully responsive
  - Easy to use
  - Customizable

<!--tab-->
title: Resources
content: |
  Useful links:
  - [Documentation](https://gohugo.io)
  - [GitHub](https://github.com)
{{</tabs>}}


---

## Styling Details

{{< table headers="Element|CSS Class|Description" caption="Tabs Styling Components" >}}
Tabs container|.tabs-box|Wrapper around all tabs, applies padding and border radius  
Tab buttons|.tab-btn|Individual tab buttons, highlight active tab  
Active button|.tab-btn.active|Styles the selected tab button  
Tab content|.tab-content|Content displayed when tab is active  
Hidden content|.tab-content.hidden|Hides non-active tabs  
Light/Dark mode|body.dark-mode .tab-btn/.tab-content|Adjusts colors for dark mode  
{{< /table >}}

---

## Accessibility & Best Practices

- Use clear and descriptive tab titles  
- Keep tab content concise for readability  
- Ensure sufficient color contrast in light and dark mode  
- Avoid overly nested tab structures  
- Use Markdown within tab content for rich formatting  

---

## Summary

The `tabs` shortcode is perfect for:

- Grouping related content in a compact area  
- Tutorials with multiple sections  
- FAQ sections  
- Product or feature comparisons  

It is flexible, responsive, and integrates seamlessly with your theme's light and dark modes.
