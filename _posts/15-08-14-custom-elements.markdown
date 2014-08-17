---
layout: post
title:  "Custom Elements - The sexy Markup and the next Big Thing"
date:   2014-08-16 11:09:54
categories: HTML5
---
W3C defines Custom Elements as web components that let authors define their own elements, including new presentation and API, that can be used in HTML documents. There are six main motivations which give air to this development i.e.,

+ Provide a way for Web developers to build their own, fully-featured DOM elements.
+ Rationalize the platform.
+ Make the easy readable markup.
+ Bundle together custom functionality into a single tag.
+ Making custom elements with proper functioning as per needs.
+ Less generation of markup.

> You've probably heard all the noise about Web Components and how they're going to change Web development forever. If you haven't, you've either been living under a rock, are reading this article by accident, or have a full, busy life that doesn't leave you time to read about unstable and speculative Web technologies. Well, not me.
[Peter Gaston](https://twitter.com/stopsatgreen)

Before we move further, Lets know about elements first. Elements are the bits that make up web pages, There are two elements on web page one as __title elements__, That happen to come between ```<title> </title>``` tags and __body elements__, that happen to come between ```<body> </body>``` tags.

Custom elements do the same work as native elements does, the only difference is that native elements have predefined functionality while as in custom elements we define the functionality and name it after the type of work it does. Example of some native elements like `<img>` it does the work of rendering images on browser, likewise `<video>` tag renders videos on web page.

Unfortunately in modern world we are developing whole of webApps around `<div>` but they don't serve us the way we want sometimes and the energy we want to harness from them. In these situation, there comes handy we call __custom elements.__

> If the elements we create become well established, they could become a fully standardized part of a future HTML specification. The things we make could define the future of the things we make.

###How to create custom elements
Before we register new custom element, As per HTML specification new element registered which is not part of specification in called custom tag, in many articles they write custom tags so don't get confused with that.

If i will open my text editor and write `<junaid> </junaid>` and render it in browser and will try to style it, say
{% highlight ruby %}
junaid {
	font-size: 24px;
	color: #FF6225;
}
{% endhighlight %}
and if i try to add javascript controls on this tag they will work smoothly, but it wouldn't be good more than that a normal `div`

<div data-height="150" data-theme-id="7942" data-slug-hash="idhtJ" data-default-tab="html" class='codepen'><pre><code>&lt;junaid&gt;
  This is new custom tag
&lt;/junaid&gt;</code></pre>
<p>See the Pen <a href='http://codepen.io/junaidmasoodi/pen/idhtJ/'>idhtJ</a> by Junaid Masoodi (<a href='http://codepen.io/junaidmasoodi'>@junaidmasoodi</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
</div><script async src="//codepen.io/assets/embed/ei.js"></script>


