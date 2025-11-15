+++
title = '5 Color Scheme'
date = 2023-01-01T08:00:00-07:00
draft = false
type="page"
+++

### Some Features
The sans theme contains some features that may be turned off if the user doesn't want them.
In hugo.toml: 

{{<codeblock lang="go">}}
[theme]
    showDarkModeToggle=true
    showSearchIcon=true
    showGoToTop=true
{{</codeblock>}}

### Dark and Light Mode
If the showDarkModeToggle is turned off, the toggle will not be displayed. In that case, the user may enter only the light mode color scheme. Otherwise, color scheme for both dark and light modes must be included for proper functioning. 
The names for the params are self-describing. The colors may be entered in words ('white') or hex code ('#000000') or any other format that is supported in native css.
{{<codeblock lang="go">}}
[theme]
  darkModeColor='#333333' 
  lightModeColor='white' 
  darkModeLinkColor='#CCCCCC'  
  lightModeLinkColor='#00e'
  heroSectionColor='white'  
  darkHeroSectionColor="black"
  lightModeButton = "#007bff"
  lightModeButtonText = "#ffffff"
  lightModeButtonAlt = "transparent"
  lightModeButtonAltText = "#007bff"
  darkModeButton = "#0d6efd"
  darkModeButtonText = "#ffffff"
  darkModeButtonAlt = "transparent"
  darkModeButtonAltText = "#4d9aff"
{{</codeblock>}}

If the user doesn't want to change the colorscheme, the default configuration should be left unchanged. 