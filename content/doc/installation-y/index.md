+++
date = '2025-10-30T17:48:48+05:45'
draft = false
title = '1-Installation'
tags = ['installation','documentation']
authors = ['John']
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

Copy the contents, assets and config folders of the theme and place it inside ```your-hugo-site folder```. Similarly, cut the hugo.toml out of the config folder and place it inside ```your-hugo-folder```. In the hugo.toml file, change the value of ***theme*** to 'sans' if it is not already so. 

### Option B : Manual download
Download the git repository of the sugo theme and place it inside your theme folder. Be sure to rename the the git repo's main folder to sugo. Other steps are the same as that of git installation. 