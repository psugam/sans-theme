+++
title = "Slideshow Shortcode"
date = 2023-01-01T08:00:00-07:00
draft = false
showFrontMatter=false
+++

The **slideshow shortcode** allows you to create an interactive image slider with optional captions.  
It supports multiple images, custom width, and navigation buttons. Images can come from **page resources** or the **static folder**.

---

## Usage

{{< codeblock lang="go" >}}
{{</* slideshow
    slidewidth="90%"
    caption="Journey through the Alps"
    image1="/images/img_mountains.jpg" caption1="Sunrise over the peaks"
    image2="/images/img_forest.jpg" caption2="Morning mist"
    image3="/images/img_lights.jpg" caption3="Reflections on the lake"
    image4="/images/avatar.png" caption4="Avatar"
*/>}}
{{< /codeblock >}}

---

## Parameters

{{< table headers="Parameter|Required|Default|Description" caption="Slideshow Shortcode Parameters" >}}
slidewidth|No|100%|Width of the slideshow container (supports %, px, or rem)  
caption|No|-|Optional main caption displayed below the slideshow  
image1..image20|No|-|Paths to images to include in the slideshow  
caption1..caption20|No|-|Optional captions for each corresponding image  
{{< /table >}}

> **Note:** You can include up to 20 images. The slideshow automatically skips any empty image parameters.

---

## Features

- Customizable slideshow width via `slidewidth`  
- Optional main caption below the slideshow  
- Navigation buttons for forward/backward slide control  
- Individual slide captions overlayed on images  
- Supports page resources or static images  
- Fully responsive layout with centered display  

---

## Examples

### Basic Slideshow
{{< slideshow
    image1="/images/img_mountains.jpg" caption1="Sunrise over the peaks"
    image2="/images/img_forest.jpg" caption2="Morning mist"
    image3="/images/img_lights.jpg" caption3="Reflections on the lake"
    image4="/images/avatar.png" caption4="Avatar"
>}}



---

### Slideshow With Custom Width and Main Caption

{{< slideshow
    slidewidth="90%"
    caption="Journey through the Alps"
    image1="/images/img_mountains.jpg" caption1="Sunrise over the peaks"
    image2="/images/img_forest.jpg" caption2="Morning mist"
    image3="/images/img_lights.jpg" caption3="Reflections on the lake"
    image4="/images/avatar.png" caption4="Avatar"
>}}


---

### Slideshow Without Captions

{{< slideshow
    slidewidth="90%"
    image1="/images/img_mountains.jpg" caption1="Sunrise over the peaks"
    image2="/images/img_forest.jpg" caption2="Morning mist"
    image3="/images/img_lights.jpg" caption3="Reflections on the lake"
    image4="/images/avatar.png" caption4="Avatar"
>}}


---

## Styling Details

{{< table headers="Element|CSS Class|Description" caption="Slideshow Styling Components" >}}
Wrapper|.w3-content.w3-display-container|Centers slides, controls width, max-width 100%  
Individual Slide|.mySlides|Hidden by default, displayed one at a time, border-radius applied  
Navigation Buttons|.w3-button, .w3-display-left, .w3-display-right|Move slides left/right, absolute positioning, z-index 2  
Slide Captions|.slide-caption|Displayed over bottom of slide, semi-transparent black background, italic white text  
Main Caption|#main-caption|Optional caption below slideshow, bold text, centered  
{{< /table >}}

---

## Accessibility & Responsiveness

- Fully responsive for all screen sizes  
- Images include alt text ("Slideshow image")  
- Navigation buttons are keyboard accessible  

---

## Best Practices

### Do:
- Use consistent image dimensions for smooth transitions  
- Keep captions concise for readability  
- Adjust `slidewidth` to fit your layout  

### Don’t:
- Overload with too many images (may slow page load)  
- Use very large unoptimized images  
- Omit alt text for accessibility  

---

## Summary

The `slideshow` shortcode is perfect for:

- Photo galleries in blog posts or portfolios  
- Interactive image display with captions  
- Highlighting multiple images in a compact space  

It is flexible, visually appealing, and fully supports page resources and static images.

