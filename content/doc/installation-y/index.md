+++
date = '2025-10-30T17:48:48+05:45'
draft = false
title = '1-Installation'
tags = ['red','green']
authors = ['Alice', 'Bob']
categories=['category-1', 'category-2']
type="page"
+++

## Before Starting
Before installing the Sugo theme make sure that you have hugo installed. Sugo requires the following to be installed: 
- Hugo (>0.146.0)
-  Git
-  npm

To make sure that the hugo version is compatible with Sugo theme:
{{<codeblock lang="console">}}
 hugo version
{{</codeblock>}}

## Installing
### Option A: Use as a Git submodule (recommended option)

{{<codeblock lang="console">}}
cd your-hugo-site
git init
git submodule add https://github.com/psugam/sugo-theme themes/sugo
{{</codeblock>}}