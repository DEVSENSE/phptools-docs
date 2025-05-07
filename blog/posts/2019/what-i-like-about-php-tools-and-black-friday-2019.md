---
title: What I like about PHP Tools and Black Friday 2019
description: "I'm more C# developer so I feel like at home in Visual Studio. When I do things in PHP and I do them often I'm very happy to stay in VS. In this post I wanted to write few things which I like about PHP Tools."
date: 2019-11-28 10:01:15
authors:
  - miloslav
cover_image: imgs/black.png
---

# What I like about PHP Tools and Black Friday 2019

I'm more C# developer so I feel like at home in Visual Studio. When I do things in PHP and I do them often I'm very happy to stay in VS. In this post I wanted to write few things which I like about PHP Tools.

<!-- more -->

**Disclaimer:** I do work on PHP Tools so my opinion might not be objective :-)

## Memory relief
It's quite hard to remember all classes and function signatures from PHP libraries or from the project you are working on. It saves me ton of time that I get immediate tooltips with correct signatures and documentation for the stuff I'm currently writing.

![Code Completion](https://docs.devsense.com/content_docs/vs/editor/imgs/code-completion.png)

## I don't write any mistakes
Well, actually I do and I'm glad that I get corrected immediately. There are a bunch of code validation features https://blog.devsense.com/2016/12/codevalidation which are extremely helpful. Even in the code that is already written I'm able to find potential problems. E.g. when PHP 7.4 came out PHP Tools helped me to identify code that needed to be altered to play nicely with all the PHP 7.4 changes.

![PHP 7.1 compatibility](https://docs.devsense.com/content_docs/vs/code%20validation/imgs/php-71-compatibility.png)

## Navigate quickly through the code
When I work with an open source project mostly, I'm trying to get to know the code. Having the ability to navigate through the code quickly is just a must. <kbd>F12</kbd> (Go To definition) or <kbd>Shift+F12</kbd> (Find All references) are my best friends in this case. 

![Find All References](https://docs.devsense.com/content_docs/vs/navigation/imgs/find-all-ref.png)

## Find the bugs early
Running test directly from within the IDE is also time saver. I can see immediately what my changes just broke and I can fix it before committing it. I like finding those bugs right after writing them, that way I will not have to find them later when customers told us "it's doing something weird". 
Find out more about unit testing https://blog.devsense.com/2017/06/unit-testing

![Test Explorer](https://blog.devsense.com/2017/06/img/test-explorer-stack.png)

## Get it out
If you use git or TFS you can just commit your changes right in the IDE clicking on the correct button. Same applies if I want to publish it directly to the server.

![Git Integration](imgs/git.png)

## Debug the bugs
When a customer writes us "It doesn't work" and he is so kind to add information about how to reproduce the issue. I just run the project in debug mode (<kbd>F5</kbd>), put a breakpoint on the line where I think code doesn't behave as it should, explore the state of the program, step around (Step Over <kbd>F10</kbd>, Step Into <kbd>F11</kbd>, Step Out <kbd>Shift+F11</kbd>), I change few variables (btw. since latest version it's possible to change even private fields). This usually helps to identify the cause of the issue.

![Step Into](https://docs.devsense.com/content_docs/vs/debugging/imgs\step-into.png)

There are many details that help a lot. e.g. exploring huge array is very fast, or tracepoints are handy in certain situations https://blog.devsense.com/2019/php-tracepoint-logpoint .
You can check this post if you want to know more debugging tips in greater detail https://blog.devsense.com/2017/07/advanced-debug. 

## Other little things
Interoperability with other VS extensions, a lot of them being written by Mads Kristensen https://marketplace.visualstudio.com/publishers/MadsKristensen
I also use Spell checking extension https://blog.devsense.com/2016/07/spell-checking , because ... I need it.

![Spell Checking](https://docs.devsense.com/content_docs/vs/code%20validation/imgs/fix-a-typo.png)

## That’s it
I mentioned couple of things I like about PHP Tools for Visual Studio. Mainly I wrote it with Visual Studio in mind, but majority of it applies to VS Code as well. And obviously, I didn't mention all of it, but you can try it yourself.

Here you can download [FREE Trial](https://www.devsense.com/download) and if you decide you like it you can use the coupon **BlackFriday19** to get 50% off the Personal license. This coupon is valid until December 7th 2019.
