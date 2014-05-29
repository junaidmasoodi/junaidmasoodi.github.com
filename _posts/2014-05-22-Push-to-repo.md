---
layout: post
title:  "Pushing code to repo and redirecting to custom URL"
date:   2014-05-22 11:09:54
categories: GitHUb
---

We talked about Github, cloning, and Github pages. WE will now make one page as we said "Thank you" and will also redirect same page to some custom domain as well :)

For custom redirect i will be using [bigrock.in]('http://bigrock.in').

First we need to go to the repo which is shown in [last post]('http://junaidmasoodi.com/github/2014/05/14/github-pages/'), As how to create one. 

> It should be noted here if we are creating **Userpage** or **Projectpage** we have different branches to push to. If we are pushing to userpages then code should be pushed to **master** otherwise **gh-pages**.

Master is the default branch so in this post we will be showing how to push code to gh-pages which means github project pages. First we need to clone the code, Suppose here we have cloned the code and either out repo will be empty or will be having either both readme.md and .gitignore or one of them. 
Say suppose i added thankyou.html to folder and my folder structure looks something like that
![Folder structure](/images/repo/folder-structure.png "Folder Structure")
You can add full site as well, as many files you want.


In terminal, in the directory of the repo which is on master branch we are supposed to change branch to "gh-pages" only if we are pushing to project pages else leave to master only. 

{% highlight ruby %}
git checkout--orphan gh-pages
{% endhighlight %}

Now we need to add or stage all of the files in the current directory so we will add commit
{% highlight ruby %}
git add .
{% endhighlight %}

Now we need to records changes to the repository so we will add another command
{% highlight ruby %}
git commit -m "Your message"
{% endhighlight %}

Now comes the pushing project to repository
{% highlight ruby %}
git push origin -gh-pages
{% endhighlight %}

![Changing branch](/images/repo/changing-branch.png "changing branch")

So we have successfully pushed the code to repo like in this screenshot we can check on github itself.
![Repository on github](/images/repo/repo.png "Repository on github")


You can see both the files are there with gh-pages branch depolyed, If sometimes we forget to deploy the branch and continue to work on master. In that case, change branch to gh-pages at that instant and push using gh-pages and in settings of that repository keep gh-pages as default branch.

Now you can check the project at [http://junaidmasoodi.github.io/junaidmasoodi/thankyou.html]('http://junaidmasoodi.github.io/junaidmasoodi/thankyou.html')

If you use index in place of thankyou.html then URL will be [http://junaidmasoodi.github.io/junaidmasoodi]('http://junaidmasoodi.github.io/junaidmasoodi') only [http://junaidmasoodi.github.io/junaidmasoodi/index.html]('http://junaidmasoodi.github.io/junaidmasoodi/index.html') as well.

> But if you are pushing changes to userpages then you the url simply will be [http://junaidmasoodi.github.io]('http://junaidmasoodi.github.io')


### Redirecting to custom URL

We will be adding custom URL to our Username page rather than project page as for project pages DNS forwarding is simpler than generating custom url.

So lets take example of http://junaidmasoodi.github.io how i added custom url. We need to go to the  root folder of the repository and add a file named CNAME and in cname simply add your custom url as i added junaidmasoodi.com as seen in the screenshot both folder structure and CNAME content.


![CNAME](/images/repo/cname.png "CNAME")

Now login to your Domain hosting site, as in this example we have used bigrock.in. and in your Domain area there will be **manage DNS** or **DNS Management**

Right in A-record add new record and leaving name empty as in Screenshot and update destination IP to

> 192.30.252.153

> 192.30.252.154

![A-TRACk RECORD](/images/repo/a-track.png "A-TRACK RECORD")

For 'www' add www in name part of it as in SS after adding both IP's for domain.com and www.domain.com as well

#### and you are done :) and test here [junaidmasoodi.com](junaidmasoodi.com)