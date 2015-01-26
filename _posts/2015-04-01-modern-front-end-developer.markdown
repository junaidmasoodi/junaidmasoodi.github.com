---
layout: post
title:  "Modern Tools for Front-End Developers"
date:   2015-01-09 09:37:54
categories: Front-End
---

Gone are the days when Front-End development was just editing files, test them locally and then FTPing them to server and this was an essential workflow of a Front-End Developer. Something has changed in couple of years, may be Front-End development is taken seriously and yeah how can I forget to mention the role of browser vendors mostly getting their shit together. And last but important, The Front-End Devs themselves.

We now have a vast and wide array of tools available to us, allowing us to develop faster and smarter and We now can push the limits of what a modern web browser can do, accomplishing things that some years ago seemed impossible.

> The shift from __Valuing trivia__ to __valuing tools__ is great. There has been wonderful gust in innovation and it has completely changed the meaning of being Front-End Developer.

in this post I will move from tools to technologies which are essential for Front-End Developer, I tried my best to compile all the necessary tools and some more as there is always scope for improvement.

Accessing the Dev Tools is easy, In the chrome itself, at the right top of browser window, select the Chrome menu

<i class="fa fa-align-justify"> <b>></b> More tools <b>></b> Developer Tools

Or using keyboard `command+shift+P` on Mac, and `Ctrl+shift+p` on windows

<h3 class="post--sub--heading">Sublime text</h3>
Sublime text, cross platform edior, is the most evangelised text editor in place, it is versatile and comes with out of box packages that can be installed on this light weight editor. Python based plugin API makes it fast. Sublime has won over other editors because of rapid updates available both addressing the speed-n-efficiency and functionality. believe it or not, but this beautiful editor is managed by one person. Browsing through file to file in ST is done in jeffy with such ease and finesses. This editor is free, but you can donate for the effors done to make Sublime text such a beauty.

Link: [Sublime website](http://sublimetext.com) for [Latest version](http://sublimetext.com/3)

<h3 class="post--sub--heading">Github Atom</h3>
Atom was recently launched by GitHub, It is new kind of block spreadheaded by GitHub.  It appeared out of the blue in early 2013 and at first was a partially closed source application with the core being closed and all the little bits were opened. In my opininon, Atom is an attempt to rebuild Sublime so essentially it is a feature for feature clone. However, unlike Sublime Atom is a Web App wrapped in a desktop shells and runs inside a webkit instance. This is built on top of node.js and is extremely faster. It is hackable to the core. You can disect this editor as per your needs.

Link: [Atom website](http://atom.io)

<h3 class="post--sub--heading">VIM</h3>

Vim, originally Vi has been around for decades and is older of all. Due to continous development this tool is actively mantained and qualifies one of the essential modern development tool. In terms of extendibility and speed it is difficult to top Vim. However, it is difficult to use and takes couple of weeks training, memorizing key bindings and continous practise. But once you learn, you are unstoppable.


There are other editors as well, Brackets by adobe, Cloud 9 IDE, Showdown, LightTable, Webstorm etc


<h3 class="post--sub--heading">Webkit Developer Tools</h3>

For a Front-End Developer this is must have tool. We use Webkit-Developer tools extensively but might now be aware of all the capabilities. Here in this post i will be inclined towards chrome, canary and screenshots will be from chrome.

> WebKit isn’t a black box. It’s a white box. And not just that, but an open, white box.

In Chrome we can access these 

Webkit Developer Tools are divided into many sections as,

* <i class="fa fa-mobile">

This is toggle device Panel introduced in chrome lately, here we can view different screen sizes and even test there and debug on the fly.

* __Elements.__ Element panel lets you see everything on the DOM tree, and allow editing the DOM elements. Inspect and edit CSS, view element event listners etc.

* __Network.__ Insights into resources that are downloaded and requested by the network in Real-Time.

* __Sources.__ With complexites in increase in Javascript applications, We need powerful tools to help dubugging. Sources are here.

* __Timeline.__ Timeline gives detailed breakdown of time spent, where the time is being spent where the load time was more or les, Javascript parsing etc

* __Profiles.__ Here we can profile the execution time and memory usage of a web app or page. There are two profiles called CPU profiler and Heap Profiler.

* __Resources.__ We can view loaded resources on current page (inspected page) even letting us to interact with HTML5 Database, Local Storage, Cookies, AppCache, etc.


* __Audits.__ Audit is carried during page load and is useful for finding unused css styles.

* __Console.__ The Console panel is primarily for testing Applications and web pages. Here we initiate debugging and create JavaScript profiles.

<h3 class="post--sub--heading">Compass</h3>

Compass is an open-source CSS authoring framework which uses the Sass stylesheet language to make writing stylesheets powerful and easy. If you're not familiar with Sass, Go to [sass-lang.com](http://sass-lang.com) to learn all about how it works.

<h3 class="post--sub--heading">SASS</h3>

Gone are the days when vanilla css was written, then came something called as css preprocessing. Here we are! Css preprocessing helps in writing managable and clean CSS. Compiling isn't also a pain. It makes our css "Don't repeat yourself", saves time, easy to setup, makes websites prettier, code become organized. We can extend classes and many frameworks make it more beautiful. Mostly, you'll find that the three most popular CSS preprocessors, Sass, LESS, and Stylus are more or less the same. In short its a must have love for Front-End Developer. 

<h3 class="post--sub--heading">npm</h3>

__npm__ is a package manager for almost everything, atleast for Front-End developer. npm makes it easy for JavaScript developers to share and reuse code, and it makes it easy to update the code that you're sharing.

<h3 class="post--sub--heading">Grunt</h3>

Grunt is the automation, It is a big help for projects. Linting the code, minification, compiling is done frequently. Using Grunt saves our time, it runs all the tasks for us thus saves times. There are hundreds of plugins available and almost anything we can automate using Grunt that too with minimum efforts. Grunt and Grunt plugins are installed and managed via npm.

<h3 class="post--sub--heading">Browser Stack</h3>

Its not possible to have every machine and every device available for testing (It is recomended) but Alas! not possible for everyone. Here Browser Stack comes for help. It helps in testing our websites for cross browser compatibility on real browsers. The best part is we can test both protected or public servers.


There are many many Javascript Libraries and Frameworks that qualify for the list of Front-End Developers like backbone, angularJS, meteor, KnockoutJS, ember etc.
