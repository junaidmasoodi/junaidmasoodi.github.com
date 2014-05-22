---
layout: post
title:  "Quick Guide to walk through using Github pages"
date:   2014-05-14 11:43:54
categories: Github
---

If you are learning to code, or already onto it and want your project to be hosted, easily that too free. The answer is Github Pages. IT helps not you only in hosting HTML, CSS and JS files but yeah helps in learning important and tricky tool i.e., Git. In this post i will be helping you as how to publish your project from local repository to github pages.


First of all we need to know about two types of github pages called as

* Userpages
* Project pages

**userpages** come in handy if you want to host your personal website or the index of any project. You may note that there is only one userpage per account. The URL for userpage is <mark>http://title.github.io/ </mark>

**roject pages** are used when you want to host a project, of which you have many. We can have multiple project pages per Github account. The URL for project pages are <mark>http://title.github.io/projectpage/</mark>

###Create First Repository###
First lets go on this page [https://github.com/new](https://github.com/new) after we sign up on github

![Create First repo](/images/githubpages/create-repo.png "Create First repo")

1. Enter repo name
2. Make repo public, you can make it private as well, But that is paid service. Remember keeping repo public isn't any harm. There people can see your code and can request pulls, But they wont be able to merge only you can.
3. Check “Initialize this repository with a README” this is optional but it will make next step easier.
4. Then click create repository.

And you are done with repository creation.

__Same goes with project page creation__

Now lets create create "Hello World" page and push it to Github, To see how github pages looks like and work

Before you take clone of repository we created, You may need to add .ssh keys and do some installation, If you have already done You can skip and move forward. If not Please [follow this link](https://help.github.com/articles/generating-ssh-keys). 

###Now lets take clone of repository###
On the project repository just copy the ssh URL and paste in terminal in your specified path and hit enter.
![Clone the repo](/images/githubpages/clone.png "Clone your repository")
![Clone the repo](/images/githubpages/cloning.png "Cloning your repository")

Command that you will get from github will be like this
{% highlight ruby %}
git@github.com:junaidmasoodi/junaidmasoodi.git
{% endhighlight %}

please add <highlight>git clone</highlight> as prefix to the abve to start cloning.
{% highlight ruby %}
git clone git@github.com:junaidmasoodi/junaidmasoodi.git
{% endhighlight %}

and for now our cloned repo will have readme.md only

<div class="notes"><span>Note:</span> If you are familier with git and installed same on you machine, then and only then you will be able to take clone.</div>

Otherwise there are other two options at same place <highlight>clone in desktop</highlight> & <highlight>download as zip</highlight> you can use these options as well to clone or simply download repository.

In another post I will create one page of say "Thank You" and push to same repo and will also show as to how the custom domain redirect to same page