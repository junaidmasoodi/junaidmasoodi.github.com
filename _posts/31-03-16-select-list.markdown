---
layout: post
title:  "Select List Theming in Drupal 8"
date:   2016-03-31 11:09:54
categories: Drupal
permalink: blog/selectlistanddrupal8
---

Theming of form items and then performance issues is one of the hard jobs. I am not mentioning IE here because Dear internet Explorer has crosses all limits of giving pain. Now the happy news is that IE is dead and I am sure it will be burning in the deepest hole of hell. The pain, the time waste that IE has done in past years will not be fixed by Microsoft ever. Even if they sell their shares and pay all money to Front-End Developers. 

I think I am going far with this now, back on the track. There are many ways to theme form items. Browsers and Operating systems render form items differently. Which is a reason for design inconsistencies across platforms. Depending on the amount of theming you have to do for form items and select boxes particularly.

Starting with the below code in your style sheets will give you jump start and idea what of what else to achieve. Its important to cascade the default appearance.
{% highlight ruby %}
appearance: none;
-vendor_prefix-appearance: none;
{% endhighlight %}

What if we have to select multiple options from drop-down or we have a very long drop-down list and (For example country names) and scrolling through is time consuming. What if we have a search inside the select list?

All this is possible with lot of libraries available but here we are focusing on one of the best libraries [select2](https://select2.github.io). Select2 gives us a customizable select box with support for <b>searching</b>, <b>tagging</b>, <b>remote data sets</b>, <b>infinite scrolling</b>, and many other highly used options.

Particularly theming the select drop-down, which isn't easy. border, drop-down arrows option list cant be themed easily without certain JS. We will unleash select2 for these things. It isn't recomended to use Select2 for small customizations. If you want maximum out of it then it can be used otherwise there will be some small performance issues.

Its simple to use select2 in any site but with drupal there comes small customizations.

Firstly we will install select2 library and declare in our theme.libraries.yml
{% highlight ruby %}
 js:
   libs/select2.min.js: {}
  {% endhighlight %}
  
 in my case I have put all libraries in libs folder. Now we need to do some little customizations to make it work on our drupal site. Actually it is mainly a class and wrapper issues that select2 isn't getting applied with just library setup.
 
 in our common JS file, we need to add some customised code. For me it is.
 
 
{% highlight ruby %}
(function ($, Drupal, window, document) {

  'use strict';

  Drupal.behaviors.SelectCases = {
    attach: function (context, settings) {
      $(window, context).load(function () {
      // Changing our default select lists
            $('#content select.form-select').each(function (i) {
              var $selectIndex = $('select-' + (i + 1));
              $(this)
              .select2({
                width: 'style',
                shouldFocusInput: function (instance) {
                  // Attempt to detect touch devices
                  var supportsTouchEvents = (('ontouchstart' in window) ||
                  (navigator.msMaxTouchPoints > 0));
      
                  // Only devices which support touch events should be special cased
                  if (!supportsTouchEvents) {
                    return false;
                  }
      
                  return true;
                }
              });
              $('.select2', context)
                .once()
                .addClass('form-select').addClass('select-id-' + (i + 1));
      
            });
        }
    };
            
 })(jQuery, Drupal, this);
  {% endhighlight %}
  
Now that new markup is generated and you can easily theme it, because it will be skinned in divs rather than <select>.

Go ahead and theme as per your comps.