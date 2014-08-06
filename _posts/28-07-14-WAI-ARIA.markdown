---
layout: post
title:  "Towards WAI-ARIA"
date:   2014-07-28 11:09:54
categories: Front-End
---
WAI-ARIA - 'Web Accessibility Initiative – Accessible Rich Internet Applications' is a way of making Web Applications and Content accessible to those with disabilities, plays nice with application created with Ajax and JavaScript. For the rest of the article we will use ARIA instead of WAI-ARIA. ARIA is set of attributes, helping assistive technologies such as Screen readers for blind, make sense of certain elements which aren't native to HTML by helping enhance the semantics of Web APP or website.

After years of development, testing and refining On March 20, 2014, W3C finally [published](http://www.w3.org/blog/2014/03/wai-aria-expands-web-accessibility/) the WAI-ARIA standard version 1.0.

Duplicating functions or emulating the rich components and maximizing the HTTP requests in the background tends to rich user experience. But for assistive technologies like screen readers it is a nightmare, they will fall for accessibility problems. If we built widgets or rich components this way they may be barely accessible via keyboards on screen readers, the function of the widget may not be available for assistive technology, the properties of rich component may not be inherited, updates and discovery of updates will not be recorded and reported by assistive technology.

Fortunately we have something to rescue from the above shortcomings i.e., WAI-ARIA. It allow developers to create rich Internet applications and yes it is easy to implement as well.

ARIA achieves from simple rending of certain attributes on screen readers to render widgets as whole number system or sometimes hierarchical tree views, if needed. We can achieve by simply applying `roles` and `state attributes`, supported from HTML 4.1 or above.

ARIA doesn't influence browser behavior unlike real button element. This means we have to implement behavioral pattern manually from keyboard. There is no harm in using ARIA in your sites as all major browsers have support for it as it is now a standard but We should make use of ARIA only, if needed this will give better hand on on native HTML widgets and rendering. One thing to note here is that ARIA markup takes precedence over the host language markup.