+++
title = 'Color Scheme Configuration'
date = 2023-01-01T08:00:00-07:00
draft = false
type="page"
+++

# Color Scheme Configuration

This guide explains how to customize the visual appearance of your site through theme color configuration and optional feature toggles.

---

## Theme Features

The Sans theme provides several optional features that can be enabled or disabled based on your preferences. Configure these settings in your `hugo.toml` file:

{{<codeblock lang="toml">}}
[theme]
  showDarkModeToggle = true
  showSearchIcon = true
  showGoToTop = true
{{</codeblock>}}

{{<table headers="Feature|Parameter|Description" caption="Available Theme Features" >}}
Dark Mode Toggle|showDarkModeToggle|Displays a toggle button for switching between light and dark themes
Search Icon|showSearchIcon|Shows the search functionality icon in the navigation
Go to Top Button|showGoToTop|Displays a button to scroll back to the top of the page
{{</table >}}

---

## Color Scheme Configuration

### Theme Mode Behavior

The theme supports two distinct color modes: light and dark. The configuration requirements depend on whether the dark mode toggle is enabled:

- **When `showDarkModeToggle = false`**: Only light mode color values are required
- **When `showDarkModeToggle = true`**: Both light and dark mode color values must be configured for proper functionality

### Color Value Formats

Color values can be specified using any CSS-compatible format:

{{<table headers="Format|Example|Use Case" caption="Supported Color Formats" >}}
Named Colors|white, black, red|Simple, readable color names
Hexadecimal|#333333, #00e|Precise color control
RGB|rgb(51, 51, 51)|Programmatic color generation
RGBA|rgba(0, 0, 238, 0.9)|Colors with transparency
HSL|hsl(240, 100%, 47%)|Hue-based color selection
{{</table >}}

### Configuration Parameters

Add the following parameters to your `hugo.toml` file under the `[theme]` section:

{{<codeblock lang="toml">}}
[theme]
  # Background Colors
  darkModeColor = '#333333' 
  lightModeColor = 'white'
  
  # Link Colors
  darkModeLinkColor = '#CCCCCC'  
  lightModeLinkColor = '#00e'
  
  # Hero Section Colors
  heroSectionColor = 'white'  
  darkHeroSectionColor = 'black'
  
  # Primary Button Styles
  lightModeButton = '#007bff'
  lightModeButtonText = '#ffffff'
  darkModeButton = '#0d6efd'
  darkModeButtonText = '#ffffff'
  
  # Secondary Button Styles
  lightModeButtonAlt = 'transparent'
  lightModeButtonAltText = '#007bff'
  darkModeButtonAlt = 'transparent'
  darkModeButtonAltText = '#4d9aff'
{{</codeblock>}}

### Parameter Reference

{{<table headers="Parameter|Applies To|Description" caption="Color Configuration Parameters" >}}
darkModeColor|Dark Mode|Primary background color for dark theme
lightModeColor|Light Mode|Primary background color for light theme
darkModeLinkColor|Dark Mode|Hyperlink text color in dark theme
lightModeLinkColor|Light Mode|Hyperlink text color in light theme
heroSectionColor|Light Mode|Background color for hero/header sections in light theme
darkHeroSectionColor|Dark Mode|Background color for hero/header sections in dark theme
lightModeButton|Light Mode|Primary button background color
lightModeButtonText|Light Mode|Primary button text color
darkModeButton|Dark Mode|Primary button background color
darkModeButtonText|Dark Mode|Primary button text color
lightModeButtonAlt|Light Mode|Secondary/outline button background color
lightModeButtonAltText|Light Mode|Secondary/outline button text color
darkModeButtonAlt|Dark Mode|Secondary/outline button background color
darkModeButtonAltText|Dark Mode|Secondary/outline button text color
{{</table >}}

---

## Default Configuration

The theme includes a carefully designed default color scheme. If you wish to maintain the original appearance, no modifications to the color configuration are necessary. The default values provide optimal contrast and readability for both light and dark modes.

To preserve default styling, simply retain the existing configuration without modification.

---

## Best Practices

### Accessibility Considerations

When customizing colors, ensure adequate contrast ratios for accessibility compliance:

- **Normal text**: Minimum contrast ratio of 4.5:1
- **Large text**: Minimum contrast ratio of 3:1
- **Interactive elements**: Clear visual distinction from surrounding content

### Testing Your Color Scheme

After configuring custom colors, verify the appearance across both modes:

1. Build your site locally: `hugo server`
2. Toggle between light and dark modes
3. Review all page types (posts, pages, archive views)
4. Test interactive elements (buttons, links, forms)
5. Verify readability in various lighting conditions

### Color Consistency

Maintain visual consistency by:

- Using related color values across light and dark modes
- Ensuring button colors align with your brand identity
- Keeping link colors distinct from body text
- Testing color combinations for visual harmony

---

## Troubleshooting

{{<table headers="Issue|Possible Cause|Solution" caption="Common Color Configuration Issues" >}}
Colors not applying|Syntax error in configuration|Verify TOML syntax and color format validity
Inconsistent appearance|Missing dark or light mode values|Ensure all required parameters are defined for both modes
Poor readability|Insufficient contrast|Adjust color values to meet accessibility standards
Toggle not working|showDarkModeToggle disabled|Set showDarkModeToggle = true in configuration
{{</table >}}

---

## Additional Resources

For further guidance on color selection and accessibility:

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Material Design Color Tool](https://material.io/resources/color/)
- [Adobe Color Wheel](https://color.adobe.com/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)