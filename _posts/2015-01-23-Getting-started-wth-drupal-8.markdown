---
layout: post
title:  "Getting started with Drupal 8"
date:   2016-03-31 09:37:54
categories: drupal
permalink: blog/drupal
---

Drupal 7 to 8 is a great relief for Front-End's because in Drupal 7 the markup generation was so painfull. But Drupal 8 has overcome this thing and Pages are rendered beautifully and ofcourse with the less markup generation and yes thanks to new theming engine Twig which is used in Drupal 8 rather than template engine.

While writing this post Drupal 8 is in 4th Beta release and is improved with each release. There are lot of exiting features in drupal 8 like

* Theming and Presentaton changes,
* Twig and HTML5 standard markup,
* Better user experience,
* Symphony2 is part of core,
* Inline editing,
* Mobile friendly,
* RESTful web services,
* Creating multi-lingual sites become more easier, 
* Migration API,
* Configuration management and what not.


Here we are, Things we should know before we proceed.

> Twig is now the theme engine for Drupal 8, the PHPTemplate theme engine has gone away that's been a staple in Drupal themes for years.

> THEMENAME.info > THEMENAME.info.yml <mark> The advantage of YAML is that it uses a specific standard that's supported by other libraries </mark>

> theme's template.php > THEMENAME.theme

> template_name.tpl.php > template_name.html.twig

> Theme directory is changed, Our custom theme now goes into a "theme" directory in the root and not in the "/sites/all/themes" as we used to do in Drupal 7.

We will start by creating folder structure and we will name this theme as "medium" and then <code>medium.info</code> oops i mean <code>medium.info.yml</code> :)

Here is the folder structure and possible data in info file.

![Folder structure for drupal 8 theme](/images/d8-theme/folder-structure.png "Folder structure for drupal 8 theme")

The contents of medium.info.yml are, breaking down it further in different parts. Firstly we describe the theme name, type, descriptions, version, core that we are taretting, engine in now twig rather than phptemplate, screenshot if we want the screenshot of theme in appearnce to appear.
{% highlight ruby %}
name: Medium
type: theme
description: Drupal 8 Theme
version: 1.0
core: 8.x
engine: twig
screenshot: img/screenshot.png
{% endhighlight %}

Adding Stylesheets
{% highlight ruby %}
stylesheets:
  all:
  - styelsheets/screen.css
  - styelsheets/ie.css
  - styelsheets/print.css
{% endhighlight %}

If you want to remove a css file like normalize.css and add your reset.css, You can do it here like this
{% highlight ruby %}
# Remove a CSS file:
stylesheets-remove:
  - normalize.css
  - system.theme.css
{% endhighlight %}

Here we can add Js as well
{% highlight ruby %}
# scripts:
	- js/custom-script.js
{% endhighlight %}

Or if you want to override the same file with different version you can do it like this
{% highlight ruby %}
# Override a CSS file
	stylesheets-override:
    - normalize.css
{% endhighlight %}

Here we are defining the regions of theme, in our case it is like Header containing the menu search login/out. Then Content which will take 70% of screen where we will have blog entry and the Sidebar on right side which will have recent posts events and other news.
{% highlight ruby %}
regions:
	header: 'Header'
	content: 'Content'
	sidebar: 'Sidebar'
{% endhighlight %}

Now lets add come files,

The best way to do is using bundler, gems are declared as dependencies in my gemfile, and Bundler takes care of the rest.
{% highlight ruby %}
# Pull gems from RubyGems
source 'https://rubygems.org'

# ~> Refers to all versions of the given gem on the current full version number, so it will be able to use any version of Compass Aurora until Compass Aurora 4.x.x. For a specific version of a gem, remove the ~>

gem 'sass', '~>3.4.1'
gem 'compass', '~>1.1.0.alpha.1'
gem 'toolkit', '~>2.0'
gem 'breakpoint', '~>2.0'
gem 'sassy-buttons', '~>0.2.6'
{% endhighlight %}

![Bundler installing the dependencies](/images/d8-theme/bundler.png "Bundler installing the dependencies")

For Further and more changes in drupal 8 visit [https://www.drupal.org/drupal-8.0](https://www.drupal.org/drupal-8.0)