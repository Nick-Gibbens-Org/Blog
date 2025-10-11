---
excerpt_separator: <!--end_excerpt-->
post_title: Hello World
tags: [Jekyll]
---

My first tentative steps into blogging using Jekyll's static site generation.

<!--end_excerpt-->

Creating a blog to share my random thoughts and bits of knowledge I pick up along the way has always been something I've wanted to do. There are many great blogging platforms and existing blog themes that already exist. I debated about simply signing up with an existing platform and then deploying my posts into the chasm that is the internet. One of the things that held me back from going down this route is that I wanted to physically own (so to speak) the content that get added to these posts. Sure, I could create a text file first and then simply upload the content into the form that generates the posts, that content would then get persisted into a database, and I could change it as I saw fit. But what if I somehow deleted the files and lost access to the platform that hosted my posts. I hypothetical and probably unlikely scenario but I felt that I wanted to "own my words". This is a phrase I have to attribute to Scott Hanselman. I heard him describing this on one of his podcasts in an episode that he was discussing blogging. So, I looked around. Browsed the web for some solution. That's when I learned about something called Jekyll. A static site generator that used Markdown and HTML to convert files into posts that anyone can read online. It sounded exactly like what I was looking for. It required no database, no costs, and I could also use GitHub Pages to host it for free (either with the default Pages domain or a custom one if I wanted to).

So, I had found my "framework". Now I needed to craft a theme that I would eventually use for my blog. Like with many things in life I felt I needed to see what already existed to inspire me to create something new. I went on a quest to find Jekyll Themes that others had created. This approach has its pros and cons.

- Pro: I can get an idea for what is possible to create using a static site generator.
- Con: Seeing amazing themes that make me doubt whether I can emulate them.

I tried to keep the imposter-syndrome at bay and forged ahead. I set about defining a scope for the first version of the theme. Software is an iterative process after all. There were many things I wanted to add but I figured they could come at a later stage. The core of version one should simply be a visually appealing theme that allows me to write up some content into a blog and ship it. Fortunately I already had a personal/portfolio site that had a well defined CSS theme. I wanted this to flow into version one of the theme. The theme would have light/dark mode functionality and have plenty bursts of green (in particular the dark mode). An adequate name I came upon for this theme was *Verdant*:

> adjective: verdant
> 
> (of countryside) green with grass or other rich vegetation.
> 
> of the bright green colour of lush grass.

Once I'd set up my local repository I first needed to understand how Jekyll works. Thankfully there exists a simple and easy to use [site](https://jekyllrb.com/) that has a tutorial to build up a simple blog. It contains all the foundational basics you need to get up to speed for creating a simple blog. 

Some of the things I learned in this tutorial were:

- The directory layout of a Jekyll site.
- Front matter that you add to a file that basically act as variables for Jekyll to process.
- Ruby and RubyGems (admittedly on a surface level).
- Shared layouts that act as templates to wrap around your content.

Some things I had to learn myself with the help of some good ol'fashioned web browsing and LLM prompting. The one major difference from the tutorial is I didn't want to have to install Ruby and the Jekyll gem. I wanted to make use of Docker to handle all this for me. So, I set about creating a `docker-compose` file. It wasn't completely smooth sailing but I got there in the end and now it's as simple as running

`docker compose up`

and I'm off to the races.

Some of the challenges I experienced with this first version were:

- The light/dark mode persisting when navigating around the site.
  - The fix was having some JavaScript check the session storage before the rest of the site loaded.
- Getting Bootstrap to work correctly from inside the container.
  - This took me some time to diagnose. I had to do quite a bit of trouble shooting to understand the problem and come up with a solution. The issue was the load path for the bootstrap file was not known by Jekll. I had to define it in the `_config.yml` file. This in turn presented another issue. The load path locally compared to the path hosted on GitHub are different. A quick solution was creating a `_config_dev.yml` file for local development. I'm not sure that's the most elegant way but it worked and removed my hurdle.
- Getting categories and tags to work properly also initially proved tricky. I made use of the jekyll-archives gem. This gem allows you to easily categorize posts. Unfortunately getting it to initially work wasn't so easy.
  - The issue turned out to be a pesky syntax error in the yml that determines how jekyll-archives works.

I will go a bit more into detail about these challenges and how I overcame them in future posts.

The final hurdle I had to overcome was a rather easy one. But it was one that I hadn't expected (I suppose most hurdles aren't expected). My first version of the *Verdant* theme was ready for me to use. I was ready to fork it so that I could continuing iterating the theme while I could post from the fork and pull updates when they were ready. The problem: you can't fork a repository you own into your own account. At least not in GitHub. It seems other hosting platforms do offer this but I didn't research too much into this. My code is in GitHub and I rather like it. I had to find a solution that allowed me to have a forked blog and still maintain the original theme. That's how I learned that a personal account and create an organization. There is also the option of creating a second account but that method sounded cumbersome so I decided against it. Creating a simple organization serves my needs perfectly. I could fork the Jekyll theme and deploy my blog from my organization account.

Once I'd cleared all the technical hurdles there was a new set of hurdles to overcome. Finding the creativity and inspiration to start creating content that I want to write about but which will also hopefully impart some knowledge (even if it's just a little bit) onto others.

I figured the best place to start (as is often the case with any new software project) was by simply saying:

> Hello World 👋