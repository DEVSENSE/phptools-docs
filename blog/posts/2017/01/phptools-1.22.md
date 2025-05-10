---
title: PHP Tools for Visual Studio 1.22
description: "PHP Tools for Visual Studio, 1.22"
date: 2017-01-17 00:00:00
authors:
  - jakub
tags:
  - php
  - news
  - release
  - vs2017
  - smarty
cover_image: imgs/phptoolsnewversionblog.jpg
categories:
  - general
---

# PHP Tools for Visual Studio 1.22

Today, we are happy to announce public availability of PHP Tools 1.22. The release brings several internal improvements but also build for latest Visual Studio 2017 RC and complete support for Smarty templating.

<!-- more -->

## Smarty

One of the most requested feature is the support for Smarty templating. We are happy to show the smarty templating with code colorization, tool tips, code completion and other editor features you are used to. The editor is smart enough to show user variables, smarty modifiers and operators. It also does show you source code of modifiers by navigating to its definition right from the smarty template.

![smarty-tooltips](imgs\smarty-tooltips.png)

Please see [docs.devsense.com/editor/smarty](https://docs.devsense.com/editor/smarty) for more information.

## Visual Studio 2017

Latest update of PHP Tools updates support for Visual Studio 2017. While VS 2017 is still a Release Candidate, we are providing the package as a preview.

The package can be downloaded on [our download page](https://www.devsense.com/download).

## Light Bulbs

Visual Studio 2015 introduced light bulbs as a replacement for smart tags.

![light-bulbs](imgs\light-bulbs.png)

Pressing <kbd>Ctrl+.</kbd> when a light bulb is available shows possible options. This feature allows us to provide more useful suggestions in a future. Light bulbs for PHP code are available in Visual Studio 2015 and newer since PHP Tools 1.22. Currently they provide suggestions for refactoring and implementing an interface and abstract classes.

## Composer Improvements

Composer is widely used packaging platform for PHP that is fully supported by PHP Tools. User can view, update and install packages within intuitive UI. The install dialog lists, filters and shows details about all available packages.

![composer](imgs\composer.png)

Since 1.22, the dialog also shows amount of downloads and stargazers. Newly there is also note about abandoned packages and its suggested replacement, license and publish date.

## Download

[Update now](https://www.devsense.com/download) to the latest release and let us know what you think. We're always happy to receive your feedback.
![Image description](imgs/phptoolsnewversionblog.jpg)
