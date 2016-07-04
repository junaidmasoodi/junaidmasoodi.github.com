---
layout: post
title:  "Front-End optimisation in Drupal 8"
date:   2016-06-28 11:09:54
categories: Drupal
permalink: blog/d8-optimisation
---

Performance is by far the most critical aspects of any project, irrespective of the scale of a project.
We usually say lets develop and optimize the site at last which is a bad practise and even wont give
results we actually wanted to.

When we modify a website specifically to increase the loading speed, this is what's called performance optimization.

There are a few things all designers and front-end developers will likely know about performance,
things like making as few requests as possible, optimising images, putting stylesheets in the <head>,
putting JS before the </body>, minifying JS and CSS and so on. These fundamentals will already get you on your way to faster experiences for users, but there’s more… much more. It is also very important to remember that – for all they give us headaches every day of our working lives – browsers are very clever; they do a lot to optimise performance for you, so a lot of perf knowledge combines knowing where the browser is at work, and knowledge of how best to exploit that. A lot of
perf know-how is merely understanding, exploiting and manipulating what a browser does for us already.

It is not just Front-End are concerned about the performance of sites but the Back-End as well and as a matter of fact Network providers are also playing vital role in that. New protocols like SPDY are also in place.

The HTTP Archive measurement of where time spent generating a page happens for the top 50K sites.

* Front End 87%;

* Back End: 13%;

And in general

<b>For Desktop</b>

* Front End 85%;
* Back End: 15%;

<b>For Mobile</b>

* Front End 97%;
* Back End: 3%;

We are here confining our performance to Drupal here and by Drupal here we mean Drupal 8.

> If we are going to take performance seriously we need to improve on Front End performance in Drupal.

Some major things that happened with drupal laterly are

* Lossless compression of the images.
* Improving on how we aggregate the CSS and JS.
* Extendable image handling.
* Mobile improvements: Full support for mobile site templates and easy backend administration from a mobile device.
* Data and presentation layer uncoupling. The Drupal API is now fully RESTful, making it easier to use with Angular.js, Ember.js, and other client-side content extraction and display tools.
* Support for Symfony2. Symfony 2 is an up-to-date, object-oriented PHP framework, well known for customer relationship management (CRM) integration.
* Twig support. Twig is a frontend library and template engine that eliminates some disadvantages of pure PHP while embracing the latest PHP standards.
* Security improvements. New features offer additional ways to make systems more secure.


What further we can do

* Minify all core JavaScript, Ship product with minified files.
* Use the JavaScript module pattern.
  For eg
{% highlight ruby %}
  //Normal Code

  (function ($) {

    // Our JS code

  })(jQuery);
{% endhighlight %}

  //Switch to
{% highlight ruby %}
  (function ($, Drupal) {

    // Our JS code

  })(jQuery, Drupal);
{% endhighlight %}

* make JS and CSS handling pluggable.
* Exclude CSS files.
