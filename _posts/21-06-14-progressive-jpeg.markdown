---
layout: post
title:  "Progressive JPEGS - a new best practise"
date:   2014-06-14 11:09:54
categories: Front-End
---

Was learning about optimizing and profiling the WebApp and Websites,  scratched more about Progressive JPGS and came up with this small chunk of information about progressive JPEGs.

> "interesting aspect of performance is perceived performance; not necessarily what your numbers tell you, but how fast a site feels" Harry Roberts ~ [CSS WIZARDRY](http://csswizardry.com/)

If we talk Bandwidth wise, Images are elephants for websites. They are the largest average web site payload about 62%, and they are most often the content gridlock.


![Chart showing image payload](/images/jpegs/chart.png "Chart showing image payload")
[Chart taken from here, you can find other resources here as well](http://httparchive.org/interesting.php?a=All&l=Jun%2015%202014&s=All#bytesperpage)

When rendering large JPG images we always feel two kind of encounters either jerks experienced when image loads say 100px image first loads to 40px then line by line rendering is also experienced or we get empty space and  BOM out of nowhere image loads. This result in long waits and most of the time layout breaks. 
What if image is rendered to its blurred (pixelated) state then progressively it enhances its pixels, This result in something user will see seomething rather than waiting for long blang webpage spaces to fill/render. Here comes the progressive JPEGs comes in handy former is called as baseline JPEG. Later sounds worse but it feels faster, the user has something to look at instantly and the quality of the image progressively improves.


Tip for wordpress users: use a plugin known as WP Smushit, it automatically compresses the images using Smushit API and also converts images into progressive JPEGs.