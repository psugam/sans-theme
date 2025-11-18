+++
title = "Codeblock Shortcode"
date = 2023-01-01T08:00:00-07:00
draft = false
type = "page"
+++

The **codeblock shortcode** provides a fully styled code display with:

- Syntax highlighting  
- A language label  
- A “Copy” button  
- Custom dark theme styling  

It is used to show clean code examples throughout the documentation.

---

## Usage

{{< codeblock lang="go" >}}
{{</* codeblock lang="javascript" */>}}
console.log("Hello World");
{{</* /codeblock */>}}
{{< /codeblock >}}

---

## Parameters

{{< table headers="Parameter|Required|Default|Description" caption="Codeblock Parameters" >}}
lang|Yes|-|Programming language used for syntax highlighting  
Inner content|Yes|-|The code to be displayed inside the block  
{{< /table >}}

---

## Features

- Dark theme code window  
- Language label in the top bar  
- Copy-to-clipboard button  
- No extra spacing added  
- Supports all Hugo-highlight languages  

---

## Examples

### JavaScript Example

{{< codeblock lang="javascript" >}}
{{</* codeblock lang="javascript" */>}}
function hello() {
  console.log("Hello World");
}
hello();
{{</* /codeblock */>}}
{{< /codeblock >}}

---

### Python Example

{{< codeblock lang="python" >}}
{{</* codeblock lang="python" */>}}
def greet(name):
    return f"Hello, {name}"

print(greet("World"))
{{</* /codeblock */>}}
{{< /codeblock >}}

---

### HTML Example

{{< codeblock lang="html" >}}
{{</* codeblock lang="html" */>}}
<div class="card">
  <p>Hello!</p>
</div>
{{</* /codeblock */>}}
{{< /codeblock >}}

---

### Showing Another Shortcode Inside Codeblock

{{< codeblock lang="go" >}}
{{</* codeblock lang="go" */>}}
{{</* admonition type="info" */>}}
This is inside an admonition block.
{{</* /admonition */>}}
{{</* /codeblock */>}}
{{< /codeblock >}}

---

## Styling Details

{{< table headers="Element|Style|Description" caption="Codeblock Styling" >}}
Wrapper|Rounded + Shadow|Dark background, soft edges, boxed layout  
Toolbar|Monospace bar|Shows language + copy button  
Code Area|Monokai theme|Highlighted code with padding  
Copy Button|Interactive|Turns into “Copied” after click  
{{< /table >}}

---

## Supported Languages

The shortcode supports all languages supported by Hugo’s built-in highlighter.

Common examples include:

{{< table headers="Language|Identifier|Example" caption="Language Identifiers" >}}
JavaScript|`javascript`|console.log()  
HTML|`html`|`<div>`  
CSS|`css`|`.selector{}`  
Python|`python`|`def func()`  
Go|`go`|`fmt.Println()`  
Markdown|`markdown`|`# heading`  
{{< /table >}}

---

## Best Practices

### Do:
- Always specify a valid `lang`
- Escape shortcode examples with `/* … */`
- Keep code blocks short and focused

### Don’t:
- Insert raw unescaped shortcode tags inside codeblock
- Add extra indentation outside the block

---

## Summary

The `codeblock` shortcode is perfect for:

- Software documentation  
- Showing shortcode usage  
- Displaying formatted code examples  
- Teaching programming concepts  

Its clean UI and copy button make it easy for users to read and reuse example code.

