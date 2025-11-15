+++
title = '3 Taxonomy'
date = 2023-01-01T08:00:00-07:00
draft = false
+++

In hugo, you only need to specify the names of the taxonomies that you want to use and they are handled automatically.
Go to  **hugo.toml* and change the taxonomy paramas as per your need:

{{<codeblock lang="go">}}
[taxonomies]
  tag = "tags"
  category = "categories"
  author = "authors"
{{</codeblock>}}

Any custom taxonomy to be included should be entered in the format ```format ="formats"```. So, if you want a taxonomy called johns, the following should be entered: ```john="johns"```