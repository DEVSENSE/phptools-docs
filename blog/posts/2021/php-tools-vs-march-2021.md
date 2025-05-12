---
title: PHP Tools for Visual Studio (March 2021)
description: "Read the latest news about PHP Tools for Visual Studio. We're happy to show you the newest features, code analysis enhancements, version updates, and more."
date: 2021-03-13 12:42:29
authors:
  - jakub
tags:
  - php
  - update
  - visual-studio
  - php8
  - composer
  - xdebug
categories:
  - annoucement
---

# PHP Tools for Visual Studio (March 2021)

![Cover Image](imgs/box_0.png)

## IDE Enhancements

<!-- more -->

In Visual Studio 2019 and 2017, we now show the **progress of indexing your project files** (Indexing PHP files ...) in the Visual Studio's Background tasks panel. Although this usually takes just a second, it is good to see it's happening. Note that all the long-running tasks in Visual Studio should be listed here, it's not just PHP-specific.

![php indexing progress status](imgs/vs-progress-bar.png)

In Visual Studio 2019, PHP Tools can analyze the entire solution for warnings, errors, informational diagnostics, and code cleanness. Those diagnostics are then listed in the Error List pane. Since most of the project code-base is contained in 3rd party packages, we have added an option to not analyze those packages (usually in the vendor folder). By default, only user files get analyzed and reported in Error List. This improves the readability and overall performance of the IDE.

![php options](imgs/vs-options-project.png)

In general, the project load times and overall editor performance were improved. You should notice more fluent and responsive editor experience. Although we'd be happy for any feedback related to the performance since our intention is to make the editor as smooth as possible.


## Composer

The recent release added support for the new **Composer 2.0** JSON files and compatible composer packages. Composer 2.0 is also integrated into our composer manager. There we have improved and updated the UI for searching, browsing, and installing composer packages:

![composer manager UI](imgs/vs-composer-ui.png)

In addition, there is a new and faster composer packages tree view in your Solution Explorer. This shows the packages required by the project, the replaced packages, and contextual options to update packages to their latest versions.

![composer requirements tree](imgs/vs-dependencies-composer.png)


## Debugger

The PHP debugger got interesting updates as well. It now suggests and automatically updates both the Xdebug extension to its latest version 3.0.2 and PHP 8.0 itself. The latest versions fix a few issues with breakpoints and the debugging stability itself, so you definitely want to update.

For anyone using the **DBGp Proxy**, you might be interested in the improved support of the DBGp Proxy version provided by xdebug.org itself. 

The last major improvement to the debugging capabilities is the support for multiple projects debugging. It is now possible to debug more projects at once. 


## Editor

We've got so much great feedback and ideas for our PHP editor, and we are working on it constantly. The first noticeable change is the tooltips - they are now shorter, omitting the namespace part of class names, allowing to click through to the definitions. In addition, if a URL is contained in the tooltip, it is now clickable as well.

![vs php tooltip](imgs/vs2019-tooltip.png)

Since PHP 5.4 the editor has to deal with `trait`s. Within a trait, the code completion offers not just the trait members but also members of all the classes that might use that trait. For that purpose, PHP Tools not only look for the **@mixin PHPDoc annotation**. Now the editor searches for all the usages of traits and the code completion lists anything possible without the need of declaring the `@mixin` tag.

The PHP code is full of magic `__call` methods, with the class annotated with `@method` tag. The editor is now able to find all the references of methods defined there.

![find all references of @method](imgs/vs-findref-method.png)

Next, there is the **PHPDoc generation** above global and local variables. Typing `/**` above the variable will generate the pre-filled PHPDoc snippet.

The other improvements include greatly **improved performance** and an updated integrated PHP manual with more **PHP 8.0 definitions**.


## Code Analysis

Recent releases are constantly improving code analysis. There are fewer falsely reported problems, updated PCRE syntax checking, improved type analysis, and improved support for `.phpstorm.metadata` file.

---

Check out our full change log and feel free to try the newest features at https://www.devsense.com/download ! 
