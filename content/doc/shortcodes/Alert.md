+++
title = 'Alert'
date = 2023-01-01T08:00:00-07:00
draft = false
type='page'
+++

# Alert Shortcode Documentation

The alert shortcode displays a JavaScript browser alert dialog with your custom message when the page loads. This is useful for important announcements, warnings, or testing purposes.

## Usage

{{< codeblock lang="go" >}}
{{</* alert */>}}
Your alert message here
{{</* /alert */>}}
{{< /codeblock >}}

## Parameters

{{< table headers="Parameter|Required|Default|Description" caption="Alert Parameters" >}}
Inner content|Yes|-|The message to display in the alert dialog
{{< /table >}}

## Features

- **Markdown Support**: Content is processed through goify before display
- **Plain Text Output**: Markdwon is converted to plain text for the alert
- **JSON Safe**: Content is properly escaped for JavaScript
- **Auto-trigger**: Alert appears automatically when the page loads

## Examples

### Basic Alert

{{< codeblock lang="go" >}}
{{</* alert */>}}
Welcome to my website!
{{</* /alert */>}}
{{< /codeblock >}}

### Alert with go

{{< codeblock lang="go" >}}
{{</* alert */>}}
**Important:** Your session will expire in 5 minutes.
{{</* /alert */>}}
{{< /codeblock >}}

**Note:** go formatting like **bold** and *italic* will be converted to plain text in the alert.

### Multi-line Alert

{{< codeblock lang="go" >}}
{{</* alert */>}}
Welcome to our site!

Please read the terms and conditions before proceeding.
{{</* /alert */>}}
{{< /codeblock >}}

### Alert with Special Characters

{{< codeblock lang="go" >}}
{{</* alert */>}}
Don't forget to save your work!
Use "Ctrl+S" to save quickly.
{{</* /alert */>}}
{{< /codeblock >}}

## How It Works

{{< table headers="Step|Process|Description" caption="Alert Processing Pipeline" >}}
1|Inner Content|Takes the content between the shortcode tags
2|goify|Converts go syntax to HTML
3|Plainify|Strips HTML tags to get plain text
4|Jsonify|Escapes special characters for JavaScript safety
5|Display|Shows the alert when page loads
{{< /table >}}

## Use Cases

{{< table headers="Use Case|Example|Description" caption="Common Alert Use Cases" >}}
Announcements|Site maintenance notice|Inform users of scheduled downtime
Warnings|Browser compatibility warning|Alert users about unsupported browsers
Testing|Debug messages|Display variable values during development
Disclaimers|Legal notices|Show important legal information
Instructions|Usage guide|Provide quick instructions to users
{{< /table >}}

## Important Notes

{{< codeblock lang="go" >}}
<!-- Alert triggers on page load -->
{{</* alert */>}}
This will appear immediately when the page loads
{{</* /alert */>}}

<!-- go is converted to plain text -->
{{</* alert */>}}
**Bold** text becomes: Bold text
*Italic* text becomes: Italic text
[Links](url) become: Links
{{</* /alert */>}}

<!-- Multiple alerts will appear in sequence -->
{{</* alert */>}}First alert{{</* /alert */>}}
{{</* alert */>}}Second alert{{</* /alert */>}}
{{< /codeblock >}}

## Best Practices

### Do:
- Keep messages short and clear
- Use for critical information only
- Test alerts don't interfere with user experience
- Provide actionable information

### Don't:
- Use for non-essential information
- Display multiple alerts on one page
- Include sensitive information in alerts
- Rely on alerts as the only notification method

## Alternative Approaches

For less intrusive notifications, consider using:
- The **admonition** shortcode for in-content callouts
- Toast notifications (if available in your theme)
- Modal dialogs for user confirmations
- Banner notices at the top of the page

## Technical Details

{{< table headers="Processing|Function|Result" caption="Content Processing Functions" >}}
goify|Converts go to HTML|**bold** → &lt;strong&gt;bold&lt;/strong&gt;
plainify|Strips HTML tags|&lt;strong&gt;bold&lt;/strong&gt; → bold
jsonify|Escapes for JSON|Quotes become \"quotes\"
{{< /table >}}

## Browser Compatibility

The `alert()` function is supported in all modern browsers:
- Chrome/Edge
- Firefox
- Safari
- Opera
- Mobile browsers

## Example Output

When you use:

{{< codeblock lang="go" >}}
{{</* alert */>}}
**Welcome!** Please read our privacy policy.
{{</* /alert */>}}
{{< /codeblock >}}

The user will see a browser alert dialog with the plain text:

```
Welcome! Please read our privacy policy.
```

## Accessibility Considerations

- Alerts can be disruptive to screen reader users
- They pause page loading and interaction
- Consider using ARIA live regions for important updates instead
- Ensure alert messages are clear without visual context