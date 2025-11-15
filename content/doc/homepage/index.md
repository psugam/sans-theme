+++
title = '2 Homepage'
date = 2023-01-01T08:00:00-07:00
draft = false
toc=true
type="page"
+++

The first thing to configure is your homepage. There are three homepage variations that 'sans' theme supports. They are shown below with their default ui:
#### 1. Only posts page
     {{< figure src="onlyPosts.png" width="100%" caption="Fig: Only Posts Homepage" class="center" >}}

#### 2.  Logo page
 {{< figure src="logoPage.png" width="100%" caption="Fig: Logo Page Homepage" class="center" >}}

#### 3. Blog page
{{< slideshow
    slidewidth="90%"
    caption="Blog Page Homepage"
    image1="blogPageOne.png" caption1="Hero Section"
    image2="blogPage2.png" caption2="Newsletter section"
    image3="blogPage3.png" caption3="Posts"
>}}


### Only Posts Page
This is the simplest type of homepage. It just contains the title of the posts followed by the corresponding date. In order to use this homepage, go to ***config/params.toml*** and set the params to following:

{{< codeblock lang="go" >}}
[homepage]
  onlyPostsInHomePage = true
  dateFormat= "2 Jan 2006"
{{< /codeblock >}}
If you don't intend to change to other types of homepages, you can delete or comment out all other params in ```[homepage]```. Or they can be left as they are as they do not interfere with the current configuration.

The text placed before the post list is sourced from the _index.md of contents folder and can be changed there directly with normal markdown rules.

### Logo Page
This type of homepage has an avatar at the centre with minimal info.

{{<codeblock lang="go">}}
[homepage]
  onlyPostsInHomePage = false
  homePageLogo=true
  homePageTitle="JOHN DOE"
  homePageTagLine="Welcome to my website"
  homePageLogoPath='images/avatar.png'
  homePageAbout="Hi! I'm John Doe, a passionate blogger and portfolio creator. Explore my latest posts and projects here."
  dateFormat= "2 Jan 2006"
  showSocialLinksHome=true
{{</codeblock>}}
The ```onlyPostsInHomePage``` param must be set to false for this configuration to work. The ```homePageLogoPath``` should provide an image that is inside the images folder. i.e *your-hugo-site/assets/images/yourLogo.png* 

The showSocialLinksHome param controls whether or not your social links are displayed in the homepage. If it is set to false, the social links would not be shown in homepage. 
If it is set to true, the social links would be shown according to the following configuration. 

In hugo.toml, set your own links in the following params:

{{<codeblock lang="go">}}
[social]
  facebook = "https://facebook.com/yourpage"
  x = "https://x.com/yourhandle"
   instagram = "https://instagram.com/yourhandle"
   linkedin = "https://linkedin.com/in/yourprofile"
     youtube = "https://youtube.com/@yourchannel"
   tiktok = "https://tiktok.com/@yourhandle"
  github = "https://github.com/yourusername"
   reddit = "https://reddit.com/u/yourusername"
   pinterest = "https://pinterest.com/yourhandle"
   snapchat = "https://snapchat.com/add/yourhandle"
   discord = "https://discord.gg/yourinvite"
   twitch = "https://twitch.tv/yourchannel"
   telegram = "https://t.me/yourhandle"
   whatsapp = "https://wa.me/yourphonenumber"
   mastodon = "https://mastodon.social/@yourhandle"
  bluesky = "https://bsky.app/profile/yourhandle"
   threads = "https://threads.net/@yourhandle"
   medium = "https://medium.com/@yourhandle"
{{</codeblock>}}

All the params that contain values will be displayed in the homepage. If you don't need any social link to be displayed, they can be removed or commented out.

### Blog Page
This is the most complex type of homepage. It contains a hero section with the welcome message, newsletter subscription box and finally latest posts. The posts in this page are in a box and display cover image, author, date and tags too.

In order to choose this type of homepage, choose the following configuration: 

{{<codeblock lang="go">}}
[homepage]
  onlyPostsInHomePage = false
  homePageLogo=false 
  homePageCoverPath='images/img_forest.jpg'
  homePageCoverTitle="Welcome to our blog and portfolio."
  homePageCoverTagLine="Discover insights, stories, and ideas that inspire. Join our community of readers exploring the latest trends and timeless wisdom.SUGAM"
  homePageSummaryLength=500
  homePagePostDate=false 
  dateFormat= "2 Jan 2006"
{{</codeblock>}}

Setting false to the params of other two homepage types will automatically set Blog Page to be true. 