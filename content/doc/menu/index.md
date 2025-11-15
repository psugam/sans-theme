+++
title = '4 Menu'
date = 2023-01-01T08:00:00-07:00
draft = false
type="page"
+++

The sans theme only has a main menu. To customize the main menu, the user should edit config/menus.toml configuration file:
{{<codeblock lang="go">}}
   [[main]]
    name = 'Home'
    pageRef = '/'
    weight = 10

# Taxonomy pages may be linked like this
  [[main]]
    name = 'Posts'
    pageRef = '/posts'
    weight = 20

  [[main]]
    name = 'Tags'
    pageRef = '/tags'
    weight = 30

  [[main]]
    name = 'Categories'
    pageRef = '/categories'
    weight = 40

# individual pages may be linked like this 

   [[main]]
    name = 'About'
    pageRef ='/pages/about/'
    weight = 50 

# Individual files may be linked like this 

  [[main]]
    name='File'
    url='/images/default.jpg'
    weight=60
    params = {target = "_blank"}

  [[main]]
    name='Docs'
    url='/doc/'
    weight=70
{{</codeblock>}}

The order of the menu links is determined by the value of weight. Smaller the weight, the earlier will the link render.
