---
title: How to install Laravel in Visual Studio
description: Creating a new Laravel project in Visual Studio.
date: 2021-01-28 05:39:57
authors:
  - miloslav
tags:
  - laravel
  - php
  - visual-studio
---

# How to install Laravel in Visual Studio

![Cover Image](imgs/231px-Laravel.svg.png)

In this blog post I would like to demonstrate how to install **Laravel** in Visual Studio. I will use new project wizard which we have in PHP Tools for Visual Studio. 

<!-- more -->

Our goal here was to make this experience as simple as possible. The **Laravel** framework has certain requirements that you should install and configure first. But instead of googling the tutorial (like this one ;-) ). You should be able achive all of that just with few clicks directly in Visual Studio.

## Creating Laravel Project

### 1. Click Create a new project

![Initial Visual Studio dialog](imgs/Create-new-project.png)

### 2. Select PHP and choose PHP Web Project

![Choose PHP Web Project](imgs/PHPwebProject.png)

### 3. Name the project

![Name the project](imgs/name-the-project.png)

### 4. Select Laravel template

I've **PHP 8.0** for this project, which I don't yet have on my machine (Of course I do and you should too, but I just deleted it for this demo :-) ). I've checked **Common Project System** (VS 2019 only!), because it's much better than previous project system we've used since VS2010, even in it's current experimental state.

![Laravel project](imgs/laravel-project-template.png)

### 5. Wait

**UAC** will asks for permissions to continue. Accept and then wait so PHP Tools will do the work like downloading/updating Composer, installing **PHP**, configuring **Xdebug**, enabling required extensions, ...

![Progress bar](imgs/wait.png)

... wait some more

![Progress bar 2](imgs/wait2.png)

### 6. Laravel is installed

The **Laravel** is installed and configured at this point with all the requisities. You don't need to configure **PHP** project or install Laravel intellisense composer package ( [laravel-ide-helper](github.com/barryvdh/laravel-ide-helper) it helps the **Intellisense** engine to provide better code completion for **Laravel**) this is done transparently.

![Laravel in Visual Studio](imgs/done.png)

To verify if it's really installed, just press <kbr>F5</kbd>. You should see this page.

![Initial Laravel page](imgs/debug.png)

## Adding Laravel plugins

Once **Laravel** is installed, you may want to install one of many plugins. There are plugins that will provide you with great looking admin section, role based security, ecommerce features, etc. There is really a lot to choose from.

You can install any of those plugins directly within Visual Studio. Right click on **Dependencies** node in the **Solution Explorer** and select **Install new composer package...**

![Install new composer package](imgs/add-package.png)

Let's search for one that would take care of role based security. Type `laravel permission` and click **Install Package**. You can close this dialog now, it will install on the background. 

![New composer package dialog](imgs/install-composer-package.png)

You will know it's installed from the status bar or when Composer Output pane shows it's completed with exit code 0.

![Output pane](imgs/plugininstalled.png)

## Conclusion

We've tried to make this experience as straight forward as possible. The **Laravel** is first complex framework template we have added to the new project wizard, but we are definitely going to add more of them. Please let us know how it worked for you or what other framework we should add next.